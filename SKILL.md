---
name: prd-authoring
description: Author a zero-asset buildable PRD, a plain-language companion, and a Deku Task Order from a captured evidence ledger. Use after prdgen.py and ledger.py have run against a target URL, when the output must be a PRD an LLM can build the site from without any asset, a PRD_description.md a non-technical reader can follow, plus a Task Order for deku-green-field.
---

# PRD authoring from an evidence ledger

Stages 2 to 6 of the generator. Stages 0, 1 and 7 are code and have already run
or will run after you: `prdgen.py` captured the site, `ledger.py` froze the
evidence, `prd_lint.py` will gate what you write.

You are writing **two documents about one site**, and they are not drafts of
each other:

| Document | Reader | Job |
|---|---|---|
| `PRD.md` | the agent that builds the site | exact enough to rebuild from, every literal measured |
| `PRD_description.md` | the person who commissioned it | understandable with no technical background, same sections, same numbers |

The companion is not a summary and not an executive brief. It is the same
document told in plain language, section for section, so the two can be read
side by side.

Everything you write goes in the project directory the earlier stages used:
`output/<project>/`, beside `ledger.md`.

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
| `output/<project>/capture/shots/*.png` | The scroll matrix. **Look at these.** They are the only source for what the site actually looks like, and the only source for the companion's "what you would see" column. |
| `reference/A-taxonomy-enums.md` | Closed enums for the Task Order. |

Read the screenshots. A ledger tells you a selector has
`transform: translate3d(...)` at 25 % scroll; only the screenshot tells you the
product is a lit object floating in a dark void. Both belong in the PRD.

## Stage 2 - Task Order

Emit `TaskOrder.yaml`:

```yaml
category:  solo_founder            # closed enum
domain:    ecommerce-retail        # closed enum, must belong to the category
pattern:   content-publishing      # closed enum, legal for the category
archetype: product-launch-showcase # lowercase kebab, EXACTLY 3 tokens, globally unique
idea: "..."                        # 10-80 words
capability_flags: aesthetic        # optional, closed enum
```

Then validate, and do not proceed until it passes:

```
python <kit>/tools/taskorder_lint.py TaskOrder.yaml
```

Two failure modes seen in practice, both worth pre-empting:

- **Domain not in the enum.** A captured site suggests its own vocabulary
  (`consumer-hardware`); the enum will not have it. Pick the nearest legal
  member and record the substitution in your notes.
- **Domain/pattern transposition.** Some tokens are legal in both namespaces.
  The linter calls this the enum-namespace gotcha. Check which slot a token
  belongs in before assigning it.

Write the `idea` in the register of the enum examples: who the app is for, what
it contains, and what a visitor does — ending on the action that touches state,
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
N+2. Acceptance checklist
```

## Stage 4 - Section authoring

Author sections independently. Each gets the locked outline plus only the ledger
slices it needs. Rules that apply to every section:

**Numbers are quoted, never rounded.** `cubic-bezier(0.6, 0.01, 0.05, 1)`, not
"a custom ease". `4.2rem`, not "about 40px". A build spec that rounds is a build
spec that produces a different site.

**Icons are geometry.** Ledger section 9 holds every inline SVG as `viewBox`
plus primitive attributes. Transcribe them as tables of coordinates. Never write
"a hamburger icon" — write the six circles and their centres.

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

### The stack split - hard rule

Every statement about technology goes in exactly one of two registers, and the
PRD must label which:

- **Capability requirement — normative.** What the build must do. "Must scrub a
  timeline against scroll position." "Must hold 60 fps while rendering a 3D
  scene." "Must animate a size change without layout thrash." Stack-agnostic.
- **Observed implementation — informational.** What the captured site used, with
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
similar character count — line lengths were art-directed around the original —
and list every substitution in the section 0 token table.

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
| 3D model (GLB/GLTF) | Compose from primitives — `RoundedBoxGeometry`, `CapsuleGeometry`, lathe/sphere — and **keep the original object names** so the rest of the application code works unmodified. Supply animation as a keyframe table at the captured scroll stops, marked as inferred. |
| Matcap / environment texture | Canvas generator: radial gradient, bright sky half, dark ground half, soft horizon, one small hot specular. Spend effort here — it is the substitute that most affects the look. |
| Audio | Web Audio recipes. Ambient beds as detuned oscillators through a filter with a slow LFO; UI cues as short enveloped blips with a stated waveform, frequency sweep and duration. |
| Photographic / response media | Canvas-generated gradient placeholders keyed by a seed, using palette colours from ledger section 2. |
| Icon fonts | Already solved — transcribe as SVG geometry (Stage 4). |
| Web fonts | Name the family and its licence. Naming a Google Font is not an asset dependency. Give a normative fallback stack. |

State the limits honestly. Animation curves baked inside a GLB cannot be
recovered from source; what you emit is a keyframe contract inferred from the
scroll screenshots, and it must say so.

## Stage 6 - The plain-language companion

Emit `PRD_description.md`. Same site, same sections, same numbers - told to
someone who has never opened a code editor and never will.

The reader you are writing for can picture anything you describe physically and
nothing you describe technically. They know what paint in water looks like. They
do not know what a shader is, and telling them it is "a small program that runs
on the graphics card" does not help, because the next sentence still needs them
to imagine the result. So describe the result.

### The move

Every technical statement in the PRD becomes a sensory one here. This is the
shape, and the third column is the whole point:

| What it is | Technical name | What you would actually see |
|---|---|---|
| Interactive fluid simulation | Three.js (TSL/WebGPU), custom GLSL | Colour swirls and smears under the cursor like paint stirred in water, settling slowly when you stop. |
| Scroll-scrubbed hero reveal | GSAP ScrollTrigger, `--progress` custom property | The headline is already there, hidden behind a wipe that follows your scroll exactly - scroll up and it un-reveals, so it feels attached to your finger rather than played at you. |
| Cursor-follow easing | lerp at 0.08 per frame | The dot chasing your pointer never quite catches up, arriving a beat late, which is what makes it feel weighty instead of stuck to the mouse. |

Column two is the escape valve. Names, versions, curves and units are allowed
there and nowhere else - gate D2 fails jargon that appears in prose. That split
is deliberate: a reader who wants to hand the row to a developer can, and a
reader who does not can read column three and skip the rest.

### Rules

**Translate, do not drop.** Gate D1 requires one companion section per PRD
section, under the same number. The dull ones matter most, because they are the
ones the reader would otherwise never ask about: accessibility becomes "someone
using only a keyboard, or listening rather than looking, gets the same site";
performance becomes "it stays smooth on a three-year-old laptop, and the first
thing you see arrives before you think about waiting"; build order becomes "what
gets built first, and what you can look at after week one".

**Comparisons, not measurements.** The PRD says `800ms`; the companion says
"about as long as a slow blink". The PRD says `#0f172a`; the companion says
"near-black with a bruise of blue in it". `4.2rem` is "roughly the height of a
thumbnail". Never both - a number in the companion is a D2 finding, and the
reader who wants the number has the PRD open next to it.

