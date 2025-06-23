import  { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Plus, Filter } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekend Beach Cleanup - Juhu',
      date: '2024-12-15',
      time: '06:00 AM',
      location: 'Juhu Beach, Mumbai',
      volunteers: 45,
      maxVolunteers: 60,
      description: 'Join us for our weekly Juhu Beach cleanup drive. Refreshments and cleanup kits provided.',
      organizer: 'CleanWave Mumbai',
      status: 'open',
      tags: ['Weekly', 'Family-Friendly']
    },
    {
      id: 2,
      title: 'Corporate CSR Drive - Marine Drive',
      date: '2024-12-16',
      time: '07:30 AM',
      location: 'Marine Drive, Mumbai',
      volunteers: 28,
      maxVolunteers: 40,
      description: 'Special corporate social responsibility event with TechCorp. Team building + beach cleanup.',
      organizer: 'TechCorp CSR Team',
      status: 'open',
      tags: ['Corporate', 'CSR']
    },
    {
      id: 3,
      title: 'Student Volunteer Program - Versova',
      date: '2024-12-18',
      time: '08:00 AM',
      location: 'Versova Beach, Mumbai',
      volunteers: 32,
      maxVolunteers: 50,
      description: 'College students community service program. Educational session included.',
      organizer: 'Mumbai University',
      status: 'open',
      tags: ['Educational', 'Students']
    },
    {
      id: 4,
      title: 'Holiday Special - Chowpatty',
      date: '2024-12-22',
      time: '06:30 AM',
      location: 'Chowpatty Beach, Mumbai',
      volunteers: 18,
      maxVolunteers: 35,
      description: 'Special holiday cleanup event with festive refreshments and year-end celebration.',
      organizer: 'CleanWave Mumbai',
      status: 'open',
      tags: ['Holiday', 'Celebration']
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Morning Cleanup - Aksa Beach',
      date: '2024-12-10',
      time: '06:00 AM',
      location: 'Aksa Beach, Mumbai',
      volunteers: 52,
      wasteCollected: '87kg',
      status: 'completed',
      impact: 'High'
    },
    {
      id: 6,
      title: 'Weekend Warriors - Manori',
      date: '2024-12-08',
      time: '07:00 AM',
      location: 'Manori Beach, Mumbai',
      volunteers: 38,
      wasteCollected: '64kg',
      status: 'completed',
      impact: 'Medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800 border-green-200';
      case 'full': return 'bg-red-100 text-red-800 border-red-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">Manage and track beach cleanup events</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            <span>Create Event</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'upcoming' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Upcoming Events ({upcomingEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'past' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Past Events ({pastEvents.length})
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'upcoming' ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                          <p className="text-gray-600 mt-1">{event.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar size={16} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users size={16} />
                          <span>{event.volunteers}/{event.maxVolunteers} volunteers</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          Organized by <span className="font-medium text-gray-900">{event.organizer}</span>
                        </p>
                        <div className="flex items-center space-x-3">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
                            ></div>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                            Join Event
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <div className="flex items-center space-x-6 mt-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={16} />
                          <span>{event.volunteers} volunteers</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                      <p className="text-lg font-bold text-green-600">{event.wasteCollected}</p>
                      <p className="text-sm text-gray-600">waste collected</p>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                        event.impact === 'High' ? 'bg-green-100 text-green-800' :
                        event.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.impact} Impact
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">🤖 AI-Powered Event Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Auto-Generate Flyers</h4>
            <p className="text-sm opacity-90">Create event promotional materials with AI in seconds</p>
            <button className="mt-2 bg-white/20 px-3 py-1 rounded text-sm hover:bg-white/30 transition-colors">
              Generate Now
            </button>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Smart Scheduling</h4>
            <p className="text-sm opacity-90">AI suggests optimal event timing based on weather & participation</p>
            <button className="mt-2 bg-white/20 px-3 py-1 rounded text-sm hover:bg-white/30 transition-colors">
              Get Suggestions
            </button>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Impact Reports</h4>
            <p className="text-sm opacity-90">Automated post-event impact reports for sponsors</p>
            <button className="mt-2 bg-white/20 px-3 py-1 rounded text-sm hover:bg-white/30 transition-colors">
              View Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;