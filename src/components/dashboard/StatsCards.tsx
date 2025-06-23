import  { useEffect, useRef } from 'react';
import { Trash2, Users, Award, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';


 const stats = [
    {
      title: 'Total Waste Collected',
      value: '2,847',
      unit: 'kg',
      change: '+12%',
      changeType: 'positive',
      icon: Trash2,
      color: 'bg-green-500'
    },
    {
      title: 'Active Volunteers',
      value: '1,234',
      unit: 'people',
      change: '+8%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Events This Week',
      value: '24',
      unit: 'events',
      change: '+15%',
      changeType: 'positive',
      icon: Award,
      color: 'bg-purple-500'
    },
    {
      title: 'Impact Score',
      value: '94.2',
      unit: '/100',
      change: '+5.2%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];



const StatsCards = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    // Animate cards on mount
    gsap.fromTo(cardsRef.current,
      { 
        y: 50, 
        opacity: 0,
        scale: 0.9
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );

    // Add hover animations
    cardsRef.current.forEach((card) => {
  if (card) {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
});

    // Animate numbers counting up
    stats.forEach((stat, index) => {
      const numberElement = cardsRef.current[index]?.querySelector('.stat-number');
      if (numberElement) {
        const finalValue = parseFloat(stat.value.replace(',', ''));
        gsap.fromTo(numberElement, 
          { textContent: 0 },
          { 
            textContent: finalValue,
            duration: 2,
            delay: index * 0.2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              const current = Math.floor(this.targets()[0].textContent);
              if (stat.unit === 'kg' || stat.title.includes('Volunteers')) {
                numberElement.textContent = current.toLocaleString();
              } else {
                numberElement.textContent = current.toString();
              }
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div 
            key={index} 
            ref={el => cardsRef.current[index] = el!}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <div className="flex items-baseline space-x-1">
                  <p className="stat-number text-2xl lg:text-3xl font-bold text-gray-900">0</p>
                  <p className="text-sm text-gray-500">{stat.unit}</p>
                </div>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last week</span>
                </div>
              </div>
              <div className={`${stat.color} flex items-center justify-center w-12 h-12 rounded-lg ml-4`}>
                <Icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;