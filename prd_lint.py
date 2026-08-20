#!/usr/bin/env python3
"""Stage 7 - gate the authored PRD. Standard library only.

    python prd_lint.py output/uplink/uplink_prd.md \
        --ledger output/uplink/ledger.json --deny output/uplink/deny.txt

One document comes out of the pipeline and it carries two registers at once:
the mechanism, exact enough to build from, and the plain-language explanation of
what a visitor would actually see. The gates grade both.

    P1  structure          numbered H2 sections, no gaps, no duplicates
    P2  cross-references   every "Section N[.M]" resolves to a real heading
    P3  placeholders       no TBD / TODO / FIXME / lorem / XXX
    P4  asset dependency   no external URL, no referenced binary file
    P5  brand leak         no token from the deny list, case-insensitive
    P6  ledger fidelity    sampled literals exist in the ledger
    P7  typography         no en dash or em dash anywhere in the document
    D1  plain-language     every section carries an "In plain language" block
    D2  plain language     no jargon or literal inside those blocks

A plain-language block is a blockquote opening with the fixed marker:

    > **In plain language.** The headline is already there, hidden behind a
    > wipe that follows your scroll exactly, so it feels attached to your
    > finger rather than played at you.

Outside those blocks the document may name a library, quote a curve and print a
hex value, because that is what the building agent needs. Inside them it may
not, because that is what the person who commissioned the build needs. Table
rows and fenced code stay exempt from D2 even inside a block: a three-column
"what it is / technical name / what you would see" table is where the real name
belongs.

Every finding prints as  GATE  file:line  message  so it pastes into a review.
"""
import argparse
import json
import re
import sys
from pathlib import Path

RE_H2 = re.compile(r"^##\s+(\d+)\.\s+(.+?)\s*$", re.M)
RE_H3 = re.compile(r"^###\s+(\d+)\.(\d+)\s", re.M)
RE_XREF = re.compile(r"\bSection\s+(\d+)(?:\.(\d+))?")
RE_PLACEHOLDER = re.compile(r"\b(TBD|TODO|FIXME|lorem ipsum|\?\?\?)\b", re.I)
# XXX only as an uppercase marker; lowercase "xxx" is plausible site copy
RE_PLACEHOLDER_CS = re.compile(r"\bXXX\b")
RE_ALLOW_OPEN = re.compile(r"^\s*<!--\s*lint:allow\s+([A-Z0-9,\s]+?)\s*-->\s*$")
RE_ALLOW_END = re.compile(r"^\s*<!--\s*lint:end\s*-->\s*$")
RE_URL = re.compile(r"https?://[^\s`)\]\"'>]+")
RE_ASSET = re.compile(
    r"[\w./-]+\.(?:png|jpe?g|gif|webp|avif|svg|ico|glb|gltf|hdr|exr|ktx2|basis|"
    r"mp3|wav|ogg|m4a|mp4|webm|mov|woff2?|ttf|otf|eot)\b", re.I)
RE_HEX = re.compile(r"#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")
RE_BEZIER = re.compile(r"cubic-bezier\([^)]{4,60}\)")

# URLs that are specification, not dependency
URL_ALLOW = (
    "http://www.w3.org/2000/svg",
    "http://www.w3.org/1999/xlink",
    "https://schema.org",
)
# Placeholder tokens the generator deliberately emits
TOKEN_OK = re.compile(r"^<[A-Z_]+>$")

RE_FENCE = re.compile(r"^\s*(```|~~~)")
RE_TABLE_ROW = re.compile(r"^\s*\|")
RE_QUOTE = re.compile(r"^\s{0,3}>\s?")
# The fixed opener of a plain-language block. One per section, no exceptions.
RE_PLAIN_OPEN = re.compile(r"^\s{0,3}>\s*\*\*In plain language\.?\*\*")
# En dash, em dash, figure dash, horizontal bar. A hyphen is the only dash the
# PRD is allowed to carry: the document is read, diffed and grepped as plain
# ASCII, and a pasted em dash survives into class names and copy decks.
RE_DASH = re.compile(r"[\u2012-\u2015]")
DASH_NAME = {"\u2012": "figure dash", "\u2013": "en dash",
             "\u2014": "em dash", "\u2015": "horizontal bar"}

