import { useCurrentFrame, interpolate, AbsoluteFill, Img, staticFile } from 'remotion'
import { tiers } from '../tiers'

const FG = '#0c0c0c'
const MUTED = '#888880'
const HAIRLINE = 'rgba(12,12,12,0.18)'

/**
 * Full "everything at a glance" screen -- header, all four tiers in a grid,
 * footer. Used in two places:
 *   - the standalone static composition (DevelopmentPackagesStill),
 *     animate=false so a 1-frame still render is fully opaque, not
 *     mid-fade
 *   - the recap segment inside the motion piece, right before the close
 *     card, animate=true (default) so it fades in like every other segment
 */
export default function AllTiersScreen({ animate = true }) {
  const frame = useCurrentFrame()
  const o = animate ? interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' }) : 1

  return (
    <AbsoluteFill
      style={{
        opacity: o,
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
            color: FG,
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
        {tiers.map((tier) => (
          <div key={tier.title} style={{ background: '#fafaf8', padding: '46px 34px' }}>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: FG,
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
        <Img
          src={staticFile('logo.jpg')}
          style={{ width: 52, height: 52, objectFit: 'contain', marginBottom: 18 }}
        />
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
