# <BRAND> buildable product requirements

Zero-asset build specification, authored from the evidence ledger produced by
stages 0 and 1 against a captured reference site. Every colour, easing curve,
duration, offset and icon coordinate below was measured. Nothing was recalled.
Every section also carries a plain-language block, marked **In plain
language.**, saying the same thing to a reader who will never open a code
editor.

---

## 0. How to use this document

### 0.1 What this is

A specification complete enough to rebuild the reference site without receiving
a single binary file. No image, video, font file, three-dimensional model, audio
file or vector-animation file ships with it. Section 22 gives a procedural
recipe for every asset class the reference used.

This file has two readers and carries a register for each. The specification is
written for the agent building the site and is exact enough to rebuild from. The
blockquote that closes every section is written for the person who commissioned
the build, in terms that can be checked against a live page rather than against
the ledger. Neither one is a summary of the other, and they cannot drift apart,
because they sit in the same section.

### 0.2 Normative versus informational

Every statement about technology sits in exactly one register, and this document
labels which:

- **Capability requirement - normative.** What the build must do, stated without
  naming a library. These are the requirements.
- **Observed implementation - informational.** What the captured reference used,
  with the ledger tier that established it. Evidence, never instruction. The
  build is free to satisfy the capability with whatever the kit already draws.

Where a block carries no label, it is normative.

### 0.3 Placeholder tokens

Angle-bracket names are blanks. Replace every occurrence before shipping.

| Token | Meaning | Literal placeholder used in copy |
|---|---|---|
| `<BRAND>` | product and network name | `Beacon` - 6 characters, matching the reference |
| `<TOKEN_TICKER>` | the network's token symbol | `$BCX` |
| `<STUDIO>` | studio that produced the build | `Northsound` |
| `<SITE_ORIGIN>` | public origin of the site | none |
| `<APP_HOST>` | origin of the separate coverage-map application | none |
| `<ASSET_HOST>` | origin the runtime scene configuration is fetched from | none |
| `<DISCORD_URL>` | community chat invite | none |
| `<SOCIAL_X_URL>` | short-form social profile | none |
| `<SOCIAL_LINKEDIN_URL>` | professional network profile | none |
| `<SOCIAL_VIDEO_URL>` | video channel | none |
| `<TELEGRAM_ES_URL>` | regional chat group, Spanish | none |
| `<TELEGRAM_LATAM_URL>` | regional chat group, Latin America | none |
| `<LITEPAPER_URL>` | the network's public paper | none |
| `<MEDIA_KIT_URL>` | brand asset download | none |
| `<REPO_URL>` | public source repository | none |
| `<NEWSLETTER_ENDPOINT>` | newsletter form target | none |
| `<CONTACT_ENDPOINT>` | enterprise contact form target | none |
| `<ARTICLE_SOURCE>` | article collection source | none |
| `<COVERAGE_MAP_URL>` | destination of the coverage-map link | none |

Further literal placeholders, chosen at similar character counts because the
reference line lengths were art-directed around the originals:

| Class | Placeholders used in the copy deck (Section 21) |
|---|---|
| Leadership names | `Lena Duarte`, `Tomas Ferreira`, `Nadia Sorensen`, `Ravi Menon` |
| Investors and partners | `Northgate Ventures`, `Continental Telecom`, `Summit Chain`, `Seedhouse`, `Blockforge`, `Delta Grid`, `Union Power`, `NextGen Radio`, `Wireless Standards Alliance`, `Mustard Lane`, `Frontier Ventures`, `Stratus Labs` |
| Press outlets | `The Ledger Post`, `Signal Weekly`, `Chainwire`, `Networked`, `Cryptobeat`, `Coinpaper` |

### 0.4 Reading the numbers

Numbers are quoted as measured and must not be rounded. `2.625em` is not "about
42 pixels"; `cubic-bezier(0.38, 0.005, 0.215, 1)` is not "a custom ease". The
reference's rendered type scale is fractional - `9.17593px`, `26.9543px`,
`39.1667px` - because its root sizing is viewport-derived (Section 3.1).
Reproducing the sizing rule reproduces the fractions; hard-coding the fractions
does not reproduce the rule.

### 0.5 What could not be measured

Section 22.8 lists the evidence gaps. Anything marked **inferred** is a
reconstruction from screenshots, not a measurement, and should be expected to
need adjustment.

> **In plain language.** Every section of this document is written twice. The specification comes first,
> for the machine that will build the site: long tables of coordinates, exact
> timings, exact colours. Every number in it was measured off the reference site
> by a program, not remembered by a person, and rounding any of them would produce
> a different site. Then comes a block like this one, written for you, saying the
> same things in terms you can check by looking at the finished page: what moves,
> what makes it move, and what it should feel like. You can read only the blocks
> and still know what you are getting.
>
> **Anything written in angle brackets is a blank.** `<BRAND>` is where your
> product's name goes. `<SITE_ORIGIN>` is where your web address goes. There are
> about twenty of them and they are all listed in the token table above. We have
> also used stand-in names, invented people, invented partner companies, invented
> publications, wherever the reference site used real ones. Those are placeholders
> too. They were chosen to be roughly the same length as the originals, because
> the layouts were designed around how long the real words are.
>
> **What the site is, in one sentence a friend would understand:** it is the shop
> window for a network where ordinary people share their home internet, get paid
> for it, and the sum of all that sharing becomes coverage that big companies can
> buy.
>
> One more thing worth knowing before you read on. A handful of things in this
> build could not be measured and had to be reconstructed from screenshots. Every
> one of them is listed in Section 22, and each is labelled. Expect those to need
> a round of adjustment once you can see them running.

---

## 1. Product overview

### 1.1 What the product is

A marketing and community site for a decentralized wireless connectivity
network. The network's proposition is that owners of ordinary routers share
their existing connection, are rewarded for it in the network's token, and that
the aggregate becomes carrier-grade coverage enterprises can buy.

The site's job is not to transact. It is to make an abstract infrastructure
argument feel physical - a lit globe, a coverage field, a hexagonal mesh that
reacts to scroll - and then to collect three actions: join the community chat,
pre-register a router, or open an enterprise conversation.

### 1.2 Audiences

| Audience | What they came for | Where the site serves them |
|---|---|---|
| Router owners | "What do I get for sharing my connection?" | Home coverage section, points programme, pre-registration |
| Enterprises | "Can this carry my traffic, and what does it save?" | Enterprise route, provider statistics, case studies |
| Community and token holders | Roadmap, governance, papers | Home roadmap, ecosystem roles, paper links |
| Press and partners | Proof, coverage, leadership | Media route, About route |

### 1.3 Primary actions

1. Join the community chat - repeated in the hero, the community section and the footer.
2. Pre-register a router - the coverage section's single call to action.
3. Open an enterprise conversation - the enterprise form and the footer.
4. Subscribe to the newsletter - global footer, present on every route.

### 1.4 Character

Dark by default and loud where it matters. The palette is two colours plus
neutrals: an electric blue that carries the brand, and a near-fluorescent green
used only for eyebrow chips and footer group headings. Type is a wide geometric
grotesque set very large - the display headings are set at `18.75em` against a
body of `1.125em`, a ratio of about sixteen to one. Every corner is either a
hexagon or a very large radius. Motion is continuous rather than incidental: the
page is smooth-scrolled, and a scroll-scrubbed timeline drives a full-screen
three-dimensional layer that sits behind the first third of the home route.

### 1.5 Success criteria

- The home route reads as one continuous scene from the loader through the
  community section, with no visible seam between the three-dimensional layer
  and the layout above it.
- Text reveals track scroll position rather than playing on a timer, so scrolling
  backwards un-reveals them.
- The site holds a smooth frame rate on a three-year-old laptop with the
  three-dimensional layer running (Section 18).
- Nothing in the build depends on a binary file (Section 22).

> **In plain language.** The site has one hard job: make something invisible feel physical.
>
> Nobody can see a wireless network. So the page gives you one to look at - a
> slowly turning globe with lit patches where the network reaches, and a honeycomb
> that comes rushing toward you as you scroll. By the time you have read four
> paragraphs you have watched the network being described and being drawn at the
> same time.
>
> Four kinds of visitor arrive, and each gets served in a different stretch of the
> page:
>
> | Who | What they want | Where they get it |
> |---|---|---|
> | Someone with a router at home | "What do I get for sharing?" | The coverage section, near the top |
> | A company | "Can this carry my traffic, and what does it save me?" | The enterprise page and the statistics |
> | Someone already in the community | "What's next, and when?" | The roadmap and the roles list |
> | A journalist or partner | Proof, and who is behind it | The media and about pages |
>
> The look is dark by default and loud where it matters. Two colours do all the
> work - an electric blue that carries the brand, and a fierce lime green that
> appears only on the small labels above each section heading. The green is rare
> on purpose. Used more, the page stops looking like infrastructure and starts
> looking like a party flyer.
>
> Type is the other loud decision. Two words on the home page - "Our mission" and
> "Our impact" - are set so large they run off both edges of the screen. Against
> body text, they are about sixteen times the size. That is not decoration; it is
> the page's punctuation.
>
> You will know the build is right when: the top third of the home page reads as
> one continuous scene with no visible seam between the moving background and the
> words on top of it; scrolling backwards visibly un-does the text reveals rather
> than replaying them; it stays smooth on a three-year-old laptop; and the whole
> thing ships without a single image file.

---

## 2. Information architecture

### 2.1 Routes

Six routes were reached by crawl. All six were also recovered from bundle
strings, so the crawl and the string scan agree and there are no unlinked routes
outstanding.

| Route | Title | Purpose |
|---|---|---|
| `/` | `<BRAND> - Decentralized Wireless Internet Connectivity` | The argument, end to end |
| `/about` | `About <BRAND> - Innovating Global Connectivity Through Decentralization` | Company, accomplishments, leadership |
| `/media` | `<BRAND> Media and Blog - Latest News & Insights on Decentralized Connectivity` | Article index, press, videos |
| `/enterprise` | `<BRAND> for Enterprise - Decentralized Connectivity Solutions` | Contact form, case studies |
| `/terms` | `<BRAND> - Terms and Conditions` | Long-form legal |
| `/privacy` | `<BRAND> - Privacy Policy` | Long-form legal |

Article detail pages exist as a page type (Section 2.3) and are reached from the
Media index; no individual article was captured, so Section 13.4 specifies the
template from the index card fields and marks it inferred.

### 2.2 Navigation model

The header exposes two dropdown groups and no top-level links:

- **Company** → About, Enterprise
- **Resources** → Media, Litepaper, Media Kit

At mobile the two groups collapse into a full-screen panel that also exposes a
third group, **Social** → Discord, X / Twitter, LinkedIn, YouTube (Section 5.4).

The footer is the fuller map, under three headings: Company (Home, About,
Enterprise), Resources (Blog, Case Studies, Media Kit, Litepaper), Connect
(Discord, X, LinkedIn, YouTube, Telegram ES, Telegram LATAM).

### 2.3 Page-type attribute

Every document carries a page identity on a root-level element, read at load
time to decide which entrance sequence runs after the loader hands over
(Section 6.7). Observed values: `home`, `about`, `blog`, `blog-article`.

**Capability requirement - normative.** The loader must dispatch a per-page
entrance sequence from a single declarative page identity, without the loader
knowing anything else about the page.

### 2.4 Scroll markers

The home route carries five invisible marker elements that the three-dimensional
layer reads to build its scroll progress values. They are layout anchors, not
content:

| Marker | Purpose |
|---|---|
| `hero` | start of the globe's first segment |
| `coverage` | end of segment one, start of the zoom segment |
| `coverage_zoom` | end of the zoom segment |
| `community_start` | start of the hexagon-field segment |
| `community_end` | end of the hexagon-field segment |

Progress between a pair is computed from the two elements' viewport-centre
positions, not from absolute document offsets, so it stays correct when content
above reflows. Section 7.2 gives the formula.

> **In plain language.** Six pages: home, about, media, enterprise, and two legal pages. Article pages
> exist behind the media index, though we could not capture one - see Section 13.
>
> The top bar is deliberately sparse: no links at all, just two words that open
> small panels. "Company" opens to About and Enterprise. "Resources" opens to
> Media, the paper, and the brand kit. On a phone both collapse into one
> full-screen panel that also adds the social links.
>
> The footer is the real map. Three columns under green headings, plus a
> newsletter box and the mark.
>
> Two invisible pieces of plumbing matter here:
>
> | What it is | Technical name | What it means for you |
> |---|---|---|
> | Each page announces its own identity | page-type data attribute | The loading animation knows which page it just finished covering, so each page can have its own entrance without the loader knowing anything about the page |
> | Five invisible markers down the home page | scroll marker elements | These are the pins the moving background measures itself against. They carry no words and are never seen. If content above them changes length, the background stays in step automatically |

---

## 3. Design system

### 3.1 Scaling

The entire system is expressed in `em` against a root size the reference scales
with the viewport. This is why the measured type scale is fractional. Do not
transcribe the pixel values; reproduce the rule.

**Capability requirement - normative.** Root font size must scale continuously
with viewport width between the breakpoints in Section 16.1, so that all
`em`-derived spacing, radii and type scale together. Every token below is
authored in `em` and must stay in `em`.

Three viewport widths were captured and are the reference points: `1440px`
desktop, `990px` tablet, `390px` mobile.

### 3.2 Colour tokens

Declared on the document root. This is the whole palette; anything not here is a
neutral inherited from the reset.

| Token | Value | Role |
|---|---|---|
| `--color--blue` | `#014ffe` | brand; buttons, links, section grounds, wire colour |
| `--color--green` | `#61ff00` | eyebrow chips and footer group headings only |
| `--color--black-2` | `#0b0919` | header ground, deep sections |
| `--color--black` | `black` | gradient stops, icon strokes |
| `--color--white` | `#f5f5f7` | body text on dark, light section grounds |
| `--color--lightgrey` | `#f5f5f7` | alias of the above |
| `--color--lightblue-solid` | `#e2ebff` | statistic cards, dropdown link colour |
| `--color--lightblue` | `#014ffe33` | brand blue at 20 %, used as a wash |

Two further values appear as gradient stops rather than tokens and belong to the
palette: `#012370`, the deep blue a section fades into, and the pale pair
`#adc6ff` / `#d8e4ff` used in the roadmap card sweep.

Most-used computed colours, in rank order, confirm the weighting: `#f5f5f7`
dominates by an order of magnitude, `#014ffe` is second, and `#61ff00` is
deliberately rare. Build to that ratio - the green must stay scarce or the page
stops reading as an infrastructure product.

Dropdown links resolve to `#e2ebff` at 60 % alpha and go fully opaque on hover
(Section 5.3).

### 3.3 Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display and headings | wide geometric grotesque | 700 | the reference used a licensed commercial face; Section 22.6 gives the substitution and a normative fallback stack |
| Body and interface | neutral grotesque | 300 and 500 | 500 for buttons, labels and small caps; 300 for long-form |
| Legal | neutral grotesque | inherited | bound to its own token so legal copy can be swapped independently |

Type scale tokens, all `em`:

| Token | Value | Applied to |
|---|---|---|
| `--text--h-display` | `18.75em` | the full-bleed display words on Home and About |
| `--text--h1` | `6.6875em` | hero headline |
| `--text--h2` | `2.9375em` | section headings |
| `--text--h4` | `2em` | card headings |
| `--text--h3` | `1.5em` | sub-headings |
| `--text--h5` | `1.5em` | sub-headings, alternate slot |
| `--text--h6` | `1em` | smallest heading |
| `--text--body-xlarge` | `1.875em` | lead paragraphs |
| `--text--body-large` | `1.5625em` | intro paragraphs |
| `--text--body-reg` | `1.125em` | body |
| `--text--eyebrow` | `1.25em` | eyebrow chips |
| `--text--button` | `1.25em` | button labels |
| `--text--label` | `0.875em` | phase labels, pills |
| `--text--xsmall` | `0.8em` | form errors, fine print |

Rendered line heights cluster at 1.2 for headings and between 1.25 and 1.6 for
body. The display words are set solid - line height equal to font size - which
is what lets them bleed off both edges of the viewport.

### 3.4 Spacing and radii

| Spacing token | Value | Gap token | Value |
|---|---|---|---|
| `--padding--container` | `2.625em` | `--gap--mini` | `0.6875em` |
| `--padding--large` | `6.25em` | `--gap--small` | `1.25em` |
| `--padding--xlarge` | `5em` | `--gap--med` | `2.3125em` |
| `--padding--med` | `2.625em` | `--gap--large` | `3.5625em` |
| `--padding--small` | `1.25em` | `--gap--xlarge` | `6em` |
| `--padding--mini` | `1em` | | |

| Radius token | Value |
|---|---|
| `--radius--small` | `0.5em` |
| `--radius--med` | `0.75em` |
| `--radius--large` | `3.0625em` |
| `--radius--xlarge` | `6.25em` |

The container padding and the medium padding are the same value. Do not collapse
them into one token - they move independently at the tablet breakpoint
(Section 16.2).

### 3.5 Motion tokens

| Token | Value | Meaning |
|---|---|---|
| `--duration-s` | `0.3s` | state changes: opacity, background, small colour moves |
| `--duration-1` | `0.6s` | the house transition: transform, colour, clip, stroke |
| `--ease-1` | `cubic-bezier(0.38, 0.005, 0.215, 1)` | the house curve |

The house curve appears eleven times among declared stylesheet easings and again
as a string literal inside the animation bundle, which is how you know it is a
system decision rather than one designer's choice on one element. It is
slow-start and long-settle: nearly flat for the first fifth, then a long
decelerating tail. Everything the user can trigger uses it.

Declared transitions, ranked by occurrence, are the vocabulary:

| Transition | Uses |
|---|---|
| `transform 0.6s cubic-bezier(0.38, 0.005, 0.215, 1)` | 837 |
| `color 0.6s cubic-bezier(0.38, 0.005, 0.215, 1)` | 162 |
| `stroke-dashoffset 0.6s cubic-bezier(0.38, 0.005, 0.215, 1)` | 123 |
| `clip-path 0.6s ..., background-color 0.6s ...` | 108 |
| `opacity 0.3s cubic-bezier(0.38, 0.005, 0.215, 1)` | 108 |
| `background 0.3s cubic-bezier(0.38, 0.005, 0.215, 1)` | 36 |
| `opacity 0.1s ...`, `background 0.1s ...`, `color 0.1s ...` | 21 each |

Note the pairing rule: opacity moves at `0.3s`, everything geometric moves at
`0.6s`. When both animate on one element the opacity finishes first.

### 3.6 Effects vocabulary

Each of these appears often enough to be a system decision, and each is given
with its exact value.

