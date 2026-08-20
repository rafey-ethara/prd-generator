#!/usr/bin/env python3
"""Stage 1 - turn a raw capture into a frozen evidence ledger.

    python ledger.py output/example

Takes the project directory (or the capture directory inside it) and writes to
the project root, beside the documents the authoring skill will produce:

    output/example/
      ledger.json   machine-readable, every entry carries provenance
      ledger.md     the document the authoring skill reads

No interpretation, no inference, no model. Everything here is a parser.
If a value is not in this ledger, the PRD may not contain it.
"""
import argparse
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

try:
    import yaml
except ImportError:
    yaml = None

# ------------------------------------------------------------------ patterns

RE_HEX = re.compile(r"#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b")
RE_FUNC_COLOR = re.compile(r"\b(?:rgba?|hsla?|color-mix|oklch|lab)\([^)]{0,160}\)")
RE_KEYFRAMES = re.compile(r"@(?:-webkit-)?keyframes\s+([A-Za-z0-9_-]+)\s*\{", re.I)
RE_MEDIA = re.compile(r"@media[^{]{0,180}\{")
RE_BEZIER = re.compile(r"cubic-bezier\(\s*[-\d.]+\s*,\s*[-\d.]+\s*,\s*[-\d.]+\s*,\s*[-\d.]+\s*\)")
RE_FONTFACE = re.compile(r"@font-face\s*\{([^}]{0,600})\}", re.I)
RE_CSSVAR_DEF = re.compile(r"(--[a-zA-Z0-9_-]+)\s*:\s*([^;}]{1,160})")
RE_GRADIENT = re.compile(r"(?:repeating-)?(?:linear|radial|conic)-gradient\([^;]{0,300}?\)(?=[;,\s}]|$)")
RE_LICENSE = re.compile(r"/\*!(.{0,400}?)\*/", re.S)
RE_DURATION = re.compile(r"\b\d+(?:\.\d+)?m?s\b")
RE_ROUTE_LIT = re.compile(r"""["'](/[a-z0-9][a-z0-9\-/]{0,38})["']""")

EFFECT_PROPS = {
    "boxShadow": "shadow", "textShadow": "text-shadow", "filter": "filter",
    "backdropFilter": "backdrop-filter", "mixBlendMode": "blend-mode",
    "clipPath": "clip-path", "maskImage": "mask", "webkitMaskImage": "mask",
    "transform": "transform", "perspective": "perspective",
    "transformStyle": "transform-style", "willChange": "will-change",
    "backgroundImage": "background-image", "opacity": "opacity",
    "borderRadius": "radius", "isolation": "isolation",
}


def brace_block(text: str, open_idx: int) -> str:
    """Return the balanced {...} block whose opening brace is at open_idx."""
    depth, i, n = 0, open_idx, len(text)
    while i < n:
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return text[open_idx:i + 1]
        i += 1
    return text[open_idx:open_idx + 2000]


def norm_color(c: str) -> str:
    """#abc -> #aabbcc, #abcd -> #aabbccdd. Longer forms pass through."""
    c = c.strip().lower()
    if c.startswith("#") and len(c) in (4, 5):
        c = "#" + "".join(ch * 2 for ch in c[1:])
    return c


# -------------------------------------------------------------------- loader

