import { FileText, ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="relative overflow-hidden rounded-3xl p-12 md:p-16"
          style={{ backgroundColor: '#0D1117' }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6F42C1]/20 to-[#00CCCC]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#007BFF]/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: '#00CCCC20' }}>
                <Sparkles className="w-8 h-8" style={{ color: '#00CCCC' }} />
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Ready to Own Your Share of Model?
              </h2>

              {/* Description */}
              <p className="text-xl mb-8 text-white/80">
                Get a comprehensive analysis of your brand's AI visibility with personalized 
                recommendations to improve your presence across ChatGPT, Perplexity, and Gemini.
              </p>

              {/* CTA Button */}
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#00CCCC', color: '#0D1117' }}>
                <FileText className="w-6 h-6" />
                <span>Get Your Aura Report</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Sub-text */}
              <p className="mt-6 text-sm text-white/60">
                Free comprehensive report • No credit card required • Delivered in 24 hours
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                'Real-time Monitoring',
                'Competitive Analysis',
                'Actionable Insights',
                'Custom Strategies',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border text-sm text-white/90"
                  style={{ borderColor: '#00CCCC40', backgroundColor: '#FFFFFF10' }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
