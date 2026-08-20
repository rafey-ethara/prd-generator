# <BRAND> — the build, in plain language

This is the companion to `PRD.md`. Same site, same sections, same numbers, told
without a single technical term. Read the two side by side: when a section here
raises a question, the section with the same number in `PRD.md` has the exact
answer.

---

## 0. How to use this document

There are two documents and they are not two drafts of the same thing.

`PRD.md` is written for the machine that will build the site. It is deliberately
unreadable — long tables of coordinates, exact timings, exact colours. Every
number in it was measured off the reference site by a program, not remembered by
a person, and rounding any of them would produce a different site.

This document is written for you. It says the same things in terms you can check
by looking at the finished page: what moves, what makes it move, and what it
should feel like.

**Anything written in angle brackets is a blank.** `<BRAND>` is where your
product's name goes. `<SITE_ORIGIN>` is where your web address goes. There are
about twenty of them and they are all listed in Section 0 of the other document.
We have also used stand-in names — invented people, invented partner companies,
invented publications — wherever the reference site used real ones. Those are
placeholders too. They were chosen to be roughly the same length as the
originals, because the layouts were designed around how long the real words are.

**What the site is, in one sentence a friend would understand:** it is the shop
window for a network where ordinary people share their home internet, get paid
for it, and the sum of all that sharing becomes coverage that big companies can
buy.

One more thing worth knowing before you read on. A handful of things in this
build could not be measured and had to be reconstructed from screenshots. Every
one of them is listed in Section 22, and each is labelled. Expect those to need
a round of adjustment once you can see them running.

---

## 1. Product overview

The site has one hard job: make something invisible feel physical.

Nobody can see a wireless network. So the page gives you one to look at — a
slowly turning globe with lit patches where the network reaches, and a honeycomb
that comes rushing toward you as you scroll. By the time you have read four
paragraphs you have watched the network being described and being drawn at the
same time.

Four kinds of visitor arrive, and each gets served in a different stretch of the
page:

| Who | What they want | Where they get it |
|---|---|---|
| Someone with a router at home | "What do I get for sharing?" | The coverage section, near the top |
| A company | "Can this carry my traffic, and what does it save me?" | The enterprise page and the statistics |
| Someone already in the community | "What's next, and when?" | The roadmap and the roles list |
| A journalist or partner | Proof, and who is behind it | The media and about pages |

The look is dark by default and loud where it matters. Two colours do all the
work — an electric blue that carries the brand, and a fierce lime green that
appears only on the small labels above each section heading. The green is rare
on purpose. Used more, the page stops looking like infrastructure and starts
looking like a party flyer.

Type is the other loud decision. Two words on the home page — "Our mission" and
"Our impact" — are set so large they run off both edges of the screen. Against
body text, they are about sixteen times the size. That is not decoration; it is
the page's punctuation.

You will know the build is right when: the top third of the home page reads as
one continuous scene with no visible seam between the moving background and the
words on top of it; scrolling backwards visibly un-does the text reveals rather
than replaying them; it stays smooth on a three-year-old laptop; and the whole
thing ships without a single image file.

---

## 2. Information architecture

Six pages: home, about, media, enterprise, and two legal pages. Article pages
exist behind the media index, though we could not capture one — see Section 13.

The top bar is deliberately sparse: no links at all, just two words that open
small panels. "Company" opens to About and Enterprise. "Resources" opens to
Media, the paper, and the brand kit. On a phone both collapse into one
full-screen panel that also adds the social links.

The footer is the real map. Three columns under green headings, plus a
newsletter box and the mark.

Two invisible pieces of plumbing matter here:

| What it is | Technical name | What it means for you |
|---|---|---|
| Each page announces its own identity | page-type data attribute | The loading animation knows which page it just finished covering, so each page can have its own entrance without the loader knowing anything about the page |
| Five invisible markers down the home page | scroll marker elements | These are the pins the moving background measures itself against. They carry no words and are never seen. If content above them changes length, the background stays in step automatically |

---

## 3. Design system

This is the paint box, and it is small.

