# PRD generator

Turns any URL into four files:

- **`<project>_prd.md`** - zero-asset and buildable, every literal measured from
  the site, and every section also written in plain language for the person who
  commissioned the build. *"Colour swirls and smears under the cursor like paint
  stirred in water, settling slowly when you stop"* three lines under *"fluid
  simulation, Three.js (TSL/WebGPU), custom GLSL"*. This is the one that gets
  authored.
- **`<project>_prd_technical.md`** - derived: the same spec with the
  plain-language blocks stripped, for whoever is building.
- **`<project>_prd_plain.md`** - derived: the plain language alone, under the
  same headings and the same section numbers, for whoever is paying.
- **`<project>_input.yaml`** - the five-key Task Order `deku-green-field` is
  dispatched from.

Built for the heavy-aesthetic slice of the corpus, where the point of the task
is visual and motion fidelity.

## Install

```bash
pip install -r requirements.txt
playwright install chromium
```

## Run

The short version, for anyone handed this kit: give an agent with the
`prd-authoring` skill a URL. It runs the code stages, authors, gates and
finalizes, and hands back the two files.

The long version, one stage at a time:

```bash
python prdgen.py https://example.com          # stage 0  capture
python ledger.py output/example               # stage 1  evidence
# stages 2-6: hand output/example/ledger.md and capture/shots/ to the prd-authoring skill
python tools/taskorder_lint.py output/example/example_input.yaml --register
python prd_lint.py output/example/example_prd.md \
    --ledger output/example/ledger.json --deny output/example/deny.txt
python tools/split_prd.py output/example/example_prd.md
python tools/finalize.py output/example --apply
```

Useful flags: `--project NAME` names the run (default: the site host), `--routes N`
caps route discovery, `--headed` shows the browser, `--breakpoints desktop` skips
the responsive matrix on a first pass.

## When a site is behind a bot check

Managed challenges are the one failure that used to look like success: the
capture completed, 137 responses and 27 screenshots of "Just a moment...", and
the ledger came back with zero colours and a copy deck reading "Performing
security verification". Stage 0 and stage 1 both refuse that now.

What stage 0 does instead is hand the check to a person:

```bash
python prdgen.py https://example.com
# [blocked] Cloudflare challenge (matched 'just a moment...')
# [blocked] reopening the browser visibly so it can be cleared by hand
# [handoff] a window is open on the site. Clear the check in it.
# [handoff] cleared after 9s, capturing
```

The browser profile lives at `output/.profile` and is reused, so **a site
cleared by hand once stays cleared for later runs**, including headless ones.
That is what keeps "give it a URL" true for a teammate who hits a challenged
site twice.

If the check will not clear for a fresh profile at all, attach to a browser
somebody is already driving. The clearance is bound to that browser, so this is
the strongest option:

```bash
chrome --remote-debugging-port=9222      # load the site, clear the check, leave it open
python prdgen.py https://example.com --cdp http://localhost:9222
```

`--no-handoff` fails immediately instead of opening a window, for unattended
runs. `--handoff-timeout SECONDS` changes the three-minute wait.

Nothing here tries to pass a challenge programmatically, and nothing should: the
fallback is a person clearing it in a real window on a site they are allowed to
view. If nobody can, capture a comparable site and record the substitution in
the PRD. `ledger.py --force` will build a ledger from a blocked capture, for
looking at; it is never a basis for authoring.

## One folder per run, four files at the end

Every stage writes under `output/<project>/`, so a run is a single directory to
zip, diff or hand over:

```
output/example/
  capture/            raw/, shots/, src/, capture.json      stage 0
  ledger.json         machine-readable evidence             stage 1
  ledger.md           what the authoring skill reads        stage 1
  example_input.yaml  validated against the closed enums    stage 2
  example_prd.md      the authored document                 stages 3-6
  deny.txt            scrubbed tokens, for re-linting
```

Stage 7b derives the two single-register files, and stage 8 deletes everything
that is not a deliverable:

```
output/example/
  example_prd.md              authored, both registers
  example_prd_technical.md    derived, spec only
  example_prd_plain.md        derived, plain language only
  example_input.yaml
```

The capture bundle, both ledgers and the deny list are scaffolding for stages 0
to 7. Anything from them worth keeping belongs in the PRD, which is why the
document carries a section for evidence gaps and substitutions. Run
`tools/finalize.py` last: deleting `ledger.json` and `deny.txt` is what makes
gates P5 and P6 unrunnable afterwards.

`--output-root` moves the parent directory; `--out` overrides where stage 0
writes the capture, and stage 1 accepts either the project directory or the
capture directory inside it.

## Why one document with two registers

