import { tone as resolveTone } from '../theme'

// Page section shell. `tone="dark"` flips the whole band to the #0c0c0c
// treatment where the gold-glow primitives are designed to live.
export default function Section({ children, tone = 'light', id, style }) {
  const tn = resolveTone(tone)
  return (
    <section
      id={id}
      style={{
        background: tn.bg,
        color: tn.fg,
        padding: 'clamp(64px, 9vw, 110px) clamp(20px, 5vw, 56px)',
        ...style,
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
    </section>
  )
}
