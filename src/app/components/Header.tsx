import { Menu, X, ChevronDown, Languages } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import IsolationMode from '../../imports/IsolationMode';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const location = useLocation();

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'JA', name: '日本語' },
    { code: 'ZH', name: '中文' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isProductActive = ['/content-studio', '/geo-analytics', '/aura-network'].includes(location.pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b" style={{ borderColor: '#6F42C120' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-36 h-8">
              <IsolationMode />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="transition-colors"
              style={{ 
                color: isActive('/') ? '#007BFF' : '#0D1117', 
                opacity: isActive('/') ? 1 : 0.7 
              }}
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 transition-colors"
                style={{ 
                  color: isProductActive ? '#007BFF' : '#0D1117', 
                  opacity: isProductActive ? 1 : 0.7 
                }}
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border py-2"
                  style={{ borderColor: '#6F42C120' }}
                >
                  <Link
                    to="/content-studio"
                    className="block px-4 py-3 transition-colors"
                    style={{ 
                      color: '#0D1117',
                      backgroundColor: isActive('/content-studio') ? '#007BFF10' : 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8F9FC'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isActive('/content-studio') ? '#007BFF10' : 'transparent'}
                  >
                    <div className="font-medium" style={{ color: isActive('/content-studio') ? '#007BFF' : '#0D1117' }}>Content Studio</div>
                    <div className="text-xs" style={{ opacity: 0.6 }}>AI-powered video creation</div>
                  </Link>
                  <Link
                    to="/geo-analytics"
                    className="block px-4 py-3 transition-colors"
                    style={{ 
                      color: '#0D1117',
                      backgroundColor: isActive('/geo-analytics') ? '#007BFF10' : 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8F9FC'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isActive('/geo-analytics') ? '#007BFF10' : 'transparent'}
                  >
                    <div className="font-medium" style={{ color: isActive('/geo-analytics') ? '#007BFF' : '#0D1117' }}>GEO Analytics</div>
                    <div className="text-xs" style={{ opacity: 0.6 }}>AI visibility tracking</div>
                  </Link>
                  <Link
                    to="/aura-network"
                    className="block px-4 py-3 transition-colors"
                    style={{ 
                      color: '#0D1117',
                      backgroundColor: isActive('/aura-network') ? '#007BFF10' : 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8F9FC'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isActive('/aura-network') ? '#007BFF10' : 'transparent'}
                  >
                    <div className="font-medium" style={{ color: isActive('/aura-network') ? '#007BFF' : '#0D1117' }}>Aura Network</div>
                    <div className="text-xs" style={{ opacity: 0.6 }}>Creator ecosystem</div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/compliance" 
              className="transition-colors"
              style={{ 
                color: isActive('/compliance') ? '#007BFF' : '#0D1117', 
                opacity: isActive('/compliance') ? 1 : 0.7 
              }}
            >
              Compliance
            </Link>
            <Link 
              to="/pricing" 
              className="transition-colors"
              style={{ 
                color: isActive('/pricing') ? '#007BFF' : '#0D1117', 
                opacity: isActive('/pricing') ? 1 : 0.7 
              }}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="transition-colors"
              style={{ 
                color: isActive('/contact') ? '#007BFF' : '#0D1117', 
                opacity: isActive('/contact') ? 1 : 0.7 
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-[#F8F9FC]"
                style={{ color: '#0D1117' }}
              >
                <Languages className="w-5 h-5" style={{ color: '#007BFF' }} />
                <span className="text-sm">{currentLanguage}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {languageOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border py-2" style={{ borderColor: '#6F42C120' }}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setLanguageOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 transition-colors hover:bg-[#F8F9FC] ${
                        currentLanguage === lang.code ? 'font-bold' : ''
                      }`}
                      style={{ color: '#0D1117' }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/login" className="px-6 py-2 rounded-lg transition-colors hover:opacity-100" style={{ color: '#007BFF', opacity: 0.8 }}>
              Sign In
            </Link>
            <Link to="/signup" className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#6F42C1] to-[#007BFF] text-white transition-all hover:shadow-lg hover:shadow-[#6F42C1]/30">
              Get Started
            </Link>
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
              <Link 
                to="/" 
                className="py-2 transition-colors" 
                style={{ color: isActive('/') ? '#007BFF' : '#0D1117' }} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Products Section */}
              <div className="pl-4 space-y-2">
                <div className="text-xs tracking-wide mb-2" style={{ color: '#0D1117', opacity: 0.5 }}>
                  PRODUCTS
                </div>
                <Link 
                  to="/content-studio" 
                  className="block py-2 transition-colors" 
                  style={{ color: isActive('/content-studio') ? '#007BFF' : '#0D1117' }} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Content Studio
                </Link>
                <Link 
                  to="/geo-analytics" 
                  className="block py-2 transition-colors" 
                  style={{ color: isActive('/geo-analytics') ? '#007BFF' : '#0D1117' }} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GEO Analytics
                </Link>
                <Link 
                  to="/aura-network" 
                  className="block py-2 transition-colors" 
                  style={{ color: isActive('/aura-network') ? '#007BFF' : '#0D1117' }} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Aura Network
                </Link>
              </div>

              <Link 
                to="/compliance" 
                className="py-2 transition-colors" 
                style={{ color: isActive('/compliance') ? '#007BFF' : '#0D1117' }} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliance
              </Link>
              <Link 
                to="/pricing" 
                className="py-2 transition-colors" 
                style={{ color: isActive('/pricing') ? '#007BFF' : '#0D1117' }} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="py-2 transition-colors" 
                style={{ color: isActive('/contact') ? '#007BFF' : '#0D1117' }} 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Language Selector Mobile */}
              <div className="pt-4 border-t" style={{ borderColor: '#6F42C120' }}>
                <div className="text-xs tracking-wide mb-2" style={{ color: '#0D1117', opacity: 0.5 }}>
                  LANGUAGE
                </div>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        currentLanguage === lang.code
                          ? 'bg-[#007BFF] text-white'
                          : 'bg-[#F8F9FC]'
                      }`}
                      style={currentLanguage === lang.code ? {} : { color: '#0D1117' }}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}