**Say what changes, and what triggers it.** "As you scroll past the second
photo, the whole page cools from warm grey to blue" is the same information as a
scroll-scrubbed colour interpolation, and it is checkable by a human looking at
the built site. That is the test for every sentence here: could the reader hold
this document next to the finished page and tell whether it is right?

**Keep the honesty.** Where the PRD marks something inferred rather than
measured, say so plainly - "we could not recover the original animation, so this
is our best reconstruction from the screenshots; expect to adjust it". A reader
who cannot read the ledger has no other way to know which parts are guesses.

**Length is a fifth of the PRD, not a tenth and not half.** A PRD section that
is forty lines of icon coordinates is two sentences here: what the icons are and
what they feel like. A PRD section that is one line about a colour token may
need a paragraph, because colour is what the reader actually experiences.

### Section 0 of the companion

Opens with the three things a non-technical reader needs before anything else:
what this document is and what its sibling is for, that every `<BRAND>`-style
angle-bracket name is a blank to fill in with their own, and one paragraph on
what the site is in a sentence a friend would understand.

## Stage 7 - Gate it yourself before handing over

Both documents, both modes, from the project directory:

```
python prd_lint.py output/<project>/PRD.md \
    --ledger output/<project>/ledger.json --deny output/<project>/deny.txt
python prd_lint.py output/<project>/PRD_description.md --mode description \
    --against output/<project>/PRD.md --deny output/<project>/deny.txt
```

Description mode drops the fidelity gates - the companion has no literals to
check - and adds two:

| Gate | Checks |
|---|---|
| D1 | one companion section per PRD section, same numbers |
| D2 | no jargon, hex colour, easing, unit or frame rate in prose |

D2 exempts table rows and fenced code, which is where the technical names
belong. If a term genuinely has to appear in a sentence, the same narrow escape
applies as everywhere else: `<!-- lint:allow D2 -->`.

Fix every finding. The gates exist because each one corresponds to a defect that
has already shipped: dangling cross-references, sections promised and never
written, asset URLs surviving the scrub, brand names surviving the scrub,
invented colour values.

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

## Output

Everything lands in the project directory the capture created:

```
output/<project>/
  capture/           stage 0, raw evidence and screenshots
  ledger.json        stage 1
  ledger.md          stage 1
  TaskOrder.yaml     validated against the closed enums
  PRD.md             the buildable document
  PRD_description.md the same document in plain language, same section numbers
  deny.txt           tokens scrubbed, one per line, for re-linting
  notes.md           substitutions made, evidence gaps, anything marked inferred
```

`deny.txt` is shared: a brand name that leaks into the companion is exactly as
much of a leak as one in the PRD, so P5 runs against both.

`notes.md` is not optional. It is where a reviewer looks to find out what you
could not measure — and on a heavy-aesthetic task that list is the honest
boundary of the spec.