class Capture:
    def __init__(self, root: Path):
        self.root = root
        self.raw = root / "raw"
        self.src = root / "src"
        self.manifest = self._json(root / "capture.json", {})
        self.network = self._json(self.raw / "network.json", [])
        self.css, self.js = {}, {}
        for p in sorted(self.src.glob("*.css")):
            self.css[p.name] = p.read_text(encoding="utf-8", errors="replace")
        for p in sorted(self.src.glob("*.js")):
            self.js[p.name] = p.read_text(encoding="utf-8", errors="replace")
        self.probes = {p.name: self._json(p, {}) for p in sorted(self.raw.glob("*.probe.json"))}
        self.scrolls = {p.name: self._json(p, []) for p in sorted(self.raw.glob("*.scroll.json"))}
        self.hovers = {p.name: self._json(p, []) for p in sorted(self.raw.glob("*.hover.json"))}

    @staticmethod
    def _json(p: Path, default):
        try:
            return json.loads(p.read_text(encoding="utf-8"))
        except Exception:
            return default

    def css_all(self) -> str:
        return "\n".join(self.css.values())

    def js_all(self) -> str:
        return "\n".join(self.js.values())

    def where(self, needle: str):
        """Provenance: which source file and line first contains this literal."""
        for name, body in list(self.css.items()) + list(self.js.items()):
            i = body.find(needle)
            if i >= 0:
                return f"{name}:{body.count(chr(10), 0, i) + 1}"
        return None


# ---------------------------------------------------------------- extractors

def is_transparent(c: str) -> bool:
    """Fully transparent values are noise, not palette."""
    c = c.strip().lower()
    if re.match(r"^#(?:[0-9a-f]{4}|[0-9a-f]{8})$", c) and c[-2:] in ("0", "00"):
        return c.endswith("00") or (len(c) == 5 and c.endswith("0"))
    m = re.match(r"^(?:rgba|hsla)\([^)]*?[,/]\s*(0?\.?0+)\s*\)$", c)
    return bool(m)


def x_colors(cap: Capture):
    css = cap.css_all()
    counts = Counter()
    for m in RE_HEX.findall(css):
        c = norm_color(m)
        if not is_transparent(c):
            counts[c] += 1
    for m in RE_FUNC_COLOR.findall(css):
        c = m.strip().lower()
        if not is_transparent(c):
            counts[c] += 1
    # computed values seen in the live page carry more weight than source text
    live = Counter()
    for pr in cap.probes.values():
        for el in pr.get("elements", []):
            for k in ("color", "backgroundColor", "borderColor"):
                v = (el.get("type", {}) or {}).get(k) or (el.get("box", {}) or {}).get(k)
                if v and v not in ("rgba(0, 0, 0, 0)", "rgb(0, 0, 0)"):
                    live[v] += 1
    # Colours defined as integers in JS. WebGL scenes almost always do this, and
    # a CSS-only scan misses the entire 3D palette.
    js = cap.js_all()
    numeric = Counter()
    for h in re.findall(r"0x([0-9a-fA-F]{6})\b", js):
        numeric["#" + h.lower()] += 1
    for n in re.findall(r"\bnew\s+\w{1,24}\((\d{4,8})\)", js):
        v = int(n)
        if 0 <= v <= 0xFFFFFF:
            numeric[f"#{v:06x}"] += 1

    out = [{"value": c, "css_uses": n, "source": cap.where(c)}
           for c, n in counts.most_common(80)]
    return {"declared": out,
            "computed_top": live.most_common(30),
            "js_numeric": [{"value": c, "uses": n} for c, n in numeric.most_common(40)]}


def x_custom_props(cap: Capture):
    props = {}
    for pr in cap.probes.values():
        for k, v in (pr.get("cssVars") or {}).items():
            props.setdefault(k, v.strip())
    declared = {}
    for name, body in cap.css.items():
        for k, v in RE_CSSVAR_DEF.findall(body):
            declared.setdefault(k, []).append({"value": v.strip(), "source": name})
    return {"computed_root": props, "declarations": declared}


