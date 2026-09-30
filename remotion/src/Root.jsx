import { Composition } from 'remotion'
import WeekendDump from './WeekendDump'
import DevelopmentPackages, { developmentPackagesDuration } from './DevelopmentPackages'
import DevelopmentPackagesStill from './DevelopmentPackagesStill'

// One Composition per content piece. Slugs match marketing/src/content/
// schema.js so a piece and its Composition id are easy to line up.
export const RemotionRoot = () => (
  <>
    <Composition
      id="weekend-dump"
      component={WeekendDump}
      durationInFrames={90}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="development-packages"
      component={DevelopmentPackages}
      durationInFrames={developmentPackagesDuration}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="development-packages-still"
      component={DevelopmentPackagesStill}
      durationInFrames={1}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
)
