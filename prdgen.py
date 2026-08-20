#!/usr/bin/env python3
"""Stage 0 - capture a website into a raw evidence bundle.

    python prdgen.py https://example.com                 # -> output/example/
    python prdgen.py https://example.com --project acme  # -> output/acme/

Every stage of the pipeline writes under one project directory, so a run is a
single folder you can zip, diff or hand over:

    output/<project>/
      capture/
        raw/<route>.<breakpoint>.probe.json   in-page evidence
        raw/<route>.<breakpoint>.scroll.json  per-scroll-position animation + style deltas
        raw/<route>.hover.json                hover-state computed-style diffs
        raw/network.json                      every response with type, size, url
        shots/<route>.<breakpoint>.<pct>.png  the scroll matrix
        src/<hash>.<ext>                      every CSS and JS body, verbatim
        capture.json                          run manifest
      ledger.json, ledger.md                  stage 1
      PRD.md, PRD_description.md, ...         stages 2-6

Nothing here interprets. Interpretation is ledger.py.
"""
import argparse
import hashlib
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

BREAKPOINTS = [("desktop", 1440, 900), ("tablet", 990, 800), ("mobile", 390, 844)]
SCROLL_PCTS = [0, 12, 25, 37, 50, 62, 75, 87, 100]
SETTLE_MS = 1200
ROUTE_CAP = 12

# ---------------------------------------------------------------- injected JS

