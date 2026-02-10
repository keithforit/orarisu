import { GeoHero } from './geo/GeoHero';
import { SentimentHeatmap } from './geo/SentimentHeatmap';
import { ShareOfModelTable } from './geo/ShareOfModelTable';
import { NarrativeThemes } from './geo/NarrativeThemes';
import { CTASection } from './geo/CTASection';

export function GeoAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <GeoHero />
      <SentimentHeatmap />
      <ShareOfModelTable />
      <NarrativeThemes />
      <CTASection />
    </div>
  );
}
