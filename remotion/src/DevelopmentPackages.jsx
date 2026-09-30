import { Series, useCurrentFrame, interpolate, AbsoluteFill } from 'remotion'
import TierCard from './components/TierCard'
import AllTiersScreen from './components/AllTiersScreen'
import { tiers } from './tiers'

const FG = '#0c0c0c'
const MUTED = '#888880'

function OpenCard() {
  const frame = useCurrentFrame()
  const o = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' })
  const y = interpolate(frame, [0, 18], [22, 0], { extrapolateRight: 'clamp' })
  return (
    <AbsoluteFill
      style={{
        background: '#fafaf8',
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
            color: FG,
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
        background: '#fafaf8',
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

// Tier content lives in tiers.js -- shared with AllTiersScreen so the
// individual cards and the recap never drift out of sync.

const OPEN_FRAMES = 60
const TIER_FRAMES = 90
const RECAP_FRAMES = 90
const CLOSE_FRAMES = 60

export const developmentPackagesDuration =
  OPEN_FRAMES + tiers.length * TIER_FRAMES + RECAP_FRAMES + CLOSE_FRAMES

export default function DevelopmentPackages() {
  return (
    <Series>
      <Series.Sequence durationInFrames={OPEN_FRAMES}>
        <OpenCard />
      </Series.Sequence>
      {tiers.map((tier) => (
        <Series.Sequence key={tier.title} durationInFrames={TIER_FRAMES}>
          <TierCard {...tier} />
        </Series.Sequence>
      ))}
      {/* Recap: everything at a glance, right before the close card. */}
      <Series.Sequence durationInFrames={RECAP_FRAMES}>
        <AllTiersScreen />
      </Series.Sequence>
      <Series.Sequence durationInFrames={CLOSE_FRAMES}>
        <CloseCard />
      </Series.Sequence>
    </Series>
  )
}