The spec is written for an agent and is unreadable on purpose: `cubic-bezier(0.6,
0.01, 0.05, 1)` over `800ms`, icon geometry as coordinate tables, hover states as
computed-style diffs. Rounding any of it produces a different site.

The person paying for the build cannot check any of that, and the thing they
*can* check, does it feel right, is nowhere in those numbers. So every section
ends with a blockquote that says the same thing in the only terms they can
verify against a live page: what moves, what triggers it, what it feels like.

```markdown
> **In plain language.** The headline is already there, hidden behind a wipe
> that follows your scroll exactly. Scroll up and it un-reveals, so it feels
> attached to your finger rather than played at you.
```

This used to be a second hand-written document, `PRD_description.md`, and the
two drifted. Authoring one file fixes that: the explanation sits against the
mechanism it explains, three lines away, so it cannot go stale and cannot be
skipped in a hurry. A three-column table inside the block carries the technical
name for anyone who wants to hand a row to a developer.

Readers who want one register still get one. `tools/split_prd.py` projects
`<project>_prd_technical.md` and `<project>_prd_plain.md` out of the authored
file after the gates pass, under the same headings and the same numbers. They
are generated, never edited, and each says so in its header, so the drift that
made two documents a problem cannot come back: regenerating is one command.

The gates enforce the split in both directions. The spec may not invent a
literal; the block may not use one.

## The architecture, and why

One boundary carries the whole design:

**Extraction is deterministic code. Authoring is an LLM that may only reference
the ledger.**

If a model is allowed to supply a hex value or a duration, the artifact stops
being a build spec and becomes a plausible essay about a website. So everything
measurable is measured by a parser, written to `ledger.json` with provenance,
and gate P6 fails the PRD on any literal that is not in it.

That constraint is what makes the output worth building from.

## Stages

| Stage | Owner | Artifact |
|---|---|---|
| 0 - Capture | `prdgen.py` | `capture/raw/`, `capture/shots/`, `capture/src/` |
| 0b - Bot check | `challenge.py`, in both code stages | refusal plus a human handoff, never an interstitial |
| 1 - Ledger | `ledger.py` | `ledger.json`, `ledger.md` |
| 2 - Classify | skill, gated by `tools/taskorder_lint.py` | `<project>_input.yaml` |
| 3 - Outline | skill | locked section numbering |
| 4 - Sections | skill | `<project>_prd.md` |
| 5 - Substitution | skill | the zero-asset recipes inside the PRD |
| 6 - Plain language | skill | the "In plain language" block in every section |
| 7 - Gate | `prd_lint.py` | pass/fail per gate |
| 7b - Split | `tools/split_prd.py` | `<project>_prd_technical.md`, `<project>_prd_plain.md` |
| 8 - Finalize | `tools/finalize.py` | the four files that ship |

## What capture actually collects

Most tools screenshot a page and stop. The visually expensive parts of a site
are not in a screenshot, so:

- **`document.getAnimations()`** - every running CSS animation, transition and
  WAAPI animation, with real `getTiming()` and `getKeyframes()`. Deterministic,
  native, and it means motion never has to be guessed.
- **Scroll-position diffing** - the page is sampled at nine scroll positions and
  computed styles are diffed across them. Any selector whose `transform`,
  `opacity`, `clip-path` or `mask-image` changes across frames is scroll-driven,
  and the ledger lists it as such. This is how a scrubbed timeline is discovered
  rather than inferred.
- **Custom-property tracking** - a `--progress` variable moving with scroll is
  the signature of a masked reveal. Captured per frame.
- **Hover diffing** - before/after computed styles on candidate elements,
  including `::before` and `::after`. These effects appear in no static capture
  and are usually half the perceived craft.
- **Inline SVG geometry** - every icon as `viewBox` plus primitive attributes,
  so the PRD can specify icons as coordinates instead of files.
- **Bundle string mining** - unlinked routes are common on showcase sites and
  crawling alone never finds them.
- **Root class states** - `is-loaded`, `has-menu-open`, `lenis-scrolling`. On
  sites that drive everything from classes on `<html>`, this is the state machine.

## Stack detection

Tiered, and every hit carries the string that produced it. No model recall: ask
an LLM what a site uses and it will confabulate a plausible stack.

| Tier | Source | Strength |
|---|---|---|
| 0 | Source maps | definitive |
| 1 | Licence banners `/*! ... */` | definitive, minifiers preserve them |
| 2 | Version literals surviving minification | high |
| 3 | Runtime globals and version props | high |
| 4 | Headers and well-known paths | high |
| 5 | Markup fingerprints | high |
| 6 | Identifiers minifiers cannot rename | presence, not version |
| 7 | Deprecation strings carrying versions | brackets a range |

