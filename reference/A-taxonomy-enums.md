# A · Taxonomy enums

The closed enums a `<project>_input.yaml` is validated against. This file is the
single source of truth: `tools/taskorder_lint.py` parses the tables below, so
editing a table edits the linter.

Every task in the corpus is addressed by six levels:

```
Category (3) -> Domain (36) -> Pattern (15) -> Archetype (3,335) -> Variant (<=4) -> Profile (10)
```

**A Task Order carries five of them**, in this order, and nothing else:

```
category · domain · pattern · archetype · idea
```

Variant and profile are levels of the taxonomy, not fields of the Task Order.
They are addressed downstream, and a Task Order that names one fails gate T1 as
an unknown key. Their enums are retained below as an appendix, outside the
validated sections, so the linter never parses them.

Provenance: the three categories, their characters and their corpus shares are
measured values, taken verbatim from the programme deck (`reference/deku-poc.html`,
"How the dataset is built"). The counts 36 / 15 / 10 are likewise committed
there. **The domain, pattern, profile and capability-flag member names are
authored here** — the deck commits to the counts, not to the names — and are
marked as such in each section.

---

## 1. Category

Three members. Measured: name, character and share are from the deck.

| Token | Character | Share | Tasks @7,000 | Archetypes |
|---|---|---|---|---|
| `individual` | Personal-use apps, single user | 24% | 1,680 | 800 |
| `solo_founder` | Consumer / SMB, public signup | 45% | 3,150 | 1,500 |
| `enterprise` | Internal tools, roles + row-level security | 31% | 2,170 | 1,035 |

Note the underscore: `solo_founder`, not `solo-founder`. Category is the only
level that is snake_case; every other level is lowercase kebab.

---

## 2. Domain

Thirty-six verticals, **each belonging to exactly one category**. Authored
names; the count is committed by the deck.

| Token | Category | Vertical |
|---|---|---|
| `personal-finance` | `individual` | budgets, accounts, spending, net worth |
| `health-fitness` | `individual` | workouts, symptoms, sleep, body metrics |
| `habits-productivity` | `individual` | habits, streaks, personal task systems |
| `home-inventory` | `individual` | possessions, warranties, maintenance, pantry |
| `media-library` | `individual` | films, books, games, music owned or watched |
| `travel-planning` | `individual` | itineraries, packing, trip journals |
| `learning-study` | `individual` | flashcards, courses taken, revision plans |
| `journaling-notes` | `individual` | diaries, notes, personal knowledge bases |
| `hobby-collections` | `individual` | collections, plants, brewing, workshop logs |
| `ecommerce-retail` | `solo_founder` | storefronts, product catalogues, orders |
| `creator-media` | `solo_founder` | podcasts, video channels, fan membership |
| `local-services` | `solo_founder` | trades, salons, cleaners, mobile services |
| `food-hospitality` | `solo_founder` | restaurants, cafes, menus, table booking |
| `events-ticketing` | `solo_founder` | conferences, gigs, ticket sales, guest lists |
| `fitness-wellness` | `solo_founder` | studios, classes, coaching, memberships |
| `real-estate-listings` | `solo_founder` | property listings, viewings, agents |
| `education-courses` | `solo_founder` | course sales, cohorts, lessons, progress |
| `marketplace-classifieds` | `solo_founder` | two-sided listings, buyer and seller contact |
| `travel-booking` | `solo_founder` | stays, tours, availability, reservations |
| `community-social` | `solo_founder` | forums, clubs, member directories |
| `newsletter-publishing` | `solo_founder` | editorial sites, subscriptions, archives |
| `portfolio-agency` | `solo_founder` | studio and freelance showcase, enquiries |
| `saas-productivity` | `solo_founder` | small B2B tools sold by public signup |
| `nonprofit-fundraising` | `solo_founder` | causes, donations, volunteers, campaigns |
| `hardware-iot` | `solo_founder` | consumer hardware, devices, connectivity, networks |
| `crm-sales` | `enterprise` | accounts, opportunities, quotas, forecasts |
| `hr-people-ops` | `enterprise` | employees, leave, onboarding, reviews |
| `finance-accounting` | `enterprise` | invoices, ledgers, budgets, approvals |
| `supply-chain-logistics` | `enterprise` | inventory, shipments, suppliers, warehouses |
| `manufacturing-operations` | `enterprise` | work orders, lines, quality, downtime |
| `healthcare-clinical` | `enterprise` | patients, encounters, care plans, referrals |
| `legal-compliance` | `enterprise` | matters, contracts, audits, policy registers |
| `it-service-management` | `enterprise` | tickets, incidents, assets, change requests |
| `field-service` | `enterprise` | jobs, technicians, dispatch, site visits |
| `data-analytics-bi` | `enterprise` | internal reporting, metric catalogues |
| `facilities-assets` | `enterprise` | buildings, rooms, equipment, maintenance |

---

## 3. Pattern

Fifteen application shapes, orthogonal to domain. A pattern is legal only for
the categories listed. Authored names; the count is committed by the deck.

