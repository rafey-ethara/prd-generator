---
name: prd-authoring
description: Turn a URL into a zero-asset buildable PRD that carries the mechanism and its plain-language explanation in the same sections, plus the five-key input file for deku-green-field. Runs prdgen.py and ledger.py first if they have not run, then authors and gates. Use whenever someone gives a site to specify and the output must be a PRD an LLM can build from without any asset and a human can read without a technical background.
---

# PRD authoring from an evidence ledger

Stages 2 to 6 of the generator. Stages 0, 1, 7 and 8 are code: `prdgen.py`
captures the site, `ledger.py` freezes the evidence, `prd_lint.py` gates what you
write, `tools/split_prd.py` projects the single-register files out of what you
wrote, `tools/finalize.py` clears the run down to what ships. Run the code
stages yourself if they have not run already, so that a URL is the only thing
anyone has to supply.

Four files are handed over at the end of a run:

| File | What it is | Who writes it |
|---|---|---|
| `<project>_prd.md` | the build spec, exact enough to rebuild from, with every section also explained in plain language | you |
| `<project>_prd_technical.md` | the same spec with the plain-language blocks removed | derived |
| `<project>_prd_plain.md` | the plain-language blocks alone, under the same headings and numbers | derived |
| `<project>_input.yaml` | five keys, the Task Order `deku-green-field` is dispatched from | you |

`<project>` is the directory name the capture created. A run in
`output/uplink/` ships `uplink_prd.md`, `uplink_prd_technical.md`,
`uplink_prd_plain.md` and `uplink_input.yaml`.

**You author one document, not three.** Every section says what gets built, then
says what a visitor would see, and `tools/split_prd.py` projects the two
single-register files out of it after the gates pass. That ordering is the whole
point: three hand-written documents drift the moment one is edited, three
derived from one cannot. Never write the technical or plain file by hand, and
never edit one after it is generated.

## The one rule

**Every literal in the PRD must already exist in `ledger.md`.**

Not "should". `prd_lint.py` gate P6 samples every hex colour and easing curve in
your output and fails the run on anything absent from the ledger. If you need a
value the ledger does not have, the answer is to capture it, not to invent it.
Write "not captured" and move on.

You are narrating measured evidence. You are not recalling how sites like this
are usually built.

## Inputs

| File | What it gives you |
|---|---|
| `output/<project>/ledger.md` | The evidence. Read it whole before writing anything. |
| `output/<project>/ledger.json` | Same data, addressable when you need a specific slice. |
| `output/<project>/capture/shots/*.png` | The scroll matrix. **Look at these.** They are the only source for what the site actually looks like, and the only source for the "what you would see" half of every section. |
| `reference/A-taxonomy-enums.md` | Closed enums for the input file. |

Read the screenshots. A ledger tells you a selector has
`transform: translate3d(...)` at 25 % scroll; only the screenshot tells you the
product is a lit object floating in a dark void. Both belong in the PRD, and the
second one is what the plain-language block is made of.

## Stages 0 and 1 - run them yourself if they have not run

If the person asking gave you a URL rather than a project directory, run the two
code stages first. They take one command each:

```
python prdgen.py <url> --project <project>
python ledger.py output/<project>
```

Everything after that reads `output/<project>/`.

**If stage 0 stops on a bot check**, it will say so and will not write a
capture. That is the kit refusing to hand you an interstitial dressed as
evidence. What it does instead is open a browser window and wait up to three
minutes for a person to clear the check; the profile is persistent, so a site
cleared once stays cleared for later runs. Tell whoever is at the keyboard to
clear it in that window. If nobody is there, or it will not clear:

```
# a person starts Chrome, loads the site, clears the check, leaves it open
chrome --remote-debugging-port=9222
python prdgen.py <url> --cdp http://localhost:9222 --project <project>
```

If neither is possible, stop and say so. Do not author from a thin ledger and do
not reach for `ledger.py --force`: a PRD written from a blocked capture has to
invent every literal in it, which is the one thing this pipeline exists to
prevent. Offer to capture a comparable site instead, and record the substitution
in the evidence-gaps section.

