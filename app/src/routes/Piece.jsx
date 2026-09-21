import { useParams, Link } from 'react-router-dom'
import { t } from '../theme'
import { pieceBySlug } from '../content/schema'
import MediaSlot from '../components/MediaSlot'

/**
 * One content piece, as an empty template. This is the route someone opens
 * and screen-records — the recording is the post. No baked copy, no
 * photos, no CTA buttons, no site chrome. Just the piece's own identity
 * (small, out of the way) and an empty canvas.
 *
 * When a piece is ready to be built, its real media/copy lives in a config
 * this route reads from — not hardcoded here.
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
        <Link to="/" style={{ fontFamily: t.mono, fontSize: '0.7rem', color: t.gold }}>
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
          <MediaSlot label={piece.type} />
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
        /{piece.slug} · {piece.cadence} · {piece.status}
      </div>
    </div>
  )
}