**Hexagon masking.** The most repeated effect on the site. A hexagon silhouette
is applied as a mask to button chevron wells (240 occurrences), to card bases
and roadmap card ends (114), and to leadership portraits (30). Section 22.2
gives the hexagon as path geometry so no mask file is needed.

**Corner-notched cards.** Cards are not rectangles. A card's top corners are
rounded at `6.88194px` while its bottom-left is square and its bottom-right
carries a large diagonal notch, produced by masking with a rounded-square-plus-
cut shape. Radii in use: `6.88194px 6.88194px 0px 0px` on card tops, 44
occurrences; `0px 0px 0px 6.88194px` on card bases, 34.

**Pill radii.** Buttons use `45.8796px`, rising to `66.6667px` where the button
is taller; chips and pills use `4.58796px` and `6.66667px`. Circles use `100%` -
138 occurrences: play buttons, partner tile glows, coverage icons.

**Text-shadow as a duplicate glyph.** Button and link labels carry a solid
shadow offset vertically by exactly one line: `#f5f5f7 0px 16px 0px`,
`0px 20px 0px`, `0px 20.8333px 0px`, `0px 12.8px 0px`, `0px 16.6667px 0px`,
`0px 14px 0px`, and negative variants at `0px -20px 0px` and `0px -26.0417px 0px`.
Blue variants exist for links on light grounds - `#014ffe 0px 12.8px 0px`,
`#014ffe 0px 15px 0px`, `#014ffe 0px 16px 0px`, `#014ffe 0px 16.6667px 0px` -
and green for the highlighted article link, `#61ff00 0px 12.8px 0px` and
`#61ff00 0px 15px 0px`. This is not a drop shadow. It is the second copy of the
label used by the roll-up hover (Section 5.5): the label slides up by exactly one
line and its shadow becomes the visible text.

**Gradients.**

| Gradient | Where |
|---|---|
| `linear-gradient(180deg, #014ffe 47%, #f5f5f7)` | the blue-to-off-white section join, 9 uses |
| `linear-gradient(180deg, #000000, #012370)` | the deep sections on About and Media |
| `linear-gradient(180deg, #014ffe, #012370)` | the blue deep-bottom section |
| `linear-gradient(180deg, transparent, #000000)` | bottom fade over imagery |
| `linear-gradient(90deg, #adc6ff 4%, #d8e4ff 95%)` | roadmap card sweep |
| `radial-gradient(circle closest-side, #014ffe, rgba(1, 79, 254, 0))` | the glow behind each partner tile, 36 uses |

**Blend.** Exactly one blend mode is used anywhere: `color-dodge` on the coverage
map ground, which is what makes the street network glow rather than sit flat.

**Depth.** `perspective: 1000px` on two elements only - the featured article card
and the mission video frame. `transform-style: preserve-3d` on 93 elements, all
of them button chevron wells, partner tiles and roadmap track segments.

**Shadows.** Two, both on the mission play button:
`rgba(0, 0, 0, 0.4) 0px 2px 25px 5px` at rest and
`rgba(0, 0, 0, 0.4) 0px 2px 30px 13px` when active.

### 3.7 Layering

Stacking order in use, by frequency: `10` with 313 uses is the default raised
layer, `-1` with 162 is section grounds, `20` with 120 is content above grounds,
then `100`, `1000`, `1500`, `1600`, `2000`. Reserve the top band as follows:

| Band | Contents |
|---|---|
| `2000` | loader and page-transition cover |
| `1600` | site notice bar |
| `1500` | mobile navigation panel |
| `1000` | header |
| `100` | video modal |
| `20` | in-flow content |
| `10` | raised content within a section |
| `0`, `-1`, `-10`, `-100` | section grounds and the three-dimensional layer |

### 3.8 Measured colours outside the ledger colour table

Six values below were measured but sit outside the ledger's colour table, which
is assembled from stylesheet declarations and computed styles only. Four are
shader uniform defaults recovered verbatim from the bundle source; two are
stroke colours declared inline on captured markup. They are real evidence, not
proposals, and they are wrapped so the fidelity gate does not read them as
invented. The deviation, and the change to the ledger that would remove the need
for it, are recorded in Section 22.11.

<!-- lint:allow P6 -->

| Name used in this document | Value | Where measured | Role |
|---|---|---|---|
| lattice line | `#016cfe` | shader uniform `uLineColor` | hexagon lattice line in the scene |
| shine line | `#82caff` | shader uniform `uShineLineColor` | travelling highlight along a lattice edge |
| shine bloom | `#1064ff` | shader uniform `uShineBlurColor` | bloom around that highlight |
| scene void | `#030017` | shader uniform `uBgColor` | the ground the field composites against |
| stroke ink | `#030118` | inline stroke on captured markup | statistic-card icon and roadmap track strokes |
| outline white | `#fdfdfd` | inline stroke on captured markup | the translucent button hexagon outline, drawn at 50 % alpha |

<!-- lint:end -->

Note how close the lattice line is to the brand blue of Section 3.2, and how much
lighter the shine line is. That gap is the whole effect: the lattice is brand
blue, and only the travelling highlight is allowed to be brighter.

> **In plain language.** This is the paint box, and it is small.
>
> **Colour.** Eight named colours, no more. An electric blue, a lime green, a
> near-black with a bruise of blue in it, an off-white that is very slightly warm,
> a pale ice blue for statistic cards, and a wash of the blue at a fifth strength.
> That is the whole palette. Counting every coloured pixel on the site, the
> off-white wins by a mile, the blue is a distant second, and the green barely
> registers - keep that ratio and the page will look right.
>
> **Type.** One wide, round, geometric family for headings, set heavy. One plain
> family for everything else, in two weights: a light one for long reading and a
> medium one for buttons and labels. Legal pages get their own slot so they can be
> swapped without touching anything else.
>
> **Size.** Everything on this site is measured relative to one number, and that
> number grows and shrinks with the width of the window. This is why the site does
> not jump between phone and laptop - it slides. It also means you should never
> hard-code a size anywhere. Set the one rule and everything follows.
>
> **Space and corners.** Six spacing steps, five gap steps, four corner roundings.
> Every corner on the site is either a hexagon or a very generous curve. There are
> no small tidy 4-pixel corners anywhere.
>
> **Movement.** Three settings cover almost everything: a quick one about as long
> as a blink for things fading in and out, a slower one about as long as a slow
> blink for anything that moves or changes shape, and one motion curve used
> everywhere. That curve barely moves for the first fifth of its life and then
> glides a long way into a soft stop. It is the single most important thing to get
> right, because it is what makes every hover on the site feel weighty rather than
> snappy.
>
> There is one rule inside that: fades finish before movements do. When something
> both fades in and slides up, the fade lands first and the slide keeps going. It
> reads as arriving rather than appearing.
>
> **Repeated effects.** A short list, but each one is used dozens or hundreds of
> times, which is what makes the site feel designed rather than assembled:
>
> | What it is | Technical name | What you would actually see |
> |---|---|---|
> | Hexagon cut-outs | hexagonal mask | Photographs of people are not circles or squares - they are hexagons. So are the little wells at the end of every button. Used well over three hundred times across the site |
> | Notched cards | corner-clipped mask | Cards have three normal corners and one that looks as if it has been sliced off at an angle, like a badge or a boarding pass |
> | A second copy of every label | duplicate glyph text-shadow | Every button word is secretly printed twice, one directly below the other. You never see the second copy sitting still - see Section 5 |
> | A stretched glow | radial gradient on a scaled circle | Behind each partner logo, a soft blue pool of light, wider than it is tall |
> | One glowing map | color-dodge blend mode | The coverage map's streets do not sit flat on the dark ground; they glow through it. This is the only place on the entire site where this trick is used |
>
> **Stacking.** A short list of who sits in front of whom: the loading cover above
> everything, then the small notice at the bottom of the screen, then the phone
> menu, then the top bar, then the video pop-up, then the page, then the moving
> background at the very back.

---

## 4. Iconography

Every icon on the site is inline vector geometry. None is a font glyph and none
is a separate file. Transcribe the coordinates exactly; the shapes are built
from a shared hexagonal construction and eyeballed replacements will not sit on
the same grid.

Notation: `M` move, `L` line, `h`/`v` horizontal and vertical line, `c`/`a`
cubic and arc segments, `Z` close. Lower case is relative. All paths are quoted
verbatim from the captured markup.

### 4.1 The wordmark

Canvas `0 0 187 49`, rendered at 155 by 41 in the header. Four paths, all filled
`#014ffe`. The mark is the leading glyph pair; the remaining three paths are the
lettering.

| # | Fill | Path opening |
|---|---|---|
| 1 | `#014FFE` | `M165.396 14.685h4.423c1.137 0 2.059.921 2.059 2.059v6.644c.071-.092.148-.182.229-.271l7.09-7.797h7.751l-7.633 8.425c-1.037 1.147-1.037 2.561 0 3.703l7.57 8.358H179.131V35.8l-7.…` |
| 2 | `#014FFE` | `M157.27 15.799c1.197.706 2.128 1.707 2.797 3.001.665 1.294 1.001 2.784 1.001 4.47v12.574h-6.49V24.66c0-1.196-.327-2.173-.979-2.92-.654-.746-1.498-1.121-2.531-1.121-1.335 0-2.37…` |
| 3 | `#014FFE` | `M18.91 19.209h9.49s2.756-.23 4.45 2.7c1.693 2.928 4.665 7.848 4.665 7.848l-2.681 4.565-5.215-8.829s-.92-1.748-2.672-1.748l-10.696-.002 2.66-4.537-.002.003Z` |
| 4 | `#014FFE` | `M55.828 24.206a7.074 7.074 0 0 0-.98-3.247l-1.034-1.75-.547-.926-4.523-7.655-2.486-4.205-1.503-2.545C43.432 1.638 40.99.257 38.34.257H18.156c-.032 0-.066 0-.097.004h-.07s-.003-…` |

Path 3 is the inner stroke - the small angled "signal" tick inside the hexagon.
Path 4 is the hexagon outline itself. Together they are the standalone mark used
by the loader and the footer, at canvas `0 0 52 46`:

| # | Fill | Path |
|---|---|---|
| 1 | `#014FFE` | `M17.342 18.464h8.799s2.555-.212 4.125 2.503c1.57 2.716 4.326 7.277 4.326 7.277l-2.486 4.233-4.835-8.186s-.853-1.62-2.478-1.62l-9.916-.003 2.467-4.206-.002.002Z` |
| 2 | `#014FFE` | `M51.571 23.098a6.558 6.558 0 0 0-.91-3.01l-.957-1.623-.507-.859-4.194-7.098L42.7 6.61l-1.394-2.36C40.078 2.173 37.813.893 35.356.893H16.643c-.03 0-.06 0-.09.004h-.065s-.003-.00…` |

### 4.2 Navigation chevron

Canvas `0 0 19 9`, rendered at 25 by 17. One path, fill `#014ffe`. This is the
dropdown indicator beside "Company" and "Resources" - a shallow V with a
thickened right shoulder, not a symmetric arrow.

`M18.017 4.392 11.444 8.15s-1.818 1.25-4.15-.108a503.172 503.172 0 0 0-6.34-3.588L1.004.23l7.108 4.05s1.329.847 2.543.153L18.063.199l-.046 4.196v-.003Z`

### 4.3 Button hexagon well

Canvas `0 0 37 33`. This is the small hexagon that sits at the right-hand end of
every button. It is drawn twice on the same canvas, once as a stroke and once as
the fill that carries the arrow.

| Variant | Attributes | Path |
|---|---|---|
| Outline, brand | `stroke: var(--color--blue)`, `stroke-width: 2` | `M12.646 1.726h12.44c1.62 0 3.13.84 3.96 2.23l6.22 10.53c.82 1.38.82 3.09 0 4.47l-6.22 10.53a4.584 4.584 0 0 1-3.96 2.23h-12.44c-1.62 0-3.13-.84-3.96…` |
| Outline, translucent white | `stroke: outline white` at 50 % alpha (Section 3.8), `stroke-width: 2` | same geometry |
| Outline, solid white | `stroke: var(--color--white)`, `stroke-width: 2` | same geometry |
| Arrow, white | `fill: var(--color--white)` | `m25.26 19.04-1.6 2.772-3.087-5.373a2.338 2.338 0 0 0-2.053-1.185l-6.251.027 1.6-2.77 5.786-.043a3.123 3.123 0 0 1 2.754 1.59l2.842 4.978.009.005Z` |
| Arrow, white on blue | `fill: #ffffff` | `M19.906 23.286h-3.2l3.11-5.36c.43-.73.43-1.64 0-2.37l-3.15-5.4h3.2l2.93 4.99c.58.98.58 2.2 0 3.18l-2.89 4.95v.01Z` |

The arrow inside the well is itself a hexagon fragment - two parallel angled
strokes joined at the right - which is why it reads as a chevron cut from the
same lattice rather than as a generic arrow.

### 4.4 Small hexagons

| Use | Canvas | Attributes | Path |
|---|---|---|---|
| Inline text mark | `0 0 30 27` | `fill: var(--color--white)` | `m10.58 8.789 2.445 4.235s.812 1.17-.058 2.681c-.871 1.51-2.3 4.104-2.3 4.104l-2.73-.02 2.597-4.602s.544-.86.092-1.643L7.871 8.77l2.71.019h-.001Z` |
| Chip mark | `0 0 13 12` | `fill: var(--color--black-2)` | `M4.335.781h4.33c.564 0 1.09.292 1.378.776l2.165 3.665a1.52 1.52 0 0 1 0 1.556l-2.165 3.665c-.289.484-.814.78-1.378.776h-4.33c-.564 0-1.09-.292-1.378-.776L.792 6.7…` |
| Footer mark | `0 0 778 700` | `fill: var(--color--black)` | `M247.431.642h283.62c37.236 0 71.588 19.833 90.2 51.96l141.817 245.051c18.611 32.127 18.611 71.795 0 103.922L621.251 646.626c-18.612 32.127-52.977 51.961-90.2 51.961…` |
| Ecosystem mark | `0 0 133 120` | `fill: #ffffff` | `m130.095 68.902-24.16 41.847a17.76 17.76 0 0 1-15.35 8.883l-48.239.049a17.664 17.664 0 0 1-15.333-8.852l-24.076-41.8a17.76 17.76 0 0 1 .017-17.736l24.16-41.847A17.758 17.758 0 0 1…` |

### 4.5 Concentric hexagon field

Canvas `0 0 778 700`, rendered at 851 by 766 and positioned partly off-canvas.
Fifteen nested hexagon outlines, all `stroke: #014FFE`, no fill. Each ring is
inset from the previous by a constant step: the top-left vertex moves right by
`7.0905` and down by `17.4485` per ring, and the hexagon's shoulder radius
shrinks proportionally.

| Ring | Path opening |
|---|---|
| 1 | `M246.975 1h283.62c37.236 0 71.588 19.834 90.2 51.96l141.816 245.052c18.612 32.127 18.612 71.794 0 103.921L620.795 646.984…` |
| 2 | `M254.065 18.449h269.439c35.375 0 68.009 18.842 85.69 49.362L743.92 300.61c17.681 30.52 17.681 68.205 0 98.725L609.194 632.134…` |
| 3 | `M261.156 35.897h255.258c33.513 0 64.429 17.85 81.179 46.765l127.636 220.546c16.75 28.914 16.75 64.615 0 93.529L597.593 617.283…` |
| 4 | `M268.247 53.346h241.077c31.651 0 60.85 16.859 76.669 44.167l120.545 208.293c15.819 27.308 15.819 61.025 0 88.333L585.993 602.433…` |
| 5 | `M275.337 70.794h226.896c29.789 0 57.271 15.867 72.16 41.569l113.453 196.041c14.889 25.701 14.889 57.435 0 83.137L574.393 587.582…` |
| 6 | `M282.428 88.243h212.714c27.928 0 53.692 14.875 67.65 38.971l106.363 183.788c13.958 24.095 13.958 53.846 0 77.941L562.792 572.731…` |
| 7 | `M289.518 105.692h198.534c26.065 0 50.112 13.883 63.14 36.372L650.463 313.6a72.584 72.584 0 0 1 0 72.745l-99.271 171.536…` |
| 8 | `M296.608 123.14h184.353c24.204 0 46.533 12.892 58.63 33.775l92.181 159.283a67.401 67.401 0 0 1 0 67.549L539.591 543.03…` |
| 9 | `M303.699 140.589h170.172c22.342 0 42.953 11.9 54.12 31.176l85.09 147.031a62.219 62.219 0 0 1 0 62.353l-85.09 147.03…` |
| 10 | `M310.79 158.038h155.991a57.323 57.323 0 0 1 49.609 28.578l78 134.778a57.032 57.032 0 0 1 0 57.157l-78 134.778…` |
| 11 | `M317.88 175.486h141.81a52.114 52.114 0 0 1 45.1 25.981l70.908 122.525a51.845 51.845 0 0 1 0 51.961L504.79 498.479…` |
| 12 | `M324.97 192.935h127.629a46.902 46.902 0 0 1 40.59 23.382l63.818 110.273a46.662 46.662 0 0 1 0 46.765l-63.818 110.273…` |
| 13-15 | continue the same arithmetic progression |

**Capability requirement - normative.** Rings 13 to 15 must be generated by
continuing the progression, not hand-drawn. The progression is the reason the
field reads as a single object.

### 4.6 Signal bars

Identified element `Layer_1`, canvas `0 0 20.6 14.6`, rendered at 24 by 17. Five
paths: one solid diamond and four stacked arcs of decreasing width, which is the
coverage-strength mark used beside the coverage link.

| # | Path |
|---|---|
| 1 | `M23.9 1.3 10.6-12-2.8 1.3l13.3 13.3L23.9 1.3Z` |
| 2 | `m19.5 7.4-6.6-3.7c-1.5-.8-3.2-.8-4.7 0L.8 7.3-.6 4.7 6.8.9C9.2-.3 12-.3 14.3 1l6.6 3.7-1.5 2.6Z` |
| 3 | `M19.5 12.7 11 7.9c-.3-.2-.6-.2-.9 0L.8 12.7l-1.4-2.6 9.3-4.8c1.2-.6 2.6-.6 3.7 0l8.5 4.8-1.5 2.6Z` |
| 4 | `M19.5 18.2 11 13.4c-.3-.2-.6-.2-.9 0L.8 18.2l-1.4-2.6 9.3-4.8c1.2-.6 2.6-.6 3.7 0l8.5 4.8-1.5 2.6Z` |
| 5 | `M19.5 21 11 16.2c-.3-.2-.6-.2-.9 0L.8 21l-1.4-2.6 9.3-4.8c1.2-.6 2.6-.6 3.7 0l8.5 4.8-1.5 2.6Z` |

### 4.7 Statistic card icons

Three, all on canvases near `0 0 44 48`, all drawn as thin outlines on the pale
card ground.

