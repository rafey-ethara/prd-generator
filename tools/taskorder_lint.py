#!/usr/bin/env python3
"""Stage 2 gate - validate a <project>_input.yaml against the taxonomy enums.

    python tools/taskorder_lint.py output/uplink/uplink_input.yaml
    python tools/taskorder_lint.py output/uplink/uplink_input.yaml --register

The enums are not duplicated here. `reference/A-taxonomy-enums.md` is the single
source of truth and this file parses its tables, so editing a table edits the
linter. Archetype uniqueness is checked against `reference/archetype-registry.txt`
and `--register` appends on a clean pass.

Standard library only, matching prd_lint.py.

| Gate | Checks                                                              |
|------|---------------------------------------------------------------------|
| T1   | required keys present, no unknown keys                              |
| T2   | category is a member of the category enum                           |
| T3   | domain is a member, and belongs to the declared category            |
| T4   | pattern is a member, and is legal for the declared category         |
| T5   | no domain/pattern transposition (the enum-namespace gotcha)         |
| T6   | archetype is lowercase kebab, exactly 3 tokens, globally unique     |
| T7   | idea is 10-80 words                                                 |
| T8   | no comments and no stray content - five keys and their values only  |

The input file carries exactly five keys. Anything else - a service profile, a
capability flag, a header comment explaining what the file is - fails as
structure it is not allowed to have. The file is machine input, not a document:
what it is and how it was validated belongs in the PRD, not above the keys.
"""
import argparse
import re
import sys
from pathlib import Path

KIT = Path(__file__).resolve().parent.parent
ENUMS = KIT / "reference" / "A-taxonomy-enums.md"
REGISTRY = KIT / "reference" / "archetype-registry.txt"

# The whole schema. There are no optional keys: the input file is five fields
# and anything beyond them is structure it is not allowed to have.
REQUIRED = ("category", "domain", "pattern", "archetype", "idea")

IDEA_MIN, IDEA_MAX = 10, 80
ARCHETYPE_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+){2}$")


# ------------------------------------------------------------------ enum load

def _cells(line):
    """Split one markdown table row into stripped cells."""
    return [c.strip() for c in line.strip().strip("|").split("|")]


def _tokens(cell):
    """Every `backticked` token in a cell, in order."""
    return re.findall(r"`([^`]+)`", cell)


def _section_rows(text, heading):
    """Body rows of every table under `## <heading>`, up to the next `## `."""
    pat = re.compile(r"^##\s+\d+\.\s+" + re.escape(heading) + r"\s*$", re.M)
    m = pat.search(text)
    if not m:
        raise SystemExit(f"[fatal] {ENUMS.name}: no section '## N. {heading}'")
    end = re.compile(r"^##\s", re.M).search(text, m.end())
    body = text[m.end(): end.start() if end else len(text)]

    rows, in_table = [], False
    for line in body.splitlines():
        s = line.strip()
        if not s.startswith("|"):
            in_table = False
            continue
        cells = _cells(s)
        if all(re.fullmatch(r":?-{3,}:?", c) for c in cells):
            in_table = True          # separator row: the header is above it
            continue
        if in_table:
            rows.append(cells)
    return rows


def load_enums():
    if not ENUMS.exists():
        raise SystemExit(f"[fatal] enum file missing: {ENUMS}")
    text = ENUMS.read_text(encoding="utf-8")

    categories = [t for r in _section_rows(text, "Category") for t in _tokens(r[0])[:1]]

    domains = {}
    for r in _section_rows(text, "Domain"):
        tok, cat = _tokens(r[0]), _tokens(r[1])
        if tok and cat:
            domains[tok[0]] = cat[0]

    patterns = {}
    for r in _section_rows(text, "Pattern"):
        tok = _tokens(r[0])
        if tok and len(r) > 1:
            legal = _tokens(r[1])
            # the gotcha table lives in the same section: its first column is a
            # domain token, so keep only rows whose column 2 lists categories.
            if legal and all(c in categories for c in legal):
                patterns[tok[0]] = legal

    for name, coll in (("category", categories), ("domain", domains),
                       ("pattern", patterns)):
        if not coll:
            raise SystemExit(f"[fatal] {ENUMS.name}: parsed 0 {name} members")
    return categories, domains, patterns


# ------------------------------------------------------------- taskorder load

