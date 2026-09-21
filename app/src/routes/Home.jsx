import { Link } from 'react-router-dom'
import { t } from '../theme'
import { site } from '../content/site'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Divider from '../components/Divider'
import GhostPanel from '../components/GhostPanel'
import MediaSlot from '../components/MediaSlot'

/**
 * Internal library view of every page in the project -- NOT a public nav.
 * Every asset gets an entry here so nothing is reachable only by typing a URL.
 * Add a row whenever you add a route.
 *   path  string  router path (the deployed URL is /engine + path)
 *   label string  short display name
 *   meta  string  one line: what it is / what state it is in
 *   thumb string  optional preview image; empty -> placeholder, never a gap
 */
const ASSETS = [
  {
    path: '/content-engine',
    label: 'Marketing Engine',
    meta: 'Full landing page · 4 segment sections · lead capture live',
    thumb: '/engine/media/IMG_2282.jpeg',
  },
  {
    path: '/listing/sample-property',
    label: 'Listing Template',
    meta: 'Per-property page · sample config, media slots empty',
    thumb: '/engine/media/IMG_2087.jpeg',
  },
  {
    path: '/schema',
    label: 'Content Schema',
    meta: 'Internal production menu · every segment & content type',
    thumb: '/engine/media/IMG_2056.jpeg',
  },
]

export default function Home() {
  return (
    <div style={{ background: t.white, minHeight: '100vh' }}>
      <div style={{ padding: 'clamp(64px, 9vw, 110px) clamp(20px, 5vw, 56px)', maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <Eyebrow tone="light" style={{ marginBottom: 22 }}>
            Internal asset library
          </Eyebrow>
          <h1
            style={{
              fontFamily: t.serif,
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '0.03em',
              margin: '0 0 16px',
              color: t.black,
            }}
          >
            Prolific
          </h1>
          <p style={{ fontFamily: t.sans, fontSize: '0.8rem', lineHeight: 1.95, color: t.mid, maxWidth: 520, margin: 0 }}>
            Every page in this project, listed. {ASSETS.length} assets.
          </p>
        </Reveal>

        <Divider style={{ margin: 'clamp(36px, 5vw, 56px) 0' }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 3,
          }}
        >
          {ASSETS.map((asset, i) => (
            <Reveal key={asset.path} delay={i * 0.07}>
              <Link to={asset.path} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <GhostPanel tone="light" style={{ overflow: 'hidden', height: '100%' }}>
                  <div style={{ aspectRatio: '16 / 10', background: '#0c0c0c', overflow: 'hidden' }}>
                    <MediaSlot src={asset.thumb} alt={asset.label} label="No preview" />
                  </div>
                  <div style={{ padding: '22px 22px 26px' }}>
                    <div
                      style={{
                        fontFamily: t.serif,
                        fontSize: '1.4rem',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        color: t.black,
                        marginBottom: 8,
                      }}
                    >
                      {asset.label}
                    </div>
                    <div style={{ fontFamily: t.sans, fontSize: '0.68rem', lineHeight: 1.8, color: t.mid, marginBottom: 14 }}>
                      {asset.meta}
                    </div>
                    <div
                      style={{
                        fontFamily: t.sans,
                        fontSize: '0.52rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: t.gold,
                      }}
                    >
                      Open →
                    </div>
                  </div>
                </GhostPanel>
              </Link>
            </Reveal>
          ))}
        </div>

        <Divider style={{ margin: 'clamp(40px, 5vw, 64px) 0 26px' }} />
        <div style={{ fontFamily: t.sans, fontSize: '0.6rem', letterSpacing: '0.16em', color: t.dim }}>
          {site.domain || 'domain not set'} · legacy site still served at /
        </div>
      </div>
    </div>
  )
}
