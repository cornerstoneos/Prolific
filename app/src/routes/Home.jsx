import { Link } from 'react-router-dom'
import { t } from '../theme'
import { pieces } from '../content/schema'
import Eyebrow from '../components/Eyebrow'
import GhostPanel from '../components/GhostPanel'

/**
 * The whole tool. One flat grid of every content piece in the production
 * menu. Open a card's route, screen-record it, that's the post.
 * No marketing copy, no forms, no photos on this page — just the index.
 */
export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: t.bg, padding: '64px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 14 }}>Prolific — Marketing Engine</Eyebrow>
        <div style={{ fontFamily: t.sans, fontSize: '0.78rem', color: t.muted, marginBottom: 48 }}>
          Select an asset · screen record any route · that's your post
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 14,
            textAlign: 'left',
          }}
        >
          {pieces.map((p) => (
            <Link key={p.slug} to={`/${p.slug}`} style={{ textDecoration: 'none' }}>
              <GhostPanel style={{ padding: '18px 20px', height: '100%' }}>
                <div
                  style={{
                    fontFamily: t.sans,
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: t.gold,
                    marginBottom: 6,
                  }}
                >
                  {p.type}
                </div>
                <div
                  style={{
                    fontFamily: t.mono,
                    fontSize: '0.7rem',
                    color: t.dim,
                    marginBottom: 10,
                  }}
                >
                  /{p.slug}
                </div>
                <div style={{ fontFamily: t.sans, fontSize: '0.72rem', color: t.muted, lineHeight: 1.6 }}>
                  {p.cadence} · {p.purpose}
                </div>
              </GhostPanel>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