# Properties whose non-default value means "this element is doing something
# visually interesting". Value on the right is the browser default we discard.
PROBE_JS = r"""
() => {
  const DEFAULTS = {
    transition: 'all 0s ease 0s',
    animation: 'none 0s ease 0s 1 normal none running',
    transform: 'none',
    filter: 'none',
    backdropFilter: 'none',
    boxShadow: 'none',
    textShadow: 'none',
    mixBlendMode: 'normal',
    clipPath: 'none',
    maskImage: 'none',
    webkitMaskImage: 'none',
    opacity: '1',
    willChange: 'auto',
    backgroundImage: 'none',
    borderRadius: '0px',
    perspective: 'none',
    transformStyle: 'flat',
    letterSpacing: 'normal',
    textTransform: 'none',
    objectFit: 'fill',
    isolation: 'auto',
    maskComposite: 'add'
  };
  const TYPE_PROPS = ['fontFamily','fontSize','fontWeight','lineHeight','color','textAlign'];
  const BOX_PROPS  = ['display','position','zIndex','overflow','gap','padding','margin',
                      'width','height','backgroundColor','borderColor','borderWidth'];

  const sel = (el) => {
    if (!el || !el.tagName) return null;
    if (el.id) return '#' + el.id;
    const cls = (el.getAttribute && el.getAttribute('class') || '')
      .trim().split(/\s+/).filter(Boolean).slice(0, 4).join('.');
    const tag = el.tagName.toLowerCase();
    return cls ? tag + '.' + cls : tag;
  };
  const rect = (el) => {
    try {
      const r = el.getBoundingClientRect();
      return [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)];
    } catch (e) { return null; }
  };

  // ---- visually-active elements -------------------------------------------
  const all = Array.from(document.querySelectorAll('*')).slice(0, 4000);
  const elements = [];
  for (const el of all) {
    const tag = el.tagName.toLowerCase();
    if (tag === 'script' || tag === 'style' || tag === 'meta' || tag === 'link') continue;
    const cs = getComputedStyle(el);
    const visual = {};
    for (const p in DEFAULTS) {
      const v = cs[p];
      if (v && v !== DEFAULTS[p] && v !== 'normal' && v !== 'none') visual[p] = v;
    }
    const r = rect(el);
    const interesting = Object.keys(visual).length > 0;
    if (!interesting) continue;
    const type = {}; for (const p of TYPE_PROPS) type[p] = cs[p];
    const box  = {}; for (const p of BOX_PROPS)  box[p]  = cs[p];
    const data = {};
    for (const a of el.attributes) {
      if (a.name.startsWith('data-') || a.name.startsWith('aria-') || a.name === 'role')
        data[a.name] = a.value;
    }
    elements.push({
      selector: sel(el), tag,
      cls: el.getAttribute('class') || '',
      rect: r, visual, type, box, data,
      text: (el.childElementCount === 0 ? (el.textContent || '').trim().slice(0, 160) : '')
    });
    if (elements.length >= 900) break;
  }

  // ---- running animations and transitions ---------------------------------
  let animations = [];
  try {
    animations = document.getAnimations().slice(0, 300).map(a => {
      const eff = a.effect;
      const t = eff && eff.getTiming ? eff.getTiming() : {};
      let kf = [];
      try { kf = eff.getKeyframes().slice(0, 16); } catch (e) {}
      return {
        kind: a.constructor.name,
        name: a.animationName || a.transitionProperty || a.id || '',
        target: eff && eff.target ? sel(eff.target) : null,
        pseudo: eff && eff.pseudoElement || null,
        duration: t.duration, delay: t.delay, endDelay: t.endDelay,
        easing: t.easing, iterations: t.iterations,
        direction: t.direction, fill: t.fill,
        playState: a.playState,
        currentTime: a.currentTime,
        keyframes: kf
      };
    });
  } catch (e) {}

  // ---- CSS custom properties on :root -------------------------------------
  const cssVars = {};
  try {
    for (const [k, v] of document.documentElement.computedStyleMap()) {
      if (k.startsWith('--')) cssVars[k] = String(v);
    }
  } catch (e) {}

  // ---- inline SVG geometry (icons as coordinates, not files) --------------
  const svgs = Array.from(document.querySelectorAll('svg')).slice(0, 90).map(s => ({
    selector: sel(s),
    cls: s.getAttribute('class') || '',
    viewBox: s.getAttribute('viewBox'),
    rect: rect(s),
    ariaHidden: s.getAttribute('aria-hidden'),
    title: (s.querySelector('title') || {}).textContent || null,
    prims: Array.from(s.querySelectorAll('circle,rect,path,line,polygon,ellipse,polyline,stop'))
      .slice(0, 70).map(p => {
        const o = { tag: p.tagName.toLowerCase() };
        for (const a of p.attributes) o[a.name] = a.value;
        return o;
      })
  }));

  // ---- copy deck, DOM order ----------------------------------------------
  const copy = [];
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walk.nextNode())) {
    const t = (n.nodeValue || '').trim();
    if (!t) continue;
    const p = n.parentElement;
    if (!p) continue;
    const pt = p.tagName.toLowerCase();
    if (pt === 'script' || pt === 'style' || pt === 'noscript') continue;
    const cs = getComputedStyle(p);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    copy.push({ tag: pt, cls: p.getAttribute('class') || '', text: t.slice(0, 400) });
    if (copy.length >= 400) break;
  }

  // ---- stack fingerprint, runtime tier ------------------------------------
  const GLOBALS = {
    gsap: 'version', ScrollTrigger: 'version', THREE: 'REVISION', React: 'version',
    ReactDOM: 'version', Vue: 'version', angular: 'version', jQuery: 'fn.jquery',
    PIXI: 'VERSION', Matter: 'version', p5: 'VERSION', Tone: 'version',
    barba: 'version', Swiper: 'version', anime: 'version', Alpine: 'version',
    lenisVersion: null, Lenis: null, LocomotiveScroll: null, Splitting: null,
    OGL: null, Rive: null, Spline: null, Webflow: null, Shopify: null,
    __NEXT_DATA__: null, __NUXT__: null, __remixContext: null, __sveltekit: null
  };
  const globals = {};
  for (const g in GLOBALS) {
    try {
      if (typeof window[g] === 'undefined') continue;
      let ver = true;
      const path = GLOBALS[g];
      if (path) {
        ver = path.split('.').reduce((o, k) => (o == null ? o : o[k]), window[g]);
      }
      globals[g] = (ver === undefined || ver === null) ? true : ver;
    } catch (e) {}
  }

  // ---- canvases, media, fonts, root state ---------------------------------
  const canvases = Array.from(document.querySelectorAll('canvas')).slice(0, 10)
    .map(c => ({ selector: sel(c), w: c.width, h: c.height, rect: rect(c),
                 style: getComputedStyle(c).cssText.slice(0, 300) }));
  const media = Array.from(document.querySelectorAll('video,audio,img[src]')).slice(0, 60)
    .map(m => ({ tag: m.tagName.toLowerCase(), src: m.currentSrc || m.src || '',
                 loop: !!m.loop, muted: !!m.muted, autoplay: !!m.autoplay }));
  let fonts = [];
  try {
    fonts = Array.from(document.fonts).slice(0, 40)
      .map(f => ({ family: f.family, weight: f.weight, style: f.style, status: f.status }));
  } catch (e) {}

  return {
    url: location.href,
    title: document.title,
    htmlClass: document.documentElement.className,
    bodyClass: document.body.className,
    scrollHeight: document.documentElement.scrollHeight,
    viewport: [innerWidth, innerHeight],
    meta: Array.from(document.querySelectorAll('meta[name],meta[property]'))
      .slice(0, 40).map(m => ({ k: m.getAttribute('name') || m.getAttribute('property'),
                                v: (m.getAttribute('content') || '').slice(0, 300) })),
    links: Array.from(document.querySelectorAll('a[href]')).slice(0, 300)
      .map(a => a.getAttribute('href')),
    cssVars, elements, animations, svgs, copy, globals, canvases, media, fonts
  };
}
"""

