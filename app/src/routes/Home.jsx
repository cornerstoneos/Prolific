import { Link } from 'react-router-dom'
import { t } from '../theme'
import { segments } from '../content/schema'
import Eyebrow from '../components/Eyebrow'
import GhostPanel from '../components/GhostPanel'
import Divider from '../components/Divider'

/**
 * The whole tool. Every content piece in the production menu, grouped by
 * client segment (Agents, REO/AMC, Developers, Commercial) — same grouping
 * as the schema itself. Open a card's route, screen-record it, that's the
 * post. No marketing copy, no forms, no photos on this page — just the index.
 */
export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: t.bg, padding: '64px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow style={{ marginBottom: 14 }}>Prolific — Marketing Engine</Eyebrow>
          <div style={{ fontFamily: t.sans, fontSize: '0.78rem', color: t.muted }}>
            Every content piece, indexed. Open one, record it, post it.
          </div>
        </div>

        {segments.map((segment, i) => (
          <div key={segment.id} style={{ marginBottom: 48 }}>
            {i > 0 && <Divider style={{ marginBottom: 48 }} />}

            <div
              style={{
                fontFamily: t.mono,
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: t.gold,
                marginBottom: 18,
              }}
            >
              {segment.name}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 14,
              }}
            >
              {segment.pieces.map((p) => (
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
        ))}
      </div>
    </div>
  )
}
