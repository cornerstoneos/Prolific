import { t, tone as resolveTone } from '../theme'
import Section from './Section'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import Divider from './Divider'
import GhostPanel from './GhostPanel'
import CTAButton from './CTAButton'
import MediaPanel from './MediaPanel'
import Roadmap from './Roadmap'
import ProofStrip from './ProofStrip'
import LeadForm from './LeadForm'
import SiteFooter from './SiteFooter'

/**
 * The landing-page template, built once and reused by every page.
 * Section order is deliberate: the softer asks come before the hard one, and
 * the proof moment (the roadmap) carries the page's visual weight.
 *
 *   1 hook -> 2 primary media -> 3 roadmap (dark) -> [children]
 *   -> 4 low-friction step -> 5 lead capture -> 6 primary CTA
 *   -> 7 proof strip + repeated CTA -> 8 footer
 *
 * `children` is injected after the roadmap so a page can add its own
 * sections (the engine page puts its four segment sections there) without
 * forking the template.
 */
export default function LandingTemplate({ config, site, formSegment = 'general', children }) {
  const cfg = config || {}
  const hook = cfg.hook || {}
  const rm = cfg.roadmap || {}
  const first = cfg.firstStep || {}
  const lead = cfg.lead || {}
  const cta = cfg.primaryCta || {}
  const dark = resolveTone('dark')

  return (
    <div style={{ background: t.white }}>
      {/* ---- 1. HOOK ---- */}
      <Section tone="light" style={{ paddingTop: 'clamp(76px, 11vw, 132px)', textAlign: 'center' }}>
        <Reveal>
          {hook.eyebrow && (
            <Eyebrow tone="light" style={{ marginBottom: 26 }}>
              {hook.eyebrow}
            </Eyebrow>
          )}
          <h1
            style={{
              fontFamily: t.serif,
              fontSize: 'clamp(2.5rem, 6.4vw, 5.2rem)',
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: '0.03em',
              margin: '0 auto 26px',
              maxWidth: 16 + 'em',
              color: t.black,
            }}
          >
            {hook.headline || 'Prolific'}
          </h1>
          {cfg.address && (
            <div
              style={{
                fontFamily: t.sans,
                fontSize: '0.6rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: t.gold,
                marginBottom: 20,
              }}
            >
              {cfg.address}
            </div>
          )}
          {hook.subhead && (
            <p
              style={{
                fontFamily: t.sans,
                fontSize: '0.86rem',
                lineHeight: 2,
                fontWeight: 300,
                color: t.mid,
                maxWidth: 560,
                margin: '0 auto',
              }}
            >
              {hook.subhead}
            </p>
          )}
        </Reveal>
      </Section>

      {/* ---- 2. PRIMARY MEDIA ---- */}
      <Section tone="light" style={{ paddingTop: 0 }}>
        <Reveal>
          <MediaPanel {...(cfg.primaryMedia || {})} tone="light" />
        </Reveal>
      </Section>

      {/* ---- 3. ROADMAP (the proof moment, on the dark band) ---- */}
      {(rm.steps || []).length > 0 && (
        <Section tone="dark">
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            {rm.eyebrow && (
              <Eyebrow tone="dark" style={{ marginBottom: 20 }}>
                {rm.eyebrow}
              </Eyebrow>
            )}
            <h2
              style={{
                fontFamily: t.serif,
                fontSize: 'clamp(1.9rem, 4vw, 3.4rem)',
                fontWeight: 300,
                letterSpacing: '0.03em',
                margin: 0,
                color: dark.fg,
              }}
            >
              {rm.title}
            </h2>
          </Reveal>
          <Roadmap steps={rm.steps} tone="dark" />
        </Section>
      )}

      {children}

      {/* ---- 4. LOW-FRICTION FIRST STEP ---- */}
      <Section tone="light" style={{ background: t.off }}>
        <Reveal style={{ textAlign: 'center' }}>
          {first.eyebrow && (
            <Eyebrow tone="light" style={{ marginBottom: 18 }}>
              {first.eyebrow}
            </Eyebrow>
          )}
          <h2
            style={{
              fontFamily: t.serif,
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              fontWeight: 300,
              letterSpacing: '0.03em',
              margin: '0 0 16px',
              color: t.black,
            }}
          >
            {first.title}
          </h2>
          {first.body && (
            <p
              style={{
                fontFamily: t.sans,
                fontSize: '0.8rem',
                lineHeight: 1.95,
                color: t.mid,
                maxWidth: 460,
                margin: '0 auto 28px',
              }}
            >
              {first.body}
            </p>
          )}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {Object.entries({
              Instagram: site?.links?.instagram,
              TikTok: site?.links?.tiktok,
              LinkedIn: site?.links?.linkedin,
            })
              .filter(([, href]) => Boolean(href))
              .map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: t.sans,
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: t.black,
                    textDecoration: 'none',
                    border: `1px solid ${t.line}`,
                    borderRadius: 2,
                    padding: '12px 26px',
                    background: t.white,
                  }}
                >
                  {label}
                </a>
              ))}
          </div>
        </Reveal>
      </Section>

      {/* ---- 5. LEAD CAPTURE ---- */}
      <Section tone="light" id="lead">
        <Reveal>
          <GhostPanel tone="light" style={{ padding: 'clamp(28px, 4vw, 56px)' }}>
            {lead.eyebrow && (
              <Eyebrow tone="light" style={{ marginBottom: 18 }}>
                {lead.eyebrow}
              </Eyebrow>
            )}
            <h2
              style={{
                fontFamily: t.serif,
                fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                fontWeight: 300,
                letterSpacing: '0.03em',
                margin: '0 0 12px',
                color: t.black,
              }}
            >
              {lead.title}
            </h2>
            {lead.body && (
              <p
                style={{
                  fontFamily: t.sans,
                  fontSize: '0.8rem',
                  lineHeight: 1.9,
                  color: t.mid,
                  margin: '0 0 34px',
                  maxWidth: 520,
                }}
              >
                {lead.body}
              </p>
            )}
            <LeadForm
              segment={formSegment}
              submitLabel={lead.submitLabel}
              tone="light"
              businessFields={lead.businessFields !== false}
              messageLabel={lead.messageLabel}
            />
          </GhostPanel>
        </Reveal>
      </Section>

      {/* ---- 6. PRIMARY CTA ---- */}
      {cta.label && (
        <Section tone="light" style={{ paddingTop: 0, textAlign: 'center' }}>
          <Reveal>
            <Divider style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }} />
            <CTAButton size="lg" href={cta.href || undefined}>
              {cta.label}
            </CTAButton>
            {cta.note && (
              <div
                style={{
                  fontFamily: t.sans,
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  color: t.dim,
                  marginTop: 18,
                }}
              >
                {cta.note}
              </div>
            )}
          </Reveal>
        </Section>
      )}

      {/* ---- 7. PROOF STRIP + REPEATED CTA ---- */}
      <Section tone="light" style={{ paddingTop: 0 }}>
        <Reveal style={{ marginBottom: 26 }}>
          <Eyebrow tone="light">From real shoots</Eyebrow>
        </Reveal>
        <ProofStrip items={cfg.proof || []} tone="light" />
        {cta.label && (
          <Reveal style={{ textAlign: 'center', marginTop: 'clamp(36px, 4vw, 56px)' }}>
            <CTAButton size="lg" href={cta.href || undefined}>
              {cta.label}
            </CTAButton>
          </Reveal>
        )}
      </Section>

      {/* ---- 8. FOOTER ---- */}
      <SiteFooter logo={site?.logo} domain={site?.domain} tagline={site?.tagline} />
    </div>
  )
}
