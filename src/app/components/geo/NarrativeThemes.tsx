import { Target, MessageSquare, ArrowRight } from 'lucide-react';

export function NarrativeThemes() {
  const currentNarratives = [
    {
      theme: 'Product Quality',
      sentiment: 'Positive',
      percentage: 78,
      example: '"Known for innovative features and reliability"',
    },
    {
      theme: 'Customer Support',
      sentiment: 'Mixed',
      percentage: 62,
      example: '"Support team is helpful but response time varies"',
    },
    {
      theme: 'Value Proposition',
      sentiment: 'Positive',
      percentage: 84,
      example: '"Competitive pricing with excellent ROI"',
    },
  ];

  const targetVoice = [
    {
      theme: 'Innovation Leadership',
      priority: 'High',
      gap: 12,
      action: 'Increase mentions in AI model training data',
    },
    {
      theme: 'Enterprise Trust',
      priority: 'High',
      gap: 18,
      action: 'Amplify case studies and compliance credentials',
    },
    {
      theme: 'Global Reach',
      priority: 'Medium',
      gap: 8,
      action: 'Localize content for emerging markets',
    },
  ];

  const getSentimentColor = (sentiment: string) => {
    if (sentiment === 'Positive') return '#00CCCC';
    if (sentiment === 'Mixed') return '#007BFF';
    return '#FC0061';
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'High') return '#FC0061';
    if (priority === 'Medium') return '#007BFF';
    return '#00CCCC';
  };

  return (
    <section className="py-12" style={{ backgroundColor: '#F8F9FC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl mb-2" style={{ color: '#0D1117' }}>
            Narrative Themes Analysis
          </h2>
          <p className="text-lg" style={{ color: '#0D1117', opacity: 0.6 }}>
            Understanding and shaping your AI-driven brand narrative
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current AI Narrative */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#007BFF15' }}
              >
                <MessageSquare className="w-6 h-6" style={{ color: '#007BFF' }} />
              </div>
              <h3 className="text-2xl" style={{ color: '#0D1117' }}>
                Current AI Narrative
              </h3>
            </div>

            <div className="space-y-4">
              {currentNarratives.map((narrative, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-xl backdrop-blur-md border bg-white/50 transition-all hover:shadow-lg"
                  style={{ 
                    borderColor: `${getSentimentColor(narrative.sentiment)}40`,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Glassmorphism effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${getSentimentColor(narrative.sentiment)}10 0%, transparent 100%)`
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg mb-1" style={{ color: '#0D1117' }}>
                          {narrative.theme}
                        </h4>
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm"
                          style={{
                            backgroundColor: `${getSentimentColor(narrative.sentiment)}20`,
                            color: getSentimentColor(narrative.sentiment)
                          }}
                        >
                          {narrative.sentiment}
                        </span>
                      </div>
                      <div className="text-2xl" style={{ color: getSentimentColor(narrative.sentiment) }}>
                        {narrative.percentage}%
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${narrative.percentage}%`,
                            backgroundColor: getSentimentColor(narrative.sentiment),
                          }}
                        />
                      </div>
                    </div>

                    <p className="text-sm italic" style={{ color: '#0D1117', opacity: 0.7 }}>
                      {narrative.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target Brand Voice */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#6F42C115' }}
              >
                <Target className="w-6 h-6" style={{ color: '#6F42C1' }} />
              </div>
              <h3 className="text-2xl" style={{ color: '#0D1117' }}>
                Target Brand Voice
              </h3>
            </div>

            <div className="space-y-4">
              {targetVoice.map((target, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-xl backdrop-blur-md border bg-white/50 transition-all hover:shadow-lg"
                  style={{ 
                    borderColor: `${getPriorityColor(target.priority)}40`,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Glassmorphism effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${getPriorityColor(target.priority)}10 0%, transparent 100%)`
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg mb-1" style={{ color: '#0D1117' }}>
                          {target.theme}
                        </h4>
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm"
                          style={{
                            backgroundColor: `${getPriorityColor(target.priority)}20`,
                            color: getPriorityColor(target.priority)
                          }}
                        >
                          {target.priority} Priority
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowRight className="w-4 h-4" style={{ color: '#FC0061' }} />
                        <span className="text-lg" style={{ color: '#FC0061' }}>
                          +{target.gap}%
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t" style={{ borderColor: '#6F42C120' }}>
                      <div className="text-sm mb-1" style={{ color: '#0D1117', opacity: 0.6 }}>
                        Recommended Action:
                      </div>
                      <p className="text-sm" style={{ color: '#0D1117', opacity: 0.8 }}>
                        {target.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
