import { Sparkles } from 'lucide-react';

export function GeoHero() {
  const auraScore = 87;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left: Header */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5" style={{ color: '#6F42C1' }} />
              <span className="text-sm tracking-wide" style={{ color: '#6F42C1' }}>
                GEO ANALYTICS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ color: '#0D1117' }}>
              Own Your Share of Model
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: '#0D1117', opacity: 0.7 }}>
              Track how AI models discover, cite, and recommend your brand across 
              ChatGPT, Perplexity, and Gemini. Real-time visibility into your AI-native presence.
            </p>
          </div>

          {/* Right: Global Aura Score Gauge */}
          <div className="relative">
            <div 
              className="relative p-8 rounded-2xl backdrop-blur-sm border"
              style={{ 
                backgroundColor: 'rgba(111, 66, 193, 0.05)',
                borderColor: '#6F42C120'
              }}
            >
              {/* Gauge */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#F8F9FC"
                    strokeWidth="12"
                  />
                  {/* Progress Circle with Gradient */}
                  <defs>
                    <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#6F42C1' }} />
                      <stop offset="100%" style={{ stopColor: '#00CCCC' }} />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="url(#auraGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(auraScore / 100) * 502.4} 502.4`}
                    className="transition-all duration-1000"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(111, 66, 193, 0.5))'
                    }}
                  />
                </svg>

                {/* Center Content */}
                <div className="text-center z-10">
                  <div className="text-5xl mb-1 bg-gradient-to-r from-[#6F42C1] to-[#00CCCC] bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
                    {auraScore}
                  </div>
                  <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                    Aura Score
                  </div>
                </div>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-30"
                  style={{ 
                    background: 'radial-gradient(circle, #6F42C1 0%, transparent 70%)'
                  }}
                />
              </div>

              <div className="text-center mt-4">
                <div className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
                  Global Visibility Index
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
