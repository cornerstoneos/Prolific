import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion'

const GOLD = '#c9a227'
const FG = '#f2f1ed'
const MUTED = '#9a9a94'
const HAIRLINE = 'rgba(201,162,39,0.3)'

/**
 * One tier, full-frame. Reused by DevelopmentPackages.jsx for each of the
 * four tiers -- content changes per instance, animation timing doesn't.
 *
 * Props:
 *   badge   string    small label above the tier name, e.g. 'STANDALONE'
 *   title   string    tier name, e.g. 'Model Residence Shoot'
 *   note    string    one line under the title (optional)
 *   items   string[]  what's included -- no price, no add-ons, per brief
 */
export default function TierCard({ badge, title, note, items }) {
  const frame = useCurrentFrame()

  const headOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' })
  const headY = interpolate(frame, [0, 15], [20, 0], { extrapolateRight: 'clamp' })

  return (
    <AbsoluteFill
      style={{
        background: '#0a0a0a',
        fontFamily: "'Montserrat', system-ui, sans-serif",
        padding: '0 90px',
        justifyContent: 'center',
      }}
    >
      <div style={{ opacity: headOpacity, transform: `translateY(${headY}px)`, marginBottom: 56 }}>
        {badge && (
          <div
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: 20,
            }}
          >
            {badge}
          </div>
        )}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            fontSize: 76,
            lineHeight: 1.05,
            color: FG,
          }}
        >
          {title}
        </div>
        {note && (
          <div style={{ fontSize: 24, color: MUTED, marginTop: 16, maxWidth: 640 }}>{note}</div>
        )}
        <div style={{ width: 64, height: 2, background: GOLD, marginTop: 30 }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {items.map((item, i) => {
          const start = 18 + i * 6
          const o = interpolate(frame, [start, start + 14], [0, 1], { extrapolateRight: 'clamp' })
          const x = interpolate(frame, [start, start + 14], [-16, 0], { extrapolateRight: 'clamp' })
          return (
            <div
              key={item}
              style={{
                opacity: o,
                transform: `translateX(${x}px)`,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                borderTop: i === 0 ? 'none' : `1px solid ${HAIRLINE}`,
                paddingTop: i === 0 ? 0 : 20,
              }}
            >
              <div style={{ width: 20, height: 1, background: GOLD, flexShrink: 0 }} />
              <div style={{ fontSize: 30, fontWeight: 300, color: FG }}>{item}</div>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}
