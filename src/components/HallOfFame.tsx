import  { useState, useEffect, useRef } from 'react';
import { Trophy, Medal, Star, Crown, Award, Calendar, Users, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';

const HallOfFame = () => {
  const [activeCategory, setActiveCategory] = useState('legends');
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const legendsRef = useRef<HTMLDivElement[]>([]);

  const legends = [
    {
      id: 1,
      name: 'Garv Jauhari',
      title: 'Ocean Guardian',
      totalWaste: 2847,
      totalEvents: 156,
      yearsActive: 3,
      specialAchievement: 'First to reach Platinum Elite status',
      avatar: 'GJ',
      joinDate: 'January 2022',
      favoriteBeach: 'Juhu Beach',
      impact: 'Inspired 500+ new volunteers'
    },
    {
      id: 2,
      name: 'Samya',
      title: 'Eco Champion',
      totalWaste: 2156,
      totalEvents: 134,
      yearsActive: 2.5,
      specialAchievement: 'Organized 50+ community events',
      avatar: 'S',
      joinDate: 'June 2022',
      favoriteBeach: 'Marine Drive',
      impact: 'Led corporate partnerships'
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      title: 'Beach Protector',
      totalWaste: 1987,
      totalEvents: 128,
      yearsActive: 2,
      specialAchievement: 'Highest single-day collection: 45kg',
      avatar: 'RK',
      joinDate: 'March 2023',
      favoriteBeach: 'Versova Beach',
      impact: 'Youth engagement specialist'
    }
  ];

  const monthlyChampions = [
    { month: 'December 2024', name: 'Sneha Iyer', waste: 187, events: 12, zone: 'Juhu Beach' },
    { month: 'November 2024', name: 'Vikram Singh', waste: 165, events: 11, zone: 'Marine Drive' },
    { month: 'October 2024', name: 'Anita Desai', waste: 143, events: 10, zone: 'Chowpatty' },
    { month: 'September 2024', name: 'Karan Mehta', waste: 156, events: 9, zone: 'Versova Beach' }
  ];

  const teamAchievements = [
    {
      teamName: 'Juhu Warriors',
      achievement: 'Highest Team Collection',
      record: '1,247kg in one month',
      date: 'November 2024',
      members: 45,
      leader: 'Arjun Patel'
    },
    {
      teamName: 'Marine Guardians',
      achievement: 'Most Consistent Team',
      record: '52 consecutive weeks',
      date: 'Ongoing since Jan 2024',
      members: 38,
      leader: 'Priya Sharma'
    },
    {
      teamName: 'Versova Volunteers',
      achievement: 'Best Newcomer Team',
      record: '500kg in first month',
      date: 'October 2024',
      members: 32,
      leader: 'Rahul Kumar'
    }
  ];

  const milestones = [
    { milestone: '1 Million KG Collected', date: 'November 2024', participants: '2,500+ volunteers' },
    { milestone: '10,000 Active Volunteers', date: 'October 2024', participants: 'Mumbai-wide' },
    { milestone: '500 Beach Events', date: 'September 2024', participants: 'All zones' },
    { milestone: '100 Corporate Partners', date: 'August 2024', participants: 'CSR initiatives' }
  ];

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (activeCategory === 'legends') {
      // Animate legends cards
      gsap.fromTo(legendsRef.current,
        { 
          y: 50, 
          opacity: 0,
          rotationY: 45,
          scale: 0.8
        },
        { 
          y: 0, 
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [activeCategory]);

  const getAvatarColor = (index: number) => {
    const colors = [
      'from-yellow-400 to-orange-500',
      'from-gray-300 to-gray-500',
      'from-orange-400 to-red-500',
      'from-blue-400 to-purple-500',
      'from-green-400 to-teal-500'
    ];
    return colors[index % colors.length];
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="text-yellow-500" size={32} />;
    if (rank === 2) return <Trophy className="text-gray-400" size={28} />;
    if (rank === 3) return <Medal className="text-orange-600" size={24} />;
    return <Star className="text-blue-500" size={20} />;
  };

  return (
    <div className="space-y-6">
      <div 
        ref={headerRef}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Hall of Fame</h1>
          <p className="text-gray-600 mt-1">Celebrating our environmental heroes and achievements</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
            <Trophy size={16} />
            <span>Legacy of Impact</span>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div ref={contentRef} className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-wrap border-b border-gray-200">
          {[
            { id: 'legends', label: 'Legends', icon: Crown },
            { id: 'monthly', label: 'Monthly Champions', icon: Calendar },
            { id: 'teams', label: 'Team Records', icon: Users },
            { id: 'milestones', label: 'Platform Milestones', icon: TrendingUp }
          ].map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon size={16} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {activeCategory === 'legends' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Environmental Legends</h2>
                <p className="text-gray-600">Our most dedicated volunteers who've made extraordinary impact</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {legends.map((legend, index) => (
                  <div 
                    key={legend.id} 
                    ref={el => legendsRef.current[index] = el!}
                    className="relative"
                  >
                    {/* Rank Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      {getRankIcon(index + 1)}
                    </div>

                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 p-6 pt-8 hover:shadow-lg transition-all">
                      <div className="text-center mb-4">
                        <div className={`w-20 h-20 bg-gradient-to-r ${getAvatarColor(index)} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3`}>
                          {legend.avatar}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{legend.name}</h3>
                        <p className="text-blue-600 font-semibold">{legend.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{legend.yearsActive} years of service</p>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Total Waste</span>
                          <span className="font-bold text-green-600">{legend.totalWaste}kg</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Events Joined</span>
                          <span className="font-bold text-blue-600">{legend.totalEvents}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Favorite Beach</span>
                          <span className="font-medium text-gray-900">{legend.favoriteBeach}</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3 mb-4">
                        <p className="text-sm font-medium text-blue-900 mb-1">Special Achievement</p>
                        <p className="text-sm text-blue-700">{legend.specialAchievement}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-900 mb-1">Impact</p>
                        <p className="text-sm text-green-700">{legend.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'monthly' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Monthly Champions</h2>
                <p className="text-gray-600">Recognizing outstanding monthly performances</p>
              </div>

              <div className="space-y-4">
                {monthlyChampions.map((champion, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                          <Trophy className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{champion.name}</h3>
                          <p className="text-gray-600">{champion.month} Champion</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                            <span>{champion.waste}kg collected</span>
                            <span>•</span>
                            <span>{champion.events} events</span>
                            <span>•</span>
                            <span>{champion.zone}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          Monthly Winner
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'teams' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Team Records</h2>
                <p className="text-gray-600">Celebrating exceptional team achievements</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {teamAchievements.map((team, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="text-center mb-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <Users className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{team.teamName}</h3>
                      <p className="text-purple-600 font-semibold">{team.achievement}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-purple-50 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-purple-900">{team.record}</p>
                        <p className="text-sm text-purple-700">{team.date}</p>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Team Size</span>
                        <span className="font-medium">{team.members} members</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Team Leader</span>
                        <span className="font-medium">{team.leader}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'milestones' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Platform Milestones</h2>
                <p className="text-gray-600">Major achievements in our collective journey</p>
              </div>

              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full">
                        <Award className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{milestone.milestone}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{milestone.date}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Users size={16} />
                            <span>{milestone.participants}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          Achieved
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inspiration Quote */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">🌊 "Every piece of trash removed is a step towards cleaner oceans" 🌊</h3>
        <p className="text-blue-100 text-lg">
          Join our Hall of Fame by making a difference, one cleanup at a time.
        </p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default HallOfFame;