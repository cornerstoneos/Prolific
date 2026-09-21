import { tone as resolveTone } from '../theme'

// Bordered card: hairline gold border, faint diagonal gradient fill.
export default function GhostPanel({ children, tone = 'light', style, ...rest }) {
  const tn = resolveTone(tone)
  return (
    <div
      {...rest}
      style={{
        border: `1px solid ${tn.panelBorder}`,
        background: tn.panelFill,
        borderRadius: 4,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
