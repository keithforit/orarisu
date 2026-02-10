import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6F42C1]/5 via-[#007BFF]/5 to-[#00CCCC]/5" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6F42C1]/10 to-[#007BFF]/10 border border-[#6F42C1]/20 mb-8">
            <span className="text-sm tracking-wide" style={{ color: '#6F42C1' }}>
              THE FUTURE OF AI-DRIVEN BRAND VISIBILITY
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl tracking-tight mb-6" style={{ color: '#0D1117' }}>
            Where Brands Become{' '}
            <span 
              className="bg-gradient-to-r from-[#6F42C1] via-[#007BFF] to-[#00CCCC] bg-clip-text"
              style={{ WebkitTextFillColor: 'transparent' }}
            >
              Aura
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{ color: '#0D1117', opacity: 0.7 }}>
            From AI-native content creation to Generative Engine Optimization (GEO), 
            Orarisu transforms how brands are discovered, cited, and recommended by 
            humans and AI models alike.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/signup"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white transition-all hover:shadow-lg hover:shadow-[#6F42C1]/30 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            
            <Link 
              to="/geo-analytics"
              className="px-8 py-4 rounded-xl border-2 transition-all hover:bg-[#F8F9FC]"
              style={{ borderColor: '#007BFF', color: '#007BFF' }}
            >
              See the Network
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6F42C1]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00CCCC]/10 rounded-full blur-3xl" />
    </section>
  );
}