def x_type(cap: Capture):
    faces = []
    for name, body in cap.css.items():
        for blk in RE_FONTFACE.findall(body):
            d = dict(re.findall(r"([a-z-]+)\s*:\s*([^;]+)", blk, re.I))
            faces.append({
                "family": (d.get("font-family") or "").strip().strip("'\""),
                "weight": (d.get("font-weight") or "").strip(),
                "style": (d.get("font-style") or "").strip(),
                "display": (d.get("font-display") or "").strip(),
                "source": name,
            })
    scale = Counter()
    families = Counter()
    for pr in cap.probes.values():
        for el in pr.get("elements", []):
            t = el.get("type") or {}
            if t.get("fontSize"):
                scale[(t.get("fontSize"), t.get("fontWeight"), t.get("lineHeight"))] += 1
            if t.get("fontFamily"):
                families[t["fontFamily"].split(",")[0].strip().strip("'\"")] += 1
    loaded = []
    for pr in cap.probes.values():
        for f in pr.get("fonts", []):
            rec = (f.get("family"), f.get("weight"), f.get("style"))
            if rec not in loaded:
                loaded.append(rec)
    return {
        "font_faces": faces,
        "loaded_faces": [{"family": a, "weight": b, "style": c} for a, b, c in loaded],
        "families_by_use": families.most_common(10),
        "scale": [{"size": s, "weight": w, "line_height": lh, "uses": n}
                  for (s, w, lh), n in scale.most_common(30)],
    }


def x_motion(cap: Capture):
    css = cap.css_all()
    keyframes, kf_seen = [], set()
    for m in RE_KEYFRAMES.finditer(css):
        blk = brace_block(css, css.index("{", m.end() - 1))
        body = re.sub(r"\s+", " ", blk)[:1200]
        # -webkit- prefixed copies and cross-file duplicates collapse to one entry
        key = (m.group(1), body)
        if key in kf_seen:
            continue
        kf_seen.add(key)
        keyframes.append({"name": m.group(1), "body": body,
                          "source": cap.where(f"keyframes {m.group(1)}")})
    beziers = Counter(RE_BEZIER.findall(css) + RE_BEZIER.findall(cap.js_all()))
    transitions = Counter()
    animations = Counter()
    for pr in cap.probes.values():
        for el in pr.get("elements", []):
            v = el.get("visual") or {}
            if v.get("transition"):
                transitions[v["transition"][:180]] += 1
            if v.get("animation"):
                animations[v["animation"][:180]] += 1

    waapi = []
    seen = set()
    for pr in cap.probes.values():
        for a in pr.get("animations", []):
            key = (a.get("name"), a.get("target"), a.get("duration"), a.get("easing"))
            if key in seen:
                continue
            seen.add(key)
            waapi.append({k: a.get(k) for k in
                          ("kind", "name", "target", "pseudo", "duration", "delay",
                           "easing", "iterations", "direction", "fill", "playState")}
                         | {"keyframes": a.get("keyframes") or []})

    # named easing registrations, e.g. CustomEase.create("name", "0.6, 0.01, 0.05, 1")
    named = re.findall(r"""create\(\s*["']([A-Za-z0-9_-]+)["']\s*,\s*["']([^"']{4,60})["']""",
                       cap.js_all())
    durations = Counter(RE_DURATION.findall(css))
    return {
        "keyframes": keyframes,
        "cubic_beziers": [{"value": b, "uses": n} for b, n in beziers.most_common(40)],
        "named_easings": [{"name": a, "definition": b} for a, b in dict(named).items()],
        "transitions": [{"value": t, "uses": n} for t, n in transitions.most_common(40)],
        "css_animations": [{"value": a, "uses": n} for a, n in animations.most_common(40)],
        "waapi_runtime": waapi[:120],
        "durations_seen": durations.most_common(25),
    }