**Colour.** Eight named colours, no more. An electric blue, a lime green, a
near-black with a bruise of blue in it, an off-white that is very slightly warm,
a pale ice blue for statistic cards, and a wash of the blue at a fifth strength.
That is the whole palette. Counting every coloured pixel on the site, the
off-white wins by a mile, the blue is a distant second, and the green barely
registers — keep that ratio and the page will look right.

**Type.** One wide, round, geometric family for headings, set heavy. One plain
family for everything else, in two weights: a light one for long reading and a
medium one for buttons and labels. Legal pages get their own slot so they can be
swapped without touching anything else.

**Size.** Everything on this site is measured relative to one number, and that
number grows and shrinks with the width of the window. This is why the site does
not jump between phone and laptop — it slides. It also means you should never
hard-code a size anywhere. Set the one rule and everything follows.

**Space and corners.** Six spacing steps, five gap steps, four corner roundings.
Every corner on the site is either a hexagon or a very generous curve. There are
no small tidy 4-pixel corners anywhere.

**Movement.** Three settings cover almost everything: a quick one about as long
as a blink for things fading in and out, a slower one about as long as a slow
blink for anything that moves or changes shape, and one motion curve used
everywhere. That curve barely moves for the first fifth of its life and then
glides a long way into a soft stop. It is the single most important thing to get
right, because it is what makes every hover on the site feel weighty rather than
snappy.

There is one rule inside that: fades finish before movements do. When something
both fades in and slides up, the fade lands first and the slide keeps going. It
reads as arriving rather than appearing.

**Repeated effects.** A short list, but each one is used dozens or hundreds of
times, which is what makes the site feel designed rather than assembled:

| What it is | Technical name | What you would actually see |
|---|---|---|
| Hexagon cut-outs | hexagonal mask | Photographs of people are not circles or squares — they are hexagons. So are the little wells at the end of every button. Used well over three hundred times across the site |
| Notched cards | corner-clipped mask | Cards have three normal corners and one that looks as if it has been sliced off at an angle, like a badge or a boarding pass |
| A second copy of every label | duplicate glyph text-shadow | Every button word is secretly printed twice, one directly below the other. You never see the second copy sitting still — see Section 5 |
| A stretched glow | radial gradient on a scaled circle | Behind each partner logo, a soft blue pool of light, wider than it is tall |
| One glowing map | color-dodge blend mode | The coverage map's streets do not sit flat on the dark ground; they glow through it. This is the only place on the entire site where this trick is used |

**Stacking.** A short list of who sits in front of whom: the loading cover above
everything, then the small notice at the bottom of the screen, then the phone
menu, then the top bar, then the video pop-up, then the page, then the moving
background at the very back.

---

## 4. Iconography

There are no icon files on this site. Every icon is drawn from instructions, and
`PRD.md` carries every one of them as coordinates.

That sounds fussy until you notice that every icon here is built out of the same
hexagon. The logo is a hexagon with a signal tick inside it. The arrow at the end
of every button is a hexagon fragment, not a normal arrow. The "connected
devices" icon is a cube drawn on a hexagon. The "data transactions" icon is a
globe drawn as a hexagon with lines across it. Redrawing any of them by eye
breaks the family resemblance, and the family resemblance is most of why the site
looks expensive.

Two icons are worth calling out because they are more interesting than icons
usually are.

**The concentric rings.** Fifteen hexagon outlines nested inside one another,
each stepped in by exactly the same amount. It appears large and half off the
edge of the screen behind the product screenshots. It must be generated by
repeating the step, not drawn fifteen times by hand — the perfect regularity is
what makes it read as one object rather than fifteen shapes.

**The section base curve.** The bottom edge of every pale section dips in the
middle. It looks like a wave and it is not one — it is a straight-sided shape
with a single shallow arc across the middle. Drawn as a true wave, it visibly
changes silhouette on a wide screen.

---

## 5. Global chrome

The furniture that appears on every page.

**Top bar.** Dark, full width, pinned to the top, with the logo at left and two
dropdown words at right. It notices when you have scrolled away from the very
top and tightens itself slightly — its padding shrinks rather than its height,
which is a subtle but real difference in how the words settle.

