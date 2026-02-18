import { Home, FileText, TrendingUp, Link2, User, CreditCard, Mail, Target, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[#2d2d2d] p-2 rounded-lg text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-[#2d2d2d] text-white w-64 flex flex-col z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-[#3d3d3d]">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center"></div>
          <div>
            <h1 className="text-lg font-semibold">Webbridge</h1>
            <p className="text-xs text-gray-400">powered by afo</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <NavItem icon={<Home size={20} />} label="Home" />
          
          <NavItem icon={<FileText size={20} />} label="Reports" hasSubmenu />
          <NavSubItem icon={<TrendingUp size={18} />} label="Conversions History Over Time" />
          
          <NavItem icon={<Target size={20} />} label="Program" active hasSubmenu />
          <NavSubItem label="Ad Creative Deck" />
          <NavSubItem label="Smart Article Creator" active />
          
          <NavItem icon={<Link2 size={20} />} label="Get Your Tracking Link" />
          
          <NavItem icon={<User size={20} />} label="Profile" hasSubmenu />
          
          <NavItem icon={<CreditCard size={20} />} label="Payment History" />
          
          <NavItem icon={<Mail size={20} />} label="Contact Us" />
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function NavItem({ 
  icon, 
  label, 
  active = false, 
  hasSubmenu = false 
}: { 
  icon?: React.ReactNode; 
  label: string; 
  active?: boolean; 
  hasSubmenu?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-colors ${
        active
          ? 'bg-[#3d4a5c] text-white'
          : 'text-gray-300 hover:bg-[#3d3d3d] hover:text-white'
      }`}
    >
      {icon}
      <span className="flex-1">{label}</span>
      {hasSubmenu && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
  );
}

function NavSubItem({ 
  icon, 
  label, 
  active = false 
}: { 
  icon?: React.ReactNode; 
  label: string; 
  active?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left text-sm ml-8 transition-colors ${
        active
          ? 'bg-[#3d4a5c] text-white'
          : 'text-gray-400 hover:bg-[#3d3d3d] hover:text-gray-200'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
