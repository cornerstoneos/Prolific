import { useState } from 'react'
import { t } from '../theme'

export const VIDEO_RE = /\.(mp4|webm|mov)$/i

function Placeholder({ label }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        background:
          'radial-gradient(circle at 50% 42%, rgba(184,150,90,0.16) 0%, rgba(12,12,12,0) 62%), #0c0c0c',
        color: 'rgba(250,250,248,0.4)',
        fontFamily: t.sans,
        fontSize: '0.56rem',
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 16,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          border: `1px solid ${t.gold}`,
          opacity: 0.6,
        }}
      />
      {label}
    </div>
  )
}

/**
 * Renders one config-driven media value.
 * - Empty/missing src        -> "coming soon" placeholder (never a blank box)
 * - .mp4 / .webm / .mov      -> muted autoplay loop playsInline video
 * - anything else            -> <img>, falling back to the placeholder on 404
 */
export default function MediaSlot({ src, alt = '', label = 'Coming soon', style }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) return <Placeholder label={label} />

  const fit = { width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }

  if (VIDEO_RE.test(src)) {
    return (
      <video
        src={src}
        muted
        autoPlay
        loop
        playsInline
        onError={() => setFailed(true)}
        style={fit}
      />
    )
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} style={fit} />
}