# D2's vocabulary. A word here is not banned from the document - it is banned
# from the plain-language blocks, which exist for a reader who would have to
# look it up. Naming the real thing is what the spec around the block and the
# technical column of a table are for, so table rows and fenced code stay
# exempt, and a genuine exception gets the same narrow escape every other gate
# gets:
#
#     <!-- lint:allow D2 -->
#
# Keep this list to terms that are opaque rather than merely technical-sounding.
# "grid" and "state" are ordinary English; "clip-path" is not.
JARGON_WORDS = (
    # the platform
    "dom", "css", "html", "svg", "javascript", "typescript", "api", "endpoint",
    "viewport", "breakpoint", "browser cache", "server-side rendering", "ssr",
    "hydration", "lazy-load", "lazy load", "polyfill", "aria", "semantic markup",
    # graphics and motion
    "webgl", "webgpu", "glsl", "tsl", "shader", "gpu", "canvas element",
    "cubic-bezier", "easing", "ease-out", "ease-in", "keyframe", "waapi",
    "requestanimationframe", "clip-path", "mask-image", "backdrop-filter",
    "blend mode", "z-index", "opacity", "translate3d", "matrix3d", "raf",
    "matcap", "mesh", "geometry buffer", "texture map", "uv map", "lod",
    "scroll-scrub", "scrub", "parallax factor", "custom property", "css variable",
    # libraries, which belong in the technical column and nowhere else
    "three.js", "gsap", "scrolltrigger", "lenis", "locomotive", "barba", "taxi.js",
    "ogl", "rive", "spline", "react", "next.js", "svelte", "vue", "tailwind",
    "webassembly", "wasm", "web audio", "feturbulence",
)
JARGON = [(w, re.compile(r"(?<![\w-])" + re.escape(w) + r"(?![\w-])", re.I))
          for w in JARGON_WORDS]
# Literals are jargon too: the reader who wants #0f172a reads the spec three
# lines above the block, not the block.
JARGON_PATTERNS = [
    ("hex colour", RE_HEX),
    ("easing curve", RE_BEZIER),
    ("CSS measurement", re.compile(r"(?<![\w.])\d+(?:\.\d+)?(?:px|rem|em|vh|vw|ms)(?![\w])")),
    ("frame rate", re.compile(r"(?<![\w])\d+\s?fps(?![\w])", re.I)),
]


def plain_lines(text):
    """(line number, text) for the lines D2 judges.

    Only the inside of a plain-language block is judged, because only that block
    is written for a reader who does not know what a shader is. The rest of the
    document is the build spec and is supposed to name the real thing.

    Within a block, fenced code and table rows are still dropped. That is the
    whole exemption model: a row may say Three.js in its technical column, and
    the sentence next to it may not.
    """
    out, in_fence, in_plain = [], False, False
    for i, line in enumerate(text.splitlines(), 1):
        if RE_FENCE.match(line):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        if not RE_QUOTE.match(line):
            if line.strip():
                in_plain = False
            continue
        if RE_PLAIN_OPEN.match(line):
            in_plain = True
        if not in_plain:
            continue
        body = RE_QUOTE.sub("", line, count=1)
        if RE_TABLE_ROW.match(body):
            continue
        out.append((i, body))
    return out


def plain_sections(text):
    """Section number -> line of its first plain-language block, if any."""
    found, cur = {}, None
    for i, line in enumerate(text.splitlines(), 1):
        m = RE_H2.match(line)
        if m:
            cur = int(m.group(1))
            continue
        if cur is not None and cur not in found and RE_PLAIN_OPEN.match(line):
            found[cur] = i
    return found


def gate_plain(text, rep):
    """Every section explains itself as well as specifying itself.

    The mechanism and the explanation live in the same section on purpose: a
    reader who cannot check `cubic-bezier(0.6, 0.01, 0.05, 1)` can check "it
    arrives a beat late, which is what makes it feel weighty", and both
    sentences are about the same behaviour, three lines apart.
    """
    have = plain_sections(text)
    declared = {int(m.group(1)) for m in RE_H2.finditer(text)}
    for n in sorted(declared - set(have)):
        rep.add("D1", 1, f"Section {n} has no '> **In plain language.**' block - "
                         f"say what a visitor would see, not only what is built")


