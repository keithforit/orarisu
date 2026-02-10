import { Video, Brain, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Video,
    title: 'AI Content Studio',
    feature: 'Script-to-Video Pipeline',
    description: 'Turn a product link into viral-ready TikToks, Reels, or Shorts.',
    edge: 'Creative Feedback Loop. See which AI avatars and scripts drive the highest ROI in real-time.',
    color: '#6F42C1',
  },
  {
    icon: Brain,
    title: 'GEO & Strategic Analytics',
    feature: 'Generative Engine Optimization',
    description: 'Track your brand frequency across ChatGPT, Perplexity, and Gemini.',
    edge: 'Conversational Insights. Don\'t just look at heatmaps; ask our AI "Why is my sentiment rising in the US market?" for instant, actionable strategy.',
    color: '#007BFF',
  },
  {
    icon: ShieldCheck,
    title: 'Smart Attribution & Trust',
    feature: 'The "Reference" Commission',
    description: 'Reward publishers when their content is cited by an AI in a product recommendation.',
    edge: 'Legacy Trust. Built on a foundation of 900,000+ registered sites and a decade of cross-border compliance expertise.',
    color: '#00CCCC',
  },
];

export function ThreePillars() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
            The Three Pillars
          </h2>
          <p className="text-xl" style={{ color: '#0D1117', opacity: 0.6 }}>
            Strategic innovation meets creative performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-white border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ borderColor: `${pillar.color}20` }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: pillar.color }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4" style={{ color: '#0D1117' }}>
                  {pillar.title}
                </h3>

                {/* Feature */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm" style={{ 
                    backgroundColor: `${pillar.color}15`,
                    color: pillar.color 
                  }}>
                    {pillar.feature}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4" style={{ color: '#0D1117', opacity: 0.7 }}>
                  {pillar.description}
                </p>

                {/* The Edge */}
                <div className="pt-4 border-t" style={{ borderColor: `${pillar.color}20` }}>
                  <div className="text-sm mb-2" style={{ color: pillar.color }}>
                    The Edge:
                  </div>
                  <p className="text-sm" style={{ color: '#0D1117', opacity: 0.7 }}>
                    {pillar.edge}
                  </p>
                </div>

                {/* Decorative gradient on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
                  style={{ backgroundColor: `${pillar.color}20` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
