
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const WeeklyProgress = () => {
  const weeklyData = [
    { day: 'Mon', waste: 420, volunteers: 89, events: 6 },
    { day: 'Tue', waste: 380, volunteers: 78, events: 5 },
    { day: 'Wed', waste: 520, volunteers: 102, events: 8 },
    { day: 'Thu', waste: 340, volunteers: 65, events: 4 },
    { day: 'Fri', waste: 480, volunteers: 95, events: 7 },
    { day: 'Sat', waste: 680, volunteers: 145, events: 12 },
    { day: 'Sun', waste: 590, volunteers: 125, events: 10 }
  ];

  const monthlyComparison = [
    { month: 'Aug', waste: 12450, volunteers: 2890 },
    { month: 'Sep', waste: 15680, volunteers: 3420 },
    { month: 'Oct', waste: 18230, volunteers: 3850 },
    { month: 'Nov', waste: 16940, volunteers: 3650 }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Weekly Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Weekly Progress</h3>
          <p className="text-gray-600">Daily waste collection and volunteer participation</p>
        </div>
        <div className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="waste" fill="#3b82f6" name="Waste (kg)" />
              <Bar dataKey="volunteers" fill="#10b981" name="Volunteers" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Trends</h3>
          <p className="text-gray-600">4-month performance comparison</p>
        </div>
        <div className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyComparison}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="waste" 
                stroke="#f59e0b" 
                strokeWidth={3}
                name="Total Waste (kg)"
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="volunteers" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                name="Total Volunteers"
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProgress;