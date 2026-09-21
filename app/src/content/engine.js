/**
 * Page copy for the marketing-engine route (/engine/engine).
 * Segment sections come from schema.js; everything here is the surrounding
 * page. Any field left empty degrades to a placeholder — never a blank box.
 */
export const engine = {
  // ---- 1. HOOK -----------------------------------------------------------
  // Benefit-framed. No guilt-framing anywhere on this page.
  hook: {
    // FORMAT: 3-9 words. Rendered at clamp(2.6rem, 6vw, 5.4rem).
    headline: 'See the property before you decide',
    // FORMAT: 1-2 sentences, under ~200 chars.
    subhead:
      'One visit. Every asset the decision needs — photos, video, 3D, drone, floor plans, measurements — delivered the next day.',
    eyebrow: 'Prolific Content Engine',
  },

  // ---- 2. PRIMARY MEDIA --------------------------------------------------
  // Long-form video is NOT committed to the repo. Host on YouTube/Vimeo
  // (unlisted is fine) or Matterport and paste the provider's iframe src.
  // FORMAT: full embed URL.
  // EXAMPLE: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  // Empty -> elegant radial-glow placeholder with a play mark.
  primaryMedia: {
    embedUrl: '',
    // Fallback still or short committed clip if there is no embed yet.
    // EXAMPLE: '/engine/media/walkthrough.mp4'
    src: '',
    alt: 'Prolific property walkthrough',
    caption: 'Walkthrough reel coming soon',
    ratio: '16 / 9',
  },

  // ---- 3. ROADMAP --------------------------------------------------------
  // The documentation story as a sequence. This is the proof moment, so it
  // carries the page's visual weight — it sits on the dark band.
  // Each step: media (image OR .mp4/.webm/.mov, auto-detected), label,
  // title, body. Empty media -> "coming soon" inside the phone frame.
  roadmap: {
    eyebrow: 'The X-ray pass',
    title: 'Documented, not photographed',
    steps: [
      {
        media: '/engine/media/IMG_2282.jpeg',
        label: 'On site',
        title: 'One visit',
        body: 'Photos, video, 3D scan, drone and room-by-room measurements captured in a single scheduled pass.',
      },
      {
        media: '/engine/media/IMG_2056.jpeg',
        label: 'Condition',
        title: 'Every room on record',
        body: 'Condition capture thorough enough to make the call from — not a highlight reel of the good angles.',
      },
      {
        media: '/engine/media/IMG_1794.jpeg',
        label: 'Measured',
        title: 'Dimensioned, not estimated',
        body: 'Square footage and floor plans documented on site, ready for MLS, marketing and appraisal.',
      },
      {
        media: '',
        label: 'Delivered',
        title: 'Next day',
        body: 'One organised link. MLS-ready, social-ready, print-ready — while the listing is still new.',
      },
    ],
  },

  // ---- 4. LOW-FRICTION FIRST STEP ---------------------------------------
  // The small yes, placed before the harder ask. Empty href -> the block is
  // still rendered but the buttons degrade to plain text.
  firstStep: {
    eyebrow: 'Start small',
    title: 'Follow the work before you book it',
    body: 'Every post comes from a real completed shoot. Watch a few weeks of it, then decide.',
  },

  // ---- 5. LEAD CAPTURE ---------------------------------------------------
  lead: {
    eyebrow: 'Get started',
    title: 'Tell us what needs documenting',
    body: 'One property or forty. We reply to every inquiry within 24 hours.',
    submitLabel: 'Send inquiry',
  },

  // ---- 6. PRIMARY CTA ----------------------------------------------------
  // Specific and benefit-loaded. Sits AFTER the softer steps.
  primaryCta: {
    label: 'First shoot, half off — see the difference',
    // FORMAT: full URL or in-page anchor. EXAMPLE: '#lead'
    href: '#lead',
    note: 'Applies to your first property with Prolific. No commitment beyond the one shoot.',
  },

  // ---- 7. PROOF STRIP ----------------------------------------------------
  // Real photography only. Empty array -> a single "coming soon" panel,
  // never a gap in the grid.
  proof: [
    { src: '/engine/media/IMG_2282.jpeg', alt: 'Residential exterior and pool', caption: 'Residential' },
    { src: '/engine/media/IMG_2056.jpeg', alt: 'Vacant unit interior', caption: 'Vacant unit' },
    { src: '/engine/media/IMG_1794.jpeg', alt: 'Renovated kitchen interior', caption: 'Interior' },
    { src: '/engine/media/IMG_2087.jpeg', alt: 'High-rise balcony and tower context', caption: 'Multifamily' },
    { src: '/engine/media/2026-03-26-09-03-23-044.jpeg', alt: 'Aerial site context', caption: 'Aerial' },
  ],
}
