import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
      <Globe className="w-4 h-4 text-gray-400 ml-2" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded text-sm transition-all ${
          language === 'en'
            ? 'bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={`px-3 py-1.5 rounded text-sm transition-all ${
          language === 'ja'
            ? 'bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        日本語
      </button>
    </div>
  );
}
