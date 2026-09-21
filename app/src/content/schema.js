/**
 * PROLIFIC CONTENT ENGINE — SCHEMA
 *
 * This is the production menu, not a website. Every entry below is one
 * content piece: a template route someone opens and screen-records. The
 * recording IS the post. Nothing here is customer-facing copy.
 *
 * Two lanes:
 *   institutional — AMCs, REO/bank, property managers. LinkedIn-native.
 *   discovery     — agents, investors, developers. Instagram-reachable.
 */

/**
 * FIELD REFERENCE — segment
 *   id        string   slug fragment, unique per segment
 *   lane      string   'institutional' | 'discovery'
 *   name      string   display name shown in a piece's corner label
 *   pieces    Piece[]  the content types for this segment
 *
 * FIELD REFERENCE — piece
 *   slug      string   URL-safe, globally unique across the whole schema.
 *                      EXAMPLE: 'weekend-dump'
 *   type      string   what the piece is. EXAMPLE: 'Weekend dump'
 *   cadence   string   how often. EXAMPLE: 'Weekly'
 *   purpose   string   why it exists, 2-5 words.
 *   cta       string   the on-piece ask, part of the content itself — not a
 *                      website button. 'Soft — link in bio' is a legitimate
 *                      value.
 *   status    string   'live' | 'planned' | 'gap'. 'gap' = identified as
 *                      missing, not yet built.
 */

export const segments = [
  {
    id: 'agents',
    lane: 'discovery',
    name: 'Agents / Teams & Brokerages',
    pieces: [
      {
        slug: 'listing-result',
        type: 'Listing-result post',
        cadence: 'Per closed deal',
        purpose: 'Proof of velocity',
        cta: 'See what fast media does for your next listing',
        status: 'live',
      },
      {
        slug: 'weekend-dump',
        type: 'Weekend dump',
        cadence: 'Weekly',
        purpose: 'Volume & coverage proof, geo-tagged',
        cta: 'Soft — link in bio',
        status: 'live',
      },
      {
        slug: 'highlight-house',
        type: 'Highlight house',
        cadence: 'Weekly',
        purpose: 'Aesthetic discovery',
        cta: 'Book your next listing shoot',
        status: 'live',
      },
      {
        slug: 'first-shoot-discount',
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
    pieces: [
      {
        slug: 'process-explainer',
        type: 'Process explainer',
        cadence: 'Once, then pinned evergreen',
        purpose: 'Institutional trust, systems proof',
        cta: 'See how we document every property',
        // Identified gap: never built.
        status: 'gap',
      },
      {
        slug: 'volume-capacity',
        type: 'Volume-capacity post',
        cadence: 'Monthly',
        purpose: 'Proves scale handling',
        cta: 'Talk to us about your next order volume',
        status: 'planned',
      },
      {
        slug: 'documentation-rigor',
        type: 'Documentation-rigor case study',
        cadence: 'Monthly',
        purpose: 'X-ray thoroughness differentiator',
        cta: 'Get a property fully documented, not just photographed',
        status: 'planned',
      },
      {
        slug: 'turnaround-speed',
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
    pieces: [
      {
        slug: 'before-after',
        type: 'Before/after or site progression',
        cadence: 'Per project milestone',
        purpose: 'Long-cycle stay-top-of-mind',
        cta: 'Document your next project from ground up',
        status: 'planned',
      },
      {
        slug: 'rendering-showcase',
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
    pieces: [
      {
        slug: 'full-site-doc',
        type: 'Full-site documentation post',
        cadence: 'Per shoot',
        purpose: 'Differentiates from residential aesthetic content',
        cta: 'Full commercial site documentation, done right',
        status: 'planned',
      },
      {
        slug: 'multifamily-volume',
        type: 'Multifamily volume / coverage post',
        cadence: 'Monthly',
        purpose: 'Ties commercial + PM + AMC into one thread',
        cta: 'See what we cover at scale',
        status: 'planned',
      },
    ],
  },
]

// Flat list of every piece, each carrying its parent segment — this is what
// the home grid and the piece route both read from.
export const pieces = segments.flatMap((s) =>
  s.pieces.map((p) => ({ ...p, segmentId: s.id, segmentName: s.name, lane: s.lane }))
)

export const pieceBySlug = (slug) => pieces.find((p) => p.slug === slug)
