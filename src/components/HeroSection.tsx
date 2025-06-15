import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [liveCounter, setLiveCounter] = useState(1200000000);
  const [currency, setCurrency] = useState("USD");
  const [userLocale, setUserLocale] = useState("en-US");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // New useEffect to fetch currency and locale
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data.currency || "USD");
        // Ensure languages exist and is a string before splitting
        const languages = data.languages;
        if (typeof languages === 'string' && languages.length > 0) {
          setUserLocale(languages.split(",")[0] || "en-US");
        } else {
          setUserLocale("en-US"); // Fallback if languages is not as expected
        }
      })
      .catch(() => {
        // Fallback in case of fetch error
        setCurrency("USD");
        setUserLocale("en-US");
      });
  }, []);

  // Animate counter on mount - existing useEffect
  useEffect(() => {
    const startValue = 1200000000; // Ensure this matches the initial state if needed for animation logic
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

    // Continuous live updates after initial animation
    const liveTimer = setInterval(() => {
      setLiveCounter(prev => prev + Math.floor(Math.random() * 50000) + 10000);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(liveTimer);
    };
  }, []); // This useEffect runs once on mount

  // Updated formatCurrency function
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
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a87a9a&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black/80 via-transparent to-ink-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-black/10 to-ink-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Counter Badge */}
        <div className="inline-flex items-center gap-2 bg-ink-black/50 backdrop-blur-sm border border-imperial-gold-500/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-imperial-gold-400 rounded-full animate-pulse" />
          <span className="text-imperial-gold-300 text-sm font-medium">Live Capital Moved</span>
          <span 
            className="text-pearl-white text-lg font-bold animate-count-up"
            aria-live="polite"
            aria-label={`Live counter showing ${formatCurrency(liveCounter)} moved`}
          >
            {formatCurrency(liveCounter)}+
          </span>
        </div>

        {/* Main Headlines */}
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block animate-slide-in-left text-pearl-white">
              Move money easily
            </span>
            <span className="block animate-slide-in-right bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-500 to-silk-crimson-600 bg-clip-text text-transparent mt-2" style={{ animationDelay: '0.3s' }}>
              and build Empires
            </span>
            <span className="block animate-slide-in-left text-pearl-white mt-2" style={{ animationDelay: '0.6s' }}>
              across borders.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s' }}>
            WEAVE is the new financial backbone for cross-border trade between China and the Global South. 
            <span className="block mt-2 text-imperial-gold-300 font-semibold"> No banks. No delays. No losses. Just unstoppable economic flow.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Button 
            size="lg"
            className="bg-silk-crimson-600 hover:bg-silk-crimson-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => console.log('Primary CTA clicked')}
          >
            Create Your Account
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-imperial-gold-400" />
          </Button>
          
          <Button 
            size="lg"
            className="bg-pearl-white/10 text-pearl-white border-2 border-pearl-white/20 hover:bg-pearl-white/20 hover:border-pearl-white/40 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 group"
            onClick={() => console.log('Secondary CTA clicked')}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Product Demo
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-imperial-gold-400 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
