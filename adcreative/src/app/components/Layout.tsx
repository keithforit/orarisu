import { Outlet, Link, useLocation } from "react-router";
import { 
  Home, 
  FileText, 
  TrendingUp, 
  Target, 
  Link as LinkIcon, 
  User, 
  CreditCard, 
  Mail,
  ChevronDown,
  X,
  HelpCircle,
  Layout as LayoutIcon
} from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [reportsOpen, setReportsOpen] = useState(true);
  const [programOpen, setProgramOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[364px] bg-[#2d2d2d] text-white flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-lg"></div>
            <div>
              <div className="font-semibold text-lg">Webridge</div>
              <div className="text-sm text-gray-400">powered by afo</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link
            to="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/") && location.pathname === "/"
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>

          <div>
            <button
              onClick={() => setReportsOpen(!reportsOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/reports") || isActive("/conversions")
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              <FileText size={20} />
              <span className="flex-1 text-left">Reports</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform ${reportsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {reportsOpen && (
              <Link
                to="/conversions"
                className={`flex items-center gap-3 px-4 py-3 ml-8 rounded-lg transition-colors ${
                  isActive("/conversions")
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <TrendingUp size={18} />
                <span className="text-sm">Conversions History Over Time</span>
              </Link>
            )}
          </div>

          <div>
            <button
              onClick={() => setProgramOpen(!programOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/program")
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              <Target size={20} />
              <span className="flex-1 text-left">Program</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform ${programOpen ? "rotate-180" : ""}`}
              />
            </button>
            {programOpen && (
              <Link
                to="/program/1/ad-creative-deck"
                className={`flex items-center gap-3 px-4 py-3 ml-8 rounded-lg transition-colors ${
                  location.pathname.includes("/ad-creative-deck")
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <LayoutIcon size={18} />
                <span className="text-sm">Ad Creative Deck</span>
              </Link>
            )}
          </div>

          <Link
            to="/tracking-link"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/tracking-link")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            <LinkIcon size={20} />
            <span>Get Your Tracking Link</span>
          </Link>

          <div>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/profile")
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              <User size={20} />
              <span className="flex-1 text-left">Profile</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform ${profileOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <Link
            to="/payment-history"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/payment-history")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            <CreditCard size={20} />
            <span>Payment History</span>
          </Link>

          <Link
            to="/contact"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/contact")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            <Mail size={20} />
            <span>Contact Us</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-[88px] bg-white border-b border-gray-200 flex items-center justify-end px-8">
          <div className="flex items-center gap-2">
            <User size={20} className="text-gray-600" />
            <span className="text-gray-900">iamkeith26</span>
            <ChevronDown size={16} className="text-gray-600" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>

        {/* Help Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-700 transition-colors">
          <HelpCircle size={24} />
        </button>
      </div>
    </div>
  );
}