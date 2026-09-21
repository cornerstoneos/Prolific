/**
 * PROLIFIC CONTENT ENGINE — SCHEMA
 *
 * The production menu. Segment -> content type -> cadence, purpose, CTA.
 * Fixed menu by design: less deciding, more producing.
 *
 * Two lanes, not one brand voice:
 *   institutional — AMCs, REO/bank, property managers. LinkedIn-native.
 *                   Process, systems, volume-capacity proof. Documentation-
 *                   style footage. Sells speed and decision-ready content.
 *   discovery     — agents, investors, developers. Instagram-reachable.
 *                   Proof-of-results ("gets to closing faster"), never a
 *                   production-value contest.
 *
 * CROSS-CUTTING RULES (enforced in copy review, not in code):
 *   1. Every piece originates from a real completed shoot. Nothing staged.
 *   2. Outcome-first copy: speed, decision-readiness, documentation
 *      completeness. Never "quality photos."
 *   3. CTA is segment-specific and benefit-loaded. Never "learn more."
 *   4. Five or six value touches before any direct ask.
 *   5. Escalating hierarchy: the proof moment gets the visual weight, not
 *      the equipment shot.
 */

/**
 * FIELD REFERENCE — segment
 *   id        string   URL-safe slug, unique. EXAMPLE: 'agents'
 *   lane      string   'institutional' | 'discovery'
 *   name      string   Display name. EXAMPLE: 'Agents / Teams & Brokerages'
 *   audience  string   One line, who this is. Shown as the section eyebrow.
 *   platforms string[] Where this segment is reached.
 *                      EXAMPLE: ['Instagram', 'LinkedIn']
 *   promise   string   The outcome sold, 6-12 words. Headline of the section.
 *   body      string   1-2 sentences. The argument under the promise.
 *   cta       string   Benefit-loaded, segment-specific. Never generic.
 *   ctaHref   string   Destination. Empty -> button renders as a non-link
 *                      and the section still reads correctly.
 *   media     string   Hero still or clip for the section. Empty -> the
 *                      "coming soon" placeholder. Video auto-detected by
 *                      extension (.mp4 / .webm / .mov).
 *   contentTypes ContentType[]  The production menu. Empty -> the table is
 *                      omitted, not rendered as an empty shell.
 *
 * FIELD REFERENCE — contentType
 *   type      string   What the piece is. EXAMPLE: 'Listing-result post'
 *   cadence   string   How often. EXAMPLE: 'Per closed deal' | 'Weekly'
 *   purpose   string   Why it exists, 2-5 words. EXAMPLE: 'Proof of velocity'
 *   cta       string   The ask on that piece. 'Soft — link in bio' is a
 *                      legitimate value; not every piece carries a hard ask.
 *   status    string   'live' | 'planned' | 'gap'. 'gap' flags a piece
 *                      identified as missing and not yet built — it renders
 *                      with a gold marker so it stays visible.
 */

