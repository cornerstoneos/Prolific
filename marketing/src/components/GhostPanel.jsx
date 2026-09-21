import { t } from '../theme'

// Bordered card, matches the reference: thin gold-tinted border, flat dark
// fill, minimal radius. No gradient sheen, no glow — this is a tool card.
export default function GhostPanel({ children, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        border: `1px solid ${t.line}`,
        borderRadius: 4,
        background: 'transparent',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