**Dropdown panels.** The panels are always there. They are not built when you
hover; they are simply clipped away from the bottom, and hovering releases the
clip so they unroll downward. They open on hover *and* on keyboard focus, and
they stay open while your attention is anywhere inside them — including in the
gap between the word and the panel, which is where most dropdowns on the web
fail.

**Dropdown links** sit at about two-thirds strength and go to full strength when
you point at them. This is the only colour change anywhere on the site that
survived measurement, which tells you something: hover here is carried almost
entirely by movement, not by colour.

**The phone menu** is a four-step sequence, and the order is the whole effect:
the little hexagons on the button spin and grow, then the panel slides in from
the right, then the links roll up into place one after another, then the buttons
follow. Closing runs it backwards, with the links leaving in reverse order.
Scrolling is frozen while the panel is open.

**The rolling label.** This is the site's signature move and it is invisible in
any screenshot, which is why it is easy to miss and easy to get wrong.

| What it is | Technical name | What you would actually see |
|---|---|---|
| A label printed twice, one line apart, inside a one-line window | duplicate-glyph text-shadow plus a transform transition | Point at any button and its word rolls upward out of view while an identical word rolls up from below to replace it — like a departure board flipping to the same word. Some links roll down instead of up. It takes about as long as a slow blink |

The rolled-in copy must come from the same words as the visible one, so that
someone listening to the page rather than looking at it hears the label once, not
twice.

**Footer.** Enters in four overlapping waves, each a fraction behind the last,
each rolling up from below. It plays once and does not replay.

**Notice bar.** A small dark panel in the bottom-right corner on a laptop, full
width on a phone, carrying one line of text and a dismiss button. Once
dismissed, it must stay dismissed.

---

## 6. Motion language

Everything that moves on this site does so in one of three ways, and telling them
apart is the difference between a build that feels right and one that feels
almost right.

| What it is | Technical name | What you would actually see |
|---|---|---|
| Something reacts to you | declared transition | You point at a button and it responds. Nothing to do with scrolling |
| Something plays when it arrives | trigger-once timeline | You scroll a section into view and it performs its entrance. Scroll away and back and it does not perform again |
| Something is tied to your finger | scroll-linked timeline | The animation's position is your scroll position. Scroll up and it runs backwards. It never plays on its own |

Get the third category wrong and the site feels like it is performing at you
rather than responding to you. That single distinction is most of the site's
character.

**The word cascade** is the most-used effect by a wide margin. Every heading and
paragraph that animates is broken into individual words, each hidden below its
own line. When the text arrives, the words roll up one after another, slightly
staggered — headings loosely, paragraphs almost together.

Where the text is tied to scrolling, the sequence is longer and stranger: the
words roll up, then hold at full strength through the middle of the scroll range
while individual words drift in and out, then roll up and away out of the top.
The screenshots show exactly this — a sentence where some words are solid and
others are still ghosting, and which words are which changes as you scroll. That
is not a rendering error; it is the effect.

**The green chip** above each section heading does not fade in. It grows
sideways out of a small circle, and its word slides in from the left behind the
growing edge a beat later. It is the most charming small detail on the site.

**The section entrance** puts those together: chip opens, word slides into the
chip, heading rolls up, paragraph rolls up almost as one, buttons follow, and any
extra items come last. Six things, each a fraction behind the one before, over
about a second in total.

**Loading.** The site does not start its page entrance on a stopwatch. The
loading animation tells the page when it has finished, the cover disappears, and
only then does the page begin. On a slow connection a stopwatch would leave the
page performing behind a cover nobody can see through.

**Reduced motion.** The reference site does not respect the setting some people
turn on to stop animation. This build must. Section 17 says exactly what changes.

---

## 7. Scroll system

Scrolling here is not the browser's own scrolling. Input is smoothed, so the page
glides to a stop rather than halting, and everything tied to scroll position
reads that smoothed value. Get this wrong and every scroll-linked effect on the
site stutters.

The clever part is how position is measured. Rather than remembering fixed
distances down the page, the site asks two invisible markers where they currently
are on screen and works out how far between them you have travelled. It does this
every frame. The consequence is practical: if you make a paragraph longer
anywhere above, nothing needs recalculating. The scene stays in step by
construction.