Tiers 0-3 are structural and live in `ledger.py`. Tiers 4-6 are declarative in
`stack_rules.yaml`, which is where the creative-web stack lives (GSAP plugins,
three.js addons, Lenis, Locomotive, Barba, Taxi, OGL, Rive, Spline) and which
generic detectors miss entirely. Extend it as sites are captured.

## The taxonomy

Every task is addressed by six levels: category, domain, pattern, archetype,
variant, profile. The first three are closed enums held in
`reference/A-taxonomy-enums.md`: **3 categories, 36 domains, 15 patterns**. That
file is the single source of truth; the linter parses its tables, so editing a
table edits the linter.

The input file carries five of the six levels, `category`, `domain`, `pattern`,
`archetype`, `idea`, and nothing else, not even a comment. Variant and profile
are resolved downstream, and naming either one fails gate T1 as an unknown key;
their enums are kept in the appendix of the enum file, outside the sections the
linter parses.

The three categories, their characters and their corpus shares are measured
values from the programme deck. The member names below them are authored, and
the enum file says which is which.

```
python tools/taskorder_lint.py --list domain    # 36 tokens, each with its category
python tools/taskorder_lint.py --list pattern   # 15 tokens, each with its legal categories
```

Archetypes are not an enum but a registry: lowercase kebab, exactly three
tokens, globally unique, checked against `reference/archetype-registry.txt` and
appended on a clean `--register` pass.

## Gates

`prd_lint.py` and `tools/taskorder_lint.py` are standard library only, matching
the kit's discipline.

`tools/taskorder_lint.py` gates stage 2, before a line of the PRD is written:

| Gate | Checks |
|---|---|
| T1 | required keys present, no unknown keys |
| T2 | category is one of the 3 |
| T3 | domain is one of the 36, and belongs to the declared category |
| T4 | pattern is one of the 15, and is legal for the declared category |
| T5 | domain and pattern are not transposed, the enum-namespace gotcha |
| T6 | archetype is lowercase kebab, exactly 3 tokens, globally unique |
| T7 | idea is 10-80 words |
| T8 | no comments, no document markers, nothing but the five keys |

Findings carry the legal set and a nearest-member suggestion, because the
failure is almost always the vocabulary of a captured site leaking into a closed
slot.

`prd_lint.py` gates the one document, in both of its registers:

| Gate | Checks |
|---|---|
| P1 | numbered sections, no gaps, no duplicates |
| P2 | every `Section N.M` cross-reference resolves |
| P3 | no TBD / TODO / FIXME / lorem |
| P4 | no external URL, no referenced binary |
| P5 | no token from the deny list |
| P6 | sampled colours and easings exist in the ledger |
| P7 | no en dash, em dash, figure dash or horizontal bar |
| D1 | every section carries an "In plain language" block |
| D2 | no jargon, hex colour, easing, CSS unit or frame rate inside those blocks |

D1 and D2 read the blockquotes; P1 to P6 read everything. D2 exempts table rows
and fenced code even inside a block. That is the design, not a loophole: the
middle column of a three-column table is where `Three.js (TSL/WebGPU), custom
GLSL` is supposed to live, and its third column is where the reader is told they
will see paint stirred in water. Jargon in a sentence inside a block means the
translation was skipped.

P7 exists because the document is grepped, diffed and pasted into build tooling
as plain text, and a typographic dash pasted into a copy deck ships into the
site.

Two regions legitimately break P4 and P6: the reference asset manifest, and the
substitution guide whose values are proposed rather than measured. Wrap those,
and only those:

```markdown
<!-- lint:allow P4,P6 -->
...
<!-- lint:end -->
```

`--skip` disables a gate document-wide and should never be used; the marker
disables one gate across a few lines and is greppable in review.

## Limits

- Animation curves baked inside a GLB cannot be recovered from source. The PRD
  emits a keyframe contract inferred from the scroll screenshots and says so.
- Auth-walled origins are out of reach. Bot-protected ones are reachable only
  by having a person clear the challenge in a visible window, once per profile.
- Canvas and WebGL content is captured as pixels and as bundle strings; the
  scene graph is only recoverable where the bundle keeps its identifiers.
- Route discovery is a crawl plus a string scan. Neither is exhaustive.
- The hover pass compares a narrow set of properties on a narrow set of
  candidates. On a site whose hover work is transform-based it can come back
  almost empty, and the PRD then reconstructs those interactions from
  duplicate-glyph shadows and declared transitions instead of observing them.
  Worth checking the candidate selection in `prdgen.py` before an
  aesthetic-heavy capture.
- Stage 8 is destructive by design. Nothing outside the two files survives it,
  so re-running the capture is the only way back to the ledger.
