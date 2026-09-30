# Prolific Delivery Workflow (working draft)

Status: **yellow light.** Flow is agreed in principle; details below are still being decided.
Open items are marked **OPEN**. Update this doc as decisions are made.

---

## 1. The 12 stages (every vertical)

| # | Stage | What happens |
|---|---|---|
| 1 | Intake | Order comes in. Capture: vertical, requested company (→ client profile), property, deliverables, deadline, payment, job notes. |
| 2 | Treatment | The creative plan (concept, mood, story, key shots, music, deliverable map). Depth depends on vertical — see §3. Drone airspace check happens here. |
| 3 | Prep | Build the room list and shot slots from the treatment + client profile. |
| 4 | Capture | Shoot. **Pre-departure check:** every slot filled before leaving the property. |
| 5 | Ingest | Raw files backed up to storage the same day, standard folder structure. |
| 6 | Edit | Owner edits. |
| 7 | QC pass 1 (AI) | Sorts photos into slots, flags empty slots, rule violations (open closets, lids up, fans on), tilted verticals, blown windows, blur, wrong sizes, bad names. |
| 8 | QC pass 2 (owner) | Owner reviews flags and approves. Nothing ships without this. |
| 9 | Package | Export per destination (MLS, print, social, lender portal); name per client profile. |
| 10 | Deliver | Per vertical — see §4. |
| 11 | Revisions | Log every request and round (even with no cap), fix, re-QC, redeliver. |
| 12 | Close-out | Payment, archive, ask for review/testimonial. |

**Why the pre-departure check matters:** a missed bedroom in Wellington cost ~3 hours of driving and a Sunday. The most expensive miss happens on site, so the most important check happens before leaving.

---

## 2. Client profiles (layered rules)

Most specific layer wins.

| Layer | Example | Set by |
|---|---|---|
| 1. Prolific standard | Default shot list, framing, fans off | Prolific, once |
| 2. Platform | Asteroom upload slots, 2D + 3D | Asteroom |
| 3. Client | HomeRiver rules (below) | The client, via the platform |
| 4. Job notes | Access, parking, occupancy | Each order |

The Asteroom order card names the client under **Requested company** — that field selects the Layer 3 profile.

### Layer 3 example — HomeRiver (via Asteroom), updated 2026-09-30

- Closets closed; pantry closed; toilet lid closed
- Main room lights only; fan lights, chandeliers, pendants off unless the room is too dark
- Front: 3 angled shots (left, center, right), framed tighter on the house, full frontage visible
- Backyard: full rear facing the house + one wide landscape shot facing away (toward fence/yard)
- Interior: kitchen (full, closer), living/family/great/bonus/media rooms, dining/breakfast nook, **every** bedroom, **every** bathroom, laundry (even in a closet), garage/carport, covered patio/sunroom

### Other client profiles

- **OPEN:** bank/REO profiles (e.g. toilet seats up, AC unit, water heater, address photo). Write one per requested company as orders come in.

### Layer 4 — job notes (structured fields)

Security gates and apartments make these critical. Capture every order:

- Access: gate code, door code, lockbox, key pickup, unit/building number
- Parking and where to enter the complex
- On-site contact and whether they'll be present
- Occupancy: vacant / tenant-occupied / owner-occupied; pets
- Utilities on or off (power off changes the lighting rules)
- Anything unusual

Codes and contact details stay in the job record only — never in shared docs, the repo, or client-facing pages.

---

## 3. Treatment depth by vertical

| Vertical | Treatment |
|---|---|
| REO / AMC | None — the lender's required list is the treatment. Compliance, not creativity. |
| Property managers | Once per retainer: look, per-unit-type shot list, naming. |
| Agents, one-off | One-page template: selling points, hero shots, video mood. |
| Agent teams / brokerages (retainer) | Once per retainer, as a brand standard. |
| Developers | Full treatment + rollout plan (§5). |

**Retainer rule:** a retainer client's treatment and standards are set up once; every job after that skips straight to capture.

---

## 4. How the verticals differ

| | Agents (one-off) | Agent teams (retainer) | Property managers | REO / AMC | Developers |
|---|---|---|---|---|---|
| Unit of work | Listing | Listing | Unit / building | Order | Multi-month project |
| Orders arrive | Booking link | Recurring | Recurring (HomeRiver) | Their platform (Asteroom now) | Scoped contract |
| Naming | Address | Agent / address | Property / building / unit | Their spec | Project / phase / date |
| Approval before release | No | No | No | Their acceptance review | Yes (renderings) |
| Delivery | Branded listing page | One recurring link | One recurring link, grouped by property | Upload to their system | Project hub (rollout timeline) |
| Payment | Deposit at booking, balance on delivery | Monthly | Monthly | Their terms | Milestones |
| Turnaround | Next day | Next day | Next day | Their deadline | Scheduled cadence |
| Biggest QC risk | Looks | Brand consistency | Consistency across units | Missing required shots | Accuracy + sign-off |

