import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion'

// Proof-of-concept composition for one piece ("Weekend dump", from
// src/content/schema.js in marketing/). Frame-driven, not time/scroll-
// driven like the browser version -- every value is computed from the
// current frame number so the render is fully deterministic.
export default function WeekendDump() {
  const frame = useCurrentFrame()

  // Fade + rise in over the first 20 frames (frames are absolute, not ms --
  // at the 30fps set in Root.jsx, 20 frames = ~0.67s).
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
  const y = interpolate(frame, [0, 20], [24, 0], { extrapolateRight: 'clamp' })

  return (
    <AbsoluteFill
      style={{
        background: '#0a0a0a',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ opacity, transform: `translateY(${y}px)`, textAlign: 'center' }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#c9a227',
            marginBottom: 16,
          }}
        >
          Weekend Dump
        </div>
        <div style={{ fontSize: 16, color: '#8a8a86' }}>Weekly · Volume &amp; coverage proof, geo-tagged</div>
      </div>
    </AbsoluteFill>
  )
}
