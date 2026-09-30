import { useParams, Link } from 'react-router-dom'
import { t } from '../theme'
import { pieceBySlug } from '../content/schema'
import MediaSlot from '../components/MediaSlot'

/**
 * One content piece. Until it's built, this is an empty template -- the
 * canvas shows a "coming soon" placeholder. Once built, `piece.media`
 * (schema.js) points at the real rendered file and it plays right here.
 * Either way: no baked copy, no CTA buttons, no site chrome beyond the
 * piece's own identity, small and out of the way.
 */
export default function Piece() {
  const { slug } = useParams()
  const piece = pieceBySlug(slug)

  if (!piece) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          background: t.bg,
          color: t.fg,
          padding: 40,
          textAlign: 'center',
        }}
      >
        <div style={{ fontFamily: t.sans, fontSize: '1rem', color: t.fg }}>No piece at "{slug}"</div>
        <Link to="/" style={{ fontFamily: t.mono, fontSize: '0.7rem', color: t.fg }}>
          ← back to index
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: t.bg, display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 22px',
          fontFamily: t.mono,
          fontSize: '0.62rem',
          letterSpacing: '0.1em',
          color: t.dim,
        }}
      >
        <Link to="/" style={{ color: t.dim, textDecoration: 'none' }}>
          ← index
        </Link>
        <span>{piece.segmentName}</span>
      </div>

      {/* The empty canvas. This is what gets recorded. */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 22px 22px',
        }}
      >
        <div style={{ width: '100%', maxWidth: 480, aspectRatio: '9 / 16' }}>
          <MediaSlot src={piece.media} label={piece.type} />
        </div>
      </div>

      <div
        style={{
          padding: '0 22px 28px',
          fontFamily: t.sans,
          fontSize: '0.68rem',
          color: t.dim,
          textAlign: 'center',
        }}
      >
        /{piece.slug} · {piece.cadence}
      </div>
    </div>
  )
}