## Stage 2 - the input file

The taxonomy is closed and lives in `reference/A-taxonomy-enums.md`: 3
categories, 36 domains, 15 patterns. Read it before you write anything, or print
one level:

```
python tools/taskorder_lint.py --list category   # 3
python tools/taskorder_lint.py --list domain     # 36, each with its category
python tools/taskorder_lint.py --list pattern    # 15, each with its legal categories
```

Emit `output/<project>/<project>_input.yaml`:

```yaml
category:  solo_founder
domain:    ecommerce-retail
pattern:   content-publishing
archetype: product-launch-showcase
idea: >-
  ...
```

Five keys, in that order, and nothing else. **No comments, no header, no
document markers.** The file is machine input, not a document: an explanation of
what it is, a note about which enum member you substituted, a commented-out
sixth key are all structure it is not allowed to have, and gates T1 and T8 fail
them. What the file is, and why you chose those members, belongs in the PRD.

The value constraints:

- `category` - closed enum, 3 members, the one level that is snake_case
- `domain` - closed enum, 36 members, must belong to the declared category
- `pattern` - closed enum, 15 members, must be legal for the declared category
- `archetype` - lowercase kebab, exactly 3 tokens, globally unique
- `idea` - 10 to 80 words

Variant and profile are levels of the taxonomy resolved downstream; their enums
are kept in the appendix of the enum file, outside the sections the linter
parses. Naming either one fails T1.

Then validate, and do not proceed until it passes:

```
python tools/taskorder_lint.py output/<project>/<project>_input.yaml --register
```

`--register` appends the archetype to `reference/archetype-registry.txt` on a
clean pass, which is what makes global uniqueness checkable. Re-validating your
own file stays green; a second project reusing the archetype fails T6.

| Gate | Checks |
|---|---|
| T1 | required keys present, no unknown keys |
| T2 | `category` is one of the 3 |
| T3 | `domain` is one of the 36, and belongs to the declared category |
| T4 | `pattern` is one of the 15, and is legal for the declared category |
| T5 | `domain` and `pattern` are not transposed |
| T6 | `archetype` is lowercase kebab, exactly 3 tokens, globally unique |
| T7 | `idea` is 10-80 words |
| T8 | no comments, no document markers, nothing but the five keys |

Four failure modes seen in practice, all worth pre-empting:

- **Domain not in the enum.** A captured site suggests its own vocabulary
  (`telecom-connectivity`); the enum will not have it. Pick the nearest legal
  member, which the linter suggests, and record the substitution in the
  evidence-gaps section of the PRD. A decentralized-wireless marketing site is
  `hardware-iot`, not a telecom vertical of its own.
- **Domain/pattern transposition.** The two namespaces are disjoint by
  construction, and the near-miss pairs are tabulated in the enum file under
  "The enum-namespace gotcha" (`newsletter-publishing` the domain vs
  `content-publishing` the pattern, and four more). Check which slot a token
  belongs in before assigning it.
- **Category written kebab.** `solo-founder` fails; category is the one level
  that is snake_case.
- **A helpful header comment.** It fails T8. The file carries values, not
  explanation.

Write the `idea` in the register of the enum examples: who the app is for, what
it contains, and what a visitor does, ending on the action that touches state,
because that is what becomes a graded workflow.

## Stage 3 - Outline, numbering locked

Before writing any prose, emit the full section list with final numbers.

**Numbering is frozen at this point and may not change.** Every cross-reference
you write later resolves against this list, and gate P2 rejects any reference to
a section that does not exist. Renumbering mid-authoring is the single most
common way this pipeline produces a broken document.

The spine below is the default. Add sections the ledger justifies; drop ones it
has no evidence for. Do not keep an empty section.

