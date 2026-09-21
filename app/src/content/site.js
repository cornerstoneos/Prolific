// Brand-level config shared by every route. Nothing here is page-specific.
export const site = {
  // Bare domain, no protocol. Shown in the footer and used for canonical URLs.
  // FORMAT: 'prolificgroup.com' | EXAMPLE: 'prolificgroup.com'
  // Empty -> the footer falls back to a neutral placeholder rather than
  // rendering an empty line.
  domain: '',

  // Short descriptor under the wordmark. FORMAT: 2-5 words, title case.
  tagline: 'Curated Property Experiences',

  // Path to the logo, served from app/public/. 512x512 JPEG with a baked
  // white background -- keep it on a white chip, never on a dark panel.
  logo: '/engine/media/logo.jpg',

  // Social + booking endpoints already live on the existing site. Carried
  // over rather than reinvented. Empty string -> the link is not rendered.
  links: {
    instagram: 'https://www.instagram.com/prolificgroupllc',
    tiktok: 'https://www.tiktok.com/@prolificgroupllc',
    linkedin: '', // FORMAT: full https URL to the company page
    intakeForm: 'https://form.jotform.com/253508449354160',
  },
}
