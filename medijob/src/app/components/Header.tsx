import { Link } from "react-router";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import mediverseLogo from "figma:asset/033be242c2b57d0c297161f9934e633207a10d29.png";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={mediverseLogo} alt="Mediverse" className="h-8 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/#features" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Services
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <Link to="/login">
              <Button 
                variant="outline"
                className="hidden sm:block border-gray-300 text-gray-700 hover:bg-gray-50 px-6 rounded-xl"
              >
                {t("header.login")}
              </Button>
            </Link>
            <Link to="/apply" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                {t("header.apply")}
              </Button>
            </Link>
            
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/#features" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Services
              </Link>
              <Link to="/login">
                <Button 
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  Login
                </Button>
              </Link>
              <Link to="/apply" className="mt-2">
                <Button className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white rounded-xl">
                  Apply Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}