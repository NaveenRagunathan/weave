import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [liveCounter, setLiveCounter] = useState(1200000000);
  const [currency, setCurrency] = useState("USD");
  const [userLocale, setUserLocale] = useState("en-US");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data.currency || "USD");
        const languages = data.languages;
        if (typeof languages === "string" && languages.length > 0) {
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
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 50000) + 10000);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(liveTimer);
    };
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(userLocale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-ink-black px-4 pt-12 pb-14 z-0">
      {/* Background video with heavier blur */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <video
          className="w-full h-full object-cover brightness-[.50] contrast-125 blur-[5px] transition-opacity duration-1000"
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
        {/* Mood overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-black/96 via-ink-black/70 to-silk-crimson-600/40" />
      </div>
      {/* Live Counter - sleeker, smaller on mobile, premium badge */}
      <div className="flex flex-col items-center gap-2 mb-10 w-full">
        <div
          className={`
            inline-flex items-center gap-2 bg-ink-black/60 backdrop-blur-[2px] border 
            border-imperial-gold-400/25 shadow-gold-glow rounded-full
            px-5 py-1.5
            sm:px-8 sm:py-3
            text-xs sm:text-base font-medium animate-fade-in
            min-h-[32px] sm:min-h-[45px]
            transition-all
          `}
          style={{
            boxShadow: "0 0 0 1px rgba(212,181,38,0.10)",
          }}
        >
          <div className="w-2 h-2 bg-imperial-gold-400 rounded-full animate-pulse" />
          <span className="text-imperial-gold-400 font-semibold text-[1rem] sm:text-lg" style={{ fontWeight: 600 }}>
            Live Capital Moved
          </span>
          <span
            className="text-pearl-white font-extrabold text-[1.05rem] sm:text-2xl md:text-2xl font-mono animate-count-up ml-2"
            aria-live="polite"
            aria-label={`Live counter showing ${formatCurrency(liveCounter)} moved`}
            style={{
              letterSpacing: "0.01em",
              fontWeight: 800,
            }}
          >
            {formatCurrency(liveCounter)}+
          </span>
        </div>
      </div>
      {/* Main Headline Premium */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h1
          className="prose prose-invert prose-lg text-[2.2rem] sm:text-5xl md:text-7xl lg:text-7xl leading-tight font-serif tracking-tight mb-8 sm:mb-10 drop-shadow-[0_3px_18px_rgba(220,20,60,0.13)] text-balance"
          style={{ fontFamily: "'Harnet Serif', serif", fontWeight: 800, letterSpacing: "-1px" }}
        >
          <span className="block bg-gradient-to-b from-pearl-white to-pearl-white/80 bg-clip-text text-transparent animate-slide-in-left font-extrabold">
            Borders were made for maps,<br className="hidden md:inline" />
            Not your money.
          </span>
        </h1>
        <div
          className="prose prose-invert text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight mb-6 sm:mb-8 animate-slide-in-right text-balance"
          style={{ fontWeight: 600 }}
        >
          <span className="block w-full mb-2 sm:mb-3">
            <span className="text-imperial-gold-400 font-extrabold drop-shadow-sm">Trade freely, Build boldly,</span>
            <br className="hidden sm:block" />
            <span>
              <span className="text-imperial-gold-400 font-bold">Move capital</span>
              <span className="text-pearl-white font-bold">{' '}and{' '}</span>
              <span className="text-silk-crimson-400 font-black">Increase your Wealth</span>
              <span className="text-pearl-white font-bold">{' '}easily like you want to.</span>
            </span>
          </span>
        </div>
        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-600 hover:from-silk-crimson-500 hover:to-imperial-gold-400 text-pearl-white font-extrabold tracking-wide px-10 py-5 rounded-full shadow-lg shadow-silk-crimson-400/20 border-2 border-imperial-gold-400/15 hover:scale-105 text-lg gap-3 flex items-center transition-all duration-300"
          >
            Open your Free WEAVE Account &rarr;
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-imperial-gold-500 text-imperial-gold-400 hover:bg-imperial-gold-400/15 hover:text-imperial-gold-600 px-10 py-5 rounded-full font-semibold backdrop-blur-sm text-lg gap-3 flex items-center transition"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch How It Works
          </Button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-1 h-10 bg-gradient-to-b from-imperial-gold-400 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
