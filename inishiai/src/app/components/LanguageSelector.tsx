import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, label: t('language.english'), flag: '🇺🇸' },
    { code: 'ja' as const, label: t('language.japanese'), flag: '🇯🇵' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-[20px] bg-white/70 backdrop-blur-sm border border-white shadow-sm active:scale-95 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4 text-muted-foreground" strokeWidth={2} />
        <span className="text-[14px] text-foreground font-medium">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              className="absolute top-full mt-2 right-0 w-48 bg-white rounded-[20px] shadow-xl border border-primary/10 overflow-hidden z-50"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-5 py-3.5 flex items-center gap-3 text-left transition-colors ${
                    language === lang.code
                      ? 'bg-gradient-to-r from-[#FFF0EA] to-[#FFEEE8] text-primary'
                      : 'hover:bg-[#FFF8F3] text-foreground'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-[15px] font-medium">{lang.label}</span>
                  {language === lang.code && (
                    <span className="ml-auto text-primary">✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}