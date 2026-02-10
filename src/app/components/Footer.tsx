import { Link, useLocation } from 'react-router';

export function Footer() {
  const location = useLocation();
  
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Content Studio', to: '/content-studio' },
        { name: 'GEO Analytics', to: '/geo-analytics' },
        { name: 'Aura Network', to: '/aura-network' },
        { name: 'Adaptive Experience', to: '/adaptive' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'For Brands', to: '/adaptive' },
        { name: 'For Agencies', to: '/adaptive' },
        { name: 'For Publishers', to: '/adaptive' },
        { name: 'Compliance', to: '/compliance' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Pricing', to: '/pricing' },
        { name: 'Documentation', to: '#' },
        { name: 'Case Studies', to: '#' },
        { name: 'Blog', to: '#' },
        { name: 'Support', to: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', to: '/about' },
        { name: 'Careers', to: '#' },
        { name: 'Contact', to: '/contact' },
        { name: 'Privacy', to: '#' },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className="py-16 bg-white border-t" style={{ borderColor: '#6F42C120' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl mb-4 bg-gradient-to-r from-[#6F42C1] to-[#007BFF] bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
              Orarisu
            </div>
            <p className="text-sm mb-4" style={{ color: '#0D1117', opacity: 0.6 }}>
              The AI-Driven Influence & Visibility Platform
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4" style={{ color: '#0D1117' }}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.to.startsWith('#') ? (
                      <a 
                        href={link.to} 
                        className="text-sm transition-colors"
                        style={{ 
                          color: '#0D1117', 
                          opacity: 0.6 
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007BFF'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#0D1117'}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.to} 
                        className="text-sm transition-colors"
                        style={{ 
                          color: isActive(link.to) ? '#007BFF' : '#0D1117', 
                          opacity: isActive(link.to) ? 1 : 0.6 
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive(link.to)) {
                            e.currentTarget.style.color = '#007BFF';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(link.to)) {
                            e.currentTarget.style.color = '#0D1117';
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: '#6F42C120' }}>
          <p className="text-sm" style={{ color: '#0D1117', opacity: 0.6 }}>
            © 2026 Orarisu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.6 }}>
              Terms
            </a>
            <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.6 }}>
              Privacy
            </a>
            <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: '#0D1117', opacity: 0.6 }}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}