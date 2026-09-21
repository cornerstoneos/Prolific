import { useState } from 'react'
import { t, tone as resolveTone } from '../theme'
import { VIDEO_RE } from './MediaSlot'

/**
 * Hero media surface: a provider iframe embed (Matterport / YouTube / Vimeo),
 * a self-hosted clip, or a still -- inside a bordered panel with a fixed
 * aspect box. An empty config yields the elegant placeholder, never a broken
 * embed.
 */
export default function MediaPanel({
  embedUrl,
  src,
  alt = '',
  caption = 'Walkthrough coming soon',
  ratio = '16 / 9',
  tone = 'light',
}) {
  const tn = resolveTone(tone)
  const [failed, setFailed] = useState(false)
  const has = Boolean(embedUrl || src) && !failed

  return (
    <div
      style={{
        border: `1px solid ${tn.panelBorder}`,
        background: tn.panelFill,
        borderRadius: 4,
        padding: 10,
      }}
    >
      <div
        style={{
          aspectRatio: ratio,
          borderRadius: 2,
          overflow: 'hidden',
          background: '#0c0c0c',
          position: 'relative',
        }}
      >
        {has && embedUrl ? (
          <iframe
            src={embedUrl}
            title={alt || 'Property tour'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
            allowFullScreen
            frameBorder="0"
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
          />
        ) : has && VIDEO_RE.test(src) ? (
          <video
            src={src}
            controls
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : has ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 18,
              background:
                'radial-gradient(circle at 50% 45%, rgba(184,150,90,0.20) 0%, rgba(12,12,12,0) 65%), #0c0c0c',
            }}
          >
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                border: `1px solid ${t.gold}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(184,150,90,0.25)',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  marginLeft: 5,
                  borderTop: '11px solid transparent',
                  borderBottom: '11px solid transparent',
                  borderLeft: `17px solid ${t.gold}`,
                }}
              />
            </div>
            <div
              style={{
                fontFamily: t.sans,
                fontSize: '0.58rem',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.42)',
                textAlign: 'center',
                padding: '0 20px',
              }}
            >
              {caption}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