def x_effects(cap: Capture):
    """The catalogue of what makes the page look expensive."""
    buckets = defaultdict(Counter)
    holders = defaultdict(set)
    for pr in cap.probes.values():
        for el in pr.get("elements", []):
            for prop, val in (el.get("visual") or {}).items():
                kind = EFFECT_PROPS.get(prop)
                if not kind:
                    continue
                v = str(val)[:220]
                if kind == "opacity" and v in ("1", ""):
                    continue
                if kind == "radius" and v in ("0px", ""):
                    continue
                buckets[kind][v] += 1
                if el.get("selector"):
                    holders[(kind, v)].add(el["selector"])

    gradients = Counter(g[:220] for g in RE_GRADIENT.findall(cap.css_all()))
    out = {}
    for kind, c in buckets.items():
        out[kind] = [{"value": v, "uses": n,
                      "examples": sorted(holders[(kind, v)])[:6]}
                     for v, n in c.most_common(30)]
    out["gradients_declared"] = [{"value": g, "uses": n} for g, n in gradients.most_common(30)]
    return out


def x_layout(cap: Capture):
    css = cap.css_all()
    mqs = Counter(re.sub(r"\s+", " ", m).rstrip("{ ") for m in RE_MEDIA.findall(css))
    z = Counter()
    for pr in cap.probes.values():
        for el in pr.get("elements", []):
            v = (el.get("box") or {}).get("zIndex")
            if v and v != "auto":
                z[v] += 1
    return {
        "media_queries": [{"query": q, "uses": n} for q, n in mqs.most_common(25)],
        "z_index": z.most_common(20),
        "viewports": sorted({tuple(pr.get("viewport") or []) for pr in cap.probes.values()
                             if pr.get("viewport")}),
    }


def x_svg(cap: Capture):
    icons, seen = [], set()
    for pr in cap.probes.values():
        for s in pr.get("svgs", []):
            key = (s.get("cls"), s.get("viewBox"), len(s.get("prims") or []))
            if key in seen:
                continue
            seen.add(key)
            icons.append(s)
    return icons[:70]


def x_copy(cap: Capture):
    by_route = {}
    for fname, pr in cap.probes.items():
        route = fname.split(".")[0]
        if route in by_route:
            continue
        by_route[route] = {
            "url": pr.get("url"), "title": pr.get("title"),
            "meta": pr.get("meta", []),
            "lines": [{"tag": c["tag"], "cls": c["cls"], "text": c["text"]}
                      for c in pr.get("copy", [])],
        }
    return by_route


def x_scroll(cap: Capture):
    """Which selectors and custom properties change as the page scrolls.

    A selector appearing here with many distinct values is scroll-scrubbed -
    the single most important thing to know about a motion-led site.
    """
    out = {}
    for fname, frames in cap.scrolls.items():
        if not frames:
            continue
        key = fname.replace(".scroll.json", "")
        prop_vals = defaultdict(lambda: defaultdict(set))
        var_vals = defaultdict(set)
        html_classes = []
        for fr in frames:
            for k, v in (fr.get("cssVars") or {}).items():
                var_vals[k].add(str(v))
            html_classes.append(fr.get("htmlClass", ""))
            for st in fr.get("styles", []):
                s = st.get("s")
                for p, v in (st.get("v") or {}).items():
                    prop_vals[s][p].add(str(v)[:120])
        scrubbed = []
        for s, props in prop_vals.items():
            changing = {p: len(vs) for p, vs in props.items() if len(vs) > 1}
            if changing:
                scrubbed.append({"selector": s, "changing": changing,
                                 "samples": {p: sorted(props[p])[:4] for p in changing}})
        scrubbed.sort(key=lambda r: -sum(r["changing"].values()))
        out[key] = {
            "frames": len(frames),
            "scroll_heights": [fr.get("scrollY") for fr in frames],
            "html_class_states": sorted(set(html_classes)),
            "vars_changing": {k: sorted(v)[:6] for k, v in var_vals.items() if len(v) > 1},
            "scrubbed": scrubbed[:60],
        }
    return out


def x_hover(cap: Capture):
    out = {}
    for fname, recs in cap.hovers.items():
        out[fname.replace(".hover.json", "")] = recs
    return out


