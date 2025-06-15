import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Shield, Zap, Eye, Target, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/interactions/ScrollReveal';

const WhatYouWantSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
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

  // Brand colors
  const brand = {
    red: '#DC143C',
    gold: '#D4AF37',
    green: '#00A86B',
    black: '#1C1C1C',
    white: '#F8F8FF',
  };

  // Arrange 5 nodes in a pentagon around the center
  const outerPositions = [
    { x: 50, y: 15 }, // top center
    { x: 85, y: 38 }, // right top
    { x: 70, y: 80 }, // right bottom
    { x: 30, y: 80 }, // left bottom
    { x: 15, y: 38 }, // left top
  ];
  const modules = [
    {
      icon: Globe,
      title: 'Pay and get paid — instantly, globally.',
      description: 'Pay and get paid — instantly, globally.',
      gradient: `from-[${brand.gold}] to-[${brand.red}]`,
      color: brand.gold,
      position: outerPositions[0],
      features: [
        'Real-time transaction tracking',
        'Global payment corridors',
        'Instant confirmations'
      ]
    },
    {
      icon: Shield,
      title: 'Lock rates, not pray for stability.',
      description: 'Lock rates, not pray for stability.',
      gradient: `from-[${brand.green}] to-[${brand.gold}]`,
      color: brand.green,
      position: outerPositions[1],
      features: [
        'Fixed exchange rates',
        'Rate protection',
        'Secure transactions'
      ]
    },
    {
      icon: Zap,
      title: 'Avoid bank drama and delays.',
      description: 'Avoid bank drama and delays.',
      gradient: `from-[${brand.red}] to-[${brand.gold}]`,
      color: brand.red,
      position: outerPositions[2],
      features: [
        'Direct settlements',
        'No intermediary delays',
        'Streamlined processes'
      ]
    },
    {
      icon: Eye,
      title: 'Stop bleeding capital on hidden fees.',
      description: 'Stop bleeding capital on hidden fees.',
      gradient: `from-[${brand.gold}] to-[${brand.red}]`,
      color: brand.gold,
      position: outerPositions[3],
      features: [
        'Clear fee structure',
        'No hidden costs',
        'Complete breakdown'
      ]
    },
    {
      icon: Target,
      title: 'Close when the deal is hot.',
      description: 'Close when the deal is hot.',
      gradient: `from-[${brand.red}] to-[${brand.gold}]`,
      color: brand.red,
      position: outerPositions[4],
      features: [
        'Market timing tools',
        'Deal optimization',
        'Strategic execution'
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-[#1C1C1C] to-[#232323]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-[#D4AF37] to-[#DC143C] bg-clip-text text-transparent" style={{letterSpacing: '-0.04em'}}>
            Trade Should Feel Like Power.<br />
            <span className="text-[#DC143C]">Not Panic.</span>
          </h2>
          <p className="text-xl text-[#F8F8FF] max-w-3xl mx-auto opacity-80">
            Beyond payments. This is sovereign infrastructure for the new global economy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Map */}
          <div className={`relative ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative aspect-square bg-gradient-to-br from-[#232323] to-[#1C1C1C] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl" style={{backdropFilter: 'blur(8px)', boxShadow: '0 8px 40px #D4AF3722'}}>
              {/* Global Map Visualization */}
              <div className="relative w-full h-full">
                {/* Connection Lines: from each node to W */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#DC143C" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#00A86B" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  {/* Lines from each node to W (center) */}
                  {modules.map((module, index) => (
                    <line
                      key={`to-w-${index}`}
                      x1={`${module.position.x}%`}
                      y1={`${module.position.y}%`}
                      x2="50%"
                      y2="50%"
                      stroke="url(#flow-gradient)"
                      strokeWidth="2.5"
                      strokeDasharray="7 3"
                      className="animate-marching-ants"
                      style={{ filter: 'drop-shadow(0 0 6px #D4AF37AA)' }}
                    />
                  ))}
                  {/* Lines between all pairs of outer nodes */}
                  {modules.map((a, i) => (
                    modules.map((b, j) => (
                      j > i ? (
                        <line
                          key={`between-${i}-${j}`}
                          x1={`${a.position.x}%`}
                          y1={`${a.position.y}%`}
                          x2={`${b.position.x}%`}
                          y2={`${b.position.y}%`}
                          stroke="url(#flow-gradient)"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                          className="animate-marching-ants"
                          style={{ filter: 'drop-shadow(0 0 4px #D4AF37AA)' }}
                        />
                      ) : null
                    ))
                  ))}
                </svg>

                {/* Module Nodes */}
                {modules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <button
                      key={index}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border-2 ${
                        activeModule === index
                          ? 'scale-110 border-[#D4AF37] shadow-[0_0_32px_#D4AF37AA]'
                          : 'border-[#232323] hover:scale-105 hover:shadow-[0_0_16px_#D4AF3766]'
                      }`}
                      style={{ 
                        left: `${module.position.x}%`, 
                        top: `${module.position.y}%`,
                        background: `radial-gradient(circle at 60% 40%, ${module.color} 60%, #232323 100%)`,
                        color: brand.white
                      }}
                      onClick={() => setActiveModule(index)}
                    >
                      <Icon className="w-8 h-8" />
                    </button>
                  );
                })}
                {/* Center Logo (W) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#1C1C1C] rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-lg" style={{boxShadow: '0 0 32px #D4AF3788'}}>
                  <span className="text-[#D4AF37] font-black text-2xl tracking-tight">W</span>
                </div>
              </div>
            </div>
          </div>

          {/* Control Modules */}
          <div className={`space-y-8 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isActive = activeModule === index;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer backdrop-blur-md ${
                    isActive 
                      ? 'border-[#D4AF37] bg-[#232323]/80 shadow-[0_0_32px_#D4AF3755]' 
                      : 'border-[#232323] bg-[#1C1C1C]/60 hover:border-[#D4AF37] hover:shadow-[0_0_16px_#D4AF3733]'
                  }`}
                  onClick={() => setActiveModule(index)}
                  style={{boxShadow: isActive ? '0 4px 32px #D4AF3733' : undefined}}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`} style={{background: `linear-gradient(135deg, ${module.color} 60%, #D4AF37 100%)`}}>
                      <Icon className="w-6 h-6 text-[#F8F8FF]" />
                    </div>
                    <div className="flex-1 flex items-center">
                      <h3 className="text-xl font-bold text-[#F8F8FF] tracking-tight" style={{letterSpacing: '-0.01em'}}>{module.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#DC143C] hover:from-[#DC143C] hover:to-[#D4AF37] text-[#1C1C1C] px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 group border-2 border-[#D4AF37]"
              style={{boxShadow: '0 2px 24px #D4AF3744'}}
            >
              Start Moving Your Money Better
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        {/* Erosion Statement */}
        <ScrollReveal delay={1600} direction="up">
          <div className="text-center mt-16">
            <p className="text-2xl text-red-500 font-bold">
              This isn't inconvenience. It's erosion.
            </p>
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg max-w-2xl mx-auto">
              <p className="text-gray-300 italic">
                "I don't want a fintech app. I want a f***ing weapon."
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatYouWantSection;
