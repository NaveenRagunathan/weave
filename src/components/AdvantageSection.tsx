
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, DollarSign, Globe, Shield, Users } from 'lucide-react';
import ComparisonScene from './ComparisonScene';

const comparisonData = [
  { feature: 'Transfer Speed', legacy: '3–5 Days', weave: '< 24 Hours', icon: Clock },
  { feature: 'FX Losses', legacy: '6–15%', weave: '0–1% (USDC)', icon: DollarSign },
  { feature: 'Corridor Coverage', legacy: 'Western focus', weave: 'China–Global South', icon: Globe },
  { feature: 'Compliance Burden', legacy: 'High, fragmented', weave: 'Seamless, embedded', icon: Shield },
  { feature: 'Trust Networks', legacy: 'None', weave: 'Embedded in diaspora, embassies, trade bodies', icon: Users },
];

const AdvantageSection = () => {
  const [isHeaderInView, setIsHeaderInView] = useState(false);
  const [isEndingInView, setIsEndingInView] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const endingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const endingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsEndingInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (endingRef.current) endingObserver.observe(endingRef.current);

    return () => {
      headerObserver.disconnect();
      endingObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-ink-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-pearl-white">
            While Stripe moves money, <br className="hidden md:block" /> WEAVE{' '}
            <span className="weave-gradient-text animate-shimmer">moves mountains</span>.
          </h2>
          
          {/* Animated Underline */}
          <div
            className={`h-1 mt-4 mx-auto bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-500 to-jade-flow-400 rounded-full origin-center
                        ${isHeaderInView ? 'animate-underline-reveal' : 'scale-x-0'}`}
            style={{ 
              animationDelay: isHeaderInView ? '0.5s' : '0s', 
              width: 'clamp(150px, 40%, 300px)' 
            }}
          />
        </div>

        {/* Comparison Scenes */}
        <div className="space-y-8 mb-20">
          {comparisonData.map((item, index) => (
            <ComparisonScene
              key={index}
              feature={item.feature}
              legacy={item.legacy}
              weave={item.weave}
              icon={item.icon}
              index={index}
              isLast={index === comparisonData.length - 1}
            />
          ))}
        </div>

        {/* Ending Scene: The Arrival */}
        <div 
          ref={endingRef}
          className={`relative rounded-3xl overflow-hidden transition-all duration-1500 ${
            isEndingInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Dramatic Background */}
          <div className="absolute inset-0">
            {/* Globe Effect */}
            <div 
              className={`absolute inset-0 transition-all duration-2000 ${
                isEndingInView ? 'opacity-100 animate-pulse-glow' : 'opacity-0'
              }`}
              style={{
                background: `
                  radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 60%),
                  radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 40%)
                `
              }}
            />
            
            {/* Digital Rails Animation */}
            <svg className="absolute inset-0 w-full h-full opacity-60">
              <defs>
                <linearGradient id="rail-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(16, 185, 129, 0)" />
                  <stop offset="50%" stopColor="rgba(16, 185, 129, 0.8)" />
                  <stop offset="100%" stopColor="rgba(245, 158, 11, 0.6)" />
                </linearGradient>
              </defs>
              
              {/* Connection Lines */}
              <path
                d="M50,100 Q150,50 300,80 T500,60"
                stroke="url(#rail-gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,6"
                className={`transition-all duration-1000 ${
                  isEndingInView ? 'animate-marching-ants opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.5s' }}
              />
              <path
                d="M100,150 Q200,120 350,140 T550,120"
                stroke="url(#rail-gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,6"
                className={`transition-all duration-1000 ${
                  isEndingInView ? 'animate-marching-ants opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: '1s' }}
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-8">
            <div className="space-y-8">
              {/* Globe Visualization Placeholder */}
              <div 
                className={`mx-auto w-32 h-32 rounded-full flex items-center justify-center border-2 border-jade-flow-400/30 transition-all duration-1500 ${
                  isEndingInView ? 'animate-pulse-glow scale-110' : 'scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)'
                }}
              >
                <Globe className="w-16 h-16 text-jade-flow-400 animate-pulse" />
              </div>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                From China to Lagos, São Paulo to Jakarta — the financial rails of tomorrow, 
                built on trust, powered by community, delivered today.
              </p>

              {/* Enhanced CTA */}
              <div className="pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-jade-flow-500 text-jade-flow-400 hover:bg-jade-flow-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 group relative overflow-hidden ${
                    isEndingInView ? 'animate-pulse-glow' : ''
                  }`}
                >
                  {/* Shimmer Effect */}
                  <div 
                    className={`absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isEndingInView ? 'animate-shimmer' : ''
                    }`}
                    style={{ backgroundSize: '200% 100%' }}
                  />
                  <span className="relative flex items-center">
                    Compare for Yourself
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