def x_assets(cap: Capture):
    by_type = defaultdict(list)
    for r in cap.network:
        t = r.get("type") or "other"
        by_type[t].append({"url": r["url"], "len": r.get("len", 0)})
    summary = {t: {"count": len(v), "bytes": sum(x["len"] for x in v)}
               for t, v in sorted(by_type.items())}
    binaries = [r for r in cap.network
                if re.search(r"\.(glb|gltf|hdr|mp3|wav|ogg|mp4|webm|webp|png|jpe?g|woff2?|ktx2|basis)(\?|$)",
                             r["url"], re.I)]
    return {"summary": summary, "binaries": binaries[:120]}


def x_stack(cap: Capture, rules_path: Path):
    """Tiered fingerprinting. Every hit carries the string that produced it."""
    hits, seen = [], set()

    def add(tech, version, tier, source, matched, conf):
        k = (tech, str(version))
        if k in seen:
            return
        seen.add(k)
        hits.append({"technology": tech, "version": version, "tier": tier,
                     "source": source, "matched": matched[:160], "confidence": conf})

    # tier 0 - source maps. An inline base64 map carries the original file tree,
    # which is the single richest stack signal there is. Decode it.
    sources = []
    for name, body in cap.js.items():
        for m in re.finditer(r"sourceMappingURL=(\S+)", body):
            ref = m.group(1)
            inline = ref.startswith("data:")
            add("source map", "inline" if inline else ref[:80], 0, name,
                m.group(0)[:60], "definitive")
            if not inline:
                continue
            try:
                import base64
                b64 = ref.split(",", 1)[1]
                sm = json.loads(base64.b64decode(b64 + "=" * (-len(b64) % 4)))
                sources.extend(sm.get("sources") or [])
            except Exception:
                pass
    for r in cap.network:
        if r["url"].endswith(".map"):
            add("source map (served)", r["url"][:100], 0, "network.json",
                r["url"][:60], "definitive")
    pkgs = Counter()
    for s in sources:
        # pnpm nests: node_modules/.pnpm/pkg@ver/node_modules/pkg — the real
        # package is the last segment, and dot-dirs are never packages.
        segs = [seg for seg in re.findall(r"node_modules/((?:@[^/]+/)?[^/]+)", s)
                if not seg.startswith(".")]
        if segs:
            pkgs[segs[-1]] += 1
    for pkg, n in pkgs.most_common(40):
        add(pkg, None, 0, "source map sources[]", f"node_modules/{pkg} ×{n}", "definitive")

    # tier 1 - license banners
    for name, body in cap.js.items():
        for blk in RE_LICENSE.findall(body):
            flat = re.sub(r"\s*\*\s*", " ", blk).strip()
            m = re.match(r"([A-Za-z0-9_.+-]+(?:\.js)?)\s+v?(\d+\.\d+(?:\.\d+)?)", flat)
            if not m:
                continue
            label = m.group(1)
            # GSAP ships one banner per plugin, several named after internals
            # ("matrix", "paths"). Namespace them so the ledger stays readable.
            if "gsap.com" in flat.lower() and not label.lower().startswith("gsap"):
                label = f"GSAP {label}"
            add(label, m.group(2), 1, name, flat[:150], "definitive")

    # tier 2 - version literals
    for name, body in list(cap.js.items()):
        for m in re.finditer(r"""(?:^|[^A-Za-z])version\s*[:=]\s*["'](\d+\.\d+\.\d+)["']""", body):
            add("(version literal)", m.group(1), 2, name, m.group(0)[:80], "high")
        for m in re.finditer(r"REVISION\s*=\s*[\"'](\w+)[\"']", body):
            add("three.js", m.group(1), 2, name, m.group(0)[:80], "high")
        for m in re.finditer(r"will be removed in (r\d+)", body):
            add("three.js (bracketed by deprecation)", f"< {m.group(1)}", 7, name,
                m.group(0), "medium")

    # tier 3 - runtime globals
    for pr in cap.probes.values():
        for g, v in (pr.get("globals") or {}).items():
            add(g, v if v is not True else None, 3, "runtime", f"window.{g}", "high")

    # tier 4/5/6 - declarative rules
    rules = {}
    if rules_path.exists() and yaml:
        rules = yaml.safe_load(rules_path.read_text(encoding="utf-8")) or {}
    haystacks = {"js": cap.js_all(), "css": cap.css_all(),
                 "network": "\n".join(r["url"] for r in cap.network),
                 "html_class": " ".join(pr.get("htmlClass", "") + " " + pr.get("bodyClass", "")
                                        for pr in cap.probes.values()),
                 "dom": json.dumps([el.get("cls", "") for pr in cap.probes.values()
                                    for el in pr.get("elements", [])])[:400000]}
    for rule in rules.get("rules", []):
        hay = haystacks.get(rule.get("scan", "js"), "")
        pat = rule.get("pattern")
        if not pat:
            continue
        m = re.search(pat, hay, re.I)
        if not m:
            continue
        ver = None
        if rule.get("version_group") and m.groups():
            try:
                ver = m.group(int(rule["version_group"]))
            except Exception:
                ver = None
        add(rule["technology"], ver, rule.get("tier", 6), rule.get("scan", "js"),
            m.group(0), rule.get("confidence", "medium"))

    hits.sort(key=lambda h: (h["tier"], h["technology"].lower()))
    return hits


