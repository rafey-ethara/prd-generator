#!/usr/bin/env python3
"""Stage 7b - derive the technical and plain-language files from the PRD.

    python tools/split_prd.py output/uplink/uplink_prd.md

Writes, beside it:

    <project>_prd_technical.md   the spec with every plain-language block removed
    <project>_prd_plain.md       only the plain-language blocks, under the same
                                 headings and the same numbers

Both are projections, not documents. Nobody authors them and nobody edits them:
the model writes one file, carrying the mechanism and its explanation in the
same section, the gates check that one file, and this splits it. That ordering
is the whole point. Two hand-written documents drift the moment one is edited,
which is why they were merged in the first place; two derived ones cannot,
because regenerating is a single command and the header of each says so.

Section numbering is identical across all three, so a cross-reference written in
one resolves in the others.

Standard library only, matching the rest of the kit.
"""
import argparse
import re
import sys
import textwrap
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from prd_lint import RE_FENCE, RE_H2, RE_PLAIN_OPEN, RE_QUOTE  # noqa: E402

RE_MARKER = re.compile(r"^\s*\*\*In plain language\.?\*\*\s*")
RE_SENTENCE = re.compile(r"(?<=[.!?])\s+")

TECH_NOTE = (
    "> Derived file. The source of truth is `{src}`, which carries this same\n"
    "> specification with a plain-language block in every section. This copy has\n"
    "> those blocks removed, for a reader who only wants the build. Section\n"
    "> numbers are identical in all three files. Regenerate with\n"
    "> `python tools/split_prd.py {src}` rather than editing here.\n"
)

PLAIN_HEAD = (
    "# {title}\n\n"
    "This is the whole build described in plain language: what the site does,\n"
    "what moves, what makes it move, and what it should feel like. There are no\n"
    "measurements in it on purpose. Every section here has a twin with the same\n"
    "number in `{tech}`, which carries the exact colours, timings and coordinates\n"
    "for whoever builds it.\n\n"
    "Anything written in angle brackets, like `<BRAND>`, is a blank to fill in\n"
    "with your own.\n\n"
    "> Derived file. The source of truth is `{src}`. Regenerate with\n"
    "> `python tools/split_prd.py {src}` rather than editing here.\n"
)


def classify(text):
    """(preamble, [(number, heading line, spec lines, plain lines)]).

    A plain-language block is a blockquote opening with the fixed marker and
    running to the first line that is neither quoted nor blank, which is exactly
    what gate D1 looks for. Everything else is spec.
    """
    pre, sections = [], []
    cur = None
    in_fence = in_plain = False

    for line in text.splitlines():
        if RE_FENCE.match(line):
            in_fence = not in_fence
        m = None if in_fence else RE_H2.match(line)
        if m:
            cur = {"n": int(m.group(1)), "head": line, "spec": [], "plain": []}
            sections.append(cur)
            in_plain = False
            continue
        if cur is None:
            pre.append(line)
            continue
        if not in_fence:
            if RE_PLAIN_OPEN.match(line):
                in_plain = True
            elif in_plain and not RE_QUOTE.match(line) and line.strip():
                in_plain = False
        if in_plain:
            body = RE_QUOTE.sub("", line, count=1)
            cur["plain"].append(RE_MARKER.sub("", body, count=1))
        else:
            cur["spec"].append(line)
    return pre, sections


def drop_plain_mentions(lines):
    """Preamble sentences that describe the plain-language blocks.

    The combined document opens by saying every section is also written in
    plain language. In the technical projection that sentence is false, and a
    deliverable that misdescribes itself in its first paragraph is worth the few
    lines it costs to fix.
    """
    out, para = [], []

    def flush():
        if not para:
            return
        kept = [s for s in RE_SENTENCE.split(" ".join(para))
                if "plain language" not in s.lower()]
        if kept:
            out.extend(textwrap.fill(" ".join(kept), width=78).splitlines())
        para.clear()

    for line in lines:
        if not line.strip() or line.startswith("#"):
            flush()
            out.append(line)
        else:
            para.append(line.strip())
    flush()
    return out


def trim(lines):
    lines = list(lines)
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and (not lines[-1].strip() or lines[-1].strip() == "---"):
        lines.pop()
    return lines


def doc_title(pre):
    for line in pre:
        if line.startswith("# "):
            return line[2:].strip()
    return "The build"


def main():
    ap = argparse.ArgumentParser(
        description="Derive <project>_prd_technical.md and <project>_prd_plain.md "
                    "from the authored PRD.")
    ap.add_argument("prd", help="the combined <project>_prd.md")
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args()

    src = Path(args.prd)
    if not src.is_file():
        sys.exit(f"[fatal] no such file: {src}")
    text = src.read_text(encoding="utf-8")

    stem = src.name[:-3] if src.name.endswith(".md") else src.name
    tech_path = src.with_name(f"{stem}_technical.md")
    plain_path = src.with_name(f"{stem}_plain.md")

    pre, sections = classify(text)
    if not sections:
        sys.exit(f"[fatal] {src.name} has no numbered '## N. Title' sections")

    missing = [s["n"] for s in sections if not trim(s["plain"])]
    if missing:
        print(f"[warn] no plain-language block in section(s) "
              f"{', '.join(str(n) for n in missing)}; those sections will be "
              f"empty in {plain_path.name}. Gate D1 should have caught this.",
              file=sys.stderr)

    # ---------------------------------------------------------------- technical
    out = trim(drop_plain_mentions(trim(pre)))
    out += ["", TECH_NOTE.format(src=src.name).rstrip(), ""]
    for s in sections:
        out += ["---", "", s["head"], ""] + trim(s["spec"]) + [""]
    tech_path.write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")

    # -------------------------------------------------------------------- plain
    title = doc_title(pre)
    title = title.replace("buildable product requirements", "in plain language")
    if title == doc_title(pre):
        title = f"{title}: in plain language"
    out = [PLAIN_HEAD.format(title=title, tech=tech_path.name, src=src.name).rstrip(), ""]
    for s in sections:
        out += ["---", "", s["head"], ""] + trim(s["plain"]) + [""]
    plain_path.write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")

    if not args.quiet:
        n = len(sections)
        print(f"split {src.name}  ({n} sections)")
        print(f"  {tech_path.name:<34} spec only")
        print(f"  {plain_path.name:<34} plain language only")


if __name__ == "__main__":
    sys.exit(main())
