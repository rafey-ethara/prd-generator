#!/usr/bin/env python3
"""Stage 8 - reduce a finished run to the two files that get handed over.

    python tools/finalize.py output/uplink            # show the plan
    python tools/finalize.py output/uplink --apply    # carry it out

A run leaves a working directory: the capture bundle, the ledger in two forms,
the deny list, the scratch notes. All of it is scaffolding for stages 0 to 7 and
none of it is the deliverable. What ships is four files, named after the project:

    output/<project>/
      <project>_prd.md            the authored document, mechanism and plain
                                  language in the same sections
      <project>_prd_technical.md  derived: the spec alone
      <project>_prd_plain.md      derived: the plain language alone
      <project>_input.yaml        the five-key Task Order for deku-green-field

The two derived files come from tools/split_prd.py, which runs after the gates
pass. If they are missing when this runs, it says so rather than quietly
shipping a partial set.

Everything else in the directory is deleted. Run this last, after prd_lint.py
and taskorder_lint.py have passed, because deleting ledger.json and deny.txt is
what makes gates P5 and P6 unrunnable afterwards.

Legacy names from earlier runs (PRD.md, TaskOrder.yaml) are renamed rather than
deleted, so an old project directory finalizes cleanly. PRD_description.md is
not renamed and not kept: its content belongs inside the PRD, folded into the
plain-language block of each section, and a stray copy alongside is a second
document to keep in sync.

Standard library only, matching the rest of the kit.
"""
import argparse
import shutil
import sys
from pathlib import Path

LEGACY_PRD = ("PRD.md", "prd.md")
LEGACY_ORDER = ("TaskOrder.yaml", "taskorder.yaml", "task_order.yaml")
MERGED_AWAY = ("PRD_description.md", "prd_description.md")


def resolve(proj):
    """(prd path, input path, project name) - accepting the legacy names."""
    name = proj.resolve().name
    prd = proj / f"{name}_prd.md"
    order = proj / f"{name}_input.yaml"

    renames = []
    if not prd.exists():
        for legacy in LEGACY_PRD:
            if (proj / legacy).exists():
                renames.append((proj / legacy, prd))
                break
    if not order.exists():
        for legacy in LEGACY_ORDER:
            if (proj / legacy).exists():
                renames.append((proj / legacy, order))
                break
    return prd, order, renames


def main():
    ap = argparse.ArgumentParser(
        description="Keep <project>_prd.md and <project>_input.yaml, delete the "
                    "rest of the run directory.")
    ap.add_argument("project", help="the output/<project> directory")
    ap.add_argument("--apply", action="store_true",
                    help="actually delete; without it the plan is printed only")
    args = ap.parse_args()

    proj = Path(args.project)
    if not proj.is_dir():
        sys.exit(f"[fatal] no such directory: {proj}")

    prd, order, renames = resolve(proj)
    planned = {src.name for src, _ in renames}

    missing = [p.name for p, kept in ((prd, True), (order, True))
               if not p.exists() and p.name not in
               {dst.name for _, dst in renames}]
    if missing:
        sys.exit(f"[fatal] {proj}: nothing to finalize, missing "
                 f"{', '.join(missing)} and no legacy file to rename")

    stem = prd.name[:-3] if prd.name.endswith(".md") else prd.name
    derived = {f"{stem}_technical.md", f"{stem}_plain.md"}
    absent = sorted(d for d in derived if not (proj / d).exists())
    if absent:
        print(f"[warn] {', '.join(absent)} missing - run "
              f"python tools/split_prd.py {prd} first", file=sys.stderr)
    keep = {prd.name, order.name} | derived
    doomed = sorted(c for c in proj.iterdir()
                    if c.name not in keep and c.name not in planned)

    print(f"finalize {proj}")
    for src, dst in renames:
        print(f"  rename  {src.name} -> {dst.name}")
    for c in doomed:
        note = ""
        if c.name in MERGED_AWAY:
            note = "  (its content belongs in the plain-language blocks)"
        print(f"  delete  {c.name}{'/' if c.is_dir() else ''}{note}")
    if not renames and not doomed:
        print("  already final")
        return 0

    if not args.apply:
        print()
        print("  dry run. Re-run with --apply to carry this out.")
        return 0

    for src, dst in renames:
        src.replace(dst)
    for c in doomed:
        shutil.rmtree(c) if c.is_dir() else c.unlink()

    left = sorted(p.name for p in proj.iterdir())
    print()
    print(f"  {proj} now holds: {', '.join(left)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
