import { Languages } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-1 shadow-sm">
      <Languages className="w-4 h-4 text-gray-600 ml-2" />
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "en"
            ? "bg-indigo-600 text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ja")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "ja"
            ? "bg-indigo-600 text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        日本語
      </button>
    </div>
  );
}
