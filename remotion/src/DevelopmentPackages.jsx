import { Series, useCurrentFrame, interpolate, AbsoluteFill } from 'remotion'
import TierCard from './components/TierCard'

const GOLD = '#c9a227'
const FG = '#f2f1ed'
const MUTED = '#9a9a94'

function OpenCard() {
  const frame = useCurrentFrame()
  const o = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' })
  const y = interpolate(frame, [0, 18], [22, 0], { extrapolateRight: 'clamp' })
  return (
    <AbsoluteFill
      style={{
        background: '#0a0a0a',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat', system-ui, sans-serif",
        textAlign: 'center',
        padding: '0 80px',
      }}
    >
      <div style={{ opacity: o, transform: `translateY(${y}px)` }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: GOLD,
            marginBottom: 28,
          }}
        >
          Prolific — Development
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: 84,
            lineHeight: 1.02,
            color: FG,
          }}
        >
          Development Packages
        </div>
      </div>
    </AbsoluteFill>
  )
}

function CloseCard() {
  const frame = useCurrentFrame()
  const o = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' })
  return (
    <AbsoluteFill
      style={{
        background: '#0a0a0a',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat', system-ui, sans-serif",
        textAlign: 'center',
      }}
    >
      <div style={{ opacity: o }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 46,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: FG,
            marginBottom: 14,
          }}
        >
          Prolific
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 18,
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

// Tier content. Structure B (locked): Pre-Construction and Model Residence
// Shoot stand alone as two entry points; Premium bundles both; Elite adds
// the recurring/ongoing layer. No price, no add-ons -- both dropped per
// brief.
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
    note: 'Sold on its own to projects already using someone else for pre-construction renderings.',
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

const OPEN_FRAMES = 60
const TIER_FRAMES = 90
const CLOSE_FRAMES = 60

export const developmentPackagesDuration =
  OPEN_FRAMES + TIERS.length * TIER_FRAMES + CLOSE_FRAMES

export default function DevelopmentPackages() {
  return (
    <Series>
      <Series.Sequence durationInFrames={OPEN_FRAMES}>
        <OpenCard />
      </Series.Sequence>
      {TIERS.map((tier) => (
        <Series.Sequence key={tier.title} durationInFrames={TIER_FRAMES}>
          <TierCard {...tier} />
        </Series.Sequence>
      ))}
      <Series.Sequence durationInFrames={CLOSE_FRAMES}>
        <CloseCard />
      </Series.Sequence>
    </Series>
  )
}