```
0.  How to use this document          (+ placeholder token table)
1.  Product overview
2.  Information architecture          (routes, including unlinked ones)
3.  Design system                     (scaling, tokens, colour, type, layout)
4.  Iconography                       (every icon as coordinates)
5.  Global chrome
6.  Motion language                   (easings, durations, named reveals)
7.  Scroll system                     (only if the ledger shows scrubbing)
8.  <the dominant technical surface>  (3D layer, map, editor, feed...)
9.  Route: <primary>
10. Route: <secondary>
...
N-6. Module/component architecture
N-5. Responsive behaviour
N-4. Accessibility
N-3. Performance
N-2. Backend and data contract
N-1. Build order
N.   Copy deck
N+1. Zero-asset substitution guide
N+2. Evidence gaps and substitutions
N+3. Acceptance checklist
```

Section 0 opens the document for both of its readers at once: what the file is,
that every angle-bracket name is a blank to fill in with their own, how the two
registers sit inside each section, and one paragraph saying what the site is in
a sentence a friend would understand. It does not describe a sibling document,
because there is not one.

The evidence-gaps section is not optional. It is where a reviewer finds out what
could not be measured, which enum members were substituted for the vocabulary of
the captured site, and which parts of the spec are reconstructions rather than
measurements. On a heavy-aesthetic task that list is the honest boundary of the
document.

## Stage 4 - Section authoring

Author sections independently. Each gets the locked outline plus only the ledger
slices it needs. Rules that apply to every section:

**Numbers are quoted, never rounded.** `cubic-bezier(0.6, 0.01, 0.05, 1)`, not
"a custom ease". `4.2rem`, not "about 40px". A build spec that rounds is a build
spec that produces a different site.

**Icons are geometry.** Ledger section 9 holds every inline SVG as `viewBox`
plus primitive attributes. Transcribe them as tables of coordinates. Never write
"a hamburger icon"; write the six circles and their centres.

**Effects are reproduced, not summarised.** Ledger section 6 is the catalogue of
what makes the site look expensive: gradients, shadows, filters,
backdrop-filters, blend modes, clip-paths, masks, 3D transforms. Each one that
appears more than once is a design-system decision and belongs in the PRD with
its exact value and the selectors carrying it.

**Motion gets its mechanism, not its vibe.** Ledger sections 5 and 7 tell you
whether an animation is a CSS keyframe, a declared transition, a WAAPI runtime
animation, or a scroll-scrubbed custom property. Say which. A reader who knows
`--progress` is driven from scroll position and consumed by a `mask-image`
gradient can rebuild the effect; a reader told "the headline elegantly reveals"
cannot.

**Hover states are a section, not a footnote.** Ledger section 8 is a
before/after computed-style diff, including pseudo-elements. These effects are
invisible in any static capture and are usually half the perceived craft.

**No en dashes and no em dashes.** Gate P7 fails the document on any dash in the
range U+2012 to U+2015. Use a hyphen, a comma, a colon or a new sentence. The
document is grepped, diffed and pasted into build tooling as plain text, and a
typographic dash pasted into a copy deck ships into the site.

### The stack split - hard rule

Every statement about technology goes in exactly one of two registers, and the
PRD must label which:

- **Capability requirement - normative.** What the build must do. "Must scrub a
  timeline against scroll position." "Must hold 60 fps while rendering a 3D
  scene." "Must animate a size change without layout thrash." Stack-agnostic.
- **Observed implementation - informational.** What the captured site used, with
  its ledger tier. "The reference used GSAP 3.12.7 + ScrollTrigger (tier 1,
  licence banner)." Evidence, never instruction.

This matters because `deku-green-field` draws the frontend itself. A PRD that
names GSAP as a requirement forces an override that should not be needed. A PRD
that states the capability lets the agent satisfy it in whatever the kit drew.

### Brand and host tokens

Substitute at authoring time, never as a cleanup pass:

| Real value | Token |
|---|---|
| Product or brand name | `<BRAND>`, and a chosen placeholder in literal copy |
| Studio or agency name | `<STUDIO>`, likewise |
| Site origin | `<SITE_ORIGIN>` |
| API host | `<APP_HOST>` |
| Asset CDN | `<ASSET_HOST>` |
| Analytics IDs, keys | `<GA_MEASUREMENT_ID>` etc. |