---

## 5. Developers — the rollout

| Phase | Construction stage | Drops |
|---|---|---|
| Announce | Pre-construction | Site plan & map, hero exterior rendering, teaser social pack |
| Build the hype | Pre-sale | Interior & amenity renderings, floor plans, landing page live |
| Singles | Construction | Progress photos every two weeks (set day); time-lapse at key stages (walls up, topping out) |
| Release | Model complete | Model residence shoot: photos, video, drone, 3D tour, digital twin |
| Tour | Sales push | Ongoing social, landing page updates |
| Hand-off | Sell-out / turnover | Final time-lapse, full archive, landing page transferred to client |

Tier mapping: Pre-Construction = Announce + Build the hype. Model Residence Shoot = Release. Premium = both. Elite = the full rollout.

- Renderings: made in-house. Draft → client review → revisions → approval → release. No stated revision cap; log every round.
- Progress photos: same camera positions every visit. The reference image for each slot is the previous visit's photo.
- **OPEN:** time-lapse capture method (fixed site camera vs. ~1-hour iPhone sessions at milestones).
- **OPEN:** who approves on the developer side — ask in discovery meetings.
- Landing page: build it to be transferable, hand off at launch, offer optional paid upkeep.
- Plan a free or discounted showcase project for portfolio.

---

## 5a. Listings — the Curated Property Experience

**Lead offer for agents and agent teams.** Everything, delivered as one experience. Sell this first; à la carte only if the client doesn't want all of it.

Curated Property Experience includes:
- HDR photos (full shot list + room slots)
- Listing video: 60–90s horizontal, unbranded MLS version, 15–30s vertical reel
- 3D tour — Asteroom Enhanced (lighting-corrected, dollhouse)
- Edited floor plan with measurements
- Social pack
- Drone — **once Part 107 is in hand**

À la carte: any single item above, with the Basic Asteroom floor plan.

Current pricing (from the site and Stripe links):

| Offer | Price |
|---|---|
| Curated Property Experience (full) | $500 |
| Combo: Photos + Video (drone added once Part 107) | $250 |
| Combo: any two services | $200 |
| Photography only | $125 |
| 3D virtual tour | $150 |
| Floor plans + measurements | $100 |
| **Power retainer** (agent teams / brokerages) | $1,500/month = 4 full CPEs (~$375 each), priority scheduling, market exclusivity available |

- Power is the agent-team retainer lane from §4.
- Price math: Photos+Video+Drone ($250) + 3D ($150) + Floor plans ($100) = $500 = the CPE price. So the full experience currently saves nothing vs. buying the pieces; only the social pack is "free".
- **OPEN:** make the CPE the obvious choice — show the à la carte value (e.g. "a $600+ value") by pricing social content standalone, or trim the CPE price.
- Size upcharge for homes over ~3,500 sq ft, quoted at booking (on the site). **OPEN:** the upcharge amount.
- **OPEN:** is video or drone available on its own, and can they count in "any two services"?
- **OPEN:** Power rules — do unused CPEs roll over? What does "exclusivity per market" cover (zip, city, price band)?
- **OPEN:** check margin on Power: ~$375 per CPE minus ~$60 Asteroom Enhanced leaves ~$315 for photos + video edit + social + travel.
- Drone marked "coming soon" on the site; "FAA-compliant" removed; combo renamed Photos + Video. **OPEN:** rename the Stripe product to match (checkout still says "Photos + Video + Drone").
- **OPEN:** whether property managers get a version of it, or stay on their spec.

---

## 6. Capture checklists

### Shot slots (idea borrowed from Asteroom, improved)

Asteroom's upload screen gives each required shot its own slot with a line drawing of the expected framing. Weak spot: all interior rooms go into one "Other Photos" box, where a missed bedroom hides.

**Our version:** interior slots are generated from the room list (Bedroom 1/2/3, Bath 1/2 …). An empty slot is impossible to miss.

### Standard exterior (Prolific default; client profiles override)

- [ ] Street view
- [ ] Front: left 45°, center, right 45°
- [ ] Driveway / garage
- [ ] Both sides
- [ ] From house facing out to backyard
- [ ] Backyard facing house (mid-yard)
- [ ] Backyard corners at 45°
- [ ] Address number *(REO)*
- [ ] AC unit *(REO)*
- [ ] Water heater *(REO)*

### Standard interior

