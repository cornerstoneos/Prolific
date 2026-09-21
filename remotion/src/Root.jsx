import { Composition } from 'remotion'
import WeekendDump from './WeekendDump'

// One Composition per content piece. This proof-of-concept registers just
// the one; the other 11 in src/content/schema.js (in marketing/) follow the
// same pattern once this pipeline is confirmed working.
export const RemotionRoot = () => (
  <Composition
    id="weekend-dump"
    component={WeekendDump}
    durationInFrames={90}
    fps={30}
    width={1080}
    height={1920}
  />
)
