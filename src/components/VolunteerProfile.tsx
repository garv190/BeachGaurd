import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const VolunteerProfile = () => {
  const volunteerData = {
    name: 'Lionel Messi',
    level: 24,
    xp: 1250,
    nextLevelXp: 1500,
    badge: 'Gold',
    joinDate: 'March 2024',
    totalEvents: 42,
    totalWaste: 186,
    favoriteLocation: 'Juhu Beach',
    streak: 8
  };

  const badges = [
    { name: 'First Cleanup', icon: '🏁', earned: true, date: 'Mar 15, 2024' },
    { name: 'Team Player', icon: '🤝', earned: true, date: 'Apr 2, 2024' },
    { name: 'Weekend Warrior', icon: '⚡', earned: true, date: 'May 10, 2024' },
    { name: 'Eco Champion', icon: '🌱', earned: true, date: 'Jun 18, 2024' },
    { name: 'Gold Status', icon: '🥇', earned: true, date: 'Aug 25, 2024' },
    { name: 'Platinum Elite', icon: '💎', earned: false, date: null },
  ];

  const recentActivity = [
    { event: 'Juhu Beach Cleanup', date: 'Dec 10, 2024', waste: '12kg', volunteers: 45 },
    { event: 'Marine Drive Event', date: 'Dec 8, 2024', waste: '8kg', volunteers: 32 },
    { event: 'Versova Weekend', date: 'Dec 5, 2024', waste: '15kg', volunteers: 52 },
    { event: 'Chowpatty Morning', date: 'Dec 3, 2024', waste: '6kg', volunteers: 28 },
  ];

  const rewards = [
    { name: 'CleanWave T-Shirt', status: 'earned', level: 10 },
    { name: 'Eco Water Bottle', status: 'earned', level: 15 },
    { name: 'Beach Cleanup Kit', status: 'earned', level: 20 },
    { name: 'Sustainability Certificate', status: 'next', level: 25 },
    { name: 'Premium Hoodie', status: 'locked', level: 30 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-1">Track your impact and achievements</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            🔥 {volunteerData.streak} Day Streak
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {volunteerData.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{volunteerData.name}</h2>
              <div className="flex items-center space-x-4 mt-2">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {volunteerData.badge} Member
                </span>
                <span className="text-gray-600">Level {volunteerData.level}</span>
                <span className="text-gray-600">Joined {volunteerData.joinDate}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-0 md:text-right">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Experience Points</p>
              <p className="text-2xl font-bold text-gray-900">{volunteerData.xp} XP</p>
              <div className="w-48 bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${(volunteerData.xp / volunteerData.nextLevelXp) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {volunteerData.nextLevelXp - volunteerData.xp} XP to next level
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Impact Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Overview</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg mb-2">
                  <Calendar className="mx-auto text-blue-600" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">{volunteerData.totalEvents}</p>
                <p className="text-sm text-gray-600">Events Joined</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg mb-2">
                  <TrendingUp className="mx-auto text-green-600" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">{volunteerData.totalWaste}kg</p>
                <p className="text-sm text-gray-600">Waste Collected</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-2">
                  <MapPin className="mx-auto text-purple-600" size={24} />
                </div>
                <p className="text-lg font-bold text-gray-900">{volunteerData.favoriteLocation}</p>
                <p className="text-sm text-gray-600">Favorite Spot</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-lg mb-2">
                  <Award className="mx-auto text-orange-600" size={24} />
                </div>
                <p className="text-2xl font-bold text-gray-900">{badges.filter(b => b.earned).length}</p>
                <p className="text-sm text-gray-600">Badges Earned</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{activity.event}</h4>
                    <p className="text-sm text-gray-600">{activity.date} • {activity.volunteers} volunteers</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{activity.waste}</p>
                    <p className="text-xs text-gray-600">collected</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Badges */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievement Badges</h3>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge, index) => (
                <div key={index} className={`p-3 rounded-lg text-center transition-all ${
                  badge.earned 
                    ? 'bg-blue-50 border-2 border-blue-200' 
                    : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                }`}>
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <p className="text-xs font-medium text-gray-900">{badge.name}</p>
                  {badge.earned && (
                    <p className="text-xs text-gray-600 mt-1">{badge.date}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rewards & Incentives</h3>
            <div className="space-y-3">
              {rewards.map((reward, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  reward.status === 'earned' ? 'bg-green-50 border-green-200' :
                  reward.status === 'next' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{reward.name}</p>
                      <p className="text-xs text-gray-600">Level {reward.level} reward</p>
                    </div>
                    <div>
                      {reward.status === 'earned' && (
                        <span className="text-green-600 text-lg">✓</span>
                      )}
                      {reward.status === 'next' && (
                        <span className="text-yellow-600 text-lg">⭐</span>
                      )}
                      {reward.status === 'locked' && (
                        <span className="text-gray-400 text-lg">🔒</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;