| Token | Legal categories | Shape |
|---|---|---|
| `content-publishing` | `individual`, `solo_founder`, `enterprise` | pages and articles, index plus detail, editorial state |
| `catalog-browse` | `individual`, `solo_founder`, `enterprise` | filterable listing to detail, facets, sort |
| `transactional-checkout` | `solo_founder` | cart, order, payment state, confirmation |
| `booking-scheduling` | `individual`, `solo_founder`, `enterprise` | calendars, slots, availability, reservations |
| `crud-records` | `individual`, `solo_founder`, `enterprise` | forms over records, the workhorse pattern |
| `dashboard-analytics` | `individual`, `solo_founder`, `enterprise` | aggregates, charts, date and segment filters |
| `pipeline-kanban` | `individual`, `solo_founder`, `enterprise` | staged items moved through named states |
| `collaborative-workspace` | `solo_founder`, `enterprise` | shared projects or documents, multiple actors |
| `social-feed` | `solo_founder` | posts, follows, timelines, reactions |
| `messaging-inbox` | `solo_founder`, `enterprise` | threads, unread state, notifications |
| `tracker-logging` | `individual`, `solo_founder`, `enterprise` | repeated entries over time, history, streaks |
| `media-gallery` | `individual`, `solo_founder`, `enterprise` | upload, organise and view collections |
| `directory-profiles` | `solo_founder`, `enterprise` | searchable people, place or org profiles |
| `workflow-approval` | `enterprise` | request to review to approve, role-gated |
| `admin-console` | `enterprise` | users, roles, permissions, configuration |

### The enum-namespace gotcha

No token is legal in both the domain and the pattern slot — a value that
validates in one will fail in the other. The pairs that get transposed in
practice:

| Domain | Pattern | Which is which |
|---|---|---|
| `newsletter-publishing` | `content-publishing` | the vertical is the domain, the shape is the pattern |
| `data-analytics-bi` | `dashboard-analytics` | reporting-as-a-business vs charts-as-a-screen |
| `media-library` | `media-gallery` | what the app is about vs how the app is shaped |
| `community-social` | `social-feed` | a community product vs a feed screen |
| `marketplace-classifieds` | `catalog-browse` | a marketplace vertical vs a browse shape |

---

## 4. Archetype

Not an enum — a registry. Rules:

- lowercase kebab-case
- **exactly three tokens** (`network-coverage-showcase`)
- globally unique across the corpus

Uniqueness is checked against `reference/archetype-registry.txt`, one archetype
per line. `tools/taskorder_lint.py --register` appends on a clean pass.

---

## 5. Idea

10 to 80 words. Written in the register of the examples: who the app is for,
what it contains, and what a visitor or user does — **ending on the action that
touches state**, because that action is what becomes a graded workflow.

---

# Appendix — levels the Task Order does not carry

The two tables below are reference only. `tools/taskorder_lint.py` does not
parse them and gate T1 rejects `profile` and `capability_flags` as unknown keys.
They are kept here because the deck commits to their counts and the downstream
harness still resolves both.

## A1. Service profile — not a Task Order field

Ten sidecar sets. The profile declares which backing services the harness must
bring up and healthcheck before the agent starts. It is resolved downstream from
the archetype, not declared in the Task Order. Authored names; the count is
committed by the deck.

| Token | Sidecars | Use when |
|---|---|---|
| `static-only` | none | client-only app, no persisted state |
| `db-only` | database | persisted records, no accounts, no mail |
| `db-inbox` | database, mail inbox | public forms and newsletters, no accounts |
| `db-auth` | database, auth server | accounts, no mail in any graded workflow |
| `db-auth-inbox` | database, auth server, mail inbox | signup verification, reset, invitations |
| `db-auth-storage` | database, auth server, object storage | uploads, avatars, documents, media |
| `db-auth-inbox-storage` | database, auth server, mail inbox, object storage | the full consumer stack |
| `db-auth-payments` | database, auth server, payment sandbox | checkout or subscription, no transactional mail |
| `db-auth-inbox-payments` | database, auth server, mail inbox, payment sandbox | checkout with receipts and dunning |
| `db-auth-realtime` | database, auth server, realtime broker | live collaboration or presence |

---

## A2. Capability flags — not a Task Order field

Multi-valued. Each flag declares a capability the graded workflows actually
exercise. Resolved downstream alongside the profile, not declared in the Task
Order. Authored names.

| Token | Meaning |
|---|---|
| `aesthetic` | visual and motion fidelity is graded, not just function |
| `realtime` | state changes propagate live between sessions |
| `file-upload` | binary upload and processing in a graded workflow |
| `email` | transactional mail is asserted by the verifier |
| `payments` | a payment flow is asserted by the verifier |
| `rbac` | roles and row-level security are asserted |
| `data-viz` | charts or aggregation are asserted |
| `scheduling` | date, time or availability logic is asserted |
| `search` | search, filter or ranking behaviour is asserted |
| `i18n` | localisation or multi-currency is asserted |

---
