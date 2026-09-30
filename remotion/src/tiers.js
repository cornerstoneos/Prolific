// Shared tier content for the Development Packages piece. Single source
// used by the individual TierCard segments, the all-tiers recap segment,
// and the standalone static composition -- so the three never drift out of
// sync with each other.
//
// Structure B (locked): Pre-Construction and Model Residence Shoot stand
// alone as two entry points; Premium bundles both; Elite adds the
// recurring/ongoing layer. No price, no add-ons -- both dropped per brief.
export const tiers = [
  {
    badge: 'Standalone — Pre-Construction',
    title: 'Pre-Construction',
    items: [
      'Styled site plan & map',
      'Exterior renderings',
      'Interior renderings',
      'Styled floor plan',
      'Amenity renderings',
      'Social pack',
    ],
  },
  {
    badge: 'Standalone — Model Complete',
    title: 'Model Residence Shoot',
    note: 'Sold on its own to projects already using someone else for pre-construction renderings.',
    items: ['Photography', 'Video', 'Drone', '3D tour'],
  },
  {
    badge: 'Full Process',
    title: 'Premium',
    items: ['Pre-Construction, bundled', 'Model Residence Shoot, bundled'],
  },
  {
    badge: 'Full Process',
    title: 'Elite',
    items: [
      'Everything in Premium',
      'Recurring progress photography',
      'Interactive digital twin & hotspots',
      'Full marketing coordination — pre-sale through launch',
      'Time-lapse documentation',
      'Landing page',
    ],
  },
]