export const segments = [
  {
    id: 'agents',
    lane: 'discovery',
    name: 'Agents / Teams & Brokerages',
    audience: 'Residential agents, teams, brokerages',
    platforms: ['Instagram', 'LinkedIn'],
    promise: 'Your listing, decision-ready before the first showing',
    body:
      'Proof of listing velocity, not beauty shots. One visit produces everything the MLS, the buyer, and the feed need — delivered next day, while the listing is still new.',
    cta: 'Get your next listing decision-ready faster',
    ctaHref: '',
    media: '/engine/media/IMG_2282.jpeg',
    contentTypes: [
      {
        type: 'Listing-result post',
        cadence: 'Per closed deal',
        purpose: 'Proof of velocity',
        cta: 'See what fast media does for your next listing',
        status: 'live',
      },
      {
        type: 'Weekend dump',
        cadence: 'Weekly',
        purpose: 'Volume & coverage proof, geo-tagged',
        cta: 'Soft — link in bio',
        status: 'live',
      },
      {
        type: 'Highlight house',
        cadence: 'Weekly',
        purpose: 'Aesthetic discovery',
        cta: 'Book your next listing shoot',
        status: 'live',
      },
      {
        type: 'First-shoot discount offer',
        cadence: 'Monthly',
        purpose: 'Micro-commitment entry point',
        cta: 'First shoot, half off — see the difference',
        status: 'planned',
      },
    ],
  },

  {
    id: 'institutional',
    lane: 'institutional',
    name: 'REO / AMC / Banks',
    audience: 'Asset managers, REO departments, servicers',
    platforms: ['LinkedIn'],
    promise: 'Every property documented, not just photographed',
    body:
      'Order volume handled on a schedule you can plan against. Condition capture thorough enough to make the decision from — inspections, foreclosures, occupancy — with order-to-delivery time you can quote to your own stakeholders.',
    cta: 'Talk to us about your next order volume',
    ctaHref: '',
    // Vacant unit, no staging -- condition documentation, not a beauty shot.
    media: '/engine/media/IMG_2056.jpeg',
    contentTypes: [
      {
        type: 'Process explainer',
        cadence: 'Once, then pinned evergreen',
        purpose: 'Institutional trust, systems proof',
        cta: 'See how we document every property',
        // Identified gap: Prolific has never built its own version of this.
        status: 'gap',
      },
      {
        type: 'Volume-capacity post',
        cadence: 'Monthly',
        purpose: 'Proves scale handling',
        cta: 'Talk to us about your next order volume',
        status: 'planned',
      },
      {
        type: 'Documentation-rigor case study',
        cadence: 'Monthly',
        purpose: 'X-ray thoroughness differentiator',
        cta: 'Get a property fully documented, not just photographed',
        status: 'planned',
      },
      {
        type: 'Turnaround-speed proof',
        cadence: 'Ongoing, as data builds',
        purpose: 'Speed is the core institutional sell',
        cta: 'Reduce your turnaround time',
        status: 'planned',
      },
    ],
  },

  {
    id: 'developers',
    lane: 'discovery',
    name: 'Developers',
    audience: 'Developers & builders',
    platforms: ['LinkedIn', 'Direct / email'],
    promise: 'Document the project from ground up, not just at launch',
    body:
      'Low-frequency, high-value. Renderings, before/after progressions, and site documentation that stay useful across a long sales cycle — built to keep the project in front of buyers and capital between milestones.',
    cta: 'Document your next project from ground up',
    ctaHref: '',
    // Completed build quality -- reads as the 'after' of a progression.
    media: '/engine/media/IMG_1794.jpeg',
    contentTypes: [
      {
        type: 'Before/after or site progression',
        cadence: 'Per project milestone',
        purpose: 'Long-cycle stay-top-of-mind',
        cta: 'Document your next project from ground up',
        status: 'planned',
      },
      {
        type: 'Rendering / map deliverable showcase',
        cadence: 'As available',
        purpose: 'Positions Prolific beyond photography',
        cta: 'Soft — portfolio link',
        status: 'planned',
      },
    ],
  },

  {
    id: 'commercial',
    lane: 'institutional',
    name: 'Commercial',
    audience: 'Commercial & multifamily owners, managers',
    platforms: ['LinkedIn'],
    promise: 'The whole site on record — frontage, access, parking, approach',
    body:
      'Full-site documentation over aesthetic framing. Drone, frontage, access routes and parking captured as one record, so a tenant, lender, or partner can assess the asset without a site visit.',
    cta: 'Full commercial site documentation, done right',
    ctaHref: '',
    // Drone frame: grounds, water, access road, building edge -- the
    // full-site documentation the commercial promise actually describes.
    media: '/engine/media/2026-03-26-09-03-23-044.jpeg',
    contentTypes: [
      {
        type: 'Full-site documentation post',
        cadence: 'Per shoot',
        purpose: 'Differentiates from residential aesthetic content',
        cta: 'Full commercial site documentation, done right',
        status: 'planned',
      },
      {
        type: 'Multifamily volume / coverage post',
        cadence: 'Monthly',
        purpose: 'Ties commercial + PM + AMC into one thread',
        cta: 'See what we cover at scale',
        status: 'planned',
      },
    ],
  },
]

// Convenience lookups for routes that address one segment directly.
export const segmentById = (id) => segments.find((s) => s.id === id)
export const byLane = (lane) => segments.filter((s) => s.lane === lane)
