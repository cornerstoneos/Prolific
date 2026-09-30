// Full-width hairline, black at low opacity.
export default function Divider({ style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        width: '100%',
        height: 1,
        border: 0,
        background:
          'linear-gradient(90deg, rgba(12,12,12,0) 0%, rgba(12,12,12,0.22) 50%, rgba(12,12,12,0) 100%)',
        ...style,
      }}
    />
  )
}
