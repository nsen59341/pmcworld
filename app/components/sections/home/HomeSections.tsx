import { MeditationWhySection } from './MeditationWhySection';
import { TestimonialsMarquee } from './TestimonialsMarquee';
import { MeditationNowSection } from './MeditationNowSection';
import { MastersSpeakSection } from './MastersSpeakSection';
import { WisdomMarqueeSection } from './WisdomMarqueeSection';
import { PmcPodcastSection } from './PmcPodcastSection';
import { SevaYogSection } from './SevaYogSection';
import { ImpactNumbersSection } from './ImpactNumbersSection';

export function HomeSections() {
  return (
    <>
      <MeditationWhySection />
      <TestimonialsMarquee />
      <MeditationNowSection />
      <MastersSpeakSection />
      <WisdomMarqueeSection />
      <PmcPodcastSection />
      <SevaYogSection />
      <ImpactNumbersSection />
    </>
  );
}