def x_routes(cap: Capture):
    return {"discovered": cap.manifest.get("routes", []),
            "captured": cap.manifest.get("captured", []),
            "unlinked_candidates": sorted(
                {r for r in cap.manifest.get("routes", [])
                 if r not in {l for pr in cap.probes.values() for l in (pr.get("links") or [])}})}


# ------------------------------------------------------------------- reports

def render_md(L: dict) -> str:
    o = []
    w = o.append
    w("# Evidence ledger\n")
    w(f"Seed: `{L['meta']['seed']}`  ·  routes captured: {len(L['routes']['discovered'])}"
      f"  ·  generated by ledger.py\n")
    w("> Every value below was parsed from the capture. The PRD may not contain a "
      "literal that does not appear here.\n")

    w("\n## 1. Stack fingerprint\n")
    w("| Tier | Technology | Version | Confidence | Evidence |")
    w("|---|---|---|---|---|")
    for h in L["stack"][:60]:
        w(f"| {h['tier']} | {h['technology']} | {h['version'] or '-'} | {h['confidence']} "
          f"| `{h['matched'][:70]}` |")
    w("\nTier 0 source maps · 1 license banners · 2 version literals · 3 runtime globals "
      "· 4 headers/paths · 5 markup fingerprints · 6 surviving identifiers · 7 deprecation strings.\n")

    w("\n## 2. Colour\n")
    w("| Value | CSS uses | Source |")
    w("|---|---|---|")
    for c in L["colors"]["declared"][:40]:
        w(f"| `{c['value']}` | {c['css_uses']} | {c['source'] or '-'} |")
    w("\nMost-used computed colours: " +
      ", ".join(f"`{v}` ({n})" for v, n in L["colors"]["computed_top"][:12]) + "\n")
    if L["colors"].get("js_numeric"):
        w("\nColours defined as integers in JS (WebGL/canvas palettes — verify against "
          "a screenshot before treating any single one as a brand colour):\n")
        w(", ".join(f"`{c['value']}` ({c['uses']})"
                    for c in L["colors"]["js_numeric"][:24]) + "\n")

    w("\n## 3. Custom properties (computed on :root)\n")
    for k, v in list(L["custom_props"]["computed_root"].items())[:60]:
        w(f"- `{k}` = `{v}`")

    w("\n## 4. Typography\n")
    w("| Family | Weight | Style | display | Source |")
    w("|---|---|---|---|---|")
    for f in L["type"]["font_faces"][:24]:
        w(f"| {f['family']} | {f['weight']} | {f['style']} | {f['display']} | {f['source']} |")
    w("\nScale actually rendered:\n")
    w("| Size | Weight | Line-height | Uses |")
    w("|---|---|---|---|")
    for s in L["type"]["scale"][:24]:
        w(f"| {s['size']} | {s['weight']} | {s['line_height']} | {s['uses']} |")

    w("\n## 5. Motion\n")
    w(f"\n### 5.1 Keyframes ({len(L['motion']['keyframes'])})\n")
    for k in L["motion"]["keyframes"][:30]:
        w(f"- **{k['name']}** — `{k['body'][:300]}`")
    w("\n### 5.2 Easing curves\n")
    for b in L["motion"]["cubic_beziers"][:25]:
        w(f"- `{b['value']}` × {b['uses']}")
    for n in L["motion"]["named_easings"][:20]:
        w(f"- **{n['name']}** = `{n['definition']}`")
    w("\n### 5.3 Transitions declared\n")
    for t in L["motion"]["transitions"][:25]:
        w(f"- `{t['value']}` × {t['uses']}")
    w(f"\n### 5.4 Runtime animations captured ({len(L['motion']['waapi_runtime'])})\n")
    w("| Kind | Name | Target | Duration | Easing | Iter | Fill |")
    w("|---|---|---|---|---|---|---|")
    for a in L["motion"]["waapi_runtime"][:40]:
        w(f"| {a['kind']} | {a['name']} | `{a['target']}` | {a['duration']} "
          f"| {a['easing']} | {a['iterations']} | {a['fill']} |")

    w("\n## 6. Effects catalogue\n")
    for kind, items in L["effects"].items():
        if not items:
            continue
        w(f"\n### {kind}\n")
        for it in items[:14]:
            ex = ", ".join(f"`{e}`" for e in it.get("examples", [])[:3])
            w(f"- `{it['value'][:180]}` × {it['uses']}" + (f" — {ex}" if ex else ""))

    w("\n## 7. Scroll behaviour\n")
    for route, s in L["scroll"].items():
        w(f"\n### {route}\n")
        w(f"- frames: {s['frames']}, scrollY: {s['scroll_heights']}")
        if s["html_class_states"]:
            w(f"- root class states: {s['html_class_states']}")
        if s["vars_changing"]:
            w("- custom properties driven by scroll:")
            for k, vals in list(s["vars_changing"].items())[:12]:
                w(f"  - `{k}`: {vals}")
        w(f"- scroll-scrubbed selectors ({len(s['scrubbed'])}):")
        for r in s["scrubbed"][:20]:
            w(f"  - `{r['selector']}` → {r['changing']}")

    w("\n## 8. Hover states\n")
    for route, recs in L["hover"].items():
        if not recs:
            continue
        w(f"\n### {route}\n")
        for r in recs[:20]:
            w(f"- `{r['selector']}`")
            for k, (a, b) in list(r["delta"].items())[:5]:
                w(f"  - {k}: `{a}` → `{b}`")
            for ps, d in (r.get("pseudo") or {}).items():
                for k, (a, b) in list(d.items())[:4]:
                    w(f"  - ::{ps} {k}: `{a}` → `{b}`")

    w("\n## 9. Inline SVG geometry\n")
    for s in L["svg"][:40]:
        w(f"\n- **{s.get('cls') or s.get('selector')}** viewBox=`{s.get('viewBox')}` "
          f"rect={s.get('rect')} prims={len(s.get('prims') or [])}")
        for p in (s.get("prims") or [])[:12]:
            attrs = " ".join(f"{k}={v}" for k, v in p.items()
                             if k in ("tag", "cx", "cy", "r", "d", "x", "y", "width",
                                      "height", "fill", "stroke", "stroke-width", "transform"))
            w(f"  - {attrs[:200]}")

    w("\n## 10. Copy deck\n")
    for route, c in L["copy"].items():
        w(f"\n### {route} — {c['title']}\n")
        for line in c["lines"][:120]:
            w(f"- `{line['tag']}` {('.' + line['cls'].split()[0]) if line['cls'] else ''} "
              f"— {line['text']}")

    w("\n## 11. Layout\n")
    w("Media queries:")
    for m in L["layout"]["media_queries"][:20]:
        w(f"- `{m['query']}` × {m['uses']}")
    w(f"\nz-index values in use: {L['layout']['z_index']}")

    w("\n## 12. Assets\n")
    for t, s in L["assets"]["summary"].items():
        w(f"- {t}: {s['count']} files, {s['bytes']} bytes")
    w("\nBinaries requiring a zero-asset substitute:")
    for b in L["assets"]["binaries"][:40]:
        w(f"- `{b['url'][:120]}`")

    w("\n## 13. Routes\n")
    for r in L["routes"]["discovered"]:
        w(f"- `{r}`")
    if L["routes"]["unlinked_candidates"]:
        w("\nUnlinked (found only in bundle strings — verify before use):")
        for r in L["routes"]["unlinked_candidates"]:
            w(f"- `{r}`")
    return "\n".join(o) + "\n"


