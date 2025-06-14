
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Bridge, Brain } from 'lucide-react';

const FeaturesSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  const features = [
    {
      icon: Zap,
      name: 'WEAVE Flow™',
      title: 'Lightning-Fast Settlements',
      description: 'Cross-border payments settle in < 24 hours with instant confirmations. No more waiting, no more uncertainty.',
      gradient: 'from-jade-flow-500 to-jade-flow-600',
      position: { x: 20, y: 30 }
    },
    {
      icon: Shield,
      name: 'WEAVE Vault™',
      title: 'Capital Preservation',
      description: 'Preserve capital in stablecoins, control FX volatility, and protect your deals from market swings.',
      gradient: 'from-imperial-gold-500 to-imperial-gold-600',
      position: { x: 80, y: 20 }
    },
    {
      icon: Bridge,
      name: 'WEAVE Bridge™',
      title: 'Seamless Onboarding',
      description: 'Corridor-specific KYC and compliance. Get verified once, trade everywhere in your network.',
      gradient: 'from-jade-flow-400 to-imperial-gold-500',
      position: { x: 70, y: 70 }
    },
    {
      icon: Brain,
      name: 'WEAVE Pulse™',
      title: 'AI-Powered Intelligence',
      description: 'Get real-time market insights, fraud detection, and intelligent routing for optimal settlements.',
      gradient: 'from-imperial-gold-400 to-jade-flow-500',
      position: { x: 30, y: 60 }
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-ink-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-6">
            WEAVE isn't fintech.
            <br />
            It's <span className="weave-gradient-text">financial liberation</span>.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond payments. This is sovereign infrastructure for the new global economy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Map */}
          <div className={`relative ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative aspect-square bg-gradient-to-br from-ink-black to-gray-900 rounded-3xl p-8 border border-jade-flow-500/20">
              {/* Global Corridor Visualization */}
              <div className="relative w-full h-full">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated flow lines */}
                  {features.map((_, index) => (
                    <line
                      key={index}
                      x1={`${features[index].position.x}%`}
                      y1={`${features[index].position.y}%`}
                      x2={`${features[(index + 1) % features.length].position.x}%`}
                      y2={`${features[(index + 1) % features.length].position.y}%`}
                      stroke="url(#flow-gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  ))}
                </svg>

                {/* Feature Nodes */}
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={index}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ${
                        activeFeature === index ? 'animate-pulse-glow' : ''
                      }`}
                      style={{ 
                        left: `${feature.position.x}%`, 
                        top: `${feature.position.y}%` 
                      }}
                      onClick={() => setActiveFeature(index)}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </button>
                  );
                })}
              </div>
              
              {/* Center Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-ink-black rounded-full flex items-center justify-center border-2 border-jade-flow-500/50">
                <span className="text-jade-flow-400 font-bold text-lg">W</span>
              </div>
            </div>
          </div>

          {/* Feature Details */}
          <div className={`space-y-8 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'border-jade-flow-500/50 bg-jade-flow-500/5' 
                      : 'border-gray-700/50 bg-gray-800/20 hover:border-jade-flow-500/30'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-pearl-white">{feature.title}</h3>
                        <span className="text-sm text-jade-flow-400 font-mono">{feature.name}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <Button 
              size="lg"
              className="w-full bg-jade-flow-600 hover:bg-jade-flow-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-jade-flow-500/25 transition-all duration-300"
            >
              Start Moving Your Money Better
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
