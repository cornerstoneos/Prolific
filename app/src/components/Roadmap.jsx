import { Fragment, useId } from 'react'
import { t, tone as resolveTone } from '../theme'
import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'
import MediaSlot from './MediaSlot'

/**
 * Horizontally chained sequence of cards with connecting arrows.
 * Under 760px the container flips to a vertical stack and each arrow rotates
 * 90deg so it points down the chain instead of across it. The breakpoint is a
 * scoped <style> block keyed to a per-instance class, so two Roadmaps on one
 * page never fight over the same selector.
 */
export default function Roadmap({ steps = [], tone = 'light' }) {
  const tn = resolveTone(tone)
  // useId yields ":r0:" style values -- strip the colons so it is a legal
  // CSS class name.
  const cls = `rm-${useId().replace(/:/g, '')}`

  if (!steps.length) return null

  return (
    <>
      <style>{`
        .${cls} { display: flex; align-items: stretch; justify-content: center; gap: 0; }
        .${cls} > .${cls}-card { flex: 1 1 0; min-width: 0; }
        .${cls} > .${cls}-arrow {
          flex: 0 0 auto;
          display: flex; align-items: center; justify-content: center;
          padding: 0 14px;
          color: ${t.gold};
          font-size: 1.1rem; line-height: 1;
          transition: transform .3s ease;
          align-self: center;
        }
        @media (max-width: 760px) {
          .${cls} { flex-direction: column; align-items: stretch; }
          .${cls} > .${cls}-arrow { transform: rotate(90deg); padding: 16px 0; }
          .${cls} > .${cls}-card { max-width: 340px; margin: 0 auto; width: 100%; }
        }
      `}</style>

      <div className={cls}>
        {steps.map((step, i) => (
          <Fragment key={step.title || i}>
            <Reveal className={`${cls}-card`} delay={i * 0.08}>
              <div style={{ padding: '0 10px' }}>
                <PhoneFrame tone={tone} style={{ maxWidth: 190, margin: '0 auto 22px' }}>
                  <MediaSlot src={step.media} alt={step.title || ''} label="Coming soon" />
                </PhoneFrame>

                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      margin: '0 auto 12px',
                      borderRadius: '50%',
                      border: `1px solid ${t.gold}`,
                      color: t.gold,
                      fontFamily: t.sans,
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: tn.accentGlow === 'none' ? 'none' : '0 0 14px rgba(184,150,90,0.3)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {step.label && (
                    <div
                      style={{
                        fontFamily: t.sans,
                        fontSize: '0.52rem',
                        letterSpacing: '0.24em',
                        textTransform: 'uppercase',
                        color: tn.muted,
                        marginBottom: 10,
                      }}
                    >
                      {step.label}
                    </div>
                  )}

                  <div
                    style={{
                      fontFamily: t.serif,
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      letterSpacing: '0.03em',
                      color: tn.fg,
                      marginBottom: 10,
                    }}
                  >
                    {step.title}
                  </div>

                  {step.body && (
                    <p
                      style={{
                        fontFamily: t.sans,
                        fontSize: '0.74rem',
                        lineHeight: 1.85,
                        color: tn.muted,
                        maxWidth: 260,
                        margin: '0 auto',
                      }}
                    >
                      {step.body}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>

            {i < steps.length - 1 && (
              <div className={`${cls}-arrow`} aria-hidden="true">
                →
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}
