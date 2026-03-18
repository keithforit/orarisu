import { Link } from 'react-router';
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t('home.footer.product'),
      links: [
        { label: t('home.footer.features'), href: '/#features' },
        { label: t('home.footer.pricing'), href: '/pricing' },
      ],
    },
    {
      title: t('home.footer.company'),
      links: [
        { label: t('home.footer.about'), href: '/#about' },
        { label: t('home.footer.contact'), href: '#' },
      ],
    },
    {
      title: t('home.footer.legal'),
      links: [
        { label: t('home.footer.privacy'), href: '#' },
        { label: t('home.footer.terms'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-gray-900">InishiAI</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4 max-w-xs">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {t('home.footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}