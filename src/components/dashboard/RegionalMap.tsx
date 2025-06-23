import  { useEffect, useRef } from 'react';
import { Trophy, Users, Trash2, Activity, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';


const zones = [
    { 
      id: 1, 
      name: 'Juhu Beach', 
      waste: 234, 
      volunteers: 45, 
      rank: 1, 
      status: 'active',
      coordinates: { x: 25, y: 35 },
      efficiency: 92,
      weeklyGrowth: 15
    },
    { 
      id: 2, 
      name: 'Marine Drive', 
      waste: 198, 
      volunteers: 38, 
      rank: 2, 
      status: 'active',
      coordinates: { x: 45, y: 55 },
      efficiency: 88,
      weeklyGrowth: 12
    },
    { 
      id: 3, 
      name: 'Versova Beach', 
      waste: 187, 
      volunteers: 42, 
      rank: 3, 
      status: 'completed',
      coordinates: { x: 15, y: 25 },
      efficiency: 85,
      weeklyGrowth: 8
    },
    { 
      id: 4, 
      name: 'Chowpatty', 
      waste: 156, 
      volunteers: 29, 
      rank: 4, 
      status: 'active',
      coordinates: { x: 55, y: 45 },
      efficiency: 82,
      weeklyGrowth: 10
    },
    { 
      id: 5, 
      name: 'Aksa Beach', 
      waste: 143, 
      volunteers: 31, 
      rank: 5, 
      status: 'scheduled',
      coordinates: { x: 10, y: 65 },
      efficiency: 79,
      weeklyGrowth: 6
    },
    { 
      id: 6, 
      name: 'Manori Beach', 
      waste: 132, 
      volunteers: 26, 
      rank: 6, 
      status: 'active',
      coordinates: { x: 75, y: 30 },
      efficiency: 76,
      weeklyGrowth: 4
    },
  ];

const RegionalMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const zonesRef = useRef<HTMLDivElement[]>([]);

  

  useEffect(() => {
    // GSAP animations for map zones
    const tl = gsap.timeline();
    
    // Animate zones appearing
    tl.fromTo(zonesRef.current, 
      { 
        scale: 0, 
        opacity: 0,
        rotation: 180
      },
      { 
        scale: 1, 
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }
    );

    // Continuous pulse animation for active zones
    const activeZones = zonesRef.current.filter((_, index) => 
      zones[index].status === 'active'
    );
    
    gsap.to(activeZones, {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    });

    // Animate coastline
    gsap.fromTo('.coastline-path', 
      { 
        strokeDasharray: 1000,
        strokeDashoffset: 1000
      },
      { 
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.out",
        delay: 0.5
      }
    );

  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500 text-white shadow-lg';
    if (rank === 2) return 'bg-gray-400 text-white shadow-md';
    if (rank === 3) return 'bg-orange-600 text-white shadow-md';
    return 'bg-gray-200 text-gray-700';
  };

  const getZoneColor = (status: string, rank: number) => {
    if (status === 'active') {
      if (rank <= 3) return 'from-green-400 to-emerald-500';
      return 'from-green-300 to-green-400';
    }
    if (status === 'completed') return 'from-blue-400 to-blue-500';
    if (status === 'scheduled') return 'from-yellow-400 to-orange-400';
    return 'from-gray-300 to-gray-400';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Mumbai Coastline - Regional Competition</h3>
            <p className="text-gray-600">Interactive zone-based performance map</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">This Week</p>
            <p className="text-lg font-bold text-blue-600">Week 42</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Interactive Map */}
        <div 
          ref={mapRef}
          className="relative bg-gradient-to-b from-blue-50 via-blue-100 to-teal-100 rounded-xl p-8 mb-6 overflow-hidden"
          style={{ height: '400px' }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Coastline */}
              <path 
                className="coastline-path"
                d="M0 200 Q50 180 100 185 T200 190 T300 185 T400 195" 
                stroke="#3b82f6" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                className="coastline-path"
                d="M0 220 Q80 200 160 205 T320 210 T400 215" 
                stroke="#06b6d4" 
                strokeWidth="2" 
                fill="none"
              />
              {/* Wave patterns */}
              <path d="M0 240 Q20 235 40 240 T80 240 T120 240 T160 240 T200 240 T240 240 T280 240 T320 240 T360 240 T400 240" 
                stroke="#0891b2" strokeWidth="1" fill="none" opacity="0.6"/>
            </svg>
          </div>

          {/* Zone Markers */}
          {zones.map((zone, index) => (
            <div
              key={zone.id}
              ref={el => zonesRef.current[index] = el!}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ 
                left: `${zone.coordinates.x}%`, 
                top: `${zone.coordinates.y}%` 
              }}
              onMouseEnter={() => {
                gsap.to(zonesRef.current[index], {
                  scale: 1.3,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={() => {
                gsap.to(zonesRef.current[index], {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              {/* Zone Marker */}
              <div className={`w-16 h-16 bg-gradient-to-r ${getZoneColor(zone.status, zone.rank)} rounded-full flex items-center justify-center shadow-lg border-4 border-white relative`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getRankColor(zone.rank)}`}>
                  {zone.rank}
                </div>
                
                {/* Status indicator */}
                {zone.status === 'active' && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
                )}
              </div>

              {/* Hover Card */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-64">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{zone.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(zone.status)}`}>
                      {zone.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <Trash2 size={14} className="text-green-600" />
                      <span className="text-gray-600">{zone.waste}kg</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} className="text-blue-600" />
                      <span className="text-gray-600">{zone.volunteers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Activity size={14} className="text-purple-600" />
                      <span className="text-gray-600">{zone.efficiency}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp size={14} className="text-orange-600" />
                      <span className="text-gray-600">+{zone.weeklyGrowth}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
            <h5 className="text-sm font-semibold text-gray-900 mb-2">Zone Status</h5>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Scheduled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zone Rankings List */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Trophy className="text-yellow-500" size={20} />
            <span>Zone Performance Rankings</span>
          </h4>
          {zones.map((zone) => (
            <div key={zone.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankColor(zone.rank)}`}>
                  {zone.rank}
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">{zone.name}</h5>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Trash2 size={14} />
                      <span>{zone.waste}kg</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Users size={14} />
                      <span>{zone.volunteers}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Activity size={14} />
                      <span>{zone.efficiency}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(zone.status)}`}>
                  {zone.status}
                </span>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-sm text-green-600">
                    <TrendingUp size={14} />
                    <span>+{zone.weeklyGrowth}%</span>
                  </div>
                </div>
                {zone.rank <= 3 && (
                  <Trophy className={`${zone.rank === 1 ? 'text-yellow-500' : zone.rank === 2 ? 'text-gray-400' : 'text-orange-600'}`} size={16} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionalMap;