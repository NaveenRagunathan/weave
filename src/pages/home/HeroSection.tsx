import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Play, ArrowRight, ChevronsDown } from 'lucide-react';
import PremiumButton from '@/components/ui/PremiumButton';
import HeroMapIllustration from '@/components/ui/HeroMapIllustration';
import AnimatedGrid from '../../components/ui/AnimatedGrid';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink-black flex flex-col items-center">
      <HeroMapIllustration className="absolute inset-0 w-full h-full object-cover scale-125 blur-3xl opacity-10" />
      <AnimatedGrid />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/80 to-transparent z-0" />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center w-full h-full px-4 pt-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Spacer to push content from the top, creating a centered feel in the upper part */}
        <div className="flex-grow" />

        {/* Main Content Block */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="mb-6 bg-gray-800/50 backdrop-blur-sm text-pearl-white/80 px-6 py-2 rounded-full text-sm font-medium border border-imperial-gold-300/30 shadow-lg shadow-imperial-gold-300/20 transition-all duration-300 hover:shadow-imperial-gold-300/40 hover:scale-105"
            variants={itemVariants}
          >
            Borders were made for maps, <span className="text-imperial-gold-300">Not your money.</span>
          </motion.div>

          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold text-pearl-white tracking-tighter text-balance drop-shadow-2xl bg-gradient-to-b from-pearl-white to-pearl-white/70 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Money without borders.
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl text-imperial-gold-300 font-medium"
            variants={itemVariants}
          >
            Send and Recieve Money globally faster, better and for lesser fees.
          </motion.p>

          <motion.div 
            className="mt-8 max-w-3xl text-lg md:text-xl text-pearl-white text-center flex flex-col items-center gap-y-6"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
            }}
          >
            <motion.p variants={itemVariants} className="max-w-2xl text-pearl-white/90">
              Gain the power to Move money instantly across the countries you run business and Increase your Wealth easily like you want to.
            </motion.p>
            
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
              <p className="mb-3 text-sm font-medium text-pearl-white/60">With...</p>
              <div className="flex flex-wrap justify-center gap-3 text-center text-base font-semibold">
                <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-imperial-gold-300 backdrop-blur-sm">No banks</span>
                <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-imperial-gold-300 backdrop-blur-sm">No delays</span>
                <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-imperial-gold-300 backdrop-blur-sm">No losses</span>
                <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-imperial-gold-300 backdrop-blur-sm">No stress</span>
                <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-imperial-gold-300 backdrop-blur-sm">No gatekeepers</span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-pearl-white font-bold text-2xl tracking-wide pt-4 drop-shadow-lg">
              Just pure financial velocity.
            </motion.p>
          </motion.div>
        </div>

        {/* Spacer to push CTAs down */}
        <div className="flex-grow-[2]" />

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row items-center gap-4" variants={itemVariants}>
          <PremiumButton size="lg" className="font-semibold px-8 py-2">
            Start Moving Money →
          </PremiumButton>
          <button className="flex items-center gap-2 px-8 py-2 font-semibold text-silk-crimson-500 bg-white rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md">
            <Play className="h-5 w-5" />
            <span>Watch How It Works</span>
          </button>
        </motion.div>

        {/* Spacer to push arrow to the bottom */}
        <div className="flex-grow" />

        {/* Bouncing Arrow */}
        <motion.div 
          className="mb-4 text-imperial-gold-300 animate-bounce drop-shadow-[0_2px_5px_rgba(252,191,73,0.5)]"
          variants={itemVariants}
        >
          <ChevronsDown className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
