import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b" style={{ borderColor: '#6F42C120' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl bg-gradient-to-r from-[#6F42C1] to-[#007BFF] bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
              Orarisu
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#platform" className="transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.7 }}>
              Platform
            </a>
            <a href="#solutions" className="transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.7 }}>
              Solutions
            </a>
            <a href="#pricing" className="transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.7 }}>
              Pricing
            </a>
            <a href="#resources" className="transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.7 }}>
              Resources
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-lg transition-colors hover:opacity-100" style={{ color: '#007BFF', opacity: 0.8 }}>
              Sign In
            </button>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white transition-all hover:shadow-lg hover:shadow-[#6F42C1]/30">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#0D1117' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#0D1117' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t" style={{ borderColor: '#6F42C120' }}>
            <nav className="flex flex-col gap-4">
              <a href="#platform" className="py-2 transition-colors" style={{ color: '#0D1117' }}>
                Platform
              </a>
              <a href="#solutions" className="py-2 transition-colors" style={{ color: '#0D1117' }}>
                Solutions
              </a>
              <a href="#pricing" className="py-2 transition-colors" style={{ color: '#0D1117' }}>
                Pricing
              </a>
              <a href="#resources" className="py-2 transition-colors" style={{ color: '#0D1117' }}>
                Resources
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: '#6F42C120' }}>
                <button className="px-6 py-2 rounded-lg transition-colors" style={{ color: '#007BFF' }}>
                  Sign In
                </button>
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
