#!/usr/bin/env python3
"""Stage 7 - gate the authored documents. Standard library only.

    python prd_lint.py out/PRD.md --ledger captures/x/ledger.json --deny deny.txt
    python prd_lint.py out/PRD_description.md --mode description \
        --against out/PRD.md --deny out/deny.txt

Two documents come out of the pipeline and they are graded against opposite
standards, so the linter has two modes.

`--mode prd` (default) gates the build spec, whose job is fidelity:

    P1  structure          numbered H2 sections, no gaps, no duplicates
    P2  cross-references   every "Section N[.M]" resolves to a real heading
    P3  placeholders       no TBD / TODO / FIXME / lorem / XXX
    P4  asset dependency   no external URL, no referenced binary file
    P5  brand leak         no token from the deny list, case-insensitive
    P6  ledger fidelity    sampled literals exist in the ledger

`--mode description` gates the plain-language companion, whose job is to be
understood by someone who does not know what a shader is. P3, P4 and P5 still
apply - a placeholder, an asset dependency and a brand leak are defects in any
document - and two gates replace the fidelity ones:

    D1  section parity     one plain-language section per PRD section, same numbers
    D2  plain language     no unexplained jargon in prose

P1, P2 and P6 do not run in description mode: the companion carries no literals
to check and its cross-references are to the PRD, not to itself.

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

# D2's vocabulary. A word here is not banned from the document - it is banned
# from the plain-language prose, because the companion exists for a reader who
# would have to look it up. Naming the real thing is what the technical column
# of a table is for, so table rows and fenced code are exempt, and a genuine
# exception gets the same narrow escape every other gate gets:
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
# Literals are jargon too: a reader who wanted #0f172a would be reading the PRD.
JARGON_PATTERNS = [
    ("hex colour", RE_HEX),
    ("easing curve", RE_BEZIER),
    ("CSS measurement", re.compile(r"(?<![\w.])\d+(?:\.\d+)?(?:px|rem|em|vh|vw|ms)(?![\w])")),
    ("frame rate", re.compile(r"(?<![\w])\d+\s?fps(?![\w])", re.I)),
]


def prose_lines(text):
    """(line number, text) for the lines D2 judges.

    Fenced code and table rows are dropped. That is the whole exemption model:
    the companion may name Three.js in the technical column of a table, and may
    not use it in a sentence meant to explain what the visitor sees.
    """
    out, in_fence = [], False
    for i, line in enumerate(text.splitlines(), 1):
        if RE_FENCE.match(line):
            in_fence = not in_fence
            continue
        if in_fence or RE_TABLE_ROW.match(line):
            continue
        out.append((i, line))
    return out


def gate_parity(text, prd_text, rep):
    """Every PRD section has a plain-language counterpart, under the same number.

    The two documents are read side by side. If Section 14 of the PRD is the
    scroll system and Section 14 of the companion is the copy deck, the reader
    is worse off than with one document.
    """
    if prd_text is None:
        return
    prd_secs = {int(m.group(1)): m.group(2) for m in RE_H2.finditer(prd_text)}
    desc_secs = {int(m.group(1)) for m in RE_H2.finditer(text)}
    if not prd_secs:
        rep.add("D1", 1, "the PRD passed to --against has no numbered sections")
        return
    for n in sorted(set(prd_secs) - desc_secs):
        rep.add("D1", 1, f"PRD Section {n} ({prd_secs[n]!r}) has no plain-language section")
    for n in sorted(desc_secs - set(prd_secs)):
        rep.add("D1", 1, f"section {n} does not exist in the PRD")


def gate_jargon(text, rep):
    for ln, line in prose_lines(text):
        for word, rx in JARGON:
            m = rx.search(line)
            if m:
                rep.add("D2", ln, f"jargon {m.group(0)!r} in prose - say what the "
                                  f"visitor sees, or move it to the technical column")
        for label, rx in JARGON_PATTERNS:
            m = rx.search(line)
            if m:
                rep.add("D2", ln, f"{label} {m.group(0)!r} in prose - the companion "
                                  f"describes, the PRD specifies")


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
    ap = argparse.ArgumentParser(description="Gate an authored PRD or its "
                                             "plain-language companion.")
    ap.add_argument("prd")
    ap.add_argument("--mode", choices=("prd", "description"), default="prd",
                    help="prd: P1-P6. description: P3-P5 plus D1-D2")
    ap.add_argument("--against", help="description mode: the PRD.md to check "
                                      "section parity against")
    ap.add_argument("--ledger", help="ledger.json to check literals against")
    ap.add_argument("--deny", help="newline-separated tokens that must not appear")
    ap.add_argument("--skip", default="", help="comma-separated gates to skip, e.g. P6")
    args = ap.parse_args()

    desc_mode = args.mode == "description"

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

    against = None
    if desc_mode:
        if not args.against:
            sys.exit("description mode needs --against out/PRD.md for gate D1")
        if not Path(args.against).is_file():
            sys.exit(f"no such file: {args.against}")
        against = Path(args.against).read_text(encoding="utf-8")

    skip = {s.strip().upper() for s in args.skip.split(",") if s.strip()}
    rep = Report(prd, allow_map(text))

    if not desc_mode:
        sections = gate_structure(text, rep) if "P1" not in skip else set(range(0, 99))
        if "P2" not in skip:
            gate_xrefs(text, sections, rep)
    if "P3" not in skip:
        gate_placeholders(text, rep)
    if "P4" not in skip:
        gate_assets(text, rep)
    if "P5" not in skip and deny:
        gate_leak(text, deny, rep)
    if not desc_mode and "P6" not in skip:
        gate_ledger(text, ledger, rep)
    if desc_mode:
        if "D1" not in skip:
            gate_parity(text, against, rep)
        if "D2" not in skip:
            gate_jargon(text, rep)

    order = (["P3", "P4", "P5", "D1", "D2"] if desc_mode
             else ["P1", "P2", "P3", "P4", "P5", "P6"])
    names = {"P1": "structure", "P2": "cross-references", "P3": "placeholders",
             "P4": "asset dependency", "P5": "brand leak", "P6": "ledger fidelity",
             "D1": "section parity", "D2": "plain language"}

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

    print(f"\n{len(rep.findings)} findings across {failed} failed gate(s)")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
