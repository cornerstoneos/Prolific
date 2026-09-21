// Full-width hairline, gold at low opacity.
export default function Divider({ style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        width: '100%',
        height: 1,
        border: 0,
        background:
          'linear-gradient(90deg, rgba(201,162,39,0) 0%, rgba(201,162,39,0.28) 50%, rgba(201,162,39,0) 100%)',
        ...style,
      }}
    />
  )
}
