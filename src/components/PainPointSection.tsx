
import React, { useState, useRef, useEffect } from 'react';
import { Clock, DollarSign, Users, AlertTriangle } from 'lucide-react';

const PainPointSection = () => {
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

  const painPoints = [
    { 
      icon: Clock, 
      text: 'Your payment took 5 days and the rate changed.', 
      emoji: '❌'
    },
    { 
      icon: Users, 
      text: 'Your supplier ghosted because funds didn\'t clear.', 
      emoji: '❌'
    },
    { 
      icon: DollarSign, 
      text: 'You lost 9% in FX on a 6-figure deal.', 
      emoji: '❌'
    },
    { 
      icon: AlertTriangle, 
      text: 'You had to trust a broker you barely know.', 
      emoji: '❌'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-ink-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-6">
            If You've Ever Tried to 
            <br />
            <span className="text-silk-crimson-400">Move Money Across Borders...</span>
          </h2>
          <p className="text-3xl md:text-4xl text-imperial-gold-400 font-bold mb-8">
            You already know the pain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pain Points List */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-silk-crimson-900/20 to-transparent rounded-xl border border-silk-crimson-500/20 hover:border-silk-crimson-500/40 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="text-3xl">{point.emoji}</span>
                    <div className="flex-1">
                      <p className="text-xl text-pearl-white leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-silk-crimson-900/30 to-imperial-gold-900/20 rounded-2xl border border-silk-crimson-500/30">
              <p className="text-2xl text-pearl-white font-bold mb-4">
                This isn't inconvenience. It's <span className="text-silk-crimson-400">erosion</span>.
              </p>
              <blockquote className="text-xl text-imperial-gold-300 italic border-l-4 border-imperial-gold-500 pl-6 mt-6">
                "We lost a $200K opportunity because of a delayed FX confirmation."
                <cite className="block text-pearl-white/80 text-lg mt-3 not-italic">
                  — Nana, Timber Exporter, Ghana
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-video bg-gradient-to-br from-ink-black to-silk-crimson-900/30 rounded-3xl p-8 border border-silk-crimson-500/30 overflow-hidden">
              {/* Split Screen Effect */}
              <div className="absolute inset-0 flex">
                {/* Failed Transfer Side */}
                <div className="w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-r border-silk-crimson-500/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-red-400" />
                    </div>
                    <p className="text-red-400 font-semibold">Failed Wire</p>
                    <p className="text-gray-400 text-sm mt-2">5 days pending...</p>
                  </div>
                </div>
                
                {/* WEAVE Success Side */}
                <div className="w-1/2 bg-gradient-to-br from-silk-crimson-900/20 to-imperial-gold-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-silk-crimson-500/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <span className="text-2xl">✓</span>
                    </div>
                    <p className="text-silk-crimson-400 font-semibold">WEAVE Transfer</p>
                    <p className="text-imperial-gold-400 text-sm mt-2">Confirmed in seconds</p>
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

export default PainPointSection;