# Light probe re-run at each scroll position: only what changes with scroll.
SCROLL_PROBE_JS = r"""
() => {
  const sel = (el) => {
    if (!el || !el.tagName) return null;
    if (el.id) return '#' + el.id;
    const cls = (el.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean)
      .slice(0, 4).join('.');
    return cls ? el.tagName.toLowerCase() + '.' + cls : el.tagName.toLowerCase();
  };
  const TRACK = ['transform','opacity','filter','clipPath','maskImage','webkitMaskImage',
                 'backdropFilter','boxShadow','visibility','backgroundImage'];
  const nodes = Array.from(document.querySelectorAll('*')).slice(0, 2500);
  const styles = [];
  for (const el of nodes) {
    const cs = getComputedStyle(el);
    const rec = {};
    for (const p of TRACK) {
      const v = cs[p];
      if (v && v !== 'none' && v !== '1' && v !== 'visible') rec[p] = v;
    }
    if (Object.keys(rec).length) styles.push({ s: sel(el), v: rec });
    if (styles.length >= 500) break;
  }
  let anims = [];
  try {
    anims = document.getAnimations().slice(0, 200).map(a => ({
      name: a.animationName || a.transitionProperty || '',
      target: a.effect && a.effect.target ? sel(a.effect.target) : null,
      playState: a.playState,
      currentTime: a.currentTime
    }));
  } catch (e) {}
  return {
    scrollY: window.scrollY,
    htmlClass: document.documentElement.className,
    cssVars: (() => {
      const o = {};
      try { for (const [k, v] of document.documentElement.computedStyleMap())
              if (k.startsWith('--')) o[k] = String(v); } catch (e) {}
      return o;
    })(),
    styles, anims
  };
}
"""

HOVER_READ_JS = r"""
(selector) => {
  const el = document.querySelector(selector);
  if (!el) return null;
  const cs = getComputedStyle(el);
  const P = ['transform','opacity','filter','backdropFilter','boxShadow','color',
             'backgroundColor','backgroundImage','borderColor','letterSpacing',
             'clipPath','textDecoration','scale','rotate','translate'];
  const o = {};
  for (const p of P) o[p] = cs[p];
  let before = {}, after = {};
  try {
    const b = getComputedStyle(el, '::before'), a = getComputedStyle(el, '::after');
    for (const p of P) { before[p] = b[p]; after[p] = a[p]; }
    before.content = b.content; after.content = a.content;
  } catch (e) {}
  return { base: o, before, after };
}
"""


# ------------------------------------------------------------------- helpers

def slugify(url: str) -> str:
    p = urlparse(url).path.strip("/")
    return re.sub(r"[^a-z0-9]+", "-", p.lower()).strip("-") or "index"