We measured which parts of the site are tied to scroll by photographing every
page at nine depths and comparing. The results are unambiguous:

| Page | What is tied to scroll |
|---|---|
| Home | Thirty-eight separate things, led by the word cascade, the roadmap track, the card entrances and the moving background |
| About and Media | Roughly twenty each, almost all of it text |
| Enterprise | Fifteen, led by the partner tiles |
| Terms and Privacy | Eight — the top bar and the footer only |

That last row is a design decision worth respecting: the legal pages get no
bespoke motion at all.

---

## 8. The three-dimensional layer

This is the expensive one, and the reason the top of the home page feels like a
single continuous thing rather than a stack of sections.

Behind the first three sections of the home page sits a full-screen scene with a
transparent background, so the words sit on top of it and the page's own colours
show through. Everything in it is driven purely by where you have scrolled to.
There is no independent clock except the one that keeps the surface shimmering.

**The globe.** A dark sphere wrapped in a fine grid, with the grid appearing only
over the continents — the diagonal hatching you can see across the Americas in
the screenshots — plus faint coastlines. The grid is not a picture wrapped around
a ball. It is worked out afresh for every pixel, which is why the lines stay
exactly as crisp where the sphere curves away at the edge as they do facing you.
Wrapped pictures always smear there; this does not.

There is also a band that sweeps up the globe, which is how the grid can be wiped
on and off as you scroll rather than simply fading.

**The honeycomb.** As the globe finishes zooming, a honeycomb sheet arrives —
absent entirely until the zoom is three-quarters done, then rushing in over the
final quarter while roughly doubling in size, so it seems to fly outward past
your head. A highlight travels along the honeycomb's edges, driven by a slowly
drifting noise field, which is what stops it looking like a static wallpaper.

| What it is | Technical name | What you would actually see |
|---|---|---|
| The travelling highlight | gradient noise with derivatives, sampled per pixel | A light that runs along the honeycomb's lines with a direction to it, brightening one region and dimming another, never twinkling cell by cell |
| The honeycomb itself | tiling hexagon texture | A regular honeycomb, evenly lit, with a soft shoulder either side of each line |

**The lit patches.** Small glowing tiles pinned to real latitudes and longitudes
on the globe, each with a soft halo behind it. They do not fade in — they pop
outward from nothing, each on a slightly different random delay of up to a
second. Reproduce the randomness. A neat, even stagger looks mechanical; the
random delay is what makes a group of them feel like a network waking up.

**No jump between phone and laptop.** The scene does not have a phone layout and
a laptop layout. It slides continuously between them as the window changes width,
so dragging a window edge produces a smooth camera move.

**A note on the colours.** Four colours live inside the scene, and they are very
close to the brand blue. Only one of them — the travelling highlight — is allowed
to be brighter. That restraint is the whole effect: it reads as one material with
a light moving through it, rather than as two colours of line.

---

## 9. The vector-animation layer

Three things on the site are drawn by a second animation system, separate from
the scene above.

| What it is | Technical name | What you would actually see |
|---|---|---|
| The loading cover | state-machine vector animation | A blue screen with the white hexagon mark in the middle, which announces to the page when it has finished so the page can begin |
| The community mark | scroll-driven state machine | A hexagon mark in the middle of the community section that draws and blooms as you scroll past it |
| The ecosystem diagram | interactive state machine | A large hexagonal arrangement of the six network roles, which you can click, and which can click the list beside it |

The third one is the interesting one, because it talks in both directions.
Clicking a role in the list highlights it in the diagram. Clicking a shape in the
diagram highlights the matching row in the list. The diagram even tells the page
when your pointer is over one of its shapes, so the cursor can change — which is
how a drawing gets a clickable feel without the page knowing anything about what
is drawn inside it. It pauses when it scrolls out of view and resumes when it
comes back.

The community mark has one detail worth preserving: its animation is shaped so it
finishes early and holds, rather than completing exactly as the section leaves.
It settles; it does not get cut off.

---

