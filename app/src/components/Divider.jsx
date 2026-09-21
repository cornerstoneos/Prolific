// Full-width hairline that fades in from and out to transparent through gold.
export default function Divider({ style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        width: '100%',
        height: 1,
        border: 0,
        background:
          'linear-gradient(90deg, rgba(184,150,90,0) 0%, rgba(184,150,90,0.28) 50%, rgba(184,150,90,0) 100%)',
        ...style,
      }}
    />
  )
}
