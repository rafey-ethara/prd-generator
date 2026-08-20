# PRD generator

Turns any URL into two documents and a `deku-green-field` Task Order:

- **`PRD.md`** — zero-asset and buildable, every literal measured from the site.
- **`PRD_description.md`** — the same document in plain language, section for
  section, for the person who commissioned the build rather than the agent doing
  it. *"Colour swirls and smears under the cursor like paint stirred in water,
  settling slowly when you stop"* instead of *"fluid simulation, Three.js
  (TSL/WebGPU), custom GLSL"*.

Built for the heavy-aesthetic slice of the corpus, where the point of the task
is visual and motion fidelity.

## Install

```bash
pip install -r requirements.txt
playwright install chromium
```

## Run

```bash
python prdgen.py https://example.com          # stage 0  capture
python ledger.py output/example               # stage 1  evidence
# stages 2-6: hand output/example/ledger.md and capture/shots/ to the prd-authoring skill
python tools/taskorder_lint.py output/example/TaskOrder.yaml --register
python prd_lint.py output/example/PRD.md \
    --ledger output/example/ledger.json --deny output/example/deny.txt
python prd_lint.py output/example/PRD_description.md --mode description \
    --against output/example/PRD.md --deny output/example/deny.txt
```

Useful flags: `--project NAME` names the run (default: the site host), `--routes N`
caps route discovery, `--headed` shows the browser, `--breakpoints desktop` skips
the responsive matrix on a first pass.

## One folder per run

Every stage writes under `output/<project>/`, so a run is a single directory to
zip, diff or hand over:

```
output/example/
  capture/            raw/, shots/, src/, capture.json      stage 0
  ledger.json         machine-readable evidence             stage 1
  ledger.md           what the authoring skill reads        stage 1
  TaskOrder.yaml      validated against the closed enums    stage 2
  PRD.md              the buildable document                stages 3-5
  PRD_description.md  the plain-language companion          stage 6
  deny.txt            scrubbed tokens, for re-linting
  notes.md            substitutions, gaps, anything inferred
```

`--output-root` moves the parent directory; `--out` overrides where stage 0
writes the capture, and stage 1 accepts either the project directory or the
capture directory inside it.

## Why two documents

The PRD is written for an agent and is unreadable on purpose: `cubic-bezier(0.6,
0.01, 0.05, 1)` over `800ms`, icon geometry as coordinate tables, hover states as
computed-style diffs. Rounding any of it produces a different site.

The person paying for the build cannot check any of that, and the thing they
*can* check — does it feel right — is nowhere in the document. So the companion
says the same things in the only terms they can verify against a live page:
what moves, what triggers it, what it feels like. Same section numbers, so the
two are read side by side, and a three-column table carries the technical name
for anyone who wants to hand a row to a developer.

The gates enforce the split in both directions. The PRD may not invent a
literal; the companion may not use one.

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
| 0 · Capture | `prdgen.py` | `capture/raw/`, `capture/shots/`, `capture/src/` |
| 1 · Ledger | `ledger.py` | `ledger.json`, `ledger.md` |
| 2 · Classify | skill, gated by `tools/taskorder_lint.py` | `TaskOrder.yaml` |
| 3 · Outline | skill | locked section numbering |
| 4 · Sections | skill | `PRD.md` |
| 5 · Substitution | skill | the zero-asset recipes inside `PRD.md` |
| 6 · Describe | skill | `PRD_description.md` |
| 7 · Gate | `prd_lint.py` | pass/fail per gate, both documents |

## What capture actually collects

Most tools screenshot a page and stop. The visually expensive parts of a site
are not in a screenshot, so:

- **`document.getAnimations()`** — every running CSS animation, transition and
  WAAPI animation, with real `getTiming()` and `getKeyframes()`. Deterministic,
  native, and it means motion never has to be guessed.
- **Scroll-position diffing** — the page is sampled at nine scroll positions and
  computed styles are diffed across them. Any selector whose `transform`,
  `opacity`, `clip-path` or `mask-image` changes across frames is scroll-driven,
  and the ledger lists it as such. This is how a scrubbed timeline is discovered
  rather than inferred.
