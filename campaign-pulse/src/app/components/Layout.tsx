import { Outlet, useLocation } from "react-router";
import { Home, FileText, Target, Link as LinkIcon, User, CreditCard, Mail, ChevronDown, X } from "lucide-react";
import { Link } from "react-router";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-[#f5f5f7]">
      {/* Sidebar */}
      <aside className="w-[289px] bg-[#1a1a1a] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3 border-b border-gray-800">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl" />
          <div>
            <div className="font-semibold">Webbridge</div>
            <div className="text-xs text-gray-400">powered by afo</div>
          </div>
          <button className="ml-auto text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <Link
            to="/"
            className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors ${
              isActive("/") && location.pathname === "/" ? "bg-gray-800" : ""
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          {/* Reports Section */}
          <div>
            <button className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors">
              <FileText className="w-5 h-5" />
              <span>Reports</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </button>
            <div className="pl-6">
              <Link
                to="/conversions"
                className="flex items-center gap-3 px-6 py-2 text-sm text-gray-400 hover:bg-gray-800 transition-colors"
              >
                <Target className="w-4 h-4" />
                <span>Conversions History Over Time</span>
              </Link>
            </div>
          </div>

          {/* Program Section */}
          <div>
            <button className="w-full flex items-center gap-3 px-6 py-3 bg-[#3b4252] hover:bg-gray-800 transition-colors">
              <Target className="w-5 h-5" />
              <span>Program</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </button>
            <div className="pl-6 bg-[#2e3440]">
              <Link
                to="/"
                className={`flex items-center gap-3 px-6 py-2 text-sm transition-colors ${
                  location.pathname === "/" || 
                  location.pathname === "/campaign" || 
                  location.pathname === "/loading" ||
                  location.pathname === "/calendar"
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                Campaign Pulse
              </Link>
            </div>
          </div>

          <Link
            to="/tracking"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            <LinkIcon className="w-5 h-5" />
            <span>Get Your Tracking Link</span>
          </Link>

          <button className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors">
            <User className="w-5 h-5" />
            <span>Profile</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </button>

          <Link
            to="/payment"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            <span>Payment History</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="font-medium">iamkeith26</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}