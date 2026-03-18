import { Briefcase, Users, CreditCard, Settings, Sparkles, LogOut } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { t } = useLanguage();

  const menuItems = [
    { id: 'jobs', label: t('sidebar.jobs'), icon: Briefcase },
    { id: 'candidates', label: t('sidebar.candidates'), icon: Users },
    { id: 'billing', label: t('sidebar.billing'), icon: CreditCard },
    { id: 'settings', label: t('sidebar.settings'), icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#E89B86] to-[#D97A63] rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl text-gray-900">InishiAI</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E89B86] to-[#D97A63] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="mb-3">
          <LanguageToggle />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600">JD</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-900">John Doe</p>
            <p className="text-xs text-gray-600">john@company.com</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">{t('common.signOut')}</span>
        </button>
      </div>
    </div>
  );
}