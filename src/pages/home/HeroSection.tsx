
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import PremiumButton from "@/components/ui/PremiumButton";
import HeroMapIllustration from "@/components/ui/HeroMapIllustration";

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

  const [showSub, setShowSub] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setShowSub(true);
      else setShowSub(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-ink-black px-4 pt-24 pb-14 z-0">
      {/* Main Heading & Above-the-fold Content */}
      <div className="flex flex-col items-center gap-6 w-full">
        <motion.h1
          className="text-[4rem] sm:text-8xl md:text-9xl leading-[1.05] font-serif font-black tracking-tighter drop-shadow-[0_8px_36px_rgba(220,20,60,0.18)] text-balance text-pearl-white text-center mb-2"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Money without borders.
        </motion.h1>
        <motion.div
          className="max-w-2xl mx-auto text-2xl md:text-3xl font-semibold text-pearl-white/90 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          Send Money globally faster, better and for lesser.
        </motion.div>
        <motion.div
          className="flex flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <HeroMapIllustration className="w-12 h-12 md:w-16 md:h-16 mr-2" />
          <span className="text-xl md:text-2xl font-semibold text-pearl-white/90">
            Borders were made for maps, <span className="text-silk-crimson-400 font-bold">Not your money.</span>
          </span>
        </motion.div>
      </div>

      {/* Subheadings & CTA, revealed on scroll */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto z-10 flex flex-col items-center justify-center min-h-[40vh] md:min-h-[40vh] mt-12"
        initial={{ opacity: 0, y: 60 }}
        animate={showSub ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-3xl mx-auto text-center text-pearl-white/90 text-2xl md:text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-imperial-gold-400 via-pearl-white/60 to-silk-crimson-400 bg-clip-text text-transparent font-extrabold">
            Gain the power to Move capital instantly across the Global South.
          </span>
          <br />and Increase your Wealth easily like you want to — <span className="text-imperial-gold-400 font-bold">no banks, no delays, no losses, no stress.</span>
        </div>
        <div className="max-w-2xl text-lg md:text-xl font-normal text-pearl-white/70 mb-6">
          WEAVE gives You the power to send, receive, and protect your Money — without depending on banks, borders, or permission.<br />
          <span className="block mt-1 text-pearl-white/60">No delays. No losses. No gatekeepers. Just pure financial velocity.</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-4">
          <PremiumButton size="default" className="text-lg px-8 py-4" onClick={() => console.log('Primary CTA clicked')}>
            Start moving Money with Weave→
          </PremiumButton>
          <motion.button
            className="inline-flex items-center justify-center gap-3 px-7 py-4 text-lg font-semibold tracking-wider transition-all duration-300 rounded-full border-2 bg-pearl-white hover:bg-pearl-white/90 text-silk-crimson-500 border-pearl-white/20 backdrop-blur-md shadow-lg"
            onClick={() => console.log('Secondary CTA clicked')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ boxShadow: '0 5px 22px rgba(248, 248, 255, 0.13)' }}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch How It Works
          </motion.button>
        </div>
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