| Icon | Canvas | Construction |
|---|---|---|
| Customers | `0 0 44 48` | 12 paths: a six-spoke asterisk built from six chevron pairs, each pair a `≈3.3px`-wide bar and its mirrored partner, rotated at 60° intervals about the canvas centre. Opening path: `m37.956 27.816-3.316.006 3.227-5.622c.442-.77.44-1.72-.005-2.488l-3.274-5.658 3.315-.007 3.042 5.235c.6 1.03.602 2.303.007 3.335l-2.996 5.198Z` |
| Connected devices | `0 0 40 44` | 2 paths, `stroke: stroke ink` (Section 3.8), `stroke-width: 3`. An isometric cube: outer hexagonal silhouette `M38.184 29.406V13.462a3.986 3.986 0 0 0-1.993-3.448L22.24 2.042a3.986 3.986 0 0 0-3.986 0L4.303 10.014a3.986 3.986 0 0 0-1.993 3.448v15.944a3.986 3.986 0 0 0 1…` plus the three interior edges `m11.278 5.908 8.969 5.182 8.969-5.182M11.278 36.96V26.616L2.31 21.434M38.184 21.434l-8.968 5.182V36.96M2.848 11.39l17.399 10.064 17.4-10.065M20.247 41.524v-20.…` |
| Data transactions | `0 0 43 44` | 8 paths, mixed fills and strokes at `stroke-width` `1.3` and `2.6`, `stroke: stroke ink` (Section 3.8). A hexagonal wireframe globe: the outer hexagon plus five latitude chords |

### 4.8 Card silhouettes

Two shapes carry the notched-card look and are used as masks rather than as
drawn artwork.

| Shape | Canvas | Path |
|---|---|---|
| Corner-notched card | `0 0 444 206` | `fill: var(--color--blue)` - `M0 11.58C0 5.185 5.185 0 11.58 0h362.649a20 20 0 0 1 14.724 6.465l48.896 53.19a20 20 0 0 1 5.276 13.535V206H0V11.58Z` |
| Speech-tail card | `0 0 204 126` | `fill: var(--color--blue)` - `M0 0h171.346a10 10 0 0 1 9.237 6.167l21.899 52.775a10.002 10.002 0 0 1 0 7.665l-21.899 52.775a10.002 10.002 0 0 1-9.237 6.167H0V0Z` |
| Section base curve | `0 0 1728 756` | `fill: var(--color--black)` - `m0 .25 787.527 181.789a339.992 339.992 0 0 0 152.946 0L1728 .25V755.5H0V.25Z` |

The section base curve is the shallow dip at the bottom of the light sections.
It is a straight-sided trapezoid with a single arc across the middle, not a sine
curve - reproducing it as a sine wave changes the silhouette visibly at desktop
width.

### 4.9 Roadmap track segments

Four canvases, `0 0 186 216`, `0 0 186 310`, `0 0 186 311` and `0 0 186 393`,
each two paths: a `stroke: stroke ink` (Section 3.8), `stroke-width: 2` dashed connector and a
`fill: #ffffff` cover rectangle sized to the canvas. The connector geometry is
one continuous serpentine that is clipped per segment; segment one opens
`M92.96 4.145v142.778a29.999 29.999 0 0 0 15.024 25.994l59.914 34.521a29.999 29.999 0 0 1 15.023 25.994v171.457a30.001 30.001 0 0 1-15.023 25.995L18.023 517.235…`
and later segments repeat the same path translated upward by the accumulated
segment height, which is why their `M` commands carry large negative `y` values.

**Capability requirement - normative.** Stroke width on the roadmap track is
`3` at desktop and `2` at tablet and below, set at runtime and re-applied on
breakpoint change (Section 16.5).

### 4.10 Media-player and social icons

| Icon | Canvas | Path |
|---|---|---|
| Play, small | `0 0 17 19` | `fill: currentColor`, `stroke: currentColor`, `stroke-width: 2` - `m1.996 1.783-.015-.01c0 7.898-.144 14.044-.091 16.07l14.056-8.031-13.95-8.03Z` |
| Play, player control | `-0.5 -0.5 16 16` | `fill: var(--vp-icon-color)` - `M13.313 5.554a2.203 2.203 0 0 1 0 3.892l-9.417 5.12c-1.516.825-3.378-.248-3.378-1.945V2.379C.518.682 2.38-.39 3.896.433l9.417 5.121Z` |
| Volume | `-0.5 -0.5 16 16` | 2 paths, `fill: var(--vp-icon-color)` - `M.153 7.268C.184 5.763.2 5.01.723 4.367a2.62 2.62 0 0 1 .351-.352c.642-.519 1.489-.519 3.183-.519…` and `M13.584 4.573a.582.582 0 0 1 .8.233l-.514.292.514-.292v.001…` |
| Professional network | `0 0 512 512` | `M471.6 0H40.4C18.1 0 0 18.1 0 40.4v431.2C0 493.9 18.1 512 40.4 512h431.2c22.3 0 40.4-18.1 40.4-40.4V40.4C512 18.1 493.9 0 471.6 0zm-290 390.7h-55.8V210.8h55.8v179.9zm-28-204.4c-18 .1-32.6-1…` |

> **In plain language.** There are no icon files on this site. Every icon is drawn from instructions, and
> The coordinate tables above carry every one of them.
>
> That sounds fussy until you notice that every icon here is built out of the same
> hexagon. The logo is a hexagon with a signal tick inside it. The arrow at the end
> of every button is a hexagon fragment, not a normal arrow. The "connected
> devices" icon is a cube drawn on a hexagon. The "data transactions" icon is a
> globe drawn as a hexagon with lines across it. Redrawing any of them by eye
> breaks the family resemblance, and the family resemblance is most of why the site
> looks expensive.
>
> Two icons are worth calling out because they are more interesting than icons
> usually are.
>
> **The concentric rings.** Fifteen hexagon outlines nested inside one another,
> each stepped in by exactly the same amount. It appears large and half off the
> edge of the screen behind the product screenshots. It must be generated by
> repeating the step, not drawn fifteen times by hand - the perfect regularity is
> what makes it read as one object rather than fifteen shapes.
>
> **The section base curve.** The bottom edge of every pale section dips in the
> middle. It looks like a wave and it is not one - it is a straight-sided shape
> with a single shallow arc across the middle. Drawn as a true wave, it visibly
> changes silhouette on a wide screen.

---

## 5. Global chrome

### 5.1 Header

Fixed to the top on every route, ground `#0b0919`, full width, height `76px` at
desktop and `63px` at mobile (measured from the wordmark's rendered rectangle
plus symmetric padding). Contents: the wordmark at left, linking home; two
dropdown triggers at right, each a label plus the chevron of Section 4.2.

The header translates on scroll - it is one of only two elements that change
transform on every captured route and every breakpoint, at all nine scroll
frames. The root element gains a scrolled-state class once the page has moved
away from the top, and the header's padding transitions between two values under
`padding 0.6s` (Section 3.5) as that class toggles. Padding is declared
`will-change` on the header container, so treat the padding change as the
animated property rather than height.

### 5.2 Dropdowns

Each trigger owns a panel. Radius `12.5px` at one breakpoint and `15px` at
another. Closed state is `clip-path: inset(0% 0% 100% round 12.5px)` - the panel
is fully present in the layout and clipped away from the bottom. Open state
releases the inset. The transition is
`clip-path 0.6s cubic-bezier(0.38, 0.005, 0.215, 1), background-color 0.6s cubic-bezier(0.38, 0.005, 0.215, 1)`,
108 occurrences.

Opening is driven by pointer enter and by focus; closing by pointer leave and by
focus leaving the subtree, checked on the next tick so that moving between the
trigger and the panel does not close it.

**Capability requirement - normative.** The trigger's wrapper carries an
expanded-state attribute that is kept in sync with the visual state on both
pointer and keyboard paths. The panel must remain reachable by keyboard
(Section 17.2).

### 5.3 Dropdown links

Rest colour `#e2ebff` at 60 % alpha; hover and focus resolve to full-strength
`#e2ebff`. The same change applies to the element's border colour and to both of
its generated pseudo-elements, which is what keeps the underline rule and the
roll-up shadow in step with the label. Duration `0.6s`, house curve.

This is the only hover delta the capture found anywhere on the site, which is
itself a finding: hover on this site is carried almost entirely by transform and
by the duplicate-glyph shadow (Section 5.5), neither of which appears as a
colour diff.

### 5.4 Mobile navigation

Below the tablet breakpoint the two dropdown groups are replaced by a single
trigger and a full-screen panel.

Opening sequence, all values measured from the bundle:

| Step | Target | From | To | Duration | Ease | Stagger |
|---|---|---|---|---|---|---|
| 1 | trigger hexagons | `scale: 0` | `scale: 1, rotate: 120°` | `0.5s` | linear | `0.1s` total spread, from first |
| 2 | link columns | `x: 100%` | `x: 0%` | `0.5s` | `power2.out` after `0.3s` delay | none |
| 3 | links | `y: 101%`, transparent | `y: 0%`, opaque | `0.5s` | `power2.out` after `0.6s` delay | `0.05s` |
| 4 | button labels | as step 3 | as step 3 | `0.5s` | `power2.out` after `0.6s` delay | `0.05s` |

Closing reverses with `x: -101%` on the columns at `power2.in` and a `0.2s`
fade on the links, and the trigger hexagons return to `scale: 0, rotate: 0` with
the stagger running from the last element backwards. Smooth scrolling is stopped
while the panel is open and restarted `0.5s` after the close begins.

### 5.5 The roll-up label

The site's signature interaction, and invisible in any static capture.

Every button and text link renders its label twice: once as live text and once
as a solid `text-shadow` offset vertically by exactly one line height
(Section 3.6). The label's wrapper is clipped to one line. On hover the label
translates up by one line under
`transform 0.6s cubic-bezier(0.38, 0.005, 0.215, 1)`; the live text leaves the
clip at the top and the shadow copy arrives from the bottom, so the label
appears to roll over to an identical label. The negative shadow offsets
(`0px -20px 0px`, `0px -26.0417px 0px`) are the same effect built to roll
downwards.

**Capability requirement - normative.** The rolled-in copy must be produced from
the same text node as the visible label - never a duplicated string - so the
accessible name is announced once.

### 5.6 Footer

Ground is the deep blue gradient of Section 3.6. Layout: a large display line at
left over a newsletter form and two buttons; a three-column link map at right
under green group headings; the standalone mark at bottom left.

Entrance is staggered by group. The footer's animated children are tagged in
three waves plus the link column:

| Wave | Delay | Duration | Ease | Stagger |
|---|---|---|---|---|
| 1 | `0s` | `0.6s` | `cubic-bezier(0.38, 0.005, 0.215, 1)` | `0.05s` |
| 2 | `0.1s` | `0.6s` | same | `0.05s` |
| 3 | `0.2s` | `0.6s` | same | `0.05s` |
| link columns | `0.1s` | `0.6s` | same | `0.05s` |

All four start from `y: 101%` and fully transparent, and the trigger fires once
when the footer's top reaches 80 % of the viewport height. It does not replay.

### 5.7 Site notice bar

A dark rounded panel pinned to the bottom-right at desktop and full-width at
mobile, radius `10px` at one breakpoint and `6.88194px` at the other. It carries
one line of small text, an inline link, a primary dismiss button and a
secondary text button. Ground `#0b0919`; the panel sits at stacking band `1600`.

Copy is in Section 21.1. Dismissal must persist for the session at minimum;
persisting to local storage is preferred.

### 5.8 Page transition cover

A full-viewport element at stacking band `2000` holding a single drawing surface,
declared `will-change: display`. It covers the outgoing page, plays the mark
animation of Section 9.2, and is set to `display: none` when that animation
signals it has finished. See Section 6.7 for the handover order.

> **In plain language.** The furniture that appears on every page.
>
> **Top bar.** Dark, full width, pinned to the top, with the logo at left and two
> dropdown words at right. It notices when you have scrolled away from the very
> top and tightens itself slightly - its padding shrinks rather than its height,
> which is a subtle but real difference in how the words settle.
>
> **Dropdown panels.** The panels are always there. They are not built when you
> hover; they are simply clipped away from the bottom, and hovering releases the
> clip so they unroll downward. They open on hover *and* on keyboard focus, and
> they stay open while your attention is anywhere inside them - including in the
> gap between the word and the panel, which is where most dropdowns on the web
> fail.
>
> **Dropdown links** sit at about two-thirds strength and go to full strength when
> you point at them. This is the only colour change anywhere on the site that
> survived measurement, which tells you something: hover here is carried almost
> entirely by movement, not by colour.
>
> **The phone menu** is a four-step sequence, and the order is the whole effect:
> the little hexagons on the button spin and grow, then the panel slides in from
> the right, then the links roll up into place one after another, then the buttons
> follow. Closing runs it backwards, with the links leaving in reverse order.
> Scrolling is frozen while the panel is open.
>
> **The rolling label.** This is the site's signature move and it is invisible in
> any screenshot, which is why it is easy to miss and easy to get wrong.
>
> | What it is | Technical name | What you would actually see |
> |---|---|---|
> | A label printed twice, one line apart, inside a one-line window | duplicate-glyph text-shadow plus a transform transition | Point at any button and its word rolls upward out of view while an identical word rolls up from below to replace it - like a departure board flipping to the same word. Some links roll down instead of up. It takes about as long as a slow blink |
>
> The rolled-in copy must come from the same words as the visible one, so that
> someone listening to the page rather than looking at it hears the label once, not
> twice.
>
> **Footer.** Enters in four overlapping waves, each a fraction behind the last,
> each rolling up from below. It plays once and does not replay.
>
> **Notice bar.** A small dark panel in the bottom-right corner on a laptop, full
> width on a phone, carrying one line of text and a dismiss button. Once
> dismissed, it must stay dismissed.

---

## 6. Motion language

### 6.1 The three mechanisms

Every animation on the site is one of three kinds, and the PRD says which for
each effect, because the three are not interchangeable.

| Mechanism | Recognisable by | Used for |
|---|---|---|
| Declared transition | a `transition` property in the stylesheet | hover, focus, open and close states |
| Trigger-once timeline | plays forward when an element enters the viewport, never replays | section entrances, footer, statistic cards |
| Scroll-scrubbed timeline | progress is a function of scroll offset; scrolling back un-plays it | word reveals, roadmap track, three-dimensional layer |

**Observed implementation - informational.** The reference used a mainstream
animation library, version `3.11.5` by licence banner (ledger tier 1), with a
scroll-trigger plugin present as a surviving identifier (tier 6), plus a
smooth-scroll library detected by runtime global and by root state classes
(tiers 3 and 5) and a second, smaller animation runtime (tier 6). The build is
free to satisfy the capabilities below with whatever the kit already draws.

### 6.2 Keyframes

Exactly one keyframe animation is declared anywhere on the site:

`spin` - `{ 0% { transform: rotate(0) } to { transform: rotate(360deg) } }`

That is the whole of the site's declarative keyframe vocabulary. Everything else
is a transition or a timeline.

### 6.3 Easing inventory

The house curve `cubic-bezier(0.38, 0.005, 0.215, 1)` accounts for eleven of the
declared easings and appears again as `cubic-bezier(.38,.005,.215,1)` where it
was written by hand. One further curve is authored directly:
`cubic-bezier(0.2, 0.6, 0.35, 1)`.

A full standard easing library is also present in the stylesheet - the classic
set including `cubic-bezier(0.455, 0.030, 0.515, 0.955)`,
`cubic-bezier(0.645, 0.045, 0.355, 1)`, `cubic-bezier(0.770, 0, 0.175, 1)`,
`cubic-bezier(0.230, 1, 0.320, 1)`, `cubic-bezier(0.190, 1, 0.220, 1)`,
`cubic-bezier(1, 0, 0, 1)` and their siblings, each used once. Treat these as
library ballast rather than as design decisions; the site's own motion uses the
house curve and the named library eases below.

Named library eases used by the timelines, with their occurrence counts in the
animation bundle:

| Ease | Uses | Where |
|---|---|---|
| `power2.inOut` | 17 | word reveals inside a section entrance, mission video copy |
| `power2.out` | 8 | mobile navigation, product interface cards |
| `power1.out` | 8 | scrubbed word timelines, eyebrow entrances |
| `none` (linear) | 8 | scrubbed scale and position ties |
| `power1.inOut` | 2 | partner tiles, statistic counters |
| `power3.out` | none | three-dimensional patch show and hide (Section 8.5) |
| `power4`, `power2.in`, `expo` | 1 each | one-off accents |

Durations used by the timelines: `1s` (17 uses), `0.6s` (15), `2s` (5),
`0.5s` (5), `0.85s`, `0.3s`, `0.2s`, and `0s` for immediate sets.
Staggers: `0.05s` (11 uses), `0.1s` (9), `0.01s` (6), `0.2s`, `0.15s`, and two
amount-based staggers spread across the element count.

### 6.4 Named reveal: the word cascade

The most-used effect on the site by an order of magnitude. Every heading and
paragraph that animates is split into per-word wrappers, each clipped to its own
line box.

Set state: each word at `y: 101%`, fully transparent.

Entrance form, used inside section entrances:

| Property | Value |
|---|---|
| To | `y: 0%`, opaque |
| Duration | `0.6s` |
| Ease | `power2.inOut` |
| Stagger, headings | `0.05s` |
| Stagger, paragraphs | `0.01s`, after a `0.2s` delay |
| Trigger | element top reaches 80 % of viewport height, once |

Scrubbed form, used where the text must track scroll (Section 7.4), is a
five-step timeline pinned between the trigger's top entering the bottom of the
viewport and its bottom leaving the top:

| At | Targets | To | Duration | Stagger | Ease |
|---|---|---|---|---|---|
| `0` | words | `y: 0%` | `1` | `0.1` | `power1.out` |
| `0.25` of timeline | words | opaque | `1` | `0.15` | `power1.out` |
| `0.50` of timeline | words | opaque | `1` | `0.1` | `power1.out` |
| `0.60` of timeline | words | opaque | `1` | `0.1` | `power1.out` |
| `0.75` of timeline | words | `y: -101%`, transparent | `1` | `0.1` | `power1.out` |

The three repeated opacity steps are not redundant. They hold the line at full
strength across the middle of the scroll range while the stagger keeps
individual words drifting, which is what produces the effect visible in the
scroll captures: a sentence in which some words are solid and others are still
fading, changing as you scroll.

Characters are split as well as words on the two display headings, using the
same set state with a `0.05s` stagger.

### 6.5 Named reveal: the eyebrow chip

The green chip above each section heading animates its own clip, not its
opacity alone. The clip radius is bound to the chip's own corner radius so the
chip appears to grow out of a circle.