Where a token appears inside literal user-facing copy, choose a placeholder of
similar character count, because the line lengths were art-directed around the
originals, and list every substitution in the section 0 token table.

Also scrub identifiers derived from the brand: class prefixes, module names,
custom event names, asset filenames. Gate P5 checks the deny list; it does not
know about `.ae__btn` unless you tell it.

## Stage 5 - Zero-asset substitution

The PRD must build with no binary. For every asset class in ledger section 12,
give a procedural recipe in text. These five are proven; extend the list as new
classes appear.

| Asset class | Substitute |
|---|---|
| Tiling noise / grain texture | Inline SVG `feTurbulence` as a data URI. `baseFrequency` around 0.9 for fine grain at 300 px, `numOctaves: 4` for tonal variation, `feColorMatrix saturate 0` to kill the colour speckle. |
| 3D model (GLB/GLTF) | Compose from primitives (`RoundedBoxGeometry`, `CapsuleGeometry`, lathe, sphere) and **keep the original object names** so the rest of the application code works unmodified. Supply animation as a keyframe table at the captured scroll stops, marked as inferred. |
| Matcap / environment texture | Canvas generator: radial gradient, bright sky half, dark ground half, soft horizon, one small hot specular. Spend effort here; it is the substitute that most affects the look. |
| Audio | Web Audio recipes. Ambient beds as detuned oscillators through a filter with a slow LFO; UI cues as short enveloped blips with a stated waveform, frequency sweep and duration. |
| Photographic / response media | Canvas-generated gradient placeholders keyed by a seed, using palette colours from ledger section 2. |
| Icon fonts | Already solved: transcribe as SVG geometry (Stage 4). |
| Web fonts | Name the family and its licence. Naming a Google Font is not an asset dependency. Give a normative fallback stack. |

State the limits honestly. Animation curves baked inside a GLB cannot be
recovered from source; what you emit is a keyframe contract inferred from the
scroll screenshots, and it must say so.

## Stage 6 - The plain-language layer

Every numbered section carries one blockquote, after its spec, explaining the
same thing to someone who has never opened a code editor and never will:

```markdown
> **In plain language.** The headline is already there, hidden behind a wipe
> that follows your scroll exactly. Scroll up and it un-reveals, so it feels
> attached to your finger rather than played at you.
```

The marker is fixed. Gate D1 requires a block opening with
`> **In plain language.**` in every section, and gate D2 reads only what is
inside those blocks. Outside them you may name a library, quote a curve and
print a hex value, because that is what the building agent needs. Inside them
you may not.

The reader you are writing for can picture anything you describe physically and
nothing you describe technically. They know what paint in water looks like. They
do not know what a shader is, and telling them it is "a small program that runs
on the graphics card" does not help, because the next sentence still needs them
to imagine the result. So describe the result.

### The move

Every technical statement becomes a sensory one. Where a section carries several
of them, a three-column table earns its place, and the third column is the whole
point:

| What it is | Technical name | What you would actually see |
|---|---|---|
| Interactive fluid simulation | Three.js (TSL/WebGPU), custom GLSL | Colour swirls and smears under the cursor like paint stirred in water, settling slowly when you stop. |
| Scroll-scrubbed hero reveal | GSAP ScrollTrigger, `--progress` custom property | The headline is already there, hidden behind a wipe that follows your scroll exactly, so it feels attached to your finger rather than played at you. |
| Cursor-follow easing | lerp at 0.08 per frame | The dot chasing your pointer never quite catches up, arriving a beat late, which is what makes it feel weighty instead of stuck to the mouse. |

Column two is the escape valve. Names, versions, curves and units are allowed
there and nowhere else inside a block: D2 exempts table rows and fenced code,
and fails jargon in a sentence. That split is deliberate. A reader who wants to
hand the row to a developer can, and a reader who does not reads column three.

### Rules

**Translate, do not drop.** Every section gets a block, including the dull ones,
which matter most because they are the ones the reader would otherwise never ask
about. Accessibility becomes "someone using only a keyboard, or listening rather
than looking, gets the same site". Performance becomes "it stays smooth on a
three-year-old laptop, and the first thing you see arrives before you think
about waiting". Build order becomes "what gets built first, and what you can
look at after week one".

