import { t } from '../theme'
import Divider from './Divider'

// Minimal footer: logo + domain.
// The logo is a JPEG with a baked white background, so it sits on a white
// chip rather than directly on the page -- on anything but pure white it
// would otherwise show a visible box edge.
export default function SiteFooter({ logo, domain, tagline }) {
  return (
    <footer style={{ padding: '64px 24px 52px', textAlign: 'center' }}>
      <Divider style={{ marginBottom: 44 }} />
      {logo && (
        <img
          src={logo}
          alt="Prolific"
          style={{
            width: 46,
            height: 46,
            objectFit: 'contain',
            background: '#fff',
            borderRadius: 3,
            marginBottom: 18,
          }}
        />
      )}
      <div
        style={{
          fontFamily: t.serif,
          fontSize: '1.15rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: t.black,
          marginBottom: 10,
        }}
      >
        Prolific
      </div>
      {tagline && (
        <div
          style={{
            fontFamily: t.sans,
            fontSize: '0.56rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: t.mid,
            marginBottom: 14,
          }}
        >
          {tagline}
        </div>
      )}
      <div style={{ fontFamily: t.sans, fontSize: '0.68rem', letterSpacing: '0.16em', color: t.gold }}>
        {domain || 'prolific.example'}
      </div>
    </footer>
  )
}
