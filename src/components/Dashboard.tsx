import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import StatsCards from './dashboard/StatsCards';
import RegionalMap from './dashboard/RegionalMap';
import RecentActivity from './dashboard/RecentActivity';
import WeeklyProgress from './dashboard/WeeklyProgress';

const Dashboard = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for dashboard entrance
    const tl = gsap.timeline();
    
    tl.fromTo(headerRef.current, 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(contentRef.current?.children || [], 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  return (
    <div className="space-y-6">
      <div 
        ref={headerRef}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Real-time beach cleanup insights</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      <div ref={contentRef} className="space-y-6">
        <StatsCards />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <RegionalMap />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>

        <WeeklyProgress />
      </div>
    </div>
  );
};

export default Dashboard;