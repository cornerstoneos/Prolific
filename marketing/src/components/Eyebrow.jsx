import { t } from '../theme'

// Small-caps label. Used once per page, top of the grid or a piece.
export default function Eyebrow({ children, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        fontFamily: t.mono,
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.38em',
        textTransform: 'uppercase',
        color: t.fg,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
