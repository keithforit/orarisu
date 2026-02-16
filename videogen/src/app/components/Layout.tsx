import { Outlet } from "react-router";
import { Home, FileText, TrendingUp, Target, Link as LinkIcon, User, CreditCard, Mail, ChevronDown } from "lucide-react";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[295px] bg-[#2d2d2d] text-white flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 rounded"></div>
            <div>
              <h1 className="text-xl font-bold">Webridge</h1>
              <p className="text-xs text-gray-400">powered by afo</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <a href="/" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          
          <div className="mt-2">
            <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-gray-700 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5" />
                <span>Reports</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors">
            <TrendingUp className="w-5 h-5" />
            <span>Conversions History Over Time</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors">
            <Target className="w-5 h-5" />
            <span>Program</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors">
            <LinkIcon className="w-5 h-5" />
            <span>Get Your Tracking Link</span>
          </a>

          <div className="mt-2">
            <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-gray-700 transition-colors">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors">
            <CreditCard className="w-5 h-5" />
            <span>Payment History</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-[75px] bg-white border-b border-gray-200 flex items-center justify-end px-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm">iamkeith26</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