**Comparisons, not measurements.** The spec says `800ms`; the block says "about
as long as a slow blink". The spec says `#0f172a`; the block says "near-black
with a bruise of blue in it". `4.2rem` is "roughly the height of a thumbnail".
Never both inside the block. The number is three lines above it.

**Say what changes, and what triggers it.** "As you scroll past the second
photo, the whole page cools from warm grey to blue" is the same information as a
scroll-scrubbed colour interpolation, and it is checkable by a human looking at
the built site. That is the test for every sentence in a block: could the reader
hold this document next to the finished page and tell whether it is right?

**Keep the honesty.** Where the spec marks something inferred rather than
measured, the block says so plainly: "we could not recover the original
animation, so this is our best reconstruction from the screenshots; expect to
adjust it". A reader who cannot read the ledger has no other way to know which
parts are guesses.

**Length is a fifth of the section, not a tenth and not half.** A section that
is forty lines of icon coordinates gets two sentences: what the icons are and
what they feel like. A section that is one line about a colour token may need a
paragraph, because colour is what the reader actually experiences.

## Stage 7 - Gate it yourself before handing over

From the kit root:

```
python prd_lint.py output/<project>/<project>_prd.md \
    --ledger output/<project>/ledger.json --deny output/<project>/deny.txt
```

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
| D2 | no jargon, hex colour, easing, unit or frame rate inside those blocks |

Fix every finding. The gates exist because each one corresponds to a defect that
has already shipped: dangling cross-references, sections promised and never
written, asset URLs surviving the scrub, brand names surviving the scrub,
invented colour values, a spec only its author could read.

Two regions legitimately break the rules and get an explicit escape:

- the **reference asset manifest**, which names the binaries the PRD replaces
- the **substitution guide**, whose colours you proposed rather than measured

Wrap exactly those, and nothing else:

```markdown
<!-- lint:allow P4,P6 -->
| `noise-r.png` | linear | tiling grain, replaced in Section 22.1 |
<!-- lint:end -->
```

Never reach for `--skip`. Skipping disables a gate across the whole document;
the marker disables one gate across a handful of lines, and a reviewer can grep
for every place you used it.

`deny.txt` is a working file you maintain as you scrub: one token per line, so
P5 is re-runnable after every edit. It is deleted in stage 8 with the rest of
the scaffolding, so anything worth keeping from it belongs in the PRD.

## Stage 7b - Split

Once, after the gates are green:

```
python tools/split_prd.py output/<project>/<project>_prd.md
```

That writes `<project>_prd_technical.md` and `<project>_prd_plain.md` beside the
source. Both carry a header saying they are derived and how to regenerate them.
If a gate finding sends you back to the PRD, fix the PRD and run this again; do
not touch the derived files.

Two authoring habits make the plain file read well on its own, and both are
worth keeping in mind while writing the blocks in stage 6:

- **Never point with "above" or "below".** In the combined document the spec is
  three lines up; in the plain file it is not there at all. Write "the
  specification for this section", or name the section number.
- **Section 0's block introduces the whole set,** not just the file it sits in.
  Say that the build is described twice over, once exactly and once plainly,
  under the same section numbers.

## Stage 8 - Clear the run down to what ships

Only after both linters pass:

```
python tools/finalize.py output/<project>            # show the plan
python tools/finalize.py output/<project> --apply    # carry it out
```

That leaves exactly four files:

```
output/<project>/
  <project>_prd.md            the authored document, both registers
  <project>_prd_technical.md  derived: the spec alone
  <project>_prd_plain.md      derived: the plain language alone
  <project>_input.yaml        the five-key Task Order
```

The capture bundle, both ledgers, the deny list and any scratch notes are
deleted. They are the scaffolding of stages 0 to 7, not the deliverable. Run
this last, because deleting `ledger.json` and `deny.txt` is what makes P5 and P6
unrunnable afterwards.
