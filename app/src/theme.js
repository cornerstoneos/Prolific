// Single source of truth for the Prolific visual system.
// Base palette is lifted verbatim from the existing live site so the SPA and
// the legacy page read as one brand.
export const t = {
  black: '#0c0c0c',
  white: '#fafaf8',
  off: '#f2f1ed',
  mid: '#888880',
  dim: '#c8c8c0',
  line: '#e0dfd8',
  gold: '#b8965a',
  goldLite: '#d9bd86',

  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Montserrat', system-ui, -apple-system, sans-serif",

  // Shared reveal easing. Kept here so every animated surface matches.
  ease: [0.16, 1, 0.3, 1],
}

// Tone drives the light-editorial / dark-panel split. Every primitive takes
// `tone` and resolves its foreground + accent treatment through this, so a
// section can flip to dark without each child being rewritten.
export const tones = {
  light: {
    bg: t.white,
    fg: t.black,
    muted: t.mid,
    hairline: t.line,
    // Gold glow reads as mud on #fafaf8, so the light tone drops the bloom
    // and keeps gold as a keyline/ink accent only.
    accentGlow: 'none',
    panelBorder: 'rgba(184,150,90,0.34)',
    panelFill: 'linear-gradient(135deg, rgba(184,150,90,0.05) 0%, rgba(184,150,90,0) 55%, rgba(12,12,12,0.02) 100%)',
    frameShadow: '0 2px 18px rgba(12,12,12,0.10), 0 0 0 1px rgba(184,150,90,0.30)',
  },
  dark: {
    bg: t.black,
    fg: t.white,
    muted: 'rgba(250,250,248,0.46)',
    hairline: 'rgba(250,250,248,0.12)',
    accentGlow: '0 0 18px rgba(184,150,90,0.45)',
    panelBorder: 'rgba(184,150,90,0.28)',
    panelFill: 'linear-gradient(135deg, rgba(184,150,90,0.10) 0%, rgba(184,150,90,0) 55%, rgba(250,250,248,0.03) 100%)',
    frameShadow: '0 18px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(184,150,90,0.38), 0 0 34px rgba(184,150,90,0.18)',
  },
}

export const tone = (name) => tones[name] || tones.light
