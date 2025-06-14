
import React, { useState, useRef, useEffect } from 'react';
import { Clock, DollarSign, TrendingDown, Zap } from 'lucide-react';

const ProblemSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setActiveTimeline(prev => (prev + 1) % 2);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  const problemStats = [
    { icon: Clock, value: '3-5 days', label: 'Transfer time', color: 'silk-crimson' },
    { icon: DollarSign, value: '6.5%', label: 'Average fees', color: 'silk-crimson' },
    { icon: TrendingDown, value: '40%', label: 'Deals fail', color: 'silk-crimson' },
  ];

  const weaveStats = [
    { icon: Zap, value: '<24 hours', label: 'Settlement', color: 'jade-flow' },
    { icon: DollarSign, value: '0.5%', label: 'Low fees', color: 'jade-flow' },
    { icon: TrendingDown, value: '2%', label: 'Deal failure', color: 'jade-flow' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-ink-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-6">
            The Global South is rising.
            <br />
            But its <span className="text-silk-crimson-500">money pipes</span> are still{' '}
            <span className="text-silk-crimson-500">colonial</span>.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This isn't just a payment problem. It's a development emergency.
          </p>
        </div>

        {/* Timeline Comparison */}
        <div className="space-y-16">
          {/* Problem Timeline */}
          <div className={`${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-silk-crimson-400 mb-4">The Old Way</h3>
              <div className="flex justify-center items-center space-x-8">
                {problemStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-silk-crimson-500/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <Icon className="w-8 h-8 text-silk-crimson-400" />
                      </div>
                      <div className="text-2xl font-bold text-silk-crimson-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Problem Story */}
            <div className="bg-silk-crimson-500/5 border border-silk-crimson-500/20 rounded-2xl p-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-silk-crimson-300 mb-4">Real Impact Story</h4>
                <p className="text-gray-300 leading-relaxed">
                  A Chinese manufacturer and Nigerian importer had a $2M deal ready. Traditional banking took 5 days, 
                  currency fluctuations ate 3% of the deal value, and compliance delays killed the relationship. 
                  The opportunity moved to a competitor with better financial rails.
                </p>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-jade-flow-500/30" />
            <div className="mx-8 text-2xl font-bold text-jade-flow-400">VS</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-jade-flow-500/30" />
          </div>

          {/* WEAVE Solution */}
          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-jade-flow-400 mb-4">The WEAVE Way</h3>
              <div className="flex justify-center items-center space-x-8">
                {weaveStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-jade-flow-500/10 rounded-full flex items-center justify-center mb-3 mx-auto animate-pulse-glow">
                        <Icon className="w-8 h-8 text-jade-flow-400" />
                      </div>
                      <div className="text-2xl font-bold text-jade-flow-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Solution Story */}
            <div className="bg-jade-flow-500/5 border border-jade-flow-500/20 rounded-2xl p-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-jade-flow-300 mb-4">Transformation Story</h4>
                <p className="text-gray-300 leading-relaxed">
                  Same deal, WEAVE infrastructure: Settlement in 18 hours, 0.5% fees, real-time FX protection. 
                  The relationship grew to $20M in annual trade. This is how empires are built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
