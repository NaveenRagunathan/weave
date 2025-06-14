
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WeaponSection = () => {
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

  const comparisons = [
    {
      without: '3–5 day wires',
      with: 'Same-day confirmations'
    },
    {
      without: '6–15% FX loss',
      with: '0–1% FX loss (stablecoin)'
    },
    {
      without: 'Third-party brokers',
      with: 'Corridor-native automation'
    },
    {
      without: 'Bank suspicion',
      with: 'Instant trust frameworks'
    },
    {
      without: 'Stress, guessing',
      with: 'Clarity. Confidence. Flow.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-ink-black via-gray-900 to-ink-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-6">
            Meet WEAVE: Built for 
            <br />
            <span className="text-silk-crimson-400">Real Traders</span>
          </h2>
          <p className="text-2xl md:text-3xl text-imperial-gold-400 font-bold mb-4">
            Not a Wallet. A Weapon.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Stablecoin rails. Corridor-specific logic. Compliance embedded. All built for the Global South.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-br from-ink-black to-gray-900 rounded-3xl border border-silk-crimson-500/30 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-silk-crimson-900/40 to-imperial-gold-900/40 p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-pearl-white">What Changes with WEAVE</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-red-400">Without WEAVE</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-silk-crimson-400">With WEAVE</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-silk-crimson-500/20">
              {comparisons.map((comparison, index) => (
                <div key={index} className="grid grid-cols-3 p-6 hover:bg-silk-crimson-900/10 transition-colors duration-300">
                  <div></div>
                  <div className="text-center">
                    <p className="text-lg text-red-400 font-medium">{comparison.without}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-silk-crimson-400 font-medium">{comparison.with}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-silk-crimson-600 to-silk-crimson-700 hover:from-silk-crimson-700 hover:to-silk-crimson-800 text-white px-10 py-5 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group border border-imperial-gold-400/30"
          >
            Start Using WEAVE — It's Free
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 text-imperial-gold-300" />
          </Button>
        </div>

        {/* Background Animation Placeholder */}
        <div className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="relative aspect-video bg-gradient-to-br from-ink-black to-silk-crimson-900/20 rounded-3xl p-8 border border-silk-crimson-500/30 overflow-hidden">
            <div className="text-center flex items-center justify-center h-full">
              <div>
                <p className="text-silk-crimson-400 text-xl font-semibold mb-4">
                  Neon-glow Corridor Map Animation
                </p>
                <p className="text-pearl-white/80">
                  Accra → Shenzhen → São Paulo → Nairobi
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  {['Accra', 'Shenzhen', 'São Paulo', 'Nairobi'].map((city, index) => (
                    <div 
                      key={city} 
                      className="w-3 h-3 bg-silk-crimson-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponSection;