def gate_jargon(text, rep):
    for ln, line in plain_lines(text):
        for word, rx in JARGON:
            m = rx.search(line)
            if m:
                rep.add("D2", ln, f"jargon {m.group(0)!r} in a plain-language "
                                  f"block - say what the visitor sees, or move "
                                  f"it to the spec above it")
        for label, rx in JARGON_PATTERNS:
            m = rx.search(line)
            if m:
                rep.add("D2", ln, f"{label} {m.group(0)!r} in a plain-language "
                                  f"block - the spec specifies, the block "
                                  f"describes")


def gate_dashes(text, rep):
    for m in RE_DASH.finditer(text):
        rep.add("P7", line_of(text, m.start()),
                f"{DASH_NAME[m.group(0)]} {m.group(0)!r} - use a hyphen, a comma "
                f"or a new sentence")


def allow_map(text):
    """line number -> gates explicitly suppressed there.

    A PRD legitimately contains an asset manifest describing what it replaces,
    and a substitution section proposing values that were never on the original
    site. Both would otherwise fail P4/P6 forever, and the team would reach for
    --skip, which kills the gate everywhere. So the escape is narrow, explicit
    and greppable:

        <!-- lint:allow P4 -->
        ...the reference asset manifest...
        <!-- lint:end -->
    """
    allowed, cur = {}, None
    for i, line in enumerate(text.splitlines(), 1):
        m = RE_ALLOW_OPEN.match(line)
        if m:
            cur = {g.strip() for g in m.group(1).split(",") if g.strip()}
            continue
        if RE_ALLOW_END.match(line):
            cur = None
            continue
        if cur:
            allowed[i] = cur
    return allowed


class Report:
    def __init__(self, path, allowed=None):
        self.path = path
        self.findings = []
        self.allowed = allowed or {}
        self.suppressed = 0

    def add(self, gate, line, msg):
        if gate in self.allowed.get(line, ()):
            self.suppressed += 1
            return
        self.findings.append((gate, line, msg))

    def failed(self, gate):
        return any(f[0] == gate for f in self.findings)


def line_of(text, idx):
    return text.count("\n", 0, idx) + 1


def norm_hex(h):
    h = h.lower()
    return "#" + "".join(c * 2 for c in h[1:]) if len(h) == 4 else h


def gate_structure(text, rep):
    nums = [int(m.group(1)) for m in RE_H2.finditer(text)]
    if not nums:
        rep.add("P1", 1, "no numbered '## N. Title' sections found")
        return set()
    seen, dupes = set(), set()
    for n in nums:
        (dupes if n in seen else seen).add(n)
    for d in sorted(dupes):
        rep.add("P1", 1, f"section {d} declared more than once")
    expected = set(range(min(nums), max(nums) + 1))
    for miss in sorted(expected - seen):
        rep.add("P1", 1, f"section numbering gap: {miss} missing")
    return seen


def gate_xrefs(text, sections, rep):
    subs = {f"{m.group(1)}.{m.group(2)}" for m in RE_H3.finditer(text)}
    for m in RE_XREF.finditer(text):
        major, minor = m.group(1), m.group(2)
        ln = line_of(text, m.start())
        if minor is None:
            if int(major) not in sections:
                rep.add("P2", ln, f"cross-reference to Section {major}, which does not exist")
        elif f"{major}.{minor}" not in subs:
            rep.add("P2", ln, f"cross-reference to Section {major}.{minor}, "
                              f"which does not exist")


def gate_placeholders(text, rep):
    for rx in (RE_PLACEHOLDER, RE_PLACEHOLDER_CS):
        for m in rx.finditer(text):
            rep.add("P3", line_of(text, m.start()), f"placeholder {m.group(0)!r}")


def gate_assets(text, rep):
    for m in RE_URL.finditer(text):
        u = m.group(0).rstrip(".,;")
        if u.startswith(URL_ALLOW):
            continue
        rep.add("P4", line_of(text, m.start()), f"external URL {u[:90]!r}")
    # asset filenames outside fenced code are a build dependency
    for m in RE_ASSET.finditer(text):
        name = m.group(0)
        if name.startswith("<") or "data:" in name:
            continue
        rep.add("P4", line_of(text, m.start()),
                f"references asset file {name!r} - describe it procedurally instead")


def gate_leak(text, deny, rep):
    low = text.lower()
    for token in deny:
        t = token.strip().lower()
        if not t or t.startswith("#"):
            continue
        idx = low.find(t)
        if idx >= 0:
            rep.add("P5", line_of(text, idx), f"denied token {token.strip()!r} present")


