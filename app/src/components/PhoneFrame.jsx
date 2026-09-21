import { tone as resolveTone } from '../theme'

// Phone bezel for any media meant to read as "on a phone".
export default function PhoneFrame({ children, tone = 'light', style, ...rest }) {
  const tn = resolveTone(tone)
  return (
    <div
      {...rest}
      style={{
        background: 'linear-gradient(160deg, #3a3a38 0%, #101010 46%, #2b2b29 100%)',
        borderRadius: 18,
        padding: 5,
        boxShadow: tn.frameShadow,
        width: '100%',
        ...style,
      }}
    >
      <div
        style={{
          borderRadius: 14,
          overflow: 'hidden',
          aspectRatio: '9 / 19.5',
          background: '#0c0c0c',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  )
}