| Phase | Value |
|---|---|
| Set | `clip-path: inset(0% calc(100% - 0.75em * 2) 0% 0% round 0.75em)`, transparent, `y: 2.5rem` |
| To | `clip-path: inset(0% 0% 0% 0% round 0.75em)`, opaque, `y: 0` |
| Duration | `0.6s` |
| Ease | `cubic-bezier(0.38, 0.005, 0.215, 1)` |

The chip's label is a separate target: set at `x: 2.5rem` and transparent, moving
to `x: 0` and opaque over `0.6s` on the house curve after a `0.3s` delay - so the
chip opens first and the word slides in from the left behind the growing edge.

Measured intermediate clip values confirm the shape:
`inset(0% calc(100% - 13.7639px) 0% 0% round 6.88194px)` at one breakpoint and
`inset(0% calc(100% - 20px) 0% 0% round 10px)` at another.

### 6.6 Named reveal: the section entrance

The composite used by most content sections. One trigger, six targets, fired
once when the section's top reaches 80 % of the viewport.

| Order | Target | From | To | Duration | Ease | Stagger | Delay |
|---|---|---|---|---|---|---|---|
| 1 | eyebrow chip | Section 6.5 set | Section 6.5 to | `0.6s` | house curve | none | `0` |
| 2 | eyebrow label | `x: 2.5rem`, transparent | `x: 0`, opaque | `0.6s` | house curve | none | `0.3s` |
| 3 | heading words | `y: 101%`, transparent | `y: 0%`, opaque | `0.6s` | `power2.inOut` | `0.05s` | `0` |
| 4 | paragraph words | `y: 101%`, transparent | `y: 0%`, opaque | `0.6s` | `power2.inOut` | `0.01s` | `0.2s` |
| 5 | buttons | `y: 101%`, transparent | `y: 0%`, opaque | `0.6s` | `power2.inOut` | none | `0.25s` |
| 6 | extra items | `y: 5rem`, transparent | `y: 0`, opaque | `0.6s` | `power2.inOut` | none | none |

### 6.7 Load and page transition

1. The transition cover (Section 5.8) is present at stacking band `2000` before
   first paint, carrying the mark animation of Section 9.2.
2. The mark animation exposes three named inputs - `site-loaded`, `hide` and
   `reveal` - and emits two named events, `start-site-loaded` and
   `end-site-loaded`.
3. On `start-site-loaded` the cover's backing element is set to
   `display: none`, and after `1500ms` the entrance sequence for the current
   page identity (Section 2.3) is started.
4. On `end-site-loaded` the document body's scroll is released.

**Capability requirement - normative.** The loader must gate the page entrance
on a signal from the loading animation, not on a fixed timer, and must release
scroll only once the cover is gone. A build that starts the entrance on a timer
will desynchronise on a slow connection.

### 6.8 Reduced motion

Not implemented on the reference. See Section 17.4 - this build must implement
it, and the requirement is normative.

> **In plain language.** Everything that moves on this site does so in one of three ways, and telling them
> apart is the difference between a build that feels right and one that feels
> almost right.
>
> | What it is | Technical name | What you would actually see |
> |---|---|---|
> | Something reacts to you | declared transition | You point at a button and it responds. Nothing to do with scrolling |
> | Something plays when it arrives | trigger-once timeline | You scroll a section into view and it performs its entrance. Scroll away and back and it does not perform again |
> | Something is tied to your finger | scroll-linked timeline | The animation's position is your scroll position. Scroll up and it runs backwards. It never plays on its own |
>
> Get the third category wrong and the site feels like it is performing at you
> rather than responding to you. That single distinction is most of the site's
> character.
>
> **The word cascade** is the most-used effect by a wide margin. Every heading and
> paragraph that animates is broken into individual words, each hidden below its
> own line. When the text arrives, the words roll up one after another, slightly
> staggered - headings loosely, paragraphs almost together.
>
> Where the text is tied to scrolling, the sequence is longer and stranger: the
> words roll up, then hold at full strength through the middle of the scroll range
> while individual words drift in and out, then roll up and away out of the top.
> The screenshots show exactly this - a sentence where some words are solid and
> others are still ghosting, and which words are which changes as you scroll. That
> is not a rendering error; it is the effect.
>
> **The green chip** above each section heading does not fade in. It grows
> sideways out of a small circle, and its word slides in from the left behind the
> growing edge a beat later. It is the most charming small detail on the site.
>
> **The section entrance** puts those together: chip opens, word slides into the
> chip, heading rolls up, paragraph rolls up almost as one, buttons follow, and any
> extra items come last. Six things, each a fraction behind the one before, over
> about a second in total.
>
> **Loading.** The site does not start its page entrance on a stopwatch. The
> loading animation tells the page when it has finished, the cover disappears, and
> only then does the page begin. On a slow connection a stopwatch would leave the
> page performing behind a cover nobody can see through.
>
> **Reduced motion.** The reference site does not respect the setting some people
> turn on to stop animation. This build must. Section 17 says exactly what changes.

---

## 7. Scroll system

### 7.1 Smooth scrolling

**Capability requirement - normative.** The page uses programmatic smooth
scrolling: wheel and touch input drive an interpolated scroll position rather
than the native one, and every scroll-driven timeline reads that position.

**Observed implementation - informational.** A smooth-scroll library, detected by
runtime global (tier 3), by module identifier (tier 6) and by the root state
classes it writes (tier 5). Root classes observed: a base class applied on
initialisation, a stopped state used while the mobile panel or a modal is open,
and a scrolling state applied only while motion is in progress. The site also
exposes start and stop controls on a global object so that modal and menu code
can lock scrolling.

Root class states observed across the capture: a scripting-enabled class always
present, plus a scrolled-past-top class that toggles once the page leaves the
top. On the home route a third, transient scrolling class appears in the middle
of the scroll matrix.

### 7.2 Progress formula

Progress between two marker elements is computed per frame from their live
viewport rectangles, never from cached offsets:

```
centre(el)   = rect(el).top + rect(el).height / 2
progress     = -(centre(from) - innerHeight) / (centre(to) - centre(from))
```

The value is unclamped by design: it goes negative before the segment starts and
above `1` after it ends, and each consumer clamps it to the range it cares
about. Consumers are listed in Section 8.6.

### 7.3 Scroll-scrubbed selectors

The nine-frame scroll matrix identified these selectors as scroll-driven. Counts
are the number of distinct computed values seen across frames - a proxy for how
finely each one is scrubbed.

Home route, desktop, 38 scrubbed selectors. The significant ones:

| Selector | Properties, distinct values |
|---|---|
| word wrapper | `transform` 62, `opacity` 49 |
| character wrapper | `transform` 16, `opacity` 15 |
| roadmap track path | `mask-image` 3, `transform` 14 |
| roadmap card circle | `transform` 7, `opacity` 7 |
| section eyebrow | `transform` 7, `opacity` 6 |
| eyebrow chip wrapper | `transform` 4, `opacity` 3, `clip-path` 4 |
| header | `transform` 9 |
| roadmap card | `transform` 4, `opacity` 3 |
| roadmap clip group | `clip-path` 5 |
| mission video frame | `clip-path` 3 |
| provider-statistics slide | `transform` 5 |
| roadmap line fill | `transform` 4 |
| hero hexagon | `transform` 4 |
| community drawing surface | `transform` 3 |

About and Media routes carry 20 to 23 scrubbed selectors each, dominated by the
word wrapper. Enterprise carries 15, led by the partner tiles. The two legal
routes carry 8 to 9, which is the global chrome alone - header, footer waves,
newsletter form - and confirms that legal pages get no bespoke motion.

The header is scrubbed on every route at every breakpoint with exactly nine
distinct transform values, one per captured frame. Treat that as continuous.

### 7.4 Scrubbed versus triggered, by section

| Section | Mechanism |
|---|---|
| Hero headline | triggered once, after the loader hands over |
| Coverage | scrubbed - drives the globe (Section 8.6) |
| Community | scrubbed - drives the hexagon field and the vector mark |
| Mission | triggered once |
| Roadmap | scrubbed - track fill, dots and card rows |
| Provider statistics | triggered once, with a scrubbed horizontal track |
| Ecosystem | triggered on toggle, paused when out of view |
| Product | triggered once |
| Partners | triggered once |
| Footer | triggered once |

> **In plain language.** Scrolling here is not the browser's own scrolling. Input is smoothed, so the page
> glides to a stop rather than halting, and everything tied to scroll position
> reads that smoothed value. Get this wrong and every scroll-linked effect on the
> site stutters.
>
> The clever part is how position is measured. Rather than remembering fixed
> distances down the page, the site asks two invisible markers where they currently
> are on screen and works out how far between them you have travelled. It does this
> every frame. The consequence is practical: if you make a paragraph longer
> anywhere above, nothing needs recalculating. The scene stays in step by
> construction.
>
> We measured which parts of the site are tied to scroll by photographing every
> page at nine depths and comparing. The results are unambiguous:
>
> | Page | What is tied to scroll |
> |---|---|
> | Home | Thirty-eight separate things, led by the word cascade, the roadmap track, the card entrances and the moving background |
> | About and Media | Roughly twenty each, almost all of it text |
> | Enterprise | Fifteen, led by the partner tiles |
> | Terms and Privacy | Eight - the top bar and the footer only |
>
> That last row is a design decision worth respecting: the legal pages get no
> bespoke motion at all.

---

## 8. The three-dimensional layer

The single most expensive surface on the site, and the reason the home route
reads as one continuous scene. It is a full-viewport drawing surface fixed
behind the layout for the first three sections of the home route.

**Capability requirement - normative.** The build must render a real-time
three-dimensional scene, composited under the page content with a transparent
background, whose entire state is a pure function of the scroll progress values
of Section 7.2 - no independent timers except the shader clock.

**Observed implementation - informational.** A mainstream three-dimensional
library, established by surviving identifiers and by shader source in the bundle
(tier 6 and tier 0 respectively - the shader source is verbatim, not minified).
A developer control panel is also present in the bundle behind a debug flag
(tier 6).

### 8.1 Renderer

| Setting | Value |
|---|---|
| Antialiasing | on |
| Power preference | high performance |
| Alpha | on |
| Physically correct lights | on |
| Tone mapping | none by default; the debug panel exposes linear, Reinhard, Cineon and filmic |
| Tone mapping exposure | `1.1` |
| Shadow map | disabled |
| Clear colour | `0` at alpha `0` - fully transparent |

A dark-mode switch sets the clear colour to opaque black; the light-mode branch
sets it to opaque white. Neither is used on the captured routes, which run
transparent throughout.

### 8.2 Camera and frame loop

Perspective camera, field of view `30`, near `0.1`, far `100`, positioned at
`(0, 0, 6)`, aspect bound to the surface. The scene root is a group the camera
is added to when orbit controls are off. Orbit controls with damping are
available and enabled in the reference's default configuration; they are a
development affordance and the build should leave them off in production.

The frame loop is a plain animation-frame tick that keeps `delta`, `elapsed` and
`current` timestamps and calls one update callback. Initial delta is `16`.

### 8.3 The globe

A sphere carrying a wire-grid shader. Both shader programs are quoted verbatim
because the effect is not reproducible from a description.

Vertex program:

```glsl
uniform float uTime;

varying vec2 vUv;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectionMatrix * viewPosition;

    vUv = uv;
}
```

Fragment program:

```glsl
uniform vec3 uColor;
uniform sampler2D uTexture;

uniform float uAlpha;
uniform float uShowCountries;
uniform float uShowCountrieLines;
uniform float uShowFactor;
uniform float segU;
uniform float segV;
uniform float uSpeedX;
uniform float uSpeedY;
uniform float uTime;
uniform float wireWidthFactor;
uniform float dpr;
uniform vec3 wireColor;

varying vec2 vUv;

void main() {
    vec4 textureColor = texture2D(uTexture, vUv);

    vec2 uv = vUv;
    uv.x += uTime * uSpeedX;
    uv.y += uTime * uSpeedY;
    vec2 coord = uv * vec2(segU, segV);
    vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
    float line = min(grid.x, grid.y) / (wireWidthFactor * dpr);
    line = 1.0 - min(line, 1.0);

    float factor = round((1. - uShowFactor) + uShowFactor * (vUv.y * 5.0 - 4.5));
    line *= clamp(factor, 0., 1.);

    float alpha = min(1., line * max(textureColor.r, 1. - uShowCountries) + .3 * textureColor.g * uShowCountrieLines);

    gl_FragColor = mix(vec4(wireColor, 0.0), vec4(wireColor, 1.0), alpha * uAlpha);
}
```

How to read it: the grid is analytic, not textured. `fract` on the scaled
coordinate gives distance to the nearest cell edge; dividing by the screen-space
derivative and clamping produces a line of constant apparent width regardless of
how the sphere curves away from the camera, which is why the wireframe stays
crisp at the silhouette. The map's red channel gates the grid to land only -
that is the diagonal hatching visible over the continents - and its green
channel adds coastline strokes at 30 % strength. `uShowFactor` sweeps a
horizontal band up the sphere so the grid can be wiped on and off with scroll.

Texture inputs are a colour ramp and a land-mask map; Section 22.3 generates
both procedurally.

### 8.4 The hexagon field

A plane of `3.25 × 3.25` units, scaled horizontally by the viewport aspect ratio
on every resize, drawn transparent with depth testing off so it always composites
over the globe.

Uniforms and their initial values:

| Uniform | Initial | Driven by |
|---|---|---|
| `uTime` | `0` | elapsed time × `0.0003` |
| `uZoom` | `0` | the community segment progress, clamped to `[0, 1]` |
| `uRatio` | `1` | viewport aspect ratio, set on resize |
| `uAlpha` | `0` | see below |
| `uRadius` | `0` | see below |
| `dpr` | device pixel ratio | none |
| `uTexture` | hexagon tile | Section 22.4 |

The alpha and radius ramp is exact and worth reproducing precisely:

```
e        = max(0, (coverageZoomProgress - 0.75) * 4)
uAlpha   = min(1, e)
uRadius  = 0.95 + pow(e, 1.45) * 0.95
```

So the field is entirely absent until the coverage-zoom segment is three
quarters done, then arrives over the final quarter while its radius roughly
doubles - the mesh appears to rush outward past the camera. The whole plane is
hidden once the zoom progress passes `1.2`.

The field's fragment program is a large one built on an open-simplex gradient
noise implementation over a body-centred-cubic lattice, with analytic
derivatives. Its uniforms are `uTexture`, `uZoom`, `uTime`, `uRatio`, `uAlpha`,
`uRadius` and four colours (Section 8.7). The noise drives the travelling
highlight that runs along the hexagon edges; the two shine colours are the
line highlight and its bloom.

**Capability requirement - normative.** The hexagon lattice must be sampled from
a tiling texture, not generated per-fragment, and the highlight must be driven by
gradient noise with derivatives so the glow has a direction rather than
flickering per cell.

### 8.5 Coverage patches

Small billboarded sprites pinned to latitude and longitude on the globe, each
composed of a glow sprite behind a content sprite.

| Element | Scale | Note |
|---|---|---|
| Glow | `0.36` | shared radial glow map |
| Content | `0.17` | per-patch map |

Placement uses an Euler rotation in `ZYX` order built from the patch's latitude
and longitude in degrees - latitude negated, longitude direct, roll zero - so
the patch sits tangent to the sphere at its coordinate. The wrapper's `z` is
`1.75` plus the content map's aspect ratio, which pushes wider patches slightly
further out so they do not intersect the sphere.

Show and hide are scale tweens on the wrapper group, not opacity:

| Transition | To | Duration | Ease | Delay |
|---|---|---|---|---|
| Show | scale `1` on all axes | `1.2s` | `power3.out` | random, `0` to `1s` |
| Hide | scale `0` on all axes | `0.45s` | `power3.out` | random, `0` to `0.3s` |

The randomised delay is what makes a group of patches appear to pop in
organically rather than as a set. Reproduce the randomisation, not a fixed
stagger.

End-of-sequence patches are laid out on a fixed five-position rota, each
position multiplied by `0.135`, and the whole group's `z` is
`(1 - communityProgress) * 5.5`, so they fly toward the camera as the community
segment plays.

### 8.6 Scroll consumers

Three progress values are recomputed every frame from the markers of Section 2.4:

| Value | Between markers | Consumed by |
|---|---|---|
| Coverage progress | `hero` → `coverage` | globe slide timeline, applied only while in `(0, 1]` |
| Coverage zoom progress | `coverage` → `coverage_zoom` | globe zoom timeline while in `(0, 1]`; hexagon field alpha and radius; visibility cut at `1.2` |
| Community progress | `community_start` → `community_end` | hexagon field zoom uniform and end-patch depth, clamped to `[0, 1]` |

The globe's scale and position are interpolated between a mobile pair and a
desktop pair by a blend factor, so there is no breakpoint jump - the scene
crossfades continuously between two authored layouts as the viewport changes.

### 8.7 Scene palette

The scene's four colours are shader uniform defaults recovered verbatim from the
bundle source. Their values are tabulated once, in Section 3.8, together with
the two markup-measured stroke colours:

| Uniform | Name in Section 3.8 | Role |
|---|---|---|
| `uLineColor` | lattice line | hexagon lattice line |
| `uShineLineColor` | shine line | travelling highlight along a lattice edge |
| `uShineBlurColor` | shine bloom | bloom around that highlight |
| `uBgColor` | scene void | the ground the field is composited against |

Only the travelling highlight is allowed to be brighter than the brand blue. That
restraint is the whole effect - a lattice that reads as one material with a light
running through it, rather than as two colours of line.

### 8.8 Pointer picking

A ray caster runs every frame against a registered list of scene objects.
Pointer coordinates are normalised to the range `[-1, 1]` from window dimensions
and then divided by a scene scale factor. Pointer, touch-start and click are all
wired. Each pickable object carries its own roll-over, roll-out and click
handlers in user data, and the topmost intersection wins. When the picked object
changes, roll-out fires on the previous object before roll-over fires on the new
one.

**Capability requirement - normative.** Picking must be disable-able as a whole,
and disabling must also park the pointer far outside the scene so no stale
hover survives.

### 8.9 Runtime configuration

The scene loads a configuration document from `<ASSET_HOST>` at start-up, before
the scene is built. It declares the texture set - an identifier, an aspect ratio
and a source per entry - and the end-patch list. The scene is not constructed
until that document resolves.

**Capability requirement - normative.** Scene content must be data-driven from a
single configuration document so patches and textures can change without a code
change. Section 22.3 replaces every texture the document references with a
generator, keeping the identifiers unchanged so the rest of the scene code runs
unmodified.

