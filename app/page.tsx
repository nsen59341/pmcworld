import { Navigation } from '@/app/components/layout/Navigation';
import { Footer } from '@/app/components/layout/Footer';
import { PmcWorldMissionSection } from '@/app/components/sections/home/PmcWorldMissionSection';
import { HomeSections } from '@/app/components/sections/home/HomeSections';
import { HeroCarousel } from '@/app/components/sections/home/HeroCarousel';
import { QualityOfLifeSection } from '@/app/components/sections/home/QualityOfLifeSection';
import { FullScreenVideoSection } from '@/app/components/sections/home/FullScreenVideoSection';
import { MahashivratriPopup } from '@/app/components/sections/home/MahashivratriPopup';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <HeroCarousel />

      {/* Do You Have a Hunger Section */}
      <QualityOfLifeSection />

      {/* Full Screen Video Section */}
      <FullScreenVideoSection />

      <MahashivratriPopup />

      <PmcWorldMissionSection />

      <HomeSections />

      <Footer />
    </div>
  );
}