- **Custom-property tracking** — a `--progress` variable moving with scroll is
  the signature of a masked reveal. Captured per frame.
- **Hover diffing** — before/after computed styles on candidate elements,
  including `::before` and `::after`. These effects appear in no static capture
  and are usually half the perceived craft.
- **Inline SVG geometry** — every icon as `viewBox` plus primitive attributes,
  so the PRD can specify icons as coordinates instead of files.
- **Bundle string mining** — unlinked routes are common on showcase sites and
  crawling alone never finds them.
- **Root class states** — `is-loaded`, `has-menu-open`, `lenis-scrolling`. On
  sites that drive everything from classes on `<html>`, this is the state machine.

## Stack detection

Tiered, and every hit carries the string that produced it. No model recall — ask
an LLM what a site uses and it will confabulate a plausible stack.

| Tier | Source | Strength |
|---|---|---|
| 0 | Source maps | definitive |
| 1 | Licence banners `/*! … */` | definitive — minifiers preserve them |
| 2 | Version literals surviving minification | high |
| 3 | Runtime globals and version props | high |
| 4 | Headers and well-known paths | high |
| 5 | Markup fingerprints | high |
| 6 | Identifiers minifiers cannot rename | presence, not version |
| 7 | Deprecation strings carrying versions | brackets a range |

Tiers 0-3 are structural and live in `ledger.py`. Tiers 4-6 are declarative in
`stack_rules.yaml` — that file is where the creative-web stack lives (GSAP
plugins, three.js addons, Lenis, Locomotive, Barba, Taxi, OGL, Rive, Spline),
which generic detectors miss entirely. Extend it as sites are captured.

## The taxonomy

Every task is addressed by six levels — category, domain, pattern, archetype,
variant, profile — and the first three are closed enums held in
`reference/A-taxonomy-enums.md`: **3 categories, 36 domains, 15 patterns**. That
file is the single source of truth; the linter parses its tables, so editing a
table edits the linter.

A Task Order carries five of the six levels — `category`, `domain`, `pattern`,
`archetype`, `idea` — and nothing else. Variant and profile are resolved
downstream, and naming either one fails gate T1 as an unknown key; their enums
are kept in the enum file's appendix, outside the sections the linter parses.

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
| T5 | domain and pattern are not transposed — the enum-namespace gotcha |
| T6 | archetype is lowercase kebab, exactly 3 tokens, globally unique |
| T7 | idea is 10-80 words |

Findings carry the legal set and a nearest-member suggestion, because the
failure is almost always a site's own vocabulary leaking into a closed slot.

| Gate | Checks |
|---|---|
| P1 | numbered sections, no gaps, no duplicates |
| P2 | every `Section N.M` cross-reference resolves |
| P3 | no TBD / TODO / FIXME / lorem |
| P4 | no external URL, no referenced binary |
| P5 | no token from the deny list |
| P6 | sampled colours and easings exist in the ledger |

`--mode description` gates the companion instead. P3, P4 and P5 still apply —
a placeholder, an asset dependency and a brand leak are defects in any document
— and the fidelity gates are replaced:

| Gate | Checks |
|---|---|
| D1 | one companion section per PRD section, under the same number |
| D2 | no jargon, hex colour, easing, CSS unit or frame rate in prose |

D2 exempts table rows and fenced code. That is the design, not a loophole: the
companion's middle column is where `Three.js (TSL/WebGPU), custom GLSL` is
supposed to live, and its third column is where the reader is told they will see
paint stirred in water. Jargon in a sentence means the translation was skipped.

Two regions legitimately break P4 and P6 — the reference asset manifest, and the
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
- Auth-walled and bot-protected origins are out of reach.
- Canvas and WebGL content is captured as pixels and as bundle strings; the
  scene graph is only recoverable where the bundle keeps its identifiers.
- Route discovery is a crawl plus a string scan. Neither is exhaustive.