> **In plain language.** This is the expensive one, and the reason the top of the home page feels like a
> single continuous thing rather than a stack of sections.
>
> Behind the first three sections of the home page sits a full-screen scene with a
> transparent background, so the words sit on top of it and the page's own colours
> show through. Everything in it is driven purely by where you have scrolled to.
> There is no independent clock except the one that keeps the surface shimmering.
>
> **The globe.** A dark sphere wrapped in a fine grid, with the grid appearing only
> over the continents - the diagonal hatching you can see across the Americas in
> the screenshots - plus faint coastlines. The grid is not a picture wrapped around
> a ball. It is worked out afresh for every pixel, which is why the lines stay
> exactly as crisp where the sphere curves away at the edge as they do facing you.
> Wrapped pictures always smear there; this does not.
>
> There is also a band that sweeps up the globe, which is how the grid can be wiped
> on and off as you scroll rather than simply fading.
>
> **The honeycomb.** As the globe finishes zooming, a honeycomb sheet arrives -
> absent entirely until the zoom is three-quarters done, then rushing in over the
> final quarter while roughly doubling in size, so it seems to fly outward past
> your head. A highlight travels along the honeycomb's edges, driven by a slowly
> drifting noise field, which is what stops it looking like a static wallpaper.
>
> | What it is | Technical name | What you would actually see |
> |---|---|---|
> | The travelling highlight | gradient noise with derivatives, sampled per pixel | A light that runs along the honeycomb's lines with a direction to it, brightening one region and dimming another, never twinkling cell by cell |
> | The honeycomb itself | tiling hexagon texture | A regular honeycomb, evenly lit, with a soft shoulder either side of each line |
>
> **The lit patches.** Small glowing tiles pinned to real latitudes and longitudes
> on the globe, each with a soft halo behind it. They do not fade in - they pop
> outward from nothing, each on a slightly different random delay of up to a
> second. Reproduce the randomness. A neat, even stagger looks mechanical; the
> random delay is what makes a group of them feel like a network waking up.
>
> **No jump between phone and laptop.** The scene does not have a phone layout and
> a laptop layout. It slides continuously between them as the window changes width,
> so dragging a window edge produces a smooth camera move.
>
> **A note on the colours.** Four colours live inside the scene, and they are very
> close to the brand blue. Only one of them - the travelling highlight - is allowed
> to be brighter. That restraint is the whole effect: it reads as one material with
> a light moving through it, rather than as two colours of line.

---

## 9. The vector-animation layer

Three drawing surfaces on the site are not the three-dimensional scene. They run
a state-machine vector animation runtime.

**Capability requirement - normative.** The build needs a second animation
surface that plays a named state machine, accepts named numeric and boolean
inputs at runtime, and emits named events back to page code. Section 22.5 gives
the zero-asset replacement.

**Observed implementation - informational.** A vector state-machine runtime,
detected by package identifier (tier 6), loading two documents by name and
caching their buffers before use.

### 9.1 Surfaces

| Surface | Size at rest | Position | Role |
|---|---|---|---|
| Transition cover | full viewport | fixed, band `2000` | loader and page transition |
| Community mark | `53 × 53` | inline, mid-page | scroll-driven hexagon mark |
| Ecosystem diagram | `880 × 800` | inline, lower page | interactive six-role diagram |

### 9.2 The loader state machine

Artboard and state machine both named `preloader`, layout fitted to cover with
centre alignment, autoplay on.

| Named input | Type | Use |
|---|---|---|
| `site-loaded` | trigger | fired when assets are ready |
| `hide` | trigger | dismiss without reveal |
| `reveal` | trigger | play the reveal sequence |

Emitted events and their handlers are in Section 6.7.

Visually, from the capture: a full-viewport brand-blue ground with the hexagon
mark centred, white on blue, at about `64px` across.

### 9.3 The community mark

Artboard and state machine both named `hexagon-scroll`, layout fitted to contain
with centre alignment, autoplay on, one numeric input named `progress`.

Drive:

```
raw       = scrollTriggerProgress            // 0 → 1 across the community track
shaped    = sin(raw * PI / 2) * 10
progress  = shaped                            // written every animation frame
```

The trigger spans from `4%` of the track past the top of the viewport to
`15%` before the bottom of the track reaches the bottom of the viewport, with
scrub smoothing of `1` second.

The sine shaping matters: it makes the mark's animation finish early and hold,
so the mark settles before the section scrolls away rather than completing
exactly at the boundary.

### 9.4 The ecosystem diagram

Artboard and state machine both named `ecosystem`, layout fitted to contain,
autoplay off - it is started and stopped by viewport visibility.

| Named input | Type | Use |
|---|---|---|
| `mobile` | boolean | set true at tablet width and below |
| `pause` | boolean | set true when the visitor takes manual control |
| `active` | number | the one-based index of the selected role |

Two-way binding:

- Clicking a role tab sets `pause` true and `active` to that tab's index.
- The animation emits `click_<n>` and `active_<n>` events; page code parses the
  index and activates the matching tab, so the diagram can drive the list.
- The animation emits `hover-pointer_on` and `hover-pointer_off`; page code sets
  the document cursor to pointer and back. This is how a drawing surface gets a
  hit-testable cursor without the page knowing its geometry.

Playback is gated on a trigger firing when the wrapper's top reaches 70 % of the
viewport height: entering plays, leaving pauses.

> **In plain language.** Three things on the site are drawn by a second animation system, separate from
> the scene above.
>
> | What it is | Technical name | What you would actually see |
> |---|---|---|
> | The loading cover | state-machine vector animation | A blue screen with the white hexagon mark in the middle, which announces to the page when it has finished so the page can begin |
> | The community mark | scroll-driven state machine | A hexagon mark in the middle of the community section that draws and blooms as you scroll past it |
> | The ecosystem diagram | interactive state machine | A large hexagonal arrangement of the six network roles, which you can click, and which can click the list beside it |
>
> The third one is the interesting one, because it talks in both directions.
> Clicking a role in the list highlights it in the diagram. Clicking a shape in the
> diagram highlights the matching row in the list. The diagram even tells the page
> when your pointer is over one of its shapes, so the cursor can change - which is
> how a drawing gets a clickable feel without the page knowing anything about what
> is drawn inside it. It pauses when it scrolls out of view and resumes when it
> comes back.
>
> The community mark has one detail worth preserving: its animation is shaped so it
> finishes early and holds, rather than completing exactly as the section leaves.
> It settles; it does not get cut off.

---

## 10. Route: Home

The longest route on the site: `16521px` of document at `1440 × 900`. Sections
in order.

### 10.1 Hero

Ground: the three-dimensional layer (Section 8), running the globe.

Contents, in order: eyebrow "Connectivity, everywhere"; a headline whose third
line cycles; a supporting line; two buttons.

The cycling headline is a bespoke component:

| Aspect | Value |
|---|---|
| Cycle period | `5000ms` per word |
| Words | three, vertically stacked at `100%` offsets |
| Transition | `transform 0.5s ease-in-out` on the stack |
| Hexagon marker | translates on `x` to the current word's rendered width, same transition |
| Stroke path lengths | `1000`, `968`, `933`, `898` - one per cycle position |
| Stroke animation | `stroke-dashoffset` interpolated between the current and next length across the cycle, so the outline redraws continuously |
| Frame driver | animation frame, elapsed time modulo the cycle period |

On each advance the component also calls the three-dimensional layer's picture
cycle, so the globe's coverage patches change with the word. That coupling is
the point of the section: the word and the scene are one statement.

### 10.2 Coverage

Ground: the globe zooms toward its coverage segment. Layout is a single centred
column: eyebrow "Coverage", an `h2`, a primary button, and a text link with the
signal-bar icon of Section 4.6.

### 10.3 Community

Ground: the hexagon field of Section 8.4 arriving, plus the community mark of
Section 9.3.

Four sequential statements share one pinned stage, each scrubbed by the word
cascade of Section 6.4. Around them, hexagon-masked portrait tiles and icon
tiles are scattered on the lattice, each with the brand-blue glow behind it.

The section's three chrome elements - eyebrow, hexagon mark and button group -
are set to `y: 101%` and transparent and are driven by two triggers, not one:

| Trigger | Start | Action |
|---|---|---|
| intro element bottom at 80 % of viewport | on enter | animate the three to `y: 0%`, opaque |
| none | on leave back | return them to `y: 101%`, transparent |
| outro element bottom at 80 % of viewport | on enter, scrubbed to the top | animate the three to `y: -101%`, transparent |
| none | on leave back | return them to `y: 0%`, opaque |

So the chrome rides up and out of the top of the stage as the section ends,
rather than fading.

### 10.4 Mission

A full-bleed display heading `Our mission` on a brand-blue ground, then a video
frame with a play control and a floating pill.

The frame's entrance is the site's most distinctive clip:

| Property | From | To | Duration | Ease |
|---|---|---|---|---|
| `clip-path` | `inset(50% 25% 0% 25% round 0px)` | `inset(0% 0% 0% 0% round 0px)` | `2s` | `power2.out` |
| copy words | `y: 101%` | `y: 0%`, opaque | `1s`, `0.1s` stagger | `power2.inOut`, `1s` delay |
| play control | `scale: 0, rotation: 360°` | `scale: 1, rotation: 0` | `2s` | `power2.inOut`, `1s` delay |
| visa line | `y: 101%` | `y: 0%`, opaque | `1s` | `power2.inOut`, `1s` delay |

The clip opens from a horizontal slot at the vertical centre - the frame appears
to be pulled open from a letterbox. A measured intermediate,
`inset(50% 25% 0% round 50px)`, confirms the mid-flight shape.

The floating pill uses the eyebrow clip of Section 6.5 with a much larger radius
token, `6em`, and a `0.5s` duration, on a paused timeline the play state drives.

The play control carries the two shadows of Section 3.6 - the larger spread is
its active state.

### 10.5 Roadmap

Five phase cards on a brand-blue ground, connected by a dashed serpentine track.

| Element | Mechanism | Values |
|---|---|---|
| Track segments | scrubbed clip | `inset(0 0 100% 0)` → `inset(0 0 0% 0)`, trigger top at 70 % of viewport to bottom at 70 % |
| Track dots | triggered scale | `scale: 0` → `1` over `0.6s`; scales back to `0` on leave and re-plays on re-entry |
| Card rows | class toggle | active class added when the row's top passes 70 %, removed on leave back |
| Track stroke width | breakpoint | `3` at desktop, `2` at tablet and below |

The clip on the segments is what makes the dashed line appear to draw itself
downward in step with the scroll. The dots are the only element on the site that
re-plays on re-entry in both directions.

### 10.6 Provider statistics

A display heading `Our impact` on off-white, then an eyebrow, an `h2`, a lead
paragraph, and a horizontal track of three statistic cards.

The counter is the detail worth getting right:

1. On build, each number element's text is parsed as an integer and stored, then
   the element is set to the literal string `00`.
2. Slides are positioned at `index × (slideWidth + 32)` pixels, with an
   inter-slide gap of `32`, and each slide's stacking order is
   `(index + 1) × 10` so later cards sit above earlier ones.
3. The track's width is set to `count × (slideWidth + 32) − 32`.
4. On the section entering at 80 % of viewport height, the slides animate from
   `y: 10rem` and transparent, staggered `0.1s` running from the last card
   backwards, on the house curve.
5. On completion, the first card gains an active class and each counter tweens
   its text content to the stored integer over `2s` on `power1.inOut`, snapping
   to whole numbers and zero-padding to two digits on every update.

The zero-padding is why the capture shows values like `06` and `11` mid-flight
while the finished values are `23`, `45` and `82`.

### 10.7 Ecosystem

An eyebrow, an `h2`, a six-row list of roles at left, and the vector diagram of
Section 9.4 at right. Rows: Consumers, Providers, Verifiers, Validators,
Holders, Alliances. Each row is a heading plus a paragraph plus a hairline rule;
the active row's paragraph is visible and the rest are collapsed.

Selection is two-way with the diagram (Section 9.4).

### 10.8 Product

An eyebrow, an `h2`, a lead paragraph, two buttons, and a composed screenshot
group showing a map application and two phone frames.

| Target | Set | To | Duration | Ease | Stagger |
|---|---|---|---|---|---|
| Interface frames | `y: 5rem`, transparent | `y: 0rem`, opaque | `1s` | `power2.out` | `0.2s` |
| Decorative paths | transparent, `scale` reduced | opaque, `scale: 1` | `0.5s` | `power1.inOut` | `0.1s` |

The frames' trigger fires when the section's top reaches the viewport centre;
the paths' fires at 90 %. Reset state for the frames is
`clip-path: inset(0% 0 0 0)`.

Behind the frames, the concentric hexagon field of Section 4.5 is drawn at large
scale and partly off-canvas.

### 10.9 Investors and partners

A twelve-tile grid. Each tile is a link with radius `10px`; behind each sits a
circular element at `100%` radius carrying
`radial-gradient(circle closest-side, #014ffe, rgba(1, 79, 254, 0))` and a
`matrix(4, 0, 0, 1.9, 0, 0)` transform - a circle stretched into a wide, flat
ellipse, which is the glow that appears under a tile.

Tiles are scrubbed on the Enterprise route (13 distinct transform values) and
triggered on Home.

### 10.10 Closing call to action and footer

A single centred button above the footer, then the footer of Section 5.6.

> **In plain language.** The long one - roughly eighteen screens deep on a laptop.
>
> **Hero.** Over the globe: a small label, a two-line headline, and a third line
> that cycles between three words - people, places, opportunities - changing every
> five seconds. A hexagon marker slides along to match the width of whichever word
> is showing, and an outline redraws itself continuously around it. And each time
> the word changes, the globe changes its lit patches to match. The word and the
> scene are one sentence; that coupling is the point of the whole section.
>
> **Coverage.** The globe zooms. One label, one heading, one button, one link.
>
> **Community.** The honeycomb arrives. Four statements share one stage,
> each rolling through the word cascade as you scroll. Around them, hexagon-cropped
> portraits of people scattered across the honeycomb, each with a blue glow behind
> it. The section's own label, mark and buttons ride up and out of the top of the
> stage as the section ends, rather than fading - you feel them leave.
>
> **Mission.** The words "Our mission" set enormous on blue, then a video frame
> that opens in the site's best single move:
>
> | What it is | Technical name | What you would actually see |
> |---|---|---|
> | The frame's entrance | animated clipping shape | The video is not there, then a horizontal slot opens at the middle of where it will be and pulls apart top and bottom, like letterbox curtains opening. It takes about two seconds - unusually slow, and deliberately so |
> | The play button's entrance | scale and rotation | It spins a full turn as it grows from nothing, arriving a second after the frame starts opening |
>
> **Roadmap.** Five phase cards on blue, joined by a dashed line that draws itself
> downward exactly in step with your scroll, with dots that pop into place at each
> junction. The dots are the only thing on the site that re-plays every time you
> pass them, in both directions.
>
> **Statistics.** Three cards showing percentages. They do not simply appear. Each
> one starts reading double-zero, the cards fly up from below in reverse order -
> last card first - and then the numbers count up to their real values over about
> two seconds, always showing two digits. That is why a screenshot taken mid-flight
> catches values like "06" and "11" when the finished numbers are much larger.
>
> **Ecosystem.** Six roles listed at left, the interactive diagram at right, each
> driving the other.
>
> **Product.** A label, a heading, two buttons, and a group of screenshots showing
> the map application and two phone screens, rising into place one after another.
> The big concentric rings sit behind them, half off the screen.
>
> **Partners.** Twelve tiles, each with the stretched blue glow behind it.
>
> **Close.** One centred button, then the footer.

---

## 11. Route: About

Document height `4280px` at desktop. Ground alternates blue, off-white, black.

### 11.1 Company statement

A two-column block: a hexagon-notched photograph at left, and at right an
eyebrow, a heading and a long paragraph, both word-split and scrubbed.

### 11.2 Accomplishments

Same two-column construction, mirrored: copy at left on brand blue, photograph at
right. The photograph's frame carries the corner notch of Section 4.8.

### 11.3 Our team

A display heading `Our team` in black on an off-white panel whose top corners
carry the extra-large radius, then an eyebrow chip, a centred lead paragraph, and
a grid of leadership cards.

Each card: a hexagon-masked portrait on a blue-to-deeper-blue vertical gradient,
the person's name at `h4`, their role beneath at body size, a three-line
biography clamped with an ellipsis, and the professional-network icon of
Section 4.10 as a small rounded square link. Card hover raises the whole card to
`opacity: 0.8`.

Portraits are duotone: greyscale subject on the blue gradient. Section 22.7
generates them.

### 11.4 Partnering call to action

An eyebrow chip `Join us`, a centred heading, and one button, on the deepest
black ground on the site.

### 11.5 Route-specific motion

The About route's scroll matrix shows `transform` on the background element of
the impact section across three frames - a slow parallax on the section ground -
and `mask-image` changing across two frames on the image grid, which is the
notch mask animating rather than the image.

> **In plain language.** Four screens. The ground changes from blue to off-white to black as you go.
>
> A photograph beside a paragraph, then the same arrangement mirrored, then the
> words "Our team" set enormous in black on a pale panel with very round top
> corners, then the leadership cards.
>
> Each leadership card is a hexagon-cropped portrait - greyscale person on a blue
> gradient - with a name, a role, three lines of biography that trail off, and a
> small link to their professional profile. The whole card lifts slightly when you
> point at it.
>
> The page ends on the darkest ground on the site, one small green chip reading
> "Join us", one question, and one button.
>
> One quiet detail: the background of the impact section drifts at a different
> speed from the content in front of it as you scroll. It is subtle enough that
> most visitors will only feel it.

---

## 12. Route: Enterprise

Document height `2406px` at desktop - the shortest content route.

### 12.1 Contact form

An eyebrow `Enterprise`, a scrubbed word-split paragraph, and a form. Fields:
name, work email, company, a reason-for-contact select and a message. Select
options, verbatim, are in Section 21.5. Submit is the primary button labelled
`Sign-up`.

Success and failure states are pre-rendered and toggled, not injected: a success
line and an error line both exist in the markup at all times.

Form input wrappers carry radius `30px`.

### 12.2 Case studies

An `h2` `Case Studies` and a row of article cards filtered to the case-study
category, using the card of Section 13.2.

### 12.3 Partner grid

The tile grid of Section 10.9, here scrubbed: 13 distinct transform values and
11 opacity values across the nine frames, the highest count on the route.

> **In plain language.** The shortest page. A label, a paragraph that rolls in on scroll, and a contact
> form - name, work email, company, a reason for getting in touch chosen from five
> options, and a message.
>
> The form's success and failure messages are already sitting in the page,
> invisible, waiting to be shown. Nothing is built on the fly. It is worth knowing
> because it means the messages can be checked and styled before anyone ever
> submits anything.
>
> Below that, case-study cards, and the partner tiles - which on this page are tied
> to scroll rather than playing once, and are the busiest thing on the page.

---

## 13. Route: Media

