
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [liveCounter, setLiveCounter] = useState(1200000000);
  const [currency, setCurrency] = useState("USD");
  const [userLocale, setUserLocale] = useState("en-US");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data.currency || "USD");
        const languages = data.languages;
        if (typeof languages === 'string' && languages.length > 0) {
          setUserLocale(languages.split(",")[0] || "en-US");
        } else {
          setUserLocale("en-US");
        }
      })
      .catch(() => {
        setCurrency("USD");
        setUserLocale("en-US");
      });
  }, []);

  useEffect(() => {
    const startValue = 1200000000;
    const endValue = 1289000000;
    const duration = 2000;
    const increment = (endValue - startValue) / (duration / 16);
    let current = startValue;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setLiveCounter(endValue);
        clearInterval(timer);
      } else {
        setLiveCounter(Math.floor(current));
      }
    }, 16);

    const liveTimer = setInterval(() => {
      setLiveCounter(prev => prev + Math.floor(Math.random() * 50000) + 10000);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(liveTimer);
    };
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(userLocale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="weave-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d1c9a87a9a&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black/85 via-transparent to-ink-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-black/20 to-ink-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Counter Badge */}
        <div className="inline-flex items-center gap-2 bg-ink-black/60 backdrop-blur-sm border border-silk-crimson-500/40 rounded-full px-6 py-3 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-silk-crimson-400 rounded-full animate-pulse" />
          <span className="text-silk-crimson-300 text-sm font-medium">Live Capital Moved</span>
          <span 
            className="text-pearl-white text-lg font-bold animate-count-up"
            aria-live="polite"
            aria-label={`Live counter showing ${formatCurrency(liveCounter)} moved`}
          >
            {formatCurrency(liveCounter)}+
          </span>
        </div>

        {/* Main Headlines */}
        <div className="space-y-8 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            <span className="block animate-slide-in-left text-pearl-white">
              Borders were made for maps,
            </span>
            <span className="block animate-slide-in-right text-gray-300 mt-2" style={{ animationDelay: '0.3s' }}>
              Not your money.
            </span>
            <span className="block animate-slide-in-left mt-4" style={{ animationDelay: '0.6s' }}>
              <span className="text-pearl-white">Trade freely, </span>
              <span className="bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-500 to-silk-crimson-600 bg-clip-text text-transparent">Build boldly,</span>
            </span>
            <span className="block animate-slide-in-right text-pearl-white mt-2" style={{ animationDelay: '0.9s' }}>
              Move capital and Increase your 
              <span className="bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-500 to-silk-crimson-600 bg-clip-text text-transparent ml-3">Wealth</span>
            </span>
            <span className="block animate-slide-in-left text-pearl-white mt-2" style={{ animationDelay: '1.2s' }}>
              easily like you want to.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1.5s' }}>
            WEAVE gives traders, builders, entrepreneurs and Government Institutions in the Global South the power to send, receive, and protect capital — 
            <span className="block mt-3 text-silk-crimson-300 font-semibold">without banks, borders, or permission.</span>
            <span className="block mt-2 text-imperial-gold-300 font-bold">No delays. No losses. No gatekeepers. Just pure financial velocity.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-silk-crimson-600 to-silk-crimson-700 hover:from-silk-crimson-700 hover:to-silk-crimson-800 text-white px-10 py-5 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group border border-imperial-gold-400/30"
            onClick={() => console.log('Primary CTA clicked')}
          >
            Open your Free WEAVE Account
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 text-imperial-gold-300" />
          </Button>
          
          <Button 
            size="lg"
            className="bg-pearl-white/10 text-pearl-white border-2 border-silk-crimson-400/40 hover:bg-pearl-white/20 hover:border-silk-crimson-400/60 px-10 py-5 text-xl font-semibold rounded-full backdrop-blur-sm transition-all duration-300 group"
            onClick={() => console.log('Secondary CTA clicked')}
          >
            <Play className="mr-3 h-6 w-6" />
            Watch How It Works
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-10 bg-gradient-to-b from-silk-crimson-400 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