def main():
    ap = argparse.ArgumentParser(description="Build the evidence ledger from a raw capture.")
    ap.add_argument("project_dir", help="output/<project>, or the capture dir inside it")
    ap.add_argument("--out", help="where to write the ledger (default: the project dir)")
    ap.add_argument("--rules", default=str(Path(__file__).parent / "stack_rules.yaml"))
    args = ap.parse_args()

    # Accept either half of the pair: output/<project> (the normal case) or the
    # capture directory itself, which is what a pre-output-layout run produced.
    arg = Path(args.project_dir)
    if (arg / "capture" / "raw").is_dir():
        root, proj = arg / "capture", arg
    elif (arg / "raw").is_dir():
        root = arg
        proj = arg.parent if arg.name == "capture" else arg
    else:
        sys.exit(f"no raw/ under {arg} or {arg/'capture'} — run prdgen.py first")
    if args.out:
        proj = Path(args.out)
    proj.mkdir(parents=True, exist_ok=True)
    if yaml is None:
        print("[warn] pyyaml missing; declarative stack rules skipped", file=sys.stderr)

    cap = Capture(root)
    L = {
        "meta": {"seed": cap.manifest.get("seed"), "root": str(root),
                 "css_files": len(cap.css), "js_files": len(cap.js),
                 "probes": len(cap.probes)},
        "routes": x_routes(cap),
        "stack": x_stack(cap, Path(args.rules)),
        "colors": x_colors(cap),
        "custom_props": x_custom_props(cap),
        "type": x_type(cap),
        "motion": x_motion(cap),
        "effects": x_effects(cap),
        "scroll": x_scroll(cap),
        "hover": x_hover(cap),
        "svg": x_svg(cap),
        "copy": x_copy(cap),
        "layout": x_layout(cap),
        "assets": x_assets(cap),
    }
    (proj / "ledger.json").write_text(json.dumps(L, indent=1, ensure_ascii=False),
                                      encoding="utf-8")
    (proj / "ledger.md").write_text(render_md(L), encoding="utf-8")

    print(f"[ledger] {proj/'ledger.json'}")
    print(f"[ledger] {proj/'ledger.md'}")
    print(f"         {len(L['stack'])} stack hits · {len(L['colors']['declared'])} colours · "
          f"{len(L['motion']['keyframes'])} keyframes · "
          f"{len(L['motion']['waapi_runtime'])} runtime animations · "
          f"{sum(len(v) for v in L['effects'].values())} effect values · "
          f"{len(L['svg'])} SVGs")
    print(f"[next]   feed ledger.md and capture/shots/ to the prd-authoring skill;")
    print(f"         it writes PRD.md and PRD_description.md into {proj}")


if __name__ == "__main__":
    main()