## 10. Route: Home

The long one — roughly eighteen screens deep on a laptop.

**Hero.** Over the globe: a small label, a two-line headline, and a third line
that cycles between three words — people, places, opportunities — changing every
five seconds. A hexagon marker slides along to match the width of whichever word
is showing, and an outline redraws itself continuously around it. And each time
the word changes, the globe changes its lit patches to match. The word and the
scene are one sentence; that coupling is the point of the whole section.

**Coverage.** The globe zooms. One label, one heading, one button, one link.

**Community.** The honeycomb arrives. Four statements share one stage,
each rolling through the word cascade as you scroll. Around them, hexagon-cropped
portraits of people scattered across the honeycomb, each with a blue glow behind
it. The section's own label, mark and buttons ride up and out of the top of the
stage as the section ends, rather than fading — you feel them leave.

**Mission.** The words "Our mission" set enormous on blue, then a video frame
that opens in the site's best single move:

| What it is | Technical name | What you would actually see |
|---|---|---|
| The frame's entrance | animated clipping shape | The video is not there, then a horizontal slot opens at the middle of where it will be and pulls apart top and bottom, like letterbox curtains opening. It takes about two seconds — unusually slow, and deliberately so |
| The play button's entrance | scale and rotation | It spins a full turn as it grows from nothing, arriving a second after the frame starts opening |

**Roadmap.** Five phase cards on blue, joined by a dashed line that draws itself
downward exactly in step with your scroll, with dots that pop into place at each
junction. The dots are the only thing on the site that re-plays every time you
pass them, in both directions.

**Statistics.** Three cards showing percentages. They do not simply appear. Each
one starts reading double-zero, the cards fly up from below in reverse order —
last card first — and then the numbers count up to their real values over about
two seconds, always showing two digits. That is why a screenshot taken mid-flight
catches values like "06" and "11" when the finished numbers are much larger.

**Ecosystem.** Six roles listed at left, the interactive diagram at right, each
driving the other.

**Product.** A label, a heading, two buttons, and a group of screenshots showing
the map application and two phone screens, rising into place one after another.
The big concentric rings sit behind them, half off the screen.

**Partners.** Twelve tiles, each with the stretched blue glow behind it.

**Close.** One centred button, then the footer.

---

## 11. Route: About

Four screens. The ground changes from blue to off-white to black as you go.

A photograph beside a paragraph, then the same arrangement mirrored, then the
words "Our team" set enormous in black on a pale panel with very round top
corners, then the leadership cards.

Each leadership card is a hexagon-cropped portrait — greyscale person on a blue
gradient — with a name, a role, three lines of biography that trail off, and a
small link to their professional profile. The whole card lifts slightly when you
point at it.

The page ends on the darkest ground on the site, one small green chip reading
"Join us", one question, and one button.

One quiet detail: the background of the impact section drifts at a different
speed from the content in front of it as you scroll. It is subtle enough that
most visitors will only feel it.

---

## 12. Route: Enterprise

The shortest page. A label, a paragraph that rolls in on scroll, and a contact
form — name, work email, company, a reason for getting in touch chosen from five
options, and a message.

The form's success and failure messages are already sitting in the page,
invisible, waiting to be shown. Nothing is built on the fly. It is worth knowing
because it means the messages can be checked and styled before anyone ever
submits anything.

Below that, case-study cards, and the partner tiles — which on this page are tied
to scroll rather than playing once, and are the busiest thing on the page.

---

## 13. Route: Media

The article index, and the site's most reused component lives here.

**The article card** is the notched card: image on top, pale blue body below,
one or more category chips, a two-line heading, a three-line summary that trails
off, and a "Read more" link that does the rolling-label move in blue.

**The filter rail** is a row of pill buttons on blue — All, Case Study,
Community Stories, Educational, Industry Standards, Team, Technology. The chosen
one is a white capsule with a small dot at its left. Filtering happens instantly
in the page; nothing is fetched.

**The featured panel** at the top of the page is one of only two things on the
whole site with real depth to it — it has perspective, so it tilts fractionally
rather than sitting perfectly flat — and it opens as you scroll onto it.