- [ ] Every room on the room list — 2D photo
- [ ] Every room on the room list — 3D scan
- [ ] Closets, blinds, lights, fans, toilet lids per client profile

### Drone (checked at Treatment, re-checked morning of shoot)

- Near airports (PBI, FLL, MIA, Lantana, Boca): LAANC authorization via an app such as Aloft
- Palm Beach near Mar-a-Lago: temporary flight restrictions can appear on short notice
- No clearance → tell the client and adjust price before the shoot
- Part 107: **in progress** — scheduling the test after studying. Until certified, no drone on client jobs, paid or free (see §7).

### Video (phone + gimbal; no drone indoors)

**Problem being solved:** not enough footage to edit a full video. Fix it with a coverage quota, not by stretching clips in the edit.

**Footage math:** a finished clip is ~2–3 seconds on screen. A 60–90s video needs ~30–40 usable clips, so shoot ~3x that.

**Per room (the quota):**
- [ ] 1 fly-through pass entering the room (continuous, walk-in feel)
- [ ] 3 moves from the menu below, each taken twice
- [ ] 1 detail shot (fixture, finish, view)
- Hero rooms (kitchen, living, primary suite, pool/outdoor): 5 moves instead of 3

**Move menu:** push-in, pull-out, lateral slide, orbit around a foreground object (parallax), rise/lower, reveal from behind a wall or doorframe, tilt up.

**Every take:**
- 8–10 seconds, with a 2-second still hold at the start and end (gives the editor cut points)
- Exposure and focus locked (window light otherwise pumps the exposure)
- 4K; 24 or 30 fps for normal moves, 60 fps for slow-motion moves
- Shot horizontal with the subject centered, so a vertical crop still works
- Plus a dedicated vertical pass of the 3–5 best moves for reels

**Order on site:** per room — photos, then video, then 3D scan — so the room is staged once.
Allow ~20–30 minutes of video for a typical 3/2 home.

**Pre-departure check:** every room slot has its fly-through + move count.

**Deliverables by vertical (draft):**

| Vertical | Video deliverables |
|---|---|
| Agents | 60–90s horizontal listing video (branded + unbranded MLS version), 15–30s vertical reel |
| Agent teams (retainer) | Same, in the team's brand standard |
| Property managers | 30–45s per unit or building, optional vertical |
| REO / AMC | None unless ordered |
| Developers | 90–120s model residence hero film, vertical reels per rollout drop, progress recaps |

- Unbranded MLS version: always included for agents (no promotion on MLS).
- **OPEN:** confirm lengths.

### Floor plans, measurements, 3D tour finishing (via Asteroom)

Asteroom produces these from the 3D scan; Prolific's job is to order the right level and QC the output.

| Level | Cost to Prolific | Includes | Used for |
|---|---|---|---|
| Basic | ~$15 (**OPEN:** verify) | Floor plan | À la carte and standard PM jobs |
| Enhanced | ~$60 | Edited floor plan, lighting-corrected 3D tour, dollhouse view | Developers + every Curated Property Experience |

Price the Asteroom cost into each package; it is a per-job expense.

**QC checklist for Asteroom output:**
- [ ] Every room on the room list appears and is labeled correctly
- [ ] Spot-check 2–3 room dimensions with a laser measure on site
- [ ] Total square footage roughly matches county property appraiser records (explain any big gap)
- [ ] Doors, windows, stairs in the right places; orientation correct
- [ ] 3D tour: no skipped rooms, no stitching errors, sensible start point
- [ ] Enhanced: lighting corrections applied, dollhouse renders cleanly
- [ ] Branding/unbranded version per client profile

### Still to write

- **OPEN:** QC checklists for renderings, site plans, social packs, time-lapse, landing page

---

## 7. Open business items

- **Drone until Part 107:** the recreational exception covers flying purely for fun. Footage used for any business purpose (a free add-on to a paid shoot, Prolific's own marketing) counts as commercial and needs Part 107. Pause drone on jobs until certified.
- First direct REO/AMC lead: VMC REO LLC (met through day job, separate from Asteroom). Confirm the day job has no conflict-of-interest rule about it.
- **OPEN:** Asteroom agreement terms — known rule: no handing business cards to agents met on Asteroom jobs. Confirm whether a broader non-solicitation clause exists before contacting their banks and asset managers directly.
- **OPEN:** does the Asteroom app show or export room tags from the 3D scan?
- **OPEN:** file storage (no Google Drive yet) and CRM
- Site offers: virtual staging and signage removed (not offered). Twilight offered. **OPEN:** pitch decks (still listed under Development) — discuss scope.
- **OPEN:** site still promises a Google Drive link in "How It Works" and the inquiry section — update once the delivery page is decided.
- Agent acquisition / proof of concept is a separate thread.
