import { t, tone as resolveTone } from '../theme'
import Reveal from './Reveal'
import MediaSlot from './MediaSlot'
import GhostPanel from './GhostPanel'

/**
 * Responsive grid of real shoot photography. An empty config renders one
 * "coming soon" panel rather than collapsing into a gap in the layout.
 */
export default function ProofStrip({ items = [], tone = 'light', ratio = '4 / 3' }) {
  const tn = resolveTone(tone)

  if (!items.length) {
    return (
      <GhostPanel
        tone={tone}
        style={{
          padding: '64px 24px',
          textAlign: 'center',
          fontFamily: t.sans,
          fontSize: '0.56rem',
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color: tn.muted,
        }}
      >
        Shoot library coming soon
      </GhostPanel>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 3,
      }}
    >
      {items.map((item, i) => (
        <Reveal key={item.src || i} delay={Math.min(i, 5) * 0.06}>
          <div style={{ position: 'relative', aspectRatio: ratio, overflow: 'hidden', background: '#0c0c0c' }}>
            <MediaSlot src={item.src} alt={item.alt || ''} label="Coming soon" />
            {item.caption && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '26px 16px 12px',
                  background: 'linear-gradient(transparent, rgba(12,12,12,0.72))',
                  fontFamily: t.sans,
                  fontSize: '0.52rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,248,0.86)',
                }}
              >
                {item.caption}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