def gate_ledger(text, ledger, rep):
    if not ledger:
        return
    known_hex = {norm_hex(c["value"]) for c in ledger.get("colors", {}).get("declared", [])
                 if c["value"].startswith("#")}
    for v, _ in ledger.get("colors", {}).get("computed_top", []):
        for h in RE_HEX.findall(str(v)):
            known_hex.add(norm_hex(h))
    for k, v in (ledger.get("custom_props", {}).get("computed_root") or {}).items():
        for h in RE_HEX.findall(str(v)):
            known_hex.add(norm_hex(h))
    # WebGL palettes arrive as integer literals in JS, not as CSS colours
    for c in ledger.get("colors", {}).get("js_numeric", []):
        known_hex.add(norm_hex(c["value"]))

    known_bez = {b["value"].replace(" ", "")
                 for b in ledger.get("motion", {}).get("cubic_beziers", [])}
    for n in ledger.get("motion", {}).get("named_easings", []):
        known_bez.add(("cubic-bezier(" + n["definition"] + ")").replace(" ", ""))

    if known_hex:
        for m in RE_HEX.finditer(text):
            h = norm_hex(m.group(0))
            if h not in known_hex:
                rep.add("P6", line_of(text, m.start()),
                        f"colour {m.group(0)} is not in the ledger")
    if known_bez:
        for m in RE_BEZIER.finditer(text):
            if m.group(0).replace(" ", "") not in known_bez:
                rep.add("P6", line_of(text, m.start()),
                        f"easing {m.group(0)} is not in the ledger")


def main():
    ap = argparse.ArgumentParser(
        description="Gate an authored PRD: fidelity to the ledger, and a "
                    "plain-language block in every section.")
    ap.add_argument("prd", help="the <project>_prd.md to gate")
    ap.add_argument("--ledger", help="ledger.json to check literals against")
    ap.add_argument("--deny", help="newline-separated tokens that must not appear")
    ap.add_argument("--skip", default="", help="comma-separated gates to skip, e.g. P6")
    args = ap.parse_args()

    prd = Path(args.prd)
    if not prd.is_file():
        sys.exit(f"no such file: {prd}")
    text = prd.read_text(encoding="utf-8")

    ledger = {}
    if args.ledger and Path(args.ledger).is_file():
        ledger = json.loads(Path(args.ledger).read_text(encoding="utf-8"))

    deny = []
    if args.deny and Path(args.deny).is_file():
        deny = Path(args.deny).read_text(encoding="utf-8").splitlines()

    skip = {s.strip().upper() for s in args.skip.split(",") if s.strip()}
    rep = Report(prd, allow_map(text))

    sections = gate_structure(text, rep) if "P1" not in skip else set(range(0, 99))
    if "P2" not in skip:
        gate_xrefs(text, sections, rep)
    if "P3" not in skip:
        gate_placeholders(text, rep)
    if "P4" not in skip:
        gate_assets(text, rep)
    if "P5" not in skip and deny:
        gate_leak(text, deny, rep)
    if "P6" not in skip:
        gate_ledger(text, ledger, rep)
    if "P7" not in skip:
        gate_dashes(text, rep)
    if "D1" not in skip:
        gate_plain(text, rep)
    if "D2" not in skip:
        gate_jargon(text, rep)

    order = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "D1", "D2"]
    names = {"P1": "structure", "P2": "cross-references", "P3": "placeholders",
             "P4": "asset dependency", "P5": "brand leak", "P6": "ledger fidelity",
             "P7": "typography", "D1": "plain-language cover",
             "D2": "plain language"}

    for gate, ln, msg in sorted(rep.findings, key=lambda f: (order.index(f[0]), f[1])):
        print(f"{gate}  {prd.name}:{ln}  {msg}")

    print()
    failed = 0
    for g in order:
        if g in skip:
            print(f"  {g}  {names[g]:<20} SKIPPED")
            continue
        if g == "P5" and not deny:
            print(f"  {g}  {names[g]:<20} SKIPPED (no deny list)")
            continue
        if g == "P6" and not ledger:
            print(f"  {g}  {names[g]:<20} SKIPPED (no ledger)")
            continue
        bad = sum(1 for f in rep.findings if f[0] == g)
        print(f"  {g}  {names[g]:<20} {'FAIL ' + str(bad) if bad else 'PASS'}")
        failed += bool(bad)

    print()
    print(f"{len(rep.findings)} findings across {failed} failed gate(s)")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
