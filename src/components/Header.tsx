
import { Menu, Bell, User, Waves } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
              <Waves className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BeachGaurd</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Beach Cleanup Dashboard</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Event Active</span>
              </span>
            </div>
          </div>
          
          <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="text-white" size={16} />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-600">Organizer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;