def discover_routes(page, seed: str, cap: int, js_bodies: list) -> list:
    """Same-origin links, plus route literals mined from the JS bundles.

    The bundle scan is not optional: unlinked routes are common on showcase
    sites and crawling alone will never reach them.
    """
    origin = urlparse(seed)
    found = {seed.rstrip("/") or seed}

    for href in page.eval_on_selector_all("a[href]", "els => els.map(e => e.getAttribute('href'))"):
        if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
            continue
        u = urljoin(seed, href)
        pu = urlparse(u)
        if pu.netloc != origin.netloc:
            continue
        if re.search(r"\.(png|jpe?g|svg|webp|pdf|zip|mp4|mp3|css|js)$", pu.path, re.I):
            continue
        found.add(u.split("#")[0].rstrip("/") or u)

    for body in js_bodies:
        for lit in set(re.findall(r"""["'](/[a-z0-9][a-z0-9\-/]{1,38})["']""", body)):
            if re.search(r"\.(js|css|json|png|svg|woff2?|glb|mp3|webp|wasm)$", lit, re.I):
                continue
            if lit.count("/") > 2:
                continue
            found.add(f"{origin.scheme}://{origin.netloc}{lit}")

    ordered = sorted(found, key=lambda u: (len(urlparse(u).path), u))
    return ordered[:cap]


