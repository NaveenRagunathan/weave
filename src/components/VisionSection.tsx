
import React, { useState, useRef, useEffect } from 'react';
import { Globe, TrendingUp, Shield, Zap } from 'lucide-react';

const VisionSection = () => {
  const [isInView, setIsInView] = useState(false);
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

  const benefits = [
    { 
      icon: Globe, 
      text: 'Pay and get paid — instantly, globally.', 
      emoji: '🌐'
    },
    { 
      icon: TrendingUp, 
      text: 'Lock rates, not pray for stability.', 
      emoji: '📈'
    },
    { 
      icon: Shield, 
      text: 'Avoid bank drama and delays.', 
      emoji: '⛨'
    },
    { 
      icon: Zap, 
      text: 'Stop bleeding capital on hidden fees.', 
      emoji: '❌'
    },
    { 
      icon: Zap, 
      text: 'Close when the deal is hot.', 
      emoji: '✅'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-ink-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-8">
            What You Really Want
          </h2>
          <p className="text-3xl md:text-4xl text-silk-crimson-400 font-bold">
            Trade Should Feel Like <span className="text-imperial-gold-400">Power</span>. Not Panic.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits List */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-silk-crimson-900/10 to-imperial-gold-900/10 rounded-xl border border-imperial-gold-500/20 hover:border-imperial-gold-500/40 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-3xl">{benefit.emoji}</span>
                    <div className="flex-1">
                      <p className="text-xl text-pearl-white leading-relaxed">{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-silk-crimson-900/30 to-imperial-gold-900/30 rounded-2xl border border-silk-crimson-500/40">
              <blockquote className="text-2xl text-pearl-white font-bold italic border-l-4 border-silk-crimson-500 pl-6">
                "I don't want a fintech app. I want a f**ing weapon."
                <cite className="block text-imperial-gold-300 text-xl mt-4 not-italic">
                  — Carlos, Bulk Coffee Exporter, Colombia
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Visual */}
          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-video bg-gradient-to-br from-ink-black to-imperial-gold-900/20 rounded-3xl p-8 border border-imperial-gold-500/30 overflow-hidden">
              {/* Stress vs Relief Visual */}
              <div className="absolute inset-0 flex flex-col">
                {/* Top Half - Stress */}
                <div className="h-1/2 bg-gradient-to-br from-gray-800 to-red-900/30 flex items-center justify-center border-b border-silk-crimson-500/50">
                  <div className="text-center">
                    <p className="text-red-400 font-bold text-lg mb-2">Peak Stress</p>
                    <p className="text-gray-300 text-sm">Staring at failed transactions</p>
                  </div>
                </div>
                
                {/* Bottom Half - Relief */}
                <div className="h-1/2 bg-gradient-to-br from-silk-crimson-900/20 to-imperial-gold-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-imperial-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                      <span className="text-xl text-imperial-gold-400">✓</span>
                    </div>
                    <p className="text-imperial-gold-400 font-bold">Success</p>
                    <p className="text-silk-crimson-300 text-sm">Relief. Flow. Power.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
