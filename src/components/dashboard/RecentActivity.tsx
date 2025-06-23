
import { Clock, MapPin, Users, Trash2 } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'cleanup_complete',
      title: 'Juhu Beach Cleanup',
      description: '45 volunteers collected 234kg waste',
      time: '2 minutes ago',
      icon: Trash2,
      color: 'bg-green-500'
    },
    {
      id: 2,
      type: 'volunteer_join',
      title: 'New Volunteer Joined',
      description: 'Priya S. joined Marine Drive team',
      time: '5 minutes ago',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      type: 'event_started',
      title: 'Versova Event Started',
      description: '32 volunteers checked in',
      time: '15 minutes ago',
      icon: MapPin,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      type: 'cleanup_complete',
      title: 'Chowpatty Cleanup',
      description: '29 volunteers collected 156kg waste',
      time: '1 hour ago',
      icon: Trash2,
      color: 'bg-green-500'
    },
    {
      id: 5,
      type: 'volunteer_join',
      title: 'Volunteer Milestone',
      description: 'Rahul M. reached Gold badge level',
      time: '2 hours ago',
      icon: Users,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-gray-600">Live updates from all zones</p>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <Clock size={16} />
            <span>Real-time</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`${activity.color} p-2 rounded-lg flex-shrink-0`}>
                  <Icon className="text-white" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{activity.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View All Activities →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;