import  { useState } from 'react';
import { Trophy, Medal, Star, Users, MapPin, Calendar } from 'lucide-react';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('regions');

  const regionalLeaders = [
    { id: 1, name: 'Juhu Beach Zone', waste: 2847, volunteers: 245, events: 18, points: 9520, badge: 'Platinum' },
    { id: 2, name: 'Marine Drive Zone', waste: 2156, volunteers: 198, events: 15, points: 7890, badge: 'Gold' },
    { id: 3, name: 'Versova Beach Zone', waste: 1987, volunteers: 187, events: 14, points: 7230, badge: 'Gold' },
    { id: 4, name: 'Chowpatty Zone', waste: 1654, volunteers: 156, events: 12, points: 5860, badge: 'Silver' },
    { id: 5, name: 'Aksa Beach Zone', waste: 1432, volunteers: 143, events: 11, points: 5120, badge: 'Silver' },
  ];

  const volunteerLeaders = [
    { id: 1, name: 'Garv Jauhari', points: 1250, events: 45, waste: 187, badge: 'Platinum', level: 28 },
    { id: 2, name: 'Lovkash Garg', points: 1180, events: 42, waste: 165, badge: 'Gold', level: 26 },
    { id: 3, name: 'Rahul Kumar', points: 1095, events: 38, waste: 152, badge: 'Gold', level: 24 },
    { id: 4, name: 'Sneha Iyer', points: 980, events: 35, waste: 143, badge: 'Silver', level: 22 },
    { id: 5, name: 'Vikram Singh', points: 875, events: 31, waste: 128, badge: 'Silver', level: 19 },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Platinum': return 'bg-gray-800 text-white';
      case 'Gold': return 'bg-yellow-500 text-white';
      case 'Silver': return 'bg-gray-400 text-white';
      case 'Bronze': return 'bg-orange-600 text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="text-yellow-500" size={24} />;
    if (rank === 2) return <Medal className="text-gray-400" size={24} />;
    if (rank === 3) return <Medal className="text-orange-600" size={24} />;
    return <Star className="text-gray-400" size={20} />;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Leaderboard</h1>
          <p className="text-gray-600 mt-1">Top performers in beach cleanup initiatives</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Weekly Contest Ends in 2 Days
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('regions')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'regions' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <MapPin size={16} />
              <span>Regional Zones</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('volunteers')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'volunteers' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Users size={16} />
              <span>Top Volunteers</span>
            </div>
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'regions' ? (
            <div className="space-y-4">
              {regionalLeaders.map((region, index) => (
                <div key={region.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(index + 1)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{region.name}</h3>
                      <div className="flex items-center space-x-6 mt-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">{region.waste}kg</span>
                          <span>waste collected</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">{region.volunteers}</span>
                          <span>volunteers</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">{region.events}</span>
                          <span>events</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(region.badge)}`}>
                        {region.badge}
                      </span>
                      <div>
                        <p className="text-lg font-bold text-gray-900">{region.points.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">points</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {volunteerLeaders.map((volunteer, index) => (
                <div key={volunteer.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(index + 1)}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        {volunteer.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{volunteer.name}</h3>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <span>Level {volunteer.level}</span>
                          <span>•</span>
                          <span>{volunteer.events} events</span>
                          <span>•</span>
                          <span>{volunteer.waste}kg collected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(volunteer.badge)}`}>
                        {volunteer.badge}
                      </span>
                      <div>
                        <p className="text-lg font-bold text-gray-900">{volunteer.points.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">XP points</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Rewards Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 m-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Weekly Rewards</h3>
              <p className="text-purple-100">Top 3 zones and volunteers win exciting prizes!</p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <Calendar className="inline mr-2" size={16} />
                <span className="font-medium">Ends Dec 15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;