Document height `4924px` at desktop.

### 13.1 Header and featured article

An eyebrow `Media`, a scrubbed two-line statement, and a featured article panel.
The featured panel is the only element on the site besides the mission frame
that carries `perspective: 1000px`, and its clip is scrubbed across three
frames - it opens as you scroll onto it.

Featured panel parts are individually tagged: parent, mask, tag, text,
paragraph, button.

### 13.2 Article card

The site's most reused component.

| Part | Spec |
|---|---|
| Top | image area, radius `6.88194px 6.88194px 0px 0px`, corner-notched |
| Base | body area, radius `0px 0px 0px 6.88194px`, ground `#e2ebff` |
| Pills | one per category, radius `4.58796px`, label at `--text--label` |
| Heading | `h3`, two lines, ellipsis |
| Paragraph | body, three lines, ellipsis |
| Link | `Read more`, carries the blue duplicate-glyph shadow |

Card pill and link are both scrubbed on this route.

### 13.3 Filter bar

A radio group rendered as a pill rail on a brand-blue ground: `All`,
`Case Study`, `Community Stories`, `Educational`, `Industry Standards`, `Team`,
`Technology`. The selected pill is a white capsule with a small filled dot at its
left; the rest are transparent with white labels. Radii: `32px` on the radio
outer and its custom input.

Filtering is client-side over the already-rendered collection.

### 13.4 Article detail - inferred

No article detail page was captured. The page identity `blog-article` exists in
the loader's dispatch table (Section 2.3), so the template does exist.
Specify it as: the article card's fields promoted to a page - hero image with the
notch mask, category pills, `h1`, dateline, body in the long-form legal style of
Section 14.2, and the newsletter footer. **Inferred; expect to adjust.**

### 13.5 In the news

An `h2` `In the News`, then a list of outbound press cards: outlet pill, heading,
summary, and a `Go to article` link.

### 13.6 Videos

An `h2` `Videos` and a pair of video cards, each opening the modal of
Section 15.6.

> **In plain language.** The article index, and the site's most reused component lives here.
>
> **The article card** is the notched card: image on top, pale blue body below,
> one or more category chips, a two-line heading, a three-line summary that trails
> off, and a "Read more" link that does the rolling-label move in blue.
>
> **The filter rail** is a row of pill buttons on blue - All, Case Study,
> Community Stories, Educational, Industry Standards, Team, Technology. The chosen
> one is a white capsule with a small dot at its left. Filtering happens instantly
> in the page; nothing is fetched.
>
> **The featured panel** at the top of the page is one of only two things on the
> whole site with real depth to it - it has perspective, so it tilts fractionally
> rather than sitting perfectly flat - and it opens as you scroll onto it.
>
> **Article pages are a gap.** We could not capture one, though we know they exist
> because the loading system has a name for them. The specification above is our best
> reconstruction from the card fields, and is labelled as such. Expect to adjust it.
>
> Below the index: a list of press mentions, each with the publication's name on a
> chip, and a pair of video cards.

---

## 14. Route: Terms and Privacy

### 14.1 Shared shell

Both legal routes use the same shell: the global header, a title block, a
long-form body column, and the global footer. Their scroll matrices show only
eight to nine scrubbed selectors, all of them global chrome, which confirms
there is no bespoke motion here.

Document heights at desktop: Terms `11610px`, Privacy `13682px`.

### 14.2 Long-form body

Single column, body at `--text--body-reg`, headings at `--text--h3` and
`--text--h5`, generous vertical rhythm from `--gap--med`. Link colour is the
brand blue with the duplicate-glyph shadow. The legal font token
(`--legal`, Section 3.3) governs this column and nothing else.

> **In plain language.** Two long documents in the same plain shell: top bar, title, one column of text,
> footer. They are the longest pages on the site by a wide margin and the least
> animated - nothing moves on them except the furniture that moves everywhere.
>
> Body text is comfortable rather than small, links are brand blue and do the
> rolling-label move, and the legal text has its own typeface slot so it can be
> replaced wholesale without touching the rest of the site.

---

## 15. Module and component architecture

### 15.1 Module boundaries

Each of these owns its own initialise and teardown pair. Teardown is not
optional: the reference kills every scroll trigger it created, clears inline
properties it set, and in two cases replaces animated nodes with clones to drop
listeners. A build without teardown leaks handlers on every page transition.

| Module | Owns |
|---|---|
| Chrome | header, dropdowns, mobile panel, notice bar |
| Footer | the four-wave entrance of Section 5.6 |
| Reveal | word and character splitting, section entrance, eyebrow chip |
| Scroll | smooth-scroll lifecycle, start and stop controls, root state classes |
| Scene | the three-dimensional layer, its markers and its configuration |
| Vector | the three state-machine surfaces of Section 9 |
| Hero cycle | the cycling headline of Section 10.1 |
| Roadmap | track clip, dots, row activation, breakpoint stroke width |
| Statistics | slider layout, entrance, counters |
| Ecosystem | tab list and two-way binding with the diagram |
| Collection | article cards, filters, featured panel |
| Forms | newsletter and enterprise contact, states |
| Modal | video modal |

### 15.2 The text splitter

**Capability requirement - normative.** Headings and paragraphs that animate are
split into per-word and, on display headings, per-character wrappers. Splitting
must be idempotent and reversible: teardown restores the original nodes, and
re-splitting after a breakpoint change must not nest wrappers.

**Observed implementation - informational.** A text-splitting library, present as
a surviving identifier (tier 6).

### 15.3 Button

One component, several skins.

| Part | Spec |
|---|---|
| Wrapper | radius `45.8796px`, or `66.6667px` on the taller variant |
| Label | duplicate-glyph roll-up, Section 5.5 |
| Chevron well | hexagon mask, Section 4.3; `transform-style: preserve-3d` |
| Chevron | rotated `matrix(-0.866025, -0.5, 0.5, -0.866025, 0, 0)` at rest, which is exactly `-150°`; the rotating variant sits at `matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)`, exactly `-45°` |
| Multi variant | two labels in one pill, split by a hairline; stacks vertically at mobile |

### 15.4 Eyebrow chip

Green ground `#61ff00`, black label, radius `6.88194px` at desktop and `10px` at
mobile, clip entrance of Section 6.5.

### 15.5 Statistic card

Pale ground `#e2ebff`, corner-notched, radius `6.66667px`; a large numeral with a
superscript percent sign, an outline icon from Section 4.7, a heading and a
paragraph. The active card inverts to brand-blue ground with white type.

### 15.6 Video modal

Wrapper at stacking band `100`; underlay at `opacity: 0.9`; the player is the
component of Section 15.7. Smooth scrolling is stopped while open.

### 15.7 Video player

A custom player, not the browser default. Its own token set governs it - renamed
here from the reference's studio prefix to a neutral one:

| Token | Value |
|---|---|
| `--vp-primary-color` | `rgba(255, 255, 255, 0.916)` |
| `--vp-icon-color` | `#ffffff` |
| `--vp-icon-size` | `1rem` |
| `--vp-button-size` | `1.6rem` |
| `--vp-button-border-radius` | `4px` |
| `--vp-control-button-bg` | `transparent` |
| `--vp-control-button-border-radius` | `4px` |
| `--vp-control-button-color` | `rgba(255, 255, 255, 0.916)` |
| `--vp-control-button-hover-bg` | `rgba(255, 255, 255, 0.916)` |
| `--vp-control-button-hover-color` | `#ffffff` |
| `--vp-control-button-hover-transition` | `background 0.2s` |
| `--vp-control-opacity` | `0` |
| `--vp-control-hover-opacity` | `1` |
| `--vp-control-margin` | `0 5px` |
| `--vp-controls-padding` | `5px` |
| `--vp-progress-bar-bg` | `rgba(255, 255, 255, 0.916)` |
| `--vp-progress-bar-handle-color` | `rgba(255, 255, 255, 0.916)` |
| `--vp-progress-container-margin` | `0 10px` |
| `--vp-volume-control-bg` | `rgba(255, 255, 255, 0.916)` |
| `--vp-volume-icon-margin-right` | `5px` |
| `--vp-volume-range-width` | `100px` |
| `--vp-overlay-play-button-bg` | `rgba(0, 0, 0, 0.5)` |
| `--vp-overlay-play-button-color` | `rgba(255, 255, 255, 0.916)` |
| `--vp-overlay-play-button-size` | `4rem` |
| `--vp-overlay-z-index` | `10` |
| `--vp-background-overlay` | `rgba(0, 0, 0, 0.5)` |
| `--vp-loading-indicator-bg` | `rgba(0, 0, 0, 0.7)` |
| `--vp-error-message-bg` | `rgba(255, 0, 0, 0.7)` |
| `--vp-aspect-ratio` | `56.25%` |
| `--vp-transition-duration` | `0.3s` |

Controls are hidden at rest (`--vp-control-opacity: 0`) and revealed on hover.
The loading indicator uses the `spin` keyframe of Section 6.2 - the only place
it is used.

### 15.8 Viewport height variables

Two variables are maintained on the root: an application height set to the real
inner height, and a maximum viewport height. These exist so full-height sections
do not jump when mobile browser chrome collapses.

**Capability requirement - normative.** Full-height sections must size from a
script-maintained height variable, not from raw viewport units, and the variable
must only grow on mobile - shrinking it on chrome collapse is what causes the
jump.

> **In plain language.** This section is about how the build is organised, and it matters to you for one
> reason: **cleaning up after itself.**
>
> Every moving part of this site has to be able to shut down completely - cancel
> what it started, put back what it moved, and let go of what it was listening to.
> The site swaps pages without fully reloading, so anything left running from the
> previous page stays running. Do this badly and the site gets progressively
> slower and jerkier the longer someone browses, in a way that is very hard to
> diagnose later and trivial to prevent now.
>
> The pieces are the obvious ones: the furniture, the text reveals, the scrolling,
> the scene, the drawn animations, the cycling headline, the roadmap, the
> statistics, the ecosystem, the article list, the forms, and the video pop-up.
>
> A few components deserve a note:
>
> | Component | What is unusual about it |
> |---|---|
> | The text splitter | It chops headings into words and, on the two giant headings, into individual letters. It must be able to put them back - including after the window is resized and they need re-chopping |
> | The button | One component, several skins. Rolling label, hexagon well, and an arrow that is itself a hexagon fragment. A wide variant holds two labels in one pill and stacks them on a phone |
> | The video player | Not the browser's own player. It has its own complete set of settings - thirty of them - and its controls are invisible until you point at it |
> | Full-height sections | Sized from a number the page maintains itself rather than from the raw window height, because phone browsers grow and shrink their own toolbars while you scroll, and sections sized the naive way visibly jump when they do |

---

## 16. Responsive behaviour

### 16.1 Breakpoints

| Query | Purpose |
|---|---|
| `@media screen and (max-width: 991px)` | tablet and below |
| `@media screen and (max-width: 767px)` | large phone and below |
| `@media screen and (max-width: 479px)` | small phone |
| `@media (min-width: 768px)` | one desktop-up rule |

Captured widths: `1440px`, `990px`, `390px`. Note that `990px` is one pixel
inside the tablet query, so the tablet capture is the tablet layout.

### 16.2 What changes

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Header height | `76px` | `76px` | `63px` |
| Navigation | two dropdowns | two dropdowns | full-screen panel |
| Display headings | bleed both edges | bleed both edges | bleed both edges, fewer words per line |
| Statistic cards | three visible | one visible, horizontal track | one visible |
| Roadmap | alternating left and right of the track | alternating | single column, track at left |
| Team grid | four across | two across | one across |
| Buttons, multi variant | side by side | side by side | stacked |
| Notice bar | pinned bottom-right | pinned bottom-right | full width, button below text |
| Container padding | `--padding--container` | reduced | `--padding--small` |

### 16.3 Scene behaviour

The three-dimensional layer does not switch layouts at a breakpoint. It
interpolates continuously between an authored mobile transform and an authored
desktop transform using a viewport-derived blend factor (Section 8.6), so a
window drag produces a smooth camera move rather than a jump.

### 16.4 Vector diagram

The ecosystem diagram receives a boolean `mobile` input set true at tablet width
and below (Section 9.4), and re-evaluates it on breakpoint change.

### 16.5 Runtime breakpoint listeners

Two modules subscribe to a tablet media query and re-run on change: the roadmap
stroke width (Section 4.9) and the ecosystem diagram's mobile input. Both must
unsubscribe on teardown.

### 16.6 Scroll-scrubbed content at mobile

The scroll matrix shows the same scrubbed selectors at all three widths, with
comparable value counts - the word cascade runs 62 distinct transform values at
desktop and 61 at mobile on the About route. Do not disable the scrubbed reveals
at mobile; they are load-bearing for the reading rhythm.

> **In plain language.** Three widths were photographed: a laptop, a tablet and a phone. What changes:
>
> | Thing | Laptop | Tablet | Phone |
> |---|---|---|---|
> | Top bar | Two dropdowns | Two dropdowns | One button, full-screen panel |
> | Statistic cards | Three side by side | One, on a sliding track | One |
> | Roadmap | Cards alternate left and right of the line | Alternating | Single column, line at the left |
> | Leadership grid | Four across | Two across | One across |
> | Wide buttons | Side by side | Side by side | Stacked |
> | Notice bar | Bottom-right corner | Bottom-right corner | Full width, button underneath |
> | Giant headings | Bleed off both edges | Bleed off both edges | Bleed off both edges, fewer words per line |
>
> Two things do *not* change at a width, and both are deliberate.
>
> The scene never switches layouts. It slides between a phone arrangement and a
> laptop arrangement continuously, so a window drag is a camera move rather than a
> jump.
>
> And the scroll-linked text reveals run everywhere, at every size. We checked:
> they are just as busy on a phone as on a laptop. It is tempting to switch them
> off on small screens for performance; do not. They carry the reading rhythm, and
> without them the phone version reads as a different, flatter site.

---

## 17. Accessibility

The reference is weak here and the gaps are listed as requirements, not as
observations to copy.

### 17.1 Landmarks and headings

One `h1` per route. The header is a banner landmark, the footer a content-info
landmark, the navigation groups are navigation landmarks with distinct labels.
Section headings descend without skipping levels - the reference uses `h2` for
both eyebrows and section headings in places, which must not be reproduced: an
eyebrow is a decorative label and belongs in a non-heading element.

### 17.2 Keyboard

- Both dropdown groups open on focus and stay open while focus is inside. The
  reference already implements the focus and blur pair; keep it.
- The mobile panel must trap focus while open and restore it to the trigger on
  close.
- The video modal must trap focus and close on the escape key.
- The article filter rail is a radio group and must behave as one: arrow keys
  move between options, one tab stop for the group.
- Every interactive element must show a visible focus ring. The roll-up label
  (Section 5.5) must trigger on focus as well as hover.

### 17.3 Text alternatives

- Every icon in Section 4 is decorative except the signal-bar mark and the
  professional-network link, which need accessible names.
- The three-dimensional layer and all three vector surfaces are decorative and
  must be hidden from assistive technology.
- The video modal needs a text alternative for its content; the reference
  provides none.

### 17.4 Reduced motion - normative, not observed

When the visitor prefers reduced motion:

- Smooth scrolling falls back to native scrolling.
- The word cascade resolves to its end state with no transform, opacity only, at
  `--duration-s`.
- Scroll-scrubbed timelines are set to their end state and unbound.
- The three-dimensional layer renders one static frame at the scene's rest pose
  and stops its frame loop.
- The loader plays no animation and dismisses as soon as assets are ready.
- The cycling headline stops on its first word.

### 17.5 Contrast

Body text is `#f5f5f7` on `#0b0919` or on `#014ffe`, both of which pass. Two
combinations need checking and adjusting if they fail: the dropdown link's rest
state, `#e2ebff` at 60 % alpha on the dark panel, and the green chip's black
label on `#61ff00`, which passes for large text only. The chip label is set at
`--text--eyebrow`, so verify at the rendered size.

> **In plain language.** This is the part of the reference site that is weakest, so this section is a list
> of requirements rather than a description of what exists.
>
> The goal is simple to state: someone using only a keyboard, and someone listening
> to the page rather than looking at it, should get the same site.
>
> **By keyboard.** Every dropdown, every link, every form field, every filter must
> be reachable in a sensible order, and it must always be obvious where you are -
> a visible ring around whatever is currently selected. The dropdowns already do
> the right thing on keyboard; keep it. The phone menu and the video pop-up must
> hold your position inside them while open and hand it back when closed. The
> category filters must behave as one group you step into once and then move
> around inside with arrow keys, not seven separate stops.
>
> Importantly, the rolling-label effect must happen on keyboard focus, not only on
> hover. Otherwise a keyboard user gets a site with no feedback at all.
>
> **By ear.** All those hexagons and diagrams are decoration and should be silent.
> The moving scene should be silent. The two icons that carry meaning - the signal
> strength mark and the profile link - need names. The video needs a text
> alternative; the reference provides none.
>
> **For people who turn off animation.** Some people have a setting on that asks
> sites to stop moving, usually because motion makes them ill. The reference
> ignores it. This build must honour it: smooth scrolling reverts to normal
> scrolling, all the text simply appears rather than rolling, the scroll-linked
> sequences jump straight to their finished state, the moving scene draws one still
> frame and stops, the loading animation is skipped, and the cycling headline stops
> on its first word.
>
> **Contrast.** Most of the site is fine. Two combinations need checking at their
> real sizes: the dropdown links in their dimmed resting state, and the black text
> on the lime green chips, which is only comfortable at larger sizes.

---

## 18. Performance

### 18.1 Budgets

| Budget | Target |
|---|---|
| Largest contentful paint | under `2.5s` on a mid-tier laptop over a home connection |
| Frame rate with the three-dimensional layer visible | a steady 60 frames per second on a three-year-old laptop |
| Frame rate elsewhere | 60 frames per second |
| Main-thread work per frame in the scene | under `8ms` |
| Layout shift after the loader hands over | zero |

### 18.2 Where the reference spends

The captured payload is dominated by imagery and video: 313 image responses in
one modern format at `7.2MB`, 61 in a legacy format at `3.0MB`, 10 photographs at
`3.2MB`, and 7 video responses at `8.4MB`. Scripts are `0.66MB` across 98
responses and stylesheets `0.50MB` across 27.

Section 22 removes the entire image and video budget by construction. That is the
single largest performance win available and it is free.

### 18.3 Rules

- The three-dimensional layer must stop its frame loop entirely when it is
  scrolled out of range, not merely skip drawing.
- The ecosystem diagram is already gated on visibility; gate the community mark
  the same way.
- The scene's frame loop and the page's scroll-driven timelines must share one
  animation-frame callback. The reference runs several independent loops; do not
  reproduce that.
