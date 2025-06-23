
import { 
  BarChart3, 
  Trophy, 
  User, 
  Calendar, 
  Home, 
  X,
  MapPin,
  Crown
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'halloffame', label: 'Hall of Fame', icon: Crown },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'events', label: 'Events', icon: Calendar },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:z-0
      `}>
        <div className="pt-20 pb-4">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 lg:hidden"
          >
            <X size={24} />
          </button>

          <nav className="px-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    onClose();
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                    ${activeTab === item.id 
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 px-4">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-4 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin size={16} />
                <span className="text-sm font-medium">Active Zones</span>
              </div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs opacity-90">Mumbai Beach Areas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;