
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe, Lock } from 'lucide-react';

const USDCSection = () => {
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
      icon: Shield,
      title: 'Fully Regulated',
      description: 'Audited monthly. Backed 1:1 with U.S. dollars in U.S. banks.'
    },
    {
      icon: Zap,
      title: 'Final & Fast',
      description: 'No rollbacks. No 72-hour maybes. Just money—settled.'
    },
    {
      icon: Globe,
      title: 'Globally Liquid',
      description: 'Accepted across the Global South. No conversion headaches.'
    },
    {
      icon: Lock,
      title: 'Rock-Solid Trust',
      description: 'No funny business. Just the safest rails in digital finance.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-ink-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-8">
            USDC: The Dollar, Reborn for 
            <br />
            <span className="text-silk-crimson-400">This Century</span>
          </h2>
          <p className="text-2xl md:text-3xl text-imperial-gold-400 font-bold mb-6">
            A Stablecoin You Can Bet Your Business On.
          </p>
          
          {/* USDC Logo & Tagline */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">$</span>
            </div>
            <h3 className="text-2xl font-bold text-pearl-white">
              Powering WEAVE with Trust You Can Count.
            </h3>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            In a world where capital must move fast and stay safe WEAVE runs on USDC.
            <br />
            Because in cross-border trade, you don't gamble with your money.
          </p>
        </div>

        {/* Trust Message */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <h3 className="text-3xl md:text-4xl font-black text-imperial-gold-400 mb-6">
            In Trade, Trust Is the Real Currency.
          </h3>
          <div className="space-y-4 text-xl text-pearl-white max-w-3xl mx-auto">
            <p>Money dies in uncertainty.</p>
            <p>Deals evaporate in FX limbo.</p>
            <p>And growth bleeds out when capital crawls.</p>
            <p className="text-silk-crimson-400 font-bold mt-6">
              That's why WEAVE is built on USDC — the most trusted digital dollar in the world.
            </p>
            <p className="text-imperial-gold-400 font-bold">
              Not just stable, <span className="text-pearl-white">Respected, Audited & Regulated.</span>
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-bold text-silk-crimson-400 text-center mb-12">
            🎯 Why USDC Moves Mountains:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="p-8 bg-gradient-to-br from-silk-crimson-900/20 to-imperial-gold-900/20 rounded-2xl border border-silk-crimson-500/30 hover:border-silk-crimson-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-silk-crimson-500 to-imperial-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-pearl-white mb-2">✅ {benefit.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Message */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="space-y-6 text-xl text-pearl-white max-w-4xl mx-auto">
            <p>The old dollar was built for banks.</p>
            <p className="text-silk-crimson-400 font-bold text-2xl">
              USDC was built for builders.
            </p>
            <p className="text-imperial-gold-400 font-bold text-xl mt-8">
              💼 This isn't crypto hype. It's modern money.
            </p>
            <p className="text-pearl-white">
              It's how WEAVE powers serious trade and it is the engine that will build your Business Empire.
            </p>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className={`mb-12 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="relative aspect-video bg-gradient-to-br from-ink-black to-blue-900/20 rounded-3xl p-8 border border-blue-500/30 overflow-hidden">
            <div className="text-center flex items-center justify-center h-full">
              <div>
                <p className="text-blue-400 text-xl font-semibold mb-4">
                  📽 Background Video Suggestion:
                </p>
                <p className="text-pearl-white/80 max-w-2xl">
                  A sleek loop of digital dollars moving through glowing tunnels, overlaid with real footage of warehouses, 
                  market deals, factory gates opening, and phones lighting up with "Payment Received – $143,210 USDC".
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-silk-crimson-600 hover:from-blue-700 hover:to-silk-crimson-700 text-white px-10 py-5 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group border border-imperial-gold-400/30"
          >
            Experience the USDC Advantage
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 text-imperial-gold-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default USDCSection;
