import { t } from '../theme'

const sizes = {
  lg: { padding: '17px 44px', fontSize: '0.72rem', letterSpacing: '0.16em' },
  sm: { padding: '11px 26px', fontSize: '0.62rem', letterSpacing: '0.14em' },
}

/**
 * Primary CTA. Gold gradient fill, dark text, glow + thin ring.
 *
 * NOTE ON THE STYLE MERGE -- do not "simplify" this.
 * `style` is destructured OUT of props explicitly and merged into the base
 * object as {...base, ...style}. `...rest` is then spread BEFORE the style
 * attribute, never after. If `...rest` (which would still carry `style` if it
 * were not destructured) were spread AFTER style=, the later JSX prop would
 * win and silently replace the ENTIRE base style -- gradient, padding, radius,
 * shadow, all of it -- leaving a bare native button. Both guards are
 * deliberate and belt-and-braces.
 */
export default function CTAButton({
  children,
  size = 'lg',
  href,
  as,
  style,
  ...rest
}) {
  const base = {
    ...(sizes[size] || sizes.lg),
    display: 'inline-block',
    fontFamily: t.sans,
    fontWeight: 700,
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center',
    color: t.black,
    background: `linear-gradient(135deg, ${t.goldLite} 0%, ${t.gold} 52%, #9d7c44 100%)`,
    border: 'none',
    borderRadius: 2,
    cursor: 'pointer',
    boxShadow:
      '0 0 0 1px rgba(184,150,90,0.55), 0 10px 30px rgba(184,150,90,0.26)',
    transition: 'transform .2s ease, box-shadow .25s ease, filter .2s ease',
    lineHeight: 1.25,
  }

  const Tag = as || (href ? 'a' : 'button')

  return (
    <Tag
      {...rest}
      href={href}
      style={{ ...base, ...style }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)'
        e.currentTarget.style.filter = 'brightness(1.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.filter = 'none'
      }}
    >
      {children}
    </Tag>
  )
}