def capture_route(page, url, bp_name, w, h, out: Path, shots: Path):
    slug = slugify(url)
    page.set_viewport_size({"width": w, "height": h})
    page.goto(url, wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(SETTLE_MS)

    probe = page.evaluate(PROBE_JS)
    (out / f"{slug}.{bp_name}.probe.json").write_text(
        json.dumps(probe, indent=1, ensure_ascii=False), encoding="utf-8")

    frames = []
    height = max(probe.get("scrollHeight", h), h)
    for pct in SCROLL_PCTS:
        y = int((height - h) * pct / 100)
        page.evaluate("y => window.scrollTo(0, y)", y)
        page.wait_for_timeout(650)
        frames.append({"pct": pct, "y": y, **page.evaluate(SCROLL_PROBE_JS)})
        page.screenshot(path=str(shots / f"{slug}.{bp_name}.{pct:03d}.png"))
    (out / f"{slug}.{bp_name}.scroll.json").write_text(
        json.dumps(frames, indent=1, ensure_ascii=False), encoding="utf-8")

    page.evaluate("window.scrollTo(0, 0)")
    return probe


def capture_hover(page, url, out: Path):
    """Diff computed styles before and after hover on candidate elements.

    This is where the hover-only effects live - underline wipes, glow ramps,
    scale nudges - none of which appear in a static capture.
    """
    slug = slugify(url)
    cands = page.eval_on_selector_all(
        "a, button, [class*=btn], [class*=nav], [class*=card], [class*=link], summary",
        """els => els.slice(0, 30).map(e => {
             if (e.id) return '#' + e.id;
             const c = (e.getAttribute('class')||'').trim().split(/\\s+/).filter(Boolean).slice(0,3);
             return c.length ? e.tagName.toLowerCase() + '.' + c.join('.') : null;
           }).filter(Boolean)""")

    results = []
    for sel in dict.fromkeys(cands):
        try:
            before = page.evaluate(HOVER_READ_JS, sel)
            if not before:
                continue
            page.hover(sel, timeout=2500)
            page.wait_for_timeout(550)
            after = page.evaluate(HOVER_READ_JS, sel)
            delta = {k: [before["base"][k], after["base"][k]]
                     for k in before["base"] if before["base"][k] != after["base"][k]}
            pseudo = {}
            for ps in ("before", "after"):
                d = {k: [before[ps].get(k), after[ps].get(k)]
                     for k in before.get(ps, {}) if before[ps].get(k) != after[ps].get(k)}
                if d:
                    pseudo[ps] = d
            if delta or pseudo:
                results.append({"selector": sel, "delta": delta, "pseudo": pseudo})
        except Exception:
            continue
    (out / f"{slug}.hover.json").write_text(
        json.dumps(results, indent=1, ensure_ascii=False), encoding="utf-8")
    return results


def project_slug(url):
    """Directory name for a URL, when the caller did not name the project.

    The host without www or TLD: https://www.linear.app/method -> "linear".
    Collisions are the caller's problem, which is what --project is for.
    """
    host = urlparse(url).hostname or "site"
    labels = [x for x in host.split(".") if x and x != "www"]
    stem = labels[0] if labels else "site"
    return re.sub(r"[^a-z0-9-]+", "-", stem.lower()).strip("-") or "site"


def main():
    ap = argparse.ArgumentParser(description="Capture a site into a raw evidence bundle.")
    ap.add_argument("url")
    ap.add_argument("--project", help="project name; defaults to the site host")
    ap.add_argument("--output-root", default="output",
                    help="parent of the project directory (default: output)")
    ap.add_argument("--out", help="write the capture here instead of "
                                  "<output-root>/<project>/capture")
    ap.add_argument("--routes", type=int, default=ROUTE_CAP)
    ap.add_argument("--headed", action="store_true")
    ap.add_argument("--breakpoints", default="desktop,tablet,mobile")
    args = ap.parse_args()

    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        sys.exit("playwright missing:  pip install playwright && playwright install chromium")

    project = args.project or project_slug(args.url)
    proj_dir = Path(args.output_root) / project
    root = Path(args.out) if args.out else proj_dir / "capture"
    raw, shots, src = root / "raw", root / "shots", root / "src"
    for d in (raw, shots, src):
        d.mkdir(parents=True, exist_ok=True)
    print(f"[project] {project}  ->  {proj_dir}")

    wanted = {b.strip() for b in args.breakpoints.split(",")}
    bps = [b for b in BREAKPOINTS if b[0] in wanted]

    network, js_bodies = [], []

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=not args.headed)
        ctx = browser.new_context(viewport={"width": 1440, "height": 900},
                                  device_scale_factor=1)
        page = ctx.new_page()

        def on_response(resp):
            try:
                ct = (resp.headers.get("content-type") or "").split(";")[0]
                rec = {"url": resp.url, "status": resp.status, "type": ct,
                       "len": int(resp.headers.get("content-length") or 0)}
                network.append(rec)
                if ct in ("text/css", "application/javascript", "text/javascript"):
                    body = resp.text()
                    ext = "css" if "css" in ct else "js"
                    h = hashlib.sha1(resp.url.encode()).hexdigest()[:12]
                    (src / f"{h}.{ext}").write_text(body, encoding="utf-8", errors="replace")
                    rec["saved"] = f"{h}.{ext}"
                    if ext == "js":
                        js_bodies.append(body)
            except Exception:
                pass

        page.on("response", on_response)

        page.goto(args.url, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(SETTLE_MS)
        routes = discover_routes(page, args.url, args.routes, js_bodies)
        print(f"[routes] {len(routes)}")
        for r in routes:
            print("        ", r)

        manifest = {"seed": args.url, "routes": routes,
                    "breakpoints": [b[0] for b in bps], "scroll_pcts": SCROLL_PCTS,
                    "captured": []}

        for url in routes:
            for name, w, h in bps:
                try:
                    capture_route(page, url, name, w, h, raw, shots)
                    manifest["captured"].append({"url": url, "bp": name, "ok": True})
                    print(f"[capture] {url}  {name}")
                except Exception as e:
                    manifest["captured"].append({"url": url, "bp": name, "ok": False,
                                                 "error": str(e)[:200]})
                    print(f"[capture] {url}  {name}  FAILED  {e}", file=sys.stderr)
            try:
                page.set_viewport_size({"width": 1440, "height": 900})
                page.goto(url, wait_until="networkidle", timeout=60000)
                page.wait_for_timeout(SETTLE_MS)
                n = len(capture_hover(page, url, raw))
                print(f"[hover]   {url}  {n} elements with hover deltas")
            except Exception as e:
                print(f"[hover]   {url}  FAILED  {e}", file=sys.stderr)

        browser.close()

    (raw / "network.json").write_text(json.dumps(network, indent=1), encoding="utf-8")
    (root / "capture.json").write_text(json.dumps(manifest, indent=1), encoding="utf-8")
    print(f"\n[done] {root}   {len(network)} responses, "
          f"{len(list(shots.glob('*.png')))} screenshots")
    print(f"[next] python ledger.py {proj_dir}")


if __name__ == "__main__":
    main()
