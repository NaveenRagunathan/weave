
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import PremiumButton from "@/components/ui/PremiumButton";
import AnimatedGlobe from "@/components/ui/AnimatedGlobe";

const HeroSection = () => {
  const [liveCounter, setLiveCounter] = useState(1200000000);
  const [currency, setCurrency] = useState("USD");
  const [userLocale, setUserLocale] = useState("en-US");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-ink-black px-4 pt-24 pb-14 z-0">
      {/* Background video with reduced effects for performance */}
      <motion.div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ y }}
      >
        <video
          className="w-full h-[120%] object-cover brightness-[.50] contrast-110 transition-opacity duration-1000"
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
        <div className="absolute inset-0 bg-gradient-to-br from-ink-black/96 via-ink-black/70 to-silk-crimson-600/40" />
      </motion.div>

      {/* Animated Globe Background - Reduced complexity */}
      <AnimatedGlobe />

      {/* Live Counter - Now properly positioned below navbar */}
      <motion.div 
        className="flex flex-col items-center gap-2 mb-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-ink-black/60 backdrop-blur-sm border border-imperial-gold-400/25 rounded-full px-4 py-2 text-xs font-medium transition-all"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 8px 25px rgba(212, 175, 55, 0.2)"
          }}
          style={{
            boxShadow: "0 0 0 1px rgba(212,181,38,0.10)",
          }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-imperial-gold-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-imperial-gold-400 font-semibold text-sm">
            Live Capital Moved
          </span>
          <motion.span
            className="text-pearl-white font-extrabold text-base font-mono ml-2"
            key={liveCounter}
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              letterSpacing: "0.01em",
              fontWeight: 800,
            }}
          >
            {formatCurrency(liveCounter)}+
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Main Content with optimized animations */}
      <motion.div 
        className="relative max-w-5xl mx-auto text-center z-10"
        style={{ opacity }}
      >
        <motion.h1
          className="text-[2.2rem] sm:text-5xl md:text-7xl leading-tight font-serif font-extrabold tracking-tighter mb-6 drop-shadow-[0_3px_18px_rgba(220,20,60,0.13)] text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.span 
            className="block bg-gradient-to-b from-pearl-white to-pearl-white/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Borders were made for maps,<br className="hidden md:inline" />
            Not your money.
          </motion.span>
        </motion.h1>
        
        <motion.div
          className="text-lg md:text-2xl font-semibold leading-snug mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p 
            className="text-imperial-gold-400 font-extrabold drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Trade freely. Build boldly.
          </motion.p>
          <motion.p 
            className="mt-1 text-pearl-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Move capital and <span className="text-silk-crimson-400 font-black">Increase your Wealth</span>
          </motion.p>
          <motion.p 
            className="mt-1 text-pearl-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            easily like you want to.
          </motion.p>
        </motion.div>
        
        <motion.p 
          className="prose prose-invert text-sm sm:text-base text-pearl-white/80 font-normal mb-8 max-w-2xl mx-auto leading-relaxed font-sans text-balance"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          WEAVE gives traders, builders, entrepreneurs and government institutions in the Global South the power to send, receive, and protect capital —{" "}
          <span className="text-silk-crimson-400 font-semibold">without banks, borders, or permission.</span>
        </motion.p>
        
        {/* Smaller, better-proportioned CTAs */}
        <motion.div 
          className="flex flex-col gap-4 sm:flex-row justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <PremiumButton 
            variant="primary" 
            size="default"
            onClick={() => console.log('Primary CTA clicked')}
          >
            Open your Free WEAVE Account →
          </PremiumButton>
          
          {/* Custom white button with red text */}
          <motion.button
            className="inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold tracking-wider transition-all duration-300 rounded-full border-2 bg-pearl-white hover:bg-pearl-white/90 text-silk-crimson-500 border-pearl-white/20 backdrop-blur-md"
            onClick={() => console.log('Secondary CTA clicked')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 5px 15px rgba(248, 248, 255, 0.1)"
            }}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch How It Works
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Simplified scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        <motion.div 
          className="w-1 h-10 bg-gradient-to-b from-imperial-gold-400 to-transparent rounded-full"
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