def load_taskorder(path):
    """Flat key: value YAML, plus `>-` and `|` folded/literal blocks.

    Deliberately not PyYAML: a Task Order that needs a real YAML parser is a
    Task Order that has grown structure it is not allowed to have.
    """
    out, key, block, indent = {}, None, None, 0
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.rstrip()
        if block is not None:
            if line.strip() and (len(line) - len(line.lstrip())) >= indent:
                out[key].append(line.strip())
                continue
            out[key] = (" " if block == ">" else "\n").join(out[key]).strip()
            block, key = None, None
        s = line.strip()
        if not s or s.startswith("#"):
            continue
        m = re.match(r"^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$", line)
        if not m:
            continue
        key, val = m.group(1), m.group(2).strip()
        val = re.sub(r"\s+#.*$", "", val).strip()
        if val in (">", ">-", "|", "|-"):
            block, indent, out[key] = val[0], 2, []
            continue
        out[key] = val.strip("'\"")
        key = None
    if block is not None:
        out[key] = (" " if block == ">" else "\n").join(out[key]).strip()
    return out


# -------------------------------------------------------------------- reports

class Report:
    def __init__(self, path):
        self.path, self.findings = path, []
        # Registry ownership key: the project directory, so re-validating a
        # Task Order does not collide with its own registration.
        self.owner = path.resolve().parent.name

    def add(self, gate, msg):
        self.findings.append((gate, msg))

    def emit(self):
        print(f"taskorder_lint {self.path}")
        if not self.findings:
            print("  PASS  T1-T8")
            return 0
        for gate, msg in self.findings:
            print(f"  {gate}  {msg}")
        print(f"  FAIL  {len(self.findings)} finding(s)")
        return 1


def near(value, members, n=3):
    """Cheap nearest-member suggestion: shared tokens, then shared prefix."""
    if not value:
        return []
    want = set(re.split(r"[-_]", value))
    scored = sorted(
        members,
        key=lambda m: (-len(want & set(re.split(r"[-_]", m))), -_prefix(value, m)),
    )
    return [m for m in scored[:n] if want & set(re.split(r"[-_]", m)) or _prefix(value, m) > 2]


def _prefix(a, b):
    n = 0
    for x, y in zip(a, b):
        if x != y:
            break
        n += 1
    return n


# ---------------------------------------------------------------------- gates

def check_shape(raw, rep):
    """T8 - the file is five keys and nothing around them.

    A comment is the usual way structure creeps back in: first a header saying
    what the file is, then a note about a substitution, then a commented-out
    sixth key. The Task Order is read by a machine; the prose belongs in the PRD.
    """
    for i, line in enumerate(raw.splitlines(), 1):
        s = line.strip()
        if s.startswith("#"):
            rep.add("T8", f"line {i}: comment line - the file carries the five "
                          f"keys and nothing else")
        elif s.startswith("---") or s.startswith("..."):
            rep.add("T8", f"line {i}: document marker {s!r} - not needed, the "
                          f"file is one flat mapping")


