/**
 * Per-listing config. Copy this file to listing-<slug>.js for each property
 * and register the slug in src/routes/Listing.jsx's LISTINGS map.
 * The page component reads everything from here — it hardcodes no copy and
 * no media path.
 */
export const listing = {
  // URL slug. FORMAT: lowercase, hyphenated. EXAMPLE: '1420-ocean-terrace'
  slug: 'sample-property',

  // ---- 1. HOOK -----------------------------------------------------------
  // Benefit-framed, never guilt-framed. "See this home's real numbers,"
  // not "stop overpaying."
  hook: {
    eyebrow: 'Now documented',
    // FORMAT: 3-8 words.
    headline: 'See this home’s real numbers',
    // FORMAT: 1-2 sentences.
    subhead:
      'Measured room by room, captured in one visit, and documented in full — square footage, condition and layout, all on the record.',
  },

  // Street address line shown under the hook. Empty -> omitted.
  // EXAMPLE: '1420 Ocean Terrace, Key Largo, FL'
  address: '',

  // ---- 2. PRIMARY MEDIA --------------------------------------------------
  // 3D tours: ALWAYS the provider's official iframe embed (Matterport,
  // Asteroom, Zillow 3D). Never self-hosted or scraped — it is a proprietary
  // interactive player, not a file.
  // Long walkthroughs / drone flythroughs: YouTube or Vimeo embed. Do NOT
  // commit these to git (100MB hard cap, and large binaries bloat history
  // regardless of the cap).
  // EXAMPLE: 'https://my.matterport.com/show/?m=SxQL3iGyvQk'
  primaryMedia: {
    embedUrl: '',
    src: '', // short committed clip or still fallback, <= ~20MB
    alt: 'Property walkthrough',
    caption: '3D tour coming soon',
    ratio: '16 / 9',
  },

  // ---- 3. ROADMAP --------------------------------------------------------
  // The photo/video story of this listing, as a sequence. Media may be an
  // image or a short .mp4/.webm/.mov (auto-detected, muted autoplay loop).
  roadmap: {
    eyebrow: 'The walkthrough',
    title: 'Room by room',
    steps: [
      { media: '', label: 'Approach', title: 'Arrival', body: 'Frontage, access and the approach to the property.' },
      { media: '', label: 'Interior', title: 'Living spaces', body: 'Main rooms captured in natural light, wide and detail.' },
      { media: '', label: 'Measured', title: 'Floor plan', body: 'Dimensioned layout with room-by-room square footage.' },
      { media: '', label: 'Context', title: 'From above', body: 'Aerial context — lot lines, neighbourhood, approach.' },
    ],
  },

  // ---- 4. LOW-FRICTION FIRST STEP ---------------------------------------
  firstStep: {
    eyebrow: 'Before you book a showing',
    title: 'Save the walkthrough',
    body: 'Share it with whoever else is deciding. No form, no sign-in.',
  },

  // ---- 5. LEAD CAPTURE ---------------------------------------------------
  lead: {
    eyebrow: 'Request details',
    title: 'Ask about this property',
    body: 'Floor plans, measurements and full condition documentation available on request.',
    submitLabel: 'Request the full file',
    // A visitor asking about one home is not answering "how many properties
    // per month" -- drop the business fields on listing pages.
    businessFields: false,
    messageLabel: 'What would you like to know?',
  },

  // ---- 6. PRIMARY CTA ----------------------------------------------------
  primaryCta: {
    label: 'See the full measured floor plan',
    href: '#lead',
    note: 'Dimensioned layout and room-by-room square footage.',
  },

  // ---- 7. PROOF STRIP ----------------------------------------------------
  // Real photos of THIS property. Empty -> "coming soon" panel.
  proof: [],
}
