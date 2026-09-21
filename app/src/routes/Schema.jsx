import { t } from '../theme'
import { segments } from '../content/schema'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Divider from '../components/Divider'
import GhostPanel from '../components/GhostPanel'

/**
 * Internal reference view of the production menu -- every segment and every
 * content type in one place, no marketing chrome. This is the page to have
 * open while producing, not a page to send a client.
 */
export default function Schema() {
  const all = segments.flatMap((s) => s.contentTypes.map((c) => ({ ...c, segment: s })))
  const gaps = all.filter((c) => c.status === 'gap')

  return (
    <div style={{ background: t.white, minHeight: '100vh' }}>
      <Section tone="light">
        <Reveal>
          <Eyebrow tone="light" style={{ marginBottom: 20 }}>
            Internal — production menu
          </Eyebrow>
          <h1
            style={{
              fontFamily: t.serif,
              fontSize: 'clamp(2rem, 5vw, 3.6rem)',
              fontWeight: 300,
              letterSpacing: '0.03em',
              margin: '0 0 18px',
              color: t.black,
            }}
          >
            Content engine schema
          </h1>
          <p
            style={{
              fontFamily: t.sans,
              fontSize: '0.8rem',
              lineHeight: 1.95,
              color: t.mid,
              maxWidth: 560,
              margin: 0,
            }}
          >
            {segments.length} segments · {all.length} content types ·{' '}
            {gaps.length} identified gap{gaps.length === 1 ? '' : 's'}. Every
            piece originates from a real completed shoot.
          </p>
        </Reveal>

        <Divider style={{ margin: 'clamp(36px, 5vw, 56px) 0' }} />

        <div style={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
          {segments.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <GhostPanel tone="light" style={{ padding: 26, height: '100%' }}>
                <div
                  style={{
                    fontFamily: t.sans,
                    fontSize: '0.46rem',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: t.gold,
                    marginBottom: 10,
                  }}
                >
                  {s.lane} lane · {s.platforms.join(' + ')}
                </div>
                <div
                  style={{
                    fontFamily: t.serif,
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    color: t.black,
                    marginBottom: 18,
                  }}
                >
                  {s.name}
                </div>

                {s.contentTypes.map((c) => (
                  <div key={c.type} style={{ paddingBottom: 14, marginBottom: 14, borderBottom: `1px solid ${t.line}` }}>
                    <div
                      style={{
                        fontFamily: t.sans,
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        color: t.black,
                        marginBottom: 5,
                        display: 'flex',
                        gap: 8,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      {c.type}
                      {c.status === 'gap' && (
                        <span
                          style={{
                            fontSize: '0.44rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            background: t.gold,
                            color: t.black,
                            padding: '3px 7px',
                            borderRadius: 2,
                          }}
                        >
                          Gap
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: t.sans, fontSize: '0.64rem', color: t.mid, lineHeight: 1.75 }}>
                      {c.cadence} · {c.purpose}
                    </div>
                    <div style={{ fontFamily: t.sans, fontSize: '0.64rem', color: t.gold, marginTop: 5, lineHeight: 1.7 }}>
                      {c.cta}
                    </div>
                  </div>
                ))}
              </GhostPanel>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  )
}
