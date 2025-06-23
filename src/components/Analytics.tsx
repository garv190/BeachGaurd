import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download,TrendingUp } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const wasteTypeData = [
    { name: 'Plastic Bottles', value: 35, color: '#3b82f6' },
    { name: 'Food Wrappers', value: 25, color: '#10b981' },
    { name: 'Cigarette Butts', value: 20, color: '#f59e0b' },
    { name: 'Glass Items', value: 12, color: '#ef4444' },
    { name: 'Other', value: 8, color: '#8b5cf6' }
  ];

  const monthlyTrends = [
    { month: 'Jul', waste: 8450, volunteers: 1890, events: 45, impact: 78 },
    { month: 'Aug', waste: 9680, volunteers: 2120, events: 52, impact: 82 },
    { month: 'Sep', waste: 11230, volunteers: 2450, events: 48, impact: 85 },
    { month: 'Oct', waste: 12940, volunteers: 2680, events: 55, impact: 88 },
    { month: 'Nov', waste: 14560, volunteers: 2890, events: 62, impact: 91 },
    { month: 'Dec', waste: 16230, volunteers: 3120, events: 68, impact: 94 }
  ];

  const regionalPerformance = [
    { region: 'Juhu Beach', waste: 2847, volunteers: 245, efficiency: 92, roi: 145 },
    { region: 'Marine Drive', waste: 2156, volunteers: 198, efficiency: 88, roi: 138 },
    { region: 'Versova Beach', waste: 1987, volunteers: 187, efficiency: 85, roi: 132 },
    { region: 'Chowpatty', waste: 1654, volunteers: 156, efficiency: 82, roi: 125 },
    { region: 'Aksa Beach', waste: 1432, volunteers: 143, efficiency: 79, roi: 118 }
  ];

  const sponsorROI = [
    { sponsor: 'OceanTech Corp', investment: 150000, impact: 218500, roi: 145.7 },
    { sponsor: 'EcoSolutions Ltd', investment: 120000, impact: 162000, roi: 135.0 },
    { sponsor: 'GreenWave Inc', investment: 95000, impact: 123500, roi: 130.0 },
    { sponsor: 'CleanSeas Foundation', investment: 80000, impact: 98400, roi: 123.0 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights and performance metrics</p>
        </div>
        
        <div className="mt-4 lg:mt-0 flex flex-wrap items-center gap-3">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Impact Score', value: '94.2', change: '+5.2%', color: 'bg-green-500' },
          { title: 'ROI for Sponsors', value: '142%', change: '+8.5%', color: 'bg-blue-500' },
          { title: 'Volunteer Retention', value: '87.3%', change: '+3.1%', color: 'bg-purple-500' },
          { title: 'Waste per Volunteer', value: '12.4kg', change: '+1.8%', color: 'bg-orange-500' }
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <p className="text-sm text-green-600 font-medium mt-1">{metric.change}</p>
              </div>
              <div className={`${metric.color} p-3 rounded-lg`}>
                <TrendingUp className="text-white" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Monthly Performance Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrends}>
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
              <Line type="monotone" dataKey="waste" stroke="#3b82f6" strokeWidth={3} name="Waste (kg)" />
              <Line type="monotone" dataKey="volunteers" stroke="#10b981" strokeWidth={3} name="Volunteers" />
              <Line type="monotone" dataKey="impact" stroke="#f59e0b" strokeWidth={3} name="Impact Score" />
              
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Waste Type Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Type Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={wasteTypeData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {wasteTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regional Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance Analysis</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={regionalPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="waste" fill="#3b82f6" name="Waste Collected (kg)" />
            <Bar dataKey="volunteers" fill="#10b981" name="Volunteers" />
            <Bar dataKey="efficiency" fill="#f59e0b" name="Efficiency Score" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sponsor ROI Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sponsor Return on Investment</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Sponsor</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Investment</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Impact Value</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">ROI</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody>
              {sponsorROI.map((sponsor, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">{sponsor.sponsor}</td>
                  <td className="py-4 px-4 text-right text-gray-900">₹{sponsor.investment.toLocaleString()}</td>
                  <td className="py-4 px-4 text-right text-gray-900">₹{sponsor.impact.toLocaleString()}</td>
                  <td className="py-4 px-4 text-right font-semibold text-green-600">{sponsor.roi}%</td>
                  <td className="py-4 px-4 text-center">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${Math.min(sponsor.roi, 150) / 150 * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">🤖 AI-Generated Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Optimization Recommendation</h4>
            <p className="text-sm opacity-90">
              Juhu Beach shows 15% higher volunteer efficiency. Consider replicating their engagement strategies across other zones.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Sponsorship Opportunity</h4>
            <p className="text-sm opacity-90">
              3 beachfront hotels near Versova Beach show high CSR potential. Auto-generated outreach messages ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;