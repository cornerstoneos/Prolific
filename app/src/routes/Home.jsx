import { Link } from 'react-router-dom'
import { t } from '../theme'
import { pieces } from '../content/schema'
import Eyebrow from '../components/Eyebrow'
import GhostPanel from '../components/GhostPanel'

const STATUS_COLOR = {
  live: '#7fae74',
  planned: t.muted,
  gap: t.gold,
}

/**
 * The whole tool. One flat grid of every content piece in the production
 * menu. Open a card's route, screen-record it, that's the post.
 * No marketing copy, no forms, no photos on this page — just the index.
 */
export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: t.bg, padding: '64px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 14 }}>Prolific — Marketing Engine</Eyebrow>
        <div style={{ fontFamily: t.sans, fontSize: '0.78rem', color: t.muted, marginBottom: 48 }}>
          Every content piece, indexed. Open one, record it, post it.
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 14,
            textAlign: 'left',
          }}
        >
          {pieces.map((p) => (
            <Link key={p.slug} to={`/${p.slug}`} style={{ textDecoration: 'none' }}>
              <GhostPanel style={{ padding: '18px 20px', height: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <div style={{ fontFamily: t.sans, fontSize: '0.92rem', fontWeight: 600, color: t.gold }}>
                    {p.type}
                  </div>
                  <div
                    title={p.status}
                    style={{
                      flexShrink: 0,
                      marginTop: 4,
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: STATUS_COLOR[p.status] || t.muted,
                    }}
                  />
                </div>
                <div style={{ fontFamily: t.mono, fontSize: '0.7rem', color: t.dim, marginBottom: 10 }}>
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