**Article pages are a gap.** We could not capture one, though we know they exist
because the loading system has a name for them. The specification for them in the
other document is our best reconstruction from the card fields, and is labelled
as such. Expect to adjust it.

Below the index: a list of press mentions, each with the publication's name on a
chip, and a pair of video cards.

---

## 14. Route: Terms and Privacy

Two long documents in the same plain shell: top bar, title, one column of text,
footer. They are the longest pages on the site by a wide margin and the least
animated — nothing moves on them except the furniture that moves everywhere.

Body text is comfortable rather than small, links are brand blue and do the
rolling-label move, and the legal text has its own typeface slot so it can be
replaced wholesale without touching the rest of the site.

---

## 15. Module and component architecture

This section is about how the build is organised, and it matters to you for one
reason: **cleaning up after itself.**

Every moving part of this site has to be able to shut down completely — cancel
what it started, put back what it moved, and let go of what it was listening to.
The site swaps pages without fully reloading, so anything left running from the
previous page stays running. Do this badly and the site gets progressively
slower and jerkier the longer someone browses, in a way that is very hard to
diagnose later and trivial to prevent now.

The pieces are the obvious ones: the furniture, the text reveals, the scrolling,
the scene, the drawn animations, the cycling headline, the roadmap, the
statistics, the ecosystem, the article list, the forms, and the video pop-up.

A few components deserve a note:

| Component | What is unusual about it |
|---|---|
| The text splitter | It chops headings into words and, on the two giant headings, into individual letters. It must be able to put them back — including after the window is resized and they need re-chopping |
| The button | One component, several skins. Rolling label, hexagon well, and an arrow that is itself a hexagon fragment. A wide variant holds two labels in one pill and stacks them on a phone |
| The video player | Not the browser's own player. It has its own complete set of settings — thirty of them — and its controls are invisible until you point at it |
| Full-height sections | Sized from a number the page maintains itself rather than from the raw window height, because phone browsers grow and shrink their own toolbars while you scroll, and sections sized the naive way visibly jump when they do |

---

## 16. Responsive behaviour

Three widths were photographed: a laptop, a tablet and a phone. What changes:

| Thing | Laptop | Tablet | Phone |
|---|---|---|---|
| Top bar | Two dropdowns | Two dropdowns | One button, full-screen panel |
| Statistic cards | Three side by side | One, on a sliding track | One |
| Roadmap | Cards alternate left and right of the line | Alternating | Single column, line at the left |
| Leadership grid | Four across | Two across | One across |
| Wide buttons | Side by side | Side by side | Stacked |
| Notice bar | Bottom-right corner | Bottom-right corner | Full width, button underneath |
| Giant headings | Bleed off both edges | Bleed off both edges | Bleed off both edges, fewer words per line |

Two things do *not* change at a width, and both are deliberate.

The scene never switches layouts. It slides between a phone arrangement and a
laptop arrangement continuously, so a window drag is a camera move rather than a
jump.

And the scroll-linked text reveals run everywhere, at every size. We checked:
they are just as busy on a phone as on a laptop. It is tempting to switch them
off on small screens for performance; do not. They carry the reading rhythm, and
without them the phone version reads as a different, flatter site.

---

## 17. Accessibility

This is the part of the reference site that is weakest, so this section is a list
of requirements rather than a description of what exists.

The goal is simple to state: someone using only a keyboard, and someone listening
to the page rather than looking at it, should get the same site.

**By keyboard.** Every dropdown, every link, every form field, every filter must
be reachable in a sensible order, and it must always be obvious where you are —
a visible ring around whatever is currently selected. The dropdowns already do
the right thing on keyboard; keep it. The phone menu and the video pop-up must
hold your position inside them while open and hand it back when closed. The
category filters must behave as one group you step into once and then move
around inside with arrow keys, not seven separate stops.

Importantly, the rolling-label effect must happen on keyboard focus, not only on
hover. Otherwise a keyboard user gets a site with no feedback at all.

**By ear.** All those hexagons and diagrams are decoration and should be silent.
The moving scene should be silent. The two icons that carry meaning — the signal
strength mark and the profile link — need names. The video needs a text
alternative; the reference provides none.

