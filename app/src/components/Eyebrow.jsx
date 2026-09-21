import { t, tone as resolveTone } from '../theme'

// Small-caps accent label. On dark tone it carries the gold bloom; on the
// light editorial tone the bloom is suppressed (see theme.js).
export default function Eyebrow({ children, tone = 'light', style, ...rest }) {
  const tn = resolveTone(tone)
  return (
    <div
      {...rest}
      style={{
        fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.38em',
        textTransform: 'uppercase',
        color: t.gold,
        textShadow: tn.accentGlow,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