- Only `transform` and `opacity` may be animated on scroll. The measured
  exceptions - `clip-path` on the roadmap track and the mission frame, and
  `mask-image` on the image grid - are declared `will-change` on exactly those
  elements and nowhere else.
- Declared `will-change` in the reference: `transform` on 72 elements,
  `padding` on 18, `display` on 18, `clip-path` on 9. Keep the count in that
  range; `will-change` on everything is worse than none.
- The counter tween writes text content every frame for `2s`. Batch it to one
  write per frame and read nothing back.

### 18.4 Loading order

1. Critical stylesheet and the loader.
2. The vector runtime and the loader document, fetched in parallel and cached as
   buffers before either is used.
3. The scene configuration document, then the scene.
4. Everything else.

The reference caches both vector documents as array buffers under named keys
before constructing anything, so the same document can be instantiated twice
without a second fetch. Keep that.

> **In plain language.** Two targets, and the second is the demanding one: the first thing you see should
> arrive before you have time to think about waiting, and the moving scene should
> stay perfectly smooth on a three-year-old laptop.
>
> The good news is that the biggest win is free. Measuring the reference site, the
> overwhelming majority of what it downloads is photographs and video - over
> twenty megabytes of it - against well under two megabytes of everything else.
> Because this build generates all of its imagery rather than downloading it
> (Section 22), that entire cost disappears by construction.
>
> The rules that remain:
>
> - When the scene scrolls out of range, stop drawing it entirely. Not "draw it
>   more cheaply" - stop.
> - One clock for everything. The reference runs several independent loops, which
>   is wasteful; this build should run one and let everything read from it.
> - Only move things and fade things. Anything that forces the page to re-measure
>   itself while you scroll is expensive, and the handful of legitimate exceptions
>   are named individually in the specification above.
> - Warn the browser about what is going to move - but only about the things that
>   actually move. Warning it about everything is worse than warning it about
>   nothing.

---

## 19. Backend and data contract

The site is a static front end with four data touch points.

### 19.1 Article collection

Read-only. One collection, consumed by the Media index, the Enterprise case
studies row and the featured panel.

```
Article {
  id            string
  slug          string
  title         string
  summary       string          // three lines at card size
  categories    string[]        // from the fixed set in Section 13.3
  hero          ImageRef        // Section 22.7 generates this
  featured      boolean
  publishedAt   date
  body          richtext
}
```

Filtering by category is client-side over the full collection. Ordering is
newest first.

### 19.2 Press items

Read-only, separate from articles because they are outbound.

```
PressItem {
  id        string
  outlet    string
  title     string
  summary   string
  url       string
}
```

### 19.3 Newsletter

```
POST <NEWSLETTER_ENDPOINT>
  { email: string }
  → 200 { ok: true }
  → 4xx { ok: false, message: string }
```

The form has three states, all pre-rendered in the markup and toggled: idle,
success (`Thank you! You're on the list.`) and failure
(`Oops! Something went wrong, try again.`).

### 19.4 Enterprise contact

```
POST <CONTACT_ENDPOINT>
  { name, email, company, reason, message }
  → 200 { ok: true }
  → 4xx { ok: false, message: string }
```

`reason` is one of the fixed options in Section 21.5. States as above, with
copy `Thank you! Your submission has been received!` and
`Oops! Something went wrong while submitting the form.`

### 19.5 Scene configuration

```
GET <ASSET_HOST>/config
  {
    textures:   [ { id: string, ratio: number, file: string } ],
    endPatches: [ { texture: string, long: number, lat: number } ]
  }
```

Under Section 22.3 the `file` field is replaced by a generator identifier. The
`id`, `ratio`, `long` and `lat` fields keep their meanings so the scene code is
unchanged.

### 19.6 Router pre-registration and coverage map

Both are links out to `<APP_HOST>` and `<COVERAGE_MAP_URL>`. They are not part of
this build. The marketing site's contract with them is the link only.

> **In plain language.** There is remarkably little machinery behind this site. It is a static set of
> pages with four points where it talks to something else.
>
> | What | Direction | What it carries |
> |---|---|---|
> | Articles | The site reads | Title, summary, categories, image, date, body. Filtering by category happens in the page, over the whole list |
> | Press mentions | The site reads | Publication, headline, summary, and a link out |
> | Newsletter | The site sends | An email address. Three outcomes: nothing yet, thank you, or please try again |
> | Enterprise contact | The site sends | Name, work email, company, reason, message. Same three outcomes |
>
> There is a fifth, smaller one: the scene reads a small settings document at
> start-up that lists its lit patches and where they sit on the globe. That is what
> lets someone change which places light up without a developer.
>
> The router pre-registration and the coverage map are separate applications. This
> site's entire relationship with them is a link.

---

## 20. Build order

Ordered so that something is visible early and each stage is checkable.

| Stage | Deliverable | Checkable by |
|---|---|---|
| 1 | Tokens, scaling rule, type scale, colour, radii | a token sheet page rendering every token at three widths |
| 2 | Global chrome: header, dropdowns, mobile panel, footer, notice bar | keyboard-only navigation of every route |
| 3 | Icon set as inline geometry (Section 4) | an icon sheet at three sizes |
| 4 | Static home route: all sections, correct layout, no motion | a full-page capture that matches the reference at three widths |
| 5 | Remaining routes, static | as above |
| 6 | Reveal system: splitter, section entrance, eyebrow chip, roll-up label | scroll the site with motion on; nothing should pop |
| 7 | Smooth scroll and the scrubbed timelines | scroll backwards; reveals must un-play |
| 8 | Three-dimensional layer: renderer, camera, globe, procedural textures | the globe alone, full-screen, scrubbing correctly |
| 9 | Hexagon field, coverage patches, picking | the full home scene |
| 10 | Vector surfaces: loader, community mark, ecosystem diagram | load sequence and the two-way tab binding |
| 11 | Forms, collection, filters, modal | submit paths and the three form states |
| 12 | Accessibility pass, reduced motion, performance pass | Section 17 and Section 18 checklists |

Stages 8 and 9 can run in parallel with 6 and 7; nothing else can be reordered.

> **In plain language.** What gets built first, and what you can look at after each stage.
>
> | Stage | What is built | What you can check |
> |---|---|---|
> | 1 | The paint box - colours, sizes, spacing | One page showing every value at three widths |
> | 2 | The furniture - top bar, menus, footer, notice | Walk every page using only the keyboard |
> | 3 | Every icon, drawn from instructions | One sheet of all of them at three sizes |
> | 4 | The home page, laid out, motionless | Screenshots that match the reference at three widths |
> | 5 | The other five pages, motionless | As above |
> | 6 | The text reveals and the rolling labels | Scroll the site: nothing should pop |
> | 7 | Smooth scrolling and everything tied to it | Scroll backwards: reveals must un-play |
> | 8 | The globe | The globe alone, full screen, tracking your scroll |
> | 9 | The honeycomb, the lit patches, clicking on them | The complete home page scene |
> | 10 | The three drawn animations | The loading sequence, and the two-way diagram |
> | 11 | Forms, article list, filters, video pop-up | Submit things; check all three messages |
> | 12 | Accessibility, reduced motion, performance | The checklists in Sections 17, 18 and 23 |
>
> Stages 8 and 9 can happen alongside 6 and 7. Nothing else can be reordered - each
> stage genuinely needs the one before it.
>
> You get something worth looking at after stage 4, and something that feels like
> the real site after stage 7.

---

## 21. Copy deck

Verbatim from the capture, with brand and third-party names replaced by the
placeholders of Section 0.3. Line lengths were art-directed - keep replacements
at similar character counts.

### 21.1 Global

| Slot | Copy |
|---|---|
| Notice bar | `This website is a studio alteration of <BRAND>. For up to date information on <BRAND> visit the client site here.` |
| Notice bar, primary | `Understood` |
| Notice bar, secondary | `Take me to <BRAND>` |
| Mobile panel close | `CLOSE` |
| Newsletter placeholder | `Enter your email` |
| Newsletter submit | `Sign-up` |
| Newsletter success | `Thank you! You're on the list.` |
| Newsletter failure | `Oops! Something went wrong, try again.` |

### 21.2 Navigation

| Group | Items |
|---|---|
| Company | `About`, `Enterprise` |
| Resources | `Media`, `Litepaper`, `Media Kit` |
| Social | `Discord`, `X / Twitter`, `LinkedIn`, `YouTube` |
| Footer, Company | `Home`, `About`, `Enterprise` |
| Footer, Resources | `Blog`, `Case Studies`, `Media Kit`, `Litepaper` |
| Footer, Connect | `Discord`, `X`, `LinkedIn`, `Youtube`, `Telegram ES`, `Telegram LATAM` |
| Footer display line | `Connectivity everywhere.` |
| Footer buttons | `Discord`, `Enterprise` |

### 21.3 Home

**Hero.** Eyebrow `Connectivity, everywhere`. Headline `Expand your` /
`connection to` / cycling third line over `people`, `places`, `opportunities`.
Supporting line `Join the decentralized and secure <BRAND> ecosystem and expand
connectivity.` Buttons `Join Discord`, `Enterprise`.

**Coverage.** Eyebrow `Coverage`. Heading `Start earning points every day using
your existing router.` Button `Pre-register your router`. Link `Visit` /
`Coverage Map`.

**Community.** Eyebrow `Community`. Four sequential statements:

1. `The <BRAND> Community is building the first decentralized ecosystem for existing and future internet infrastructure.`
2. `The <BRAND> Ecosystem is designed to be the core of universal internet connection and access everywhere.`
3. `By working with leaders in the industry and our community, we're able to empower everyone participating in the ecosystem…`
4. `supplying more reliable, secure internet access everywhere.`

Buttons `Join Discord`, `Litepaper`, `GitHub`.

**Mission.** Display heading `Our mission`. Sub-display `Deployment in` /
`Latin America.` Pill `Play`. Button `Case Studies`.

**Roadmap.** Eyebrow `Roadmap`. Heading `Where we're going.`

| Label | Heading | Body |
|---|---|---|
| `PHASE 1` | `<BRAND> Community Launch` | `Founded since 2016 building Partnerships & Announcements in Wi-Fi & Web3, Private Sale #1, <BRAND> Ecosystem Launch, Community Points Launch, Coverage Map, Community Routers and Pre-Registrations, Points & Referrals Program, Ambassador Program, Litepaper & Roadmap and Website 2.0 Launch` |
| `PHASE 2` | `Platform: Beta Wi-Fi` | `IDP & ANP OpenRoaming Certifications, Enterprise Platform Launch (Beta), Rewards Launch, <BRAND> App Beta Launch (Validate & Verify), Surge Map Beta Launch, Whitepaper, Community Platform Beta (IDP & ANP), Partnerships & Announcements, <BRAND> Foundation, KOL Partnerships, Testnet Beta Launch, OEM Program, Private Sale #2, Blockchain Partner Announcement` |
| `PHASE 3` | `Platform: Testnet Wi-Fi` | `On-chain Proofs & Accounting Assurance, Burn & Mint Assurance, Charging & Payouts Assurance, Security Audits, Benchmarking Volume Settlements, Network Performance, TestNet Improvements, Developer Program 1.0, Public Token Launch, Conferences & Events, Partnerships & Announcements` |
| `PHASE 4` | `Platform: Mainnet Wi-Fi` | `<BRAND> Mainnet network live, Governance (off-platform), Bug Bounty Program, Exchange Listing Partners, Partnerships & Announcements, <TOKEN_TICKER> Onramp & Offramp` |
| `PHASE 5` | `<BRAND> Network Expanded+` | `The <BRAND> ecosystem will continue to evolve into connectivity; Governance (on-platform), expanding <BRAND> community programs (Ambassador, Developer, OEMs, +), more partnerships, 5G, and more. Follow our Litepaper for official updates to the Roadmap.` |

**Provider statistics.** Display heading `Our impact`. Eyebrow `Provider Stats`.
Heading `Data-led, with results to show.` Lead `For the past few years the
<BRAND> network has increased connectivity for leading enterprises.`

| Value | Heading | Body |
|---|---|---|
| `23%` | `Customers` | `Increase in local customers for businesses using the <BRAND> network.` |
| `45%` | `Connected Devices` | `Amount of increased connected devices for enterprises on <BRAND>.` |
| `82%` | `Data Transactions` | `Data consumption increase by customers now connected.` |

**Ecosystem.** Eyebrow `Ecosystem`. Heading `At <BRAND>, we're not building a
product, we're building an ecosystem.`

| Role | Body |
|---|---|
| `Consumers` | `There are two type of Consumers, individuals and institutions. They purchase connectivity services within the <BRAND> ecosystem.` |
| `Providers` | `Deploy connectivity infrastructure to provide connectivity to consumers and are rewarded for those services within the platform.` |
| `Verifiers` | `Verifies if deployments are active by checking whether the deployments provide the promised connectivity services, QoS and generates proof of density and proof of liveness.` |
| `Validators` | `Runs computers that participate in the verification of proofs and the blockchain consensus protocols, turning connectivity devices into nodes.` |
| `Holders` | `Members in the community who purchase and stake <TOKEN_TICKER> tokens in return for governance on strategic problem-solving.` |
| `Alliances` | `Our partners who support the <BRAND> network needs in various matters such as industry standards, adoption, and innovation.` |

**Product.** Eyebrow `Product`. Heading `Secure, simple and decentralized
platform.` Lead `Optimal control and coverage across the entire network and on
every device.` Buttons `GitHub`, `Litepaper`.

**Partners.** Eyebrow `Investors and Partners`. Twelve tiles, using the
placeholder names of Section 0.3.

**Closing.** Button `Join the <BRAND> network`.

### 21.4 About

Eyebrow `Company`. Heading `We are upgrading existing connectivity
infrastructure through the <BRAND> DePIN platform.`

Body: `<BRAND> was founded in 2016 as a software solution to upgrade
connectivity for telecommunication. First it was through Mesh networks. Building
tools and solutions for connectivity ultimately led the team towards building
decentralized connectivity, a distributed ecosystem. The platform is initially
built by the <BRAND> team and is ultimately expanded through a community
passionate about connecting all existing and new internet infrastructure into
the <BRAND> network and platform. Today, the team has offices in New York and
Porto creating impact in the telecommunications industry across the globe.`

Eyebrow `Accomplishments`. Heading `Impact and traction-first with leading,
Fortune 500 companies in telecommunication.` Body: `<BRAND> has been paving the
way in global connectivity with leadership teams featured in Forbes 30 Under 30
EU, European Commission EUtop50 mentors, accelerator alumni, Harvard Business
School Alumni, and more. Having successfully raised $10 million in a funding
round led by <PARTNER_LEAD>, <BRAND> collaborates with entities such as the
partners listed above on their cap table.`

Display heading `Our team`. Eyebrow `<BRAND> leadership`. Lead `The leadership
team behind the <BRAND> DePIN platform are pioneers in connectivity, Web3, and
telecommunications fueled with a passion for bridging regional divides.`

Eyebrow `Join us`. Heading `Interested in partnering with <BRAND>?` Button
`Build the <BRAND> network`.

### 21.5 Enterprise

Eyebrow `Enterprise`. Body: `<BRAND> for Enterprise. <BRAND> is the leading DePIN
platform for enterprises in expanding their existing connectivity, lowering
their capital and operating costs, and bringing them more customers and
transactions than ever before. Contact <BRAND> today to upgrade your network.`

Select label `Reason for contact`. Options:
`Partnership & Collaborations (Alliances)`, `Developing tools & solutions`,
`Exploring <BRAND> solutions`, `Enterprise account opening`, `Other`.

Heading `Case Studies`.

### 21.6 Media

Eyebrow `Media`. Statement `Insights and news from the <BRAND> ecosystem.
Thought leadership on the world of connectivity.` Featured label `Featured`.

Heading `All articles`. Filters `All`, `Case Study`, `Community Stories`,
`Educational`, `Industry Standards`, `Team`, `Technology`.

Card link `Read more`. Press card link `Go to article`. Headings
`In the News`, `Videos`.

Sample article titles and summaries, retained because they set the card's line
counts:

| Title | Summary |
|---|---|
| `Our ecosystem: a bird's eye view` | `Explore <BRAND>'s innovative ecosystem architecture, blending technology and community for a robust, decentralized network.` |
| `What is DePIN? Answering the 5 Most Important Questions about Decentralized Physical Infrastructure Networks` | `The essentials of DePIN and its impact on physical infrastructure. Explore how DePIN integrates with Web3 and blockchain to revolutionize connectivity, telecom, and Wi-Fi onto decentralized networks.` |
| `Welcome to <BRAND>!` | `Discover the impactful initiatives and strategic alliances driving innovation at <BRAND>.` |
| `What you need to know about OpenRoaming` | `Discover how OpenRoaming, a Wi-Fi roaming initiative, is revolutionizing global connectivity.` |

Video card titles: `<BRAND> Coverage Map Intro`, `<BRAND>: Our Mission
(preview)`.

> **In plain language.** Every word on the site, taken exactly as it appears, with the brand name and all
> third-party names swapped for placeholders.
>
> Two things to know before you edit any of it.
>
> **Line lengths were designed.** The headline that breaks across three lines
> breaks there because of how long those particular words are. Replacing a
> placeholder with something much longer or shorter will change where lines break,
> and on the giant headings that is very visible. The placeholders we chose are
> close to the originals in length for this reason.
>
> **Some phrases are load-bearing.** The four community statements are written to
> be read one after another as you scroll - they are one sentence split across four
> screens, not four separate claims. The five roadmap phases are dense lists on
> purpose; they are meant to look like a lot of work, and shortening them
> undermines the section.
>
> The full text is in the copy deck above, laid out section by section: the small labels, every heading, every paragraph, all six
> role descriptions, all five roadmap phases, the three statistics, every button
> label, all the form messages, and the article summaries.

---

## 22. Zero-asset substitution guide

Every binary the reference loaded is replaced here by a procedural recipe. The
build ships no image, video, font file, three-dimensional model, audio file or
vector-animation document.

The values proposed in this section were chosen, not measured, which is why the
whole section is exempted from the fidelity gate.

<!-- lint:allow P4,P6 -->

### 22.1 Reference asset manifest

What the reference loaded, by class, and where each is replaced.

| Class | Count and weight | Replaced in |
|---|---|---|
| Photography, modern format | 313 responses, `7.2MB` | 22.7 |
| Photography, legacy formats | 71 responses, `3.4MB` | 22.7 |
| Photography, source | 10 responses, `3.2MB` | 22.7 |
| Video | 7 responses, `8.4MB` | 22.8 |
| Web fonts | 3 files | 22.6 |
| Scene textures - `earth-gradient`, `earth-map`, `hexagon`, `patch_glow`, `patch_city`, `patch_bluetooth`, per-patch content maps | 9 files | 22.3, 22.4 |
| Mask shapes - hexagon mask, card base, hexagon clip, one-to-one cards | 5 files | 22.2 |
| Vector animation documents - preloader, ecosystem | 2 files | 22.5 |
| Vector runtime binary | 24 responses | 22.5 |
| Coverage map ground image | 1 file | 22.7 |

