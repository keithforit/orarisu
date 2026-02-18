import { ChevronDown, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-end">
      <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
        <User size={20} />
        <span>iamkeith26</span>
        <ChevronDown size={16} />
      </button>
    </header>
  );
}
