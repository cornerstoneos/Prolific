import { AbsoluteFill } from 'remotion'

const GOLD = '#b8965a'
const FG = '#0c0c0c'
const MUTED = '#888880'
const HAIRLINE = 'rgba(184,150,90,0.34)'

// Same tier content as DevelopmentPackages.jsx, kept in sync manually since
// this is a separate static layout, not a frame grab from the motion piece.
// A single frozen frame from the sequential motion version only ever shows
// one tier -- no use as a standalone email/static graphic -- so this exists
// as its own composition: everything on one screen, no animation.
const TIERS = [
  {
    badge: 'Standalone — Pre-Construction',
    title: 'Pre-Construction',
    items: [
      'Styled site plan & map',
      'Exterior renderings',
      'Interior renderings',
      'Styled floor plan',
      'Amenity renderings',
      'Social pack',
    ],
  },
  {
    badge: 'Standalone — Model Complete',
    title: 'Model Residence Shoot',
    items: ['Photography', 'Video', 'Drone', '3D tour'],
  },
  {
    badge: 'Full Process',
    title: 'Premium',
    items: ['Pre-Construction, bundled', 'Model Residence Shoot, bundled'],
  },
  {
    badge: 'Full Process',
    title: 'Elite',
    items: [
      'Everything in Premium',
      'Recurring progress photography',
      'Interactive digital twin & hotspots',
      'Full marketing coordination — pre-sale through launch',
      'Time-lapse documentation',
      'Landing page',
    ],
  },
]

export default function DevelopmentPackagesStill() {
  return (
    <AbsoluteFill
      style={{
        background: '#fafaf8',
        fontFamily: "'Montserrat', system-ui, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 64px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 19,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: GOLD,
            marginBottom: 22,
          }}
        >
          Prolific — Development
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: 62,
            color: FG,
          }}
        >
          Development Packages
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          background: HAIRLINE,
          border: `1px solid ${HAIRLINE}`,
        }}
      >
        {TIERS.map((tier) => (
          <div key={tier.title} style={{ background: '#fafaf8', padding: '46px 34px' }}>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: 14,
              }}
            >
              {tier.badge}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 42,
                color: FG,
                marginBottom: 26,
              }}
            >
              {tier.title}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              {tier.items.map((item) => (
                <div key={item} style={{ fontSize: 20, color: MUTED, lineHeight: 1.45 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 72 }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 32,
            letterSpacing: 7,
            textTransform: 'uppercase',
            color: FG,
            marginBottom: 12,
          }}
        >
          Prolific
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 14,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: MUTED,
          }}
        >
          Curated Property Experiences
        </div>
      </div>
    </AbsoluteFill>
  )
}