### 22.2 Mask shapes

All five mask files are silhouettes and all five are already in this document as
path geometry. Do not load them; inline them.

| Mask | Geometry |
|---|---|
| Hexagon, buttons and portraits | Section 4.3 outline path, used as a clip source |
| Card base with corner notch | Section 4.8, `0 0 444 206` |
| Speech-tail card | Section 4.8, `0 0 204 126` |
| Section base curve | Section 4.8, `0 0 1728 756` |
| One-to-one card, left and right | the `0 0 444 206` path with the notch mirrored on the horizontal axis |

Apply them with a clip path referencing an inline shape and a bounding-box
coordinate system, so one definition scales to every card size.

### 22.3 Globe textures

Two textures, both generated on a drawing surface at start-up and uploaded once.

**Colour ramp.** `1 × 256` pixels. A vertical linear gradient from `#0b0919` at
the top through `#012370` at 55 % to `#014ffe` at the bottom. This is the only
input that sets the globe's overall temperature; nudging the middle stop is the
fastest way to retune the whole scene.

**Land mask.** `2048 × 1024`, equirectangular, and it only needs two channels:

- **Red** - land coverage, used to gate the wire grid to continents. Generate it
  from a simplified continent outline set drawn as filled paths in white on
  black. A low-detail outline is sufficient and is visually preferable: the
  reference's grid is coarse enough that coastline detail below about one degree
  never resolves.
- **Green** - coastline strokes. The same paths stroked at `1.5px` in white,
  drawn to the green channel only, then blurred by one pixel.
- Blue and alpha are unused.

If no continent outline is available, an acceptable fallback is a
low-frequency gradient noise field thresholded at `0.55` to produce plausible
land masses. Mark that fallback in the build so it is not mistaken for real
geography.

### 22.4 Hexagon tile

`512 × 512`, seamlessly tiling, greyscale.

Draw a hexagonal lattice with flat-topped cells of circumradius `64px`. Each cell
is stroked at `2px` in white on a black ground, with the stroke drawn twice -
once at full opacity and once at `3px` and 25 % opacity - so the shader's
sampling picks up a soft shoulder either side of the hard line.

Offset every other row by half a cell width and set the vertical pitch to
`circumradius × 1.5` so the tile wraps cleanly on both axes.

The shader reads this texture's luminance and multiplies it by the travelling
noise highlight, so the tile must be a clean lattice with no lighting baked in.

### 22.5 Vector animation documents

The two state-machine documents are replaced by hand-built equivalents that
expose the same named inputs and emit the same named events, so no calling code
changes.

**Loader.** A full-viewport brand-blue ground with the hexagon mark of
Section 4.1 centred at `64px`, drawn as inline vector geometry, not on a drawing
surface. Behaviour:

| Input | Behaviour |
|---|---|
| `site-loaded` | emit `start-site-loaded`; the mark's inner tick draws itself over `600ms` on the house curve; the ground wipes upward over `800ms`; emit `end-site-loaded` on completion |
| `hide` | fade to transparent over `300ms`, emit `end-site-loaded` |
| `reveal` | the inverse wipe, for page-to-page transitions |

**Community mark.** The concentric hexagon field of Section 4.5, with ring `n`'s
opacity and scale driven by the `progress` input: ring `n` is fully drawn when
`progress ≥ n × (10 / ringCount)`. That reproduces the outward-blooming mark and
takes the same `0` to `10` input range.

**Ecosystem diagram.** A hexagonal arrangement of six role nodes around a centre
node, connected by lines. Behaviour:

| Input or event | Behaviour |
|---|---|
| `active` | the node at that one-based index scales to `1.1` and takes the brand blue; the rest return to outline |
| `mobile` | the arrangement collapses from a ring to a two-column stack |
| `pause` | stops the idle auto-advance |
| `click_<n>` | emitted on node click |
| `active_<n>` | emitted when the idle advance changes node |
| `hover-pointer_on` / `_off` | emitted on node pointer enter and leave |

Idle behaviour, inferred from the capture: the diagram advances through the six
roles on its own until the visitor clicks, after which `pause` holds it.

### 22.6 Fonts

The reference used one licensed commercial display face and one licensed text
family. Neither may be redistributed, so both are replaced by open faces.

| Role | Substitute | Fallback stack |
|---|---|---|
| Display and headings | a wide geometric grotesque with a single-storey `a` and a very large `x`-height, such as Poppins at 700, served from a public font service | `"Poppins", "Century Gothic", "Futura", system-ui, sans-serif` |
| Body and interface | a neutral grotesque at 300 and 500, such as Inter, served from a public font service | `"Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif` |
| Legal | as body | same stack, bound to its own token |

Naming a font served from a public font service is not an asset dependency. The
fallback stacks are normative: the display face's wide, round forms are what
make the display headings work at `18.75em`, and a narrow fallback will reflow
those headings badly.

### 22.7 Photography

Every photograph is replaced by a seeded generator that produces a deterministic
abstract image at the required aspect ratio.

**Generator.** For a seed and a size:

1. Fill with a two-stop linear gradient at `35°`, picking both stops from the
   palette of Section 3.2 by hashing the seed. Portrait seeds always draw
   `#014ffe` to `#012370`; article seeds may draw `#012370` to `#0b0919` or
   `#e2ebff` to `#adc6ff`.
2. Overlay three to five hexagons of the Section 4.1 geometry at random scales
   between `0.2` and `0.9` of the short edge, at `8%` opacity in `#f5f5f7`.
3. Overlay the grain of Section 22.9 at `6%`.
4. For portrait slots, draw a centred elliptical silhouette in `#0b0919` at
   `12%` opacity so the hexagon mask has a subject-shaped mass to crop.

**Coverage map ground.** A `1600 × 1000` field of straight lines at two
orientations - a street grid - drawn in `#014ffe` at `20%` on `#0b0919`, plus
forty scattered hexagon markers, half in `#014ffe` and half in `#61ff00`. It is
composited with `color-dodge` (Section 3.6), which is what makes the lines glow.

### 22.8 Video

Seven video responses, `8.4MB`. Both video slots are replaced by a generated
loop rather than by a still.

**Mission video.** A drawing surface animating the concentric hexagon field of
Section 4.5: rings pulse outward from the centre on a `6s` loop, each ring's
opacity following `sin` of its phase, over the brand-blue-to-deep-blue gradient.
The play control, the pill and the clip entrance of Section 10.4 all remain - the
control simply starts and stops the loop.

**Media video cards.** Static generated posters from Section 22.7 plus the play
control; the modal opens the same generated loop.

**Limitation, stated honestly.** The reference's video content is a documentary
sequence of field deployments. No generator reproduces that. What is specified
here reproduces the section's *motion and colour behaviour*, not its subject.
If real footage exists, it drops into the same slot with no other change.

### 22.9 Grain

A tiling noise texture as an inline vector filter, expressed as a data source
rather than a file:

- Turbulence with a base frequency near `0.9`, four octaves, fractal noise type.
- A colour matrix with saturation `0` to remove the colour speckle.
- A component transfer reducing alpha to about `0.05`.
- Tile at `300px`.

Used at `6%` over generated photography and at `3%` over the deep sections.

### 22.10 Evidence gaps

Stated plainly, because a reader who cannot read the ledger has no other way to
know which parts are reconstruction.

| Gap | Consequence |
|---|---|
| Hover deltas were found on one element only - the dropdown link. The capture's hover pass reported zero elements with deltas on the home route. | The roll-up label of Section 5.5 is reconstructed from the duplicate-glyph shadows and the transform transitions, not from a measured before-and-after. It is the single most likely thing in this document to need adjustment. |
| The copy extractor caps at 120 elements per route. | Footer copy and the About route's lower sections were transcribed from screenshots rather than from the copy deck. Section 21.2 and Section 21.4 are affected. |
| No article detail page was captured. | Section 13.4 is inferred from the card fields and the loader's page-identity table. |
| The vector animation documents are binary and their timelines are not recoverable. | Section 22.5 is a behavioural contract - same inputs, same events - not a reconstruction of the original animation. |
| Scene texture content is not recoverable from the bundle. | Section 22.3 and Section 22.4 are generators chosen to produce the same shader response, not copies. |
| Header height was derived from rendered rectangles, not from a declared value. | Section 5.1 heights are measurements of the result, not of the rule. |
| Root font-size scaling rule was not recovered as source. | Section 3.1 states the requirement; the exact viewport-to-root curve must be re-derived from the three captured widths. |

<!-- lint:end -->

### 22.11 Classification, substitutions and gate deviations

The rest of what a reviewer needs in order to judge this document, rather than
build from it.

**Taxonomy.** The five-key input file beside this document validates clean, and
two of its values are substitutions from a vocabulary narrower than any closed
enum:

| Field | Site vocabulary | Value written | Why |
|---|---|---|---|
| `domain` | decentralized wireless connectivity | `hardware-iot` | the nearest legal member: consumer hardware, devices, connectivity, networks. The enum carries no telecom vertical |
| `category` | a network, not a company | `solo_founder` | consumer and small-business, with public signup, which is what the newsletter and enterprise contact forms are |

`pattern: content-publishing` is exact, a marketing and article site, legal for
`solo_founder`. The archetype `network-coverage-showcase` is registered to this
project. The input file previously also carried a service profile and two
capability flags; the schema was narrowed to five keys and both were removed.
Neither fact is lost: the terminal action is still a persisted form submission
with a mail sidecar and no accounts, and visual and motion fidelity is still the
point of the task. Both statements now live here.

**One extra fidelity escape, at Section 3.8.** The evidence ledger builds its
colour table from stylesheet declarations, computed styles, root custom
properties and integer literals found in script source. It does not collect hex
colours that appear as string literals in bundle source, nor hex colours
declared inline on captured markup. Six such colours are load-bearing here, so
Section 3.8 carries the same narrow, greppable escape the asset manifest and the
substitution guide carry, over one table, with the provenance of every value
stated in the table itself. The alternative was to disable the gate for the
whole document, which is worse in every direction. **The fix for whoever
maintains the kit:** teach the ledger two more colour sources, hex string
literals in retained bundle source and inline fill and stroke attributes, which
are the same class of evidence its numeric-literal slot was added for. With that
change the escape disappears and the gate gets stricter, not looser.

**Typographic normalization.** The document is plain text throughout: no en
dashes, no em dashes. Where the reference's own copy used one, in page titles
and in two body sentences, it was normalized to a hyphen. The copy deck of
Section 21 is otherwise verbatim.

**Proper nouns deliberately kept.** `DePIN` and `OpenRoaming` are industry
vocabulary rather than brands. `Wi-Fi`, `Web3` and `5G` likewise. Three
third-party credentials naming institutions rather than partners were also kept,
because the copy carrying them would be meaningless without them. Everything
else, twelve investors and partners, six publications and four people, was
replaced with invented equivalents at comparable character counts and listed in
Section 0.3.

**Capture quality, for the next run.** The hover pass found computed-style
deltas on exactly one element type across six routes and none at all on the home
route, which is why Section 5.5 is the weakest part of this document. The
animation bundle was the opposite: bundled but not minified, so every duration,
stagger, ease name and set-state in Section 6 and in Sections 8 to 10 was read
directly out of it rather than inferred from the nine-frame scroll matrix. A
fully minified bundle would have produced a much weaker motion section from the
same capture. The reference also ships a developer control panel behind a debug
flag, exposing tone mapping and honeycomb zoom; it is dead weight in production
and this document does not carry it forward.

> **In plain language.** This is the section that makes the whole thing possible, and it is worth
> understanding even if you never read another line of the specification.
>
> The reference site downloads photographs, videos, fonts, mask shapes, textures
> for the globe, and two animation files. This build downloads none of them. Every
> one is replaced by a set of instructions for making something equivalent on the
> spot.
>
> | What the reference used | What replaces it | What you would see |
> |---|---|---|
> | Hundreds of photographs | A generator that makes a picture from a name | Abstract blue gradients with faint hexagons floating in them and a soft grain over the top. The same name always produces the same picture, so a card does not change between visits |
> | Portraits of people | The same generator, portrait-shaped | A blue gradient with a person-shaped dark mass in it, cropped to a hexagon. It reads as a portrait at a glance and does not survive a second look |
> | Two videos | A drawn loop | Rings of hexagons pulsing outward from the centre over about six seconds, on the blue gradient. The play button still works and still starts and stops it |
> | Two commercial typefaces | Two freely available ones | A wide round heading face and a plain body face. Naming a font from a public font service is not the same as shipping a font file |
> | Five mask shapes | Shapes already written down as coordinates | Identical. These were never really pictures; they were outlines, and outlines are just numbers |
> | The globe's surface | Two generated images | A blue-to-black colour ramp, and a rough map of where land is. The land map only needs to be roughly right - the grid over it is coarse enough that fine coastline detail never shows |
> | The honeycomb pattern | A generated tile | A clean honeycomb with a soft edge either side of every line |
> | Two animation files | Two hand-built equivalents | The same behaviour, triggered the same way, sending back the same signals. Not the same drawing |
> | The map background | A generated street grid | Blue lines on near-black with scattered hexagon markers, glowing rather than sitting flat |
>
> **Where we are guessing, and how much.** Six things could not be measured, and it
> is only fair to say so plainly:
>
> | What we could not measure | How much it matters |
> |---|---|
> | What happens when you point at things | This is the big one. Only one hover effect survived measurement. The rolling label - the site's signature move - was reconstructed from clues rather than observed, and it is the single most likely thing to need adjusting once you see it running |
> | Some of the page text | The text capture stops after a fixed number of items per page, so the footer and the lower part of the about page were transcribed by reading screenshots. Small risk of a typo, none of a wrong meaning |
> | Article pages | We know they exist; we never saw one. That template is a reconstruction |
> | The two drawn animations | These are locked inside a format we cannot read back. What we specify is the behaviour - same triggers, same signals - not a copy of the original drawing |
> | The globe's textures | Not recoverable. What we generate produces the same visual response, not the same picture |
> | The exact size-scaling rule | We know it scales with the window and we have three measured widths. The precise curve between them has to be re-derived |
>
> None of these blocks the build. All of them are worth a look once there is
> something to look at.

---

## 23. Acceptance checklist

Tick every line. Each one corresponds to something measurable in this document.

**Tokens and system**

- [ ] Every colour on the page resolves to a token in Section 3.2. No stray hex values.
- [ ] The green appears only on eyebrow chips and footer group headings.
- [ ] All spacing, radii and type sizes are in `em` and scale with the root rule of Section 3.1.
- [ ] The house curve of Section 3.5 is the only curve used by any user-triggered transition.
- [ ] Opacity transitions run at `0.3s` and geometric transitions at `0.6s`.

**Icons**

- [ ] Every icon in Section 4 is inline geometry with the quoted path data.
- [ ] The concentric hexagon field has 15 rings generated by progression.
- [ ] Roadmap track stroke width is `3` at desktop and `2` at tablet and below, and updates on breakpoint change.

**Chrome**

- [ ] Header padding animates on the scrolled-state class, not height.
- [ ] Dropdowns open on pointer and on focus, and stay open while focus is inside.
- [ ] Dropdown links move from 60 % to full `#e2ebff` on hover and focus, including both pseudo-elements.
- [ ] Every button and text link rolls its label up by exactly one line on hover and on focus.
- [ ] The mobile panel stops smooth scrolling while open and restarts it `0.5s` after close begins.

**Motion**

- [ ] Scrolling backwards un-plays every scrubbed reveal.
- [ ] The word cascade runs at `0.05s` stagger for headings and `0.01s` for paragraphs.
- [ ] The eyebrow chip's clip opens from a circle of its own radius, and its label slides in `0.3s` later.
- [ ] The footer's four waves fire at `0s`, `0.1s`, `0.2s` and `0.1s`.
- [ ] Nothing plays on a timer that should be gated on the loader's signal.

**Scene**

- [ ] The three-dimensional layer is transparent and composites under the page.
- [ ] All three scroll progress values derive from marker element centres, not document offsets.
- [ ] The hexagon field is absent until coverage-zoom progress passes `0.75` and hidden past `1.2`.
- [ ] Coverage patches show and hide on randomised delays, not a fixed stagger.
- [ ] The scene interpolates continuously between mobile and desktop layouts with no breakpoint jump.
- [ ] The frame loop stops entirely when the scene is out of range.

**Vector surfaces**

- [ ] The loader exposes `site-loaded`, `hide` and `reveal` and emits `start-site-loaded` and `end-site-loaded`.
- [ ] The page entrance is gated on `start-site-loaded`, not a timer.
- [ ] The community mark's progress is sine-shaped over the `0` to `10` range.
- [ ] The ecosystem diagram and its tab list drive each other in both directions.

**Content**

- [ ] Statistic counters start at `00`, tween over `2s`, snap to integers and zero-pad to two digits.
- [ ] Article filters operate client-side over the full collection.
- [ ] All three form states are pre-rendered and toggled, never injected.

**Accessibility**

- [ ] One `h1` per route; no eyebrow is a heading element.
- [ ] Full keyboard path through every route, with a visible focus ring throughout.
- [ ] Mobile panel and video modal trap focus and restore it on close.
- [ ] The scene and all vector surfaces are hidden from assistive technology.
- [ ] Reduced-motion mode behaves exactly as Section 17.4 specifies.

**Performance and assets**

- [ ] The build contains zero binary assets.
- [ ] One animation-frame callback drives the scene and the scroll timelines.
- [ ] `will-change` appears on fewer than 120 elements in total.
- [ ] Sixty frames per second with the scene visible on a three-year-old laptop.
- [ ] Zero layout shift after the loader hands over.

> **In plain language.** This section is a list of about forty things to tick off. You do not need to read it, but you should know what it is for: every line
> on it is something a person can check by looking at the finished site, and every
> line corresponds to a specific measurement earlier in the document.
>
> If you only check five things yourself, check these:
>
> 1. **Scroll backwards.** The text reveals must visibly un-play, not replay. This
>    is the single fastest way to tell whether the site was built to specification
>    or approximated.
> 2. **Point at a button.** The word should roll upward and be replaced by an
>    identical word, taking about as long as a slow blink. Not a fade. Not a colour
>    change.
> 3. **Watch the numbers.** The three statistics should start at double-zero and
>    count up, always showing two digits.
> 4. **Drag the window edge slowly.** The scene behind the top of the home page
>    should move like a camera, not jump between two layouts.
> 5. **Count the green.** It should appear on the small chips above section
>    headings and the footer group headings, and nowhere else at all.

