import LandingTemplate from '../components/LandingTemplate'
import SegmentSection from '../components/SegmentSection'
import { engine } from '../content/engine'
import { segments } from '../content/schema'
import { site } from '../content/site'

/**
 * The marketing engine page. One page, four segment SECTIONS -- not four
 * routes. The segments are injected into the shared landing template right
 * after the roadmap, so the page reads: hook -> media -> documentation proof
 * -> who it is for (x4) -> soft step -> lead -> ask -> proof -> footer.
 */
export default function Engine() {
  return (
    <LandingTemplate config={engine} site={site} formSegment="engine">
      {segments.map((segment, i) => (
        <SegmentSection key={segment.id} segment={segment} index={i} />
      ))}
    </LandingTemplate>
  )
}