**For people who turn off animation.** Some people have a setting on that asks
sites to stop moving, usually because motion makes them ill. The reference
ignores it. This build must honour it: smooth scrolling reverts to normal
scrolling, all the text simply appears rather than rolling, the scroll-linked
sequences jump straight to their finished state, the moving scene draws one still
frame and stops, the loading animation is skipped, and the cycling headline stops
on its first word.

**Contrast.** Most of the site is fine. Two combinations need checking at their
real sizes: the dropdown links in their dimmed resting state, and the black text
on the lime green chips, which is only comfortable at larger sizes.

---

## 18. Performance

Two targets, and the second is the demanding one: the first thing you see should
arrive before you have time to think about waiting, and the moving scene should
stay perfectly smooth on a three-year-old laptop.

The good news is that the biggest win is free. Measuring the reference site, the
overwhelming majority of what it downloads is photographs and video — over
twenty megabytes of it — against well under two megabytes of everything else.
Because this build generates all of its imagery rather than downloading it
(Section 22), that entire cost disappears by construction.

The rules that remain:

- When the scene scrolls out of range, stop drawing it entirely. Not "draw it
  more cheaply" — stop.
- One clock for everything. The reference runs several independent loops, which
  is wasteful; this build should run one and let everything read from it.
- Only move things and fade things. Anything that forces the page to re-measure
  itself while you scroll is expensive, and the handful of legitimate exceptions
  are named individually in the other document.
- Warn the browser about what is going to move — but only about the things that
  actually move. Warning it about everything is worse than warning it about
  nothing.

---

## 19. Backend and data contract

There is remarkably little machinery behind this site. It is a static set of
pages with four points where it talks to something else.

| What | Direction | What it carries |
|---|---|---|
| Articles | The site reads | Title, summary, categories, image, date, body. Filtering by category happens in the page, over the whole list |
| Press mentions | The site reads | Publication, headline, summary, and a link out |
| Newsletter | The site sends | An email address. Three outcomes: nothing yet, thank you, or please try again |
| Enterprise contact | The site sends | Name, work email, company, reason, message. Same three outcomes |

There is a fifth, smaller one: the scene reads a small settings document at
start-up that lists its lit patches and where they sit on the globe. That is what
lets someone change which places light up without a developer.

The router pre-registration and the coverage map are separate applications. This
site's entire relationship with them is a link.

---

## 20. Build order

What gets built first, and what you can look at after each stage.

| Stage | What is built | What you can check |
|---|---|---|
| 1 | The paint box — colours, sizes, spacing | One page showing every value at three widths |
| 2 | The furniture — top bar, menus, footer, notice | Walk every page using only the keyboard |
| 3 | Every icon, drawn from instructions | One sheet of all of them at three sizes |
| 4 | The home page, laid out, motionless | Screenshots that match the reference at three widths |
| 5 | The other five pages, motionless | As above |
| 6 | The text reveals and the rolling labels | Scroll the site: nothing should pop |
| 7 | Smooth scrolling and everything tied to it | Scroll backwards: reveals must un-play |
| 8 | The globe | The globe alone, full screen, tracking your scroll |
| 9 | The honeycomb, the lit patches, clicking on them | The complete home page scene |
| 10 | The three drawn animations | The loading sequence, and the two-way diagram |
| 11 | Forms, article list, filters, video pop-up | Submit things; check all three messages |
| 12 | Accessibility, reduced motion, performance | The checklists in Sections 17, 18 and 23 |

Stages 8 and 9 can happen alongside 6 and 7. Nothing else can be reordered — each
stage genuinely needs the one before it.

You get something worth looking at after stage 4, and something that feels like
the real site after stage 7.

---

## 21. Copy deck

Every word on the site, taken exactly as it appears, with the brand name and all
third-party names swapped for placeholders.

Two things to know before you edit any of it.

**Line lengths were designed.** The headline that breaks across three lines
breaks there because of how long those particular words are. Replacing a
placeholder with something much longer or shorter will change where lines break,
and on the giant headings that is very visible. The placeholders we chose are
close to the originals in length for this reason.

