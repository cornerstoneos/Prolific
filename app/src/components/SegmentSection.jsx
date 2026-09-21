import { useId } from 'react'
import { t, tone as resolveTone } from '../theme'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import Divider from './Divider'
import GhostPanel from './GhostPanel'
import CTAButton from './CTAButton'
import MediaSlot from './MediaSlot'

/**
 * One segment of the content engine, rendered as a page section (not its own
 * route). Reads a segment object from content/schema.js.
 *
 * Tone follows the lane: institutional segments sit on the dark band where
 * the gold-glow primitives live; discovery segments stay on the light
 * editorial base.
 */
export default function SegmentSection({ segment, index = 0 }) {
  const tone = segment.lane === 'institutional' ? 'dark' : 'light'
  const tn = resolveTone(tone)
  const cls = `seg-${useId().replace(/:/g, '')}`
  const types = segment.contentTypes || []

  return (
    <section
      id={segment.id}
      style={{
        background: tn.bg,
        color: tn.fg,
        padding: 'clamp(64px, 8vw, 104px) clamp(20px, 5vw, 56px)',
      }}
    >
      <style>{`
        .${cls}-head { display: grid; grid-template-columns: 1.15fr 1fr; gap: clamp(28px, 5vw, 72px); align-items: center; }
        .${cls}-row  { display: grid; grid-template-columns: 1.5fr 1fr 1.2fr 2fr; gap: 20px; align-items: baseline; }
        .${cls}-col-label { display: none; }
        @media (max-width: 860px) {
          .${cls}-head { grid-template-columns: 1fr; }
          .${cls}-row  { grid-template-columns: 1fr; gap: 6px; }
          .${cls}-head-order { order: -1; }
          .${cls}-col-label {
            display: block; font-family: ${t.sans}; font-size: 0.46rem;
            letter-spacing: 0.24em; text-transform: uppercase;
            color: ${t.gold}; opacity: 0.75; margin-top: 10px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <div className={`${cls}-head`}>
            <div>
              <Eyebrow tone={tone} style={{ marginBottom: 20 }}>
                {String(index + 1).padStart(2, '0')} — {segment.audience}
              </Eyebrow>

              <h2
                style={{
                  fontFamily: t.serif,
                  fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.08,
                  letterSpacing: '0.03em',
                  margin: '0 0 20px',
                  color: tn.fg,
                }}
              >
                {segment.promise}
              </h2>

              <p
                style={{
                  fontFamily: t.sans,
                  fontSize: '0.84rem',
                  lineHeight: 1.95,
                  fontWeight: 300,
                  color: tn.muted,
                  maxWidth: 520,
                  margin: '0 0 26px',
                }}
              >
                {segment.body}
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 30 }}>
                {(segment.platforms || []).map((p) => (
                  <span
                    key={p}
                    style={{
                      fontFamily: t.sans,
                      fontSize: '0.5rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: t.gold,
                      border: `1px solid ${tn.panelBorder}`,
                      borderRadius: 2,
                      padding: '6px 12px',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <CTAButton size="sm" href={segment.ctaHref || undefined}>
                {segment.cta}
              </CTAButton>
            </div>

            <div className={`${cls}-head-order`}>
              <div
                style={{
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                  borderRadius: 3,
                  border: `1px solid ${tn.panelBorder}`,
                  background: '#0c0c0c',
                }}
              >
                <MediaSlot src={segment.media} alt={segment.name} label="Shoot coming soon" />
              </div>
            </div>
          </div>
        </Reveal>

        {types.length > 0 && (
          <>
            <Divider style={{ margin: 'clamp(38px, 5vw, 60px) 0 0' }} />

            <Reveal delay={0.1}>
              <GhostPanel tone={tone} style={{ padding: 'clamp(22px, 3vw, 34px)', marginTop: 34 }}>
                <div
                  style={{
                    fontFamily: t.sans,
                    fontSize: '0.5rem',
                    letterSpacing: '0.26em',
                    textTransform: 'uppercase',
                    color: tn.muted,
                    marginBottom: 22,
                  }}
                >
                  Production menu
                </div>

                {types.map((c, i) => (
                  <div
                    key={c.type}
                    className={`${cls}-row`}
                    style={{
                      padding: '18px 0',
                      borderTop: i === 0 ? 'none' : `1px solid ${tn.hairline}`,
                    }}
                  >
                    <div>
                      <div className={`${cls}-col-label`}>Content type</div>
                      <div
                        style={{
                          fontFamily: t.serif,
                          fontSize: '1.12rem',
                          fontWeight: 400,
                          letterSpacing: '0.02em',
                          color: tn.fg,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 9,
                        }}
                      >
                        {c.type}
                        {c.status === 'gap' && (
                          <span
                            title="Identified gap — not yet built"
                            style={{
                              fontFamily: t.sans,
                              fontSize: '0.44rem',
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase',
                              color: t.black,
                              background: t.gold,
                              borderRadius: 2,
                              padding: '3px 7px',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            Gap
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className={`${cls}-col-label`}>Cadence</div>
                      <div style={{ fontFamily: t.sans, fontSize: '0.7rem', color: tn.muted, lineHeight: 1.7 }}>
                        {c.cadence}
                      </div>
                    </div>

                    <div>
                      <div className={`${cls}-col-label`}>Purpose</div>
                      <div style={{ fontFamily: t.sans, fontSize: '0.7rem', color: tn.muted, lineHeight: 1.7 }}>
                        {c.purpose}
                      </div>
                    </div>

                    <div>
                      <div className={`${cls}-col-label`}>CTA</div>
                      <div
                        style={{
                          fontFamily: t.sans,
                          fontSize: '0.72rem',
                          color: c.cta?.startsWith('Soft') ? tn.muted : t.gold,
                          lineHeight: 1.7,
                          fontStyle: c.cta?.startsWith('Soft') ? 'italic' : 'normal',
                        }}
                      >
                        {c.cta}
                      </div>
                    </div>
                  </div>
                ))}
              </GhostPanel>
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}
