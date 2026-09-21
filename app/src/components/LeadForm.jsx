import { useState } from 'react'
import { t, tone as resolveTone } from '../theme'
import CTAButton from './CTAButton'

// Must match the hidden mirror form in app/index.html exactly -- name and
// every field name. Netlify's detection bot only reads built static HTML at
// deploy time, so a form that exists solely in client-rendered React is
// invisible to it without that mirror.
export const FORM_NAME = 'prolific-lead'

const srOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
}

/**
 * `businessFields` controls the company/volume pair. They belong on the
 * segment page (an agency or asset manager answering "how many a month"),
 * but not on a property page, where the visitor is asking about one home.
 * Omitted fields simply arrive empty in Netlify -- the mirror still declares
 * them, so detection is unaffected.
 */
export default function LeadForm({
  segment = 'general',
  submitLabel = 'Send inquiry',
  tone = 'light',
  businessFields = true,
  messageLabel = 'What do you need documented?',
}) {
  const tn = resolveTone(tone)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('/', { method: 'POST', body: new FormData(form) })
      if (!res.ok) throw new Error(`Netlify returned ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error('[lead-form] submission failed', err)
      setStatus('error')
    }
  }

  const field = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${tn.hairline}`,
    padding: '13px 0',
    color: tn.fg,
    fontFamily: t.sans,
    fontSize: '0.82rem',
    fontWeight: 300,
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: t.sans,
    fontSize: '0.52rem',
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color: tn.muted,
    marginBottom: 4,
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      style={{ display: 'grid', gap: 22 }}
    >
      {/* Netlify pairs the submission to the detected form by this value. */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Which lane the lead came from, so submissions arrive pre-segmented. */}
      <input type="hidden" name="segment" value={segment} />
      <label style={srOnly} aria-hidden="true">
        Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </label>

      <div
        style={{
          display: 'grid',
          gap: 22,
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        }}
      >
        <div>
          <label style={labelStyle} htmlFor={`${segment}-name`}>Name</label>
          <input id={`${segment}-name`} name="name" type="text" required style={field} />
        </div>
        <div>
          <label style={labelStyle} htmlFor={`${segment}-email`}>Email</label>
          <input id={`${segment}-email`} name="email" type="email" required style={field} />
        </div>
        {businessFields && (
          <div>
            <label style={labelStyle} htmlFor={`${segment}-company`}>Company / brokerage</label>
            <input id={`${segment}-company`} name="company" type="text" style={field} />
          </div>
        )}
        <div>
          <label style={labelStyle} htmlFor={`${segment}-phone`}>Phone</label>
          <input id={`${segment}-phone`} name="phone" type="tel" style={field} />
        </div>
      </div>

      {businessFields && (
        <div>
          <label style={labelStyle} htmlFor={`${segment}-volume`}>
            Properties per month
          </label>
          <input
            id={`${segment}-volume`}
            name="volume"
            type="text"
            placeholder="e.g. 3 listings, or 40 inspections"
            style={field}
          />
        </div>
      )}

      <div>
        <label style={labelStyle} htmlFor={`${segment}-message`}>{messageLabel}</label>
        <textarea id={`${segment}-message`} name="message" rows={3} style={{ ...field, resize: 'vertical' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <CTAButton type="submit" size="sm" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : submitLabel}
        </CTAButton>

        {status === 'sent' && (
          <span style={{ fontFamily: t.sans, fontSize: '0.7rem', color: t.gold, letterSpacing: '0.08em' }}>
            Received — we reply to every inquiry within 24 hours.
          </span>
        )}
        {status === 'error' && (
          <span style={{ fontFamily: t.sans, fontSize: '0.7rem', color: '#c46a5a', letterSpacing: '0.08em' }}>
            That didn’t send. Email us directly and we’ll pick it up.
          </span>
        )}
      </div>
    </form>
  )
}