def check(order, enums, rep, registry):
    categories, domains, patterns = enums

    # T1 -------------------------------------------------------------- shape
    for k in REQUIRED:
        if not order.get(k):
            rep.add("T1", f"missing required key: {k}")
    for k in order:
        if k not in REQUIRED:
            rep.add("T1", f"unknown key: {k} - a Task Order carries exactly "
                          f"{', '.join(REQUIRED)}")

    cat = order.get("category", "")
    dom = order.get("domain", "")
    pat = order.get("pattern", "")

    # T2 ----------------------------------------------------------- category
    if cat and cat not in categories:
        hint = ""
        if cat.replace("-", "_") in categories:
            hint = f" - did you mean `{cat.replace('-', '_')}` (category is snake_case)?"
        elif near(cat, categories):
            hint = f" - nearest: {', '.join(near(cat, categories))}"
        rep.add("T2", f"category `{cat}` is not a member. Legal: "
                      f"{', '.join(categories)}{hint}")

    # T3 ------------------------------------------------------------- domain
    if dom and dom not in domains:
        hint = f" - nearest: {', '.join(near(dom, domains))}" if near(dom, domains) else ""
        rep.add("T3", f"domain `{dom}` is not a member of the 36{hint}")
    elif dom and cat in categories and domains[dom] != cat:
        legal = sorted(d for d, c in domains.items() if c == cat)
        rep.add("T3", f"domain `{dom}` belongs to category `{domains[dom]}`, not "
                      f"`{cat}`. Domains legal for `{cat}`: {', '.join(legal)}")

    # T4 ------------------------------------------------------------ pattern
    if pat and pat not in patterns:
        hint = f" - nearest: {', '.join(near(pat, patterns))}" if near(pat, patterns) else ""
        rep.add("T4", f"pattern `{pat}` is not a member of the 15{hint}")
    elif pat and cat in categories and cat not in patterns[pat]:
        legal = sorted(p for p, cs in patterns.items() if cat in cs)
        rep.add("T4", f"pattern `{pat}` is not legal for category `{cat}` "
                      f"(legal for {', '.join(patterns[pat])}). Patterns legal "
                      f"for `{cat}`: {', '.join(legal)}")

    # T5 -------------------------------------------- enum-namespace gotcha
    if dom and dom not in domains and dom in patterns:
        rep.add("T5", f"`{dom}` is a pattern, not a domain - the domain and "
                      f"pattern values look transposed")
    if pat and pat not in patterns and pat in domains:
        rep.add("T5", f"`{pat}` is a domain, not a pattern - the domain and "
                      f"pattern values look transposed")

    # T6 ---------------------------------------------------------- archetype
    arch = order.get("archetype", "")
    if arch:
        if not ARCHETYPE_RE.match(arch):
            n = len([t for t in arch.split("-") if t])
            why = (f"{n} token(s), needs exactly 3" if n != 3
                   else "must be lowercase kebab-case, [a-z0-9] only")
            rep.add("T6", f"archetype `{arch}` is malformed: {why}")
        elif arch in registry and registry[arch] != rep.owner:
            rep.add("T6", f"archetype `{arch}` is already registered in "
                          f"{REGISTRY.name} to {registry[arch]} - archetypes "
                          f"are globally unique")

    # T7 --------------------------------------------------------------- idea
    idea = order.get("idea", "")
    if idea:
        n = len(idea.split())
        if not IDEA_MIN <= n <= IDEA_MAX:
            rep.add("T7", f"idea is {n} words, must be {IDEA_MIN}-{IDEA_MAX}")


def main():
    ap = argparse.ArgumentParser(
        description="Validate a <project>_input.yaml against "
                    "reference/A-taxonomy-enums.md")
    ap.add_argument("taskorder", nargs="?",
                    help="the <project>_input.yaml to validate; omit it with --list")
    ap.add_argument("--register", action="store_true",
                    help="on a clean pass, append the archetype to "
                         "reference/archetype-registry.txt")
    ap.add_argument("--list", metavar="LEVEL",
                    choices=("category", "domain", "pattern"),
                    help="print the legal members of one level and exit")
    args = ap.parse_args()

    enums = load_enums()
    categories, domains, patterns = enums

    if args.list:
        if args.list == "category":
            print("\n".join(categories))
        elif args.list == "domain":
            for d, c in domains.items():
                print(f"{d:28} {c}")
        else:
            for p, cs in patterns.items():
                print(f"{p:26} {', '.join(cs)}")
        return 0

    if not args.taskorder:
        ap.error("a <project>_input.yaml is required unless --list is given")
    path = Path(args.taskorder)
    if not path.exists():
        raise SystemExit(f"[fatal] no such file: {path}")

    registry = {}
    if REGISTRY.exists():
        for line in REGISTRY.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            parts = line.split(None, 1)
            registry[parts[0]] = parts[1].strip() if len(parts) > 1 else ""

    raw = path.read_text(encoding="utf-8")
    order = load_taskorder(path)
    rep = Report(path)
    check_shape(raw, rep)
    check(order, enums, rep, registry)
    rc = rep.emit()

    if rc == 0 and args.register:
        arch = order["archetype"]
        if registry.get(arch) == rep.owner:
            print(f"  `{arch}` already registered to {rep.owner}")
        else:
            with REGISTRY.open("a", encoding="utf-8") as fh:
                fh.write(f"{arch}\t{rep.owner}\n")
            print(f"  registered `{arch}` to {rep.owner} in {REGISTRY.name}")
    return rc


if __name__ == "__main__":
    sys.exit(main())
