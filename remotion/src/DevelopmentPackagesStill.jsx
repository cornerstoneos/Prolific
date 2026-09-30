import AllTiersScreen from './components/AllTiersScreen'

// The static all-tiers graphic, for email/static use. A frozen frame of the
// motion piece only ever shows one tier mid-animation -- this is its own
// composition instead, sharing AllTiersScreen with the motion piece's recap
// segment so the two never drift apart.
export default function DevelopmentPackagesStill() {
  return <AllTiersScreen animate={false} />
}
