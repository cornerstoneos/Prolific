import { useParams, Link } from 'react-router-dom'
import LandingTemplate from '../components/LandingTemplate'
import { listing as sampleListing } from '../content/listing-sample'
import { site } from '../content/site'
import { t } from '../theme'

/**
 * Per-property landing page.
 * To add a listing: copy content/listing-sample.js to
 * content/listing-<slug>.js, fill it in, import it, and register it here.
 * The component reads all copy and media from that config -- nothing about a
 * specific property is hardcoded below.
 */
const LISTINGS = {
  [sampleListing.slug]: sampleListing,
}

export default function Listing() {
  const { slug } = useParams()
  const config = LISTINGS[slug]

  // Unknown slug degrades to a readable page, not a blank screen or a crash.
  if (!config) {
    return (
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 18,
          background: t.white,
          padding: 40,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: t.serif,
            fontSize: '2rem',
            fontWeight: 300,
            letterSpacing: '0.04em',
            color: t.black,
          }}
        >
          No listing at “{slug}”
        </div>
        <p style={{ fontFamily: t.sans, fontSize: '0.76rem', color: t.mid, maxWidth: 380, lineHeight: 1.9 }}>
          Register the slug in <code>src/routes/Listing.jsx</code> and add its
          config under <code>src/content/</code>.
        </p>
        <Link
          to="/"
          style={{
            fontFamily: t.sans,
            fontSize: '0.58rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: t.gold,
          }}
        >
          Back to the library
        </Link>
      </div>
    )
  }

  return <LandingTemplate config={config} site={site} formSegment={`listing:${config.slug}`} />
}
