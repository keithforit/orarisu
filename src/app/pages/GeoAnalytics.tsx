import { GeoHero } from '../components/geo/GeoHero';
import { SentimentHeatmap } from '../components/geo/SentimentHeatmap';
import { ShareOfModelTable } from '../components/geo/ShareOfModelTable';
import { NarrativeThemes } from '../components/geo/NarrativeThemes';
import { CTASection } from '../components/geo/CTASection';

export function GeoAnalytics() {
  return (
    <>
      <GeoHero />
      <SentimentHeatmap />
      <ShareOfModelTable />
      <NarrativeThemes />
      <CTASection />
    </>
  );
}