**Some phrases are load-bearing.** The four community statements are written to
be read one after another as you scroll — they are one sentence split across four
screens, not four separate claims. The five roadmap phases are dense lists on
purpose; they are meant to look like a lot of work, and shortening them
undermines the section.

The full text is in the matching section of the other document, laid out
section by section: the small labels, every heading, every paragraph, all six
role descriptions, all five roadmap phases, the three statistics, every button
label, all the form messages, and the article summaries.

---

## 22. Zero-asset substitution guide

This is the section that makes the whole thing possible, and it is worth
understanding even if you never read another line of the specification.

The reference site downloads photographs, videos, fonts, mask shapes, textures
for the globe, and two animation files. This build downloads none of them. Every
one is replaced by a set of instructions for making something equivalent on the
spot.

| What the reference used | What replaces it | What you would see |
|---|---|---|
| Hundreds of photographs | A generator that makes a picture from a name | Abstract blue gradients with faint hexagons floating in them and a soft grain over the top. The same name always produces the same picture, so a card does not change between visits |
| Portraits of people | The same generator, portrait-shaped | A blue gradient with a person-shaped dark mass in it, cropped to a hexagon. It reads as a portrait at a glance and does not survive a second look |
| Two videos | A drawn loop | Rings of hexagons pulsing outward from the centre over about six seconds, on the blue gradient. The play button still works and still starts and stops it |
| Two commercial typefaces | Two freely available ones | A wide round heading face and a plain body face. Naming a font from a public font service is not the same as shipping a font file |
| Five mask shapes | Shapes already written down as coordinates | Identical. These were never really pictures; they were outlines, and outlines are just numbers |
| The globe's surface | Two generated images | A blue-to-black colour ramp, and a rough map of where land is. The land map only needs to be roughly right — the grid over it is coarse enough that fine coastline detail never shows |
| The honeycomb pattern | A generated tile | A clean honeycomb with a soft edge either side of every line |
| Two animation files | Two hand-built equivalents | The same behaviour, triggered the same way, sending back the same signals. Not the same drawing |
| The map background | A generated street grid | Blue lines on near-black with scattered hexagon markers, glowing rather than sitting flat |

**Where we are guessing, and how much.** Six things could not be measured, and it
is only fair to say so plainly:

| What we could not measure | How much it matters |
|---|---|
| What happens when you point at things | This is the big one. Only one hover effect survived measurement. The rolling label — the site's signature move — was reconstructed from clues rather than observed, and it is the single most likely thing to need adjusting once you see it running |
| Some of the page text | The text capture stops after a fixed number of items per page, so the footer and the lower part of the about page were transcribed by reading screenshots. Small risk of a typo, none of a wrong meaning |
| Article pages | We know they exist; we never saw one. That template is a reconstruction |
| The two drawn animations | These are locked inside a format we cannot read back. What we specify is the behaviour — same triggers, same signals — not a copy of the original drawing |
| The globe's textures | Not recoverable. What we generate produces the same visual response, not the same picture |
| The exact size-scaling rule | We know it scales with the window and we have three measured widths. The precise curve between them has to be re-derived |

None of these blocks the build. All of them are worth a look once there is
something to look at.

---

## 23. Acceptance checklist

The last section of the other document is a list of about forty things to tick
off. You do not need to read it, but you should know what it is for: every line
on it is something a person can check by looking at the finished site, and every
line corresponds to a specific measurement earlier in the document.

If you only check five things yourself, check these:

1. **Scroll backwards.** The text reveals must visibly un-play, not replay. This
   is the single fastest way to tell whether the site was built to specification
   or approximated.
2. **Point at a button.** The word should roll upward and be replaced by an
   identical word, taking about as long as a slow blink. Not a fade. Not a colour
   change.
3. **Watch the numbers.** The three statistics should start at double-zero and
   count up, always showing two digits.
4. **Drag the window edge slowly.** The scene behind the top of the home page
   should move like a camera, not jump between two layouts.
5. **Count the green.** It should appear on the small chips above section
   headings and the footer group headings, and nowhere else at all.
