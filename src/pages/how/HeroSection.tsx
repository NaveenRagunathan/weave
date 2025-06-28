import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component from shadcn/ui

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "circOut", // Changed to a valid ease function
      },
    },
  };

  return (
    <motion.div
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white text-blue-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        {/* Simulating a world map with gradients and dots */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 opacity-50"></div>
        
        {/* Animated Pulses for Cities */}
        <div className="absolute top-1/2 left-1/4 h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
        <div className="absolute top-1/3 left-2/3 h-2 w-2 rounded-full bg-blue-500 animate-pulse [animation-delay:0.5s]"></div>
        <div className="absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-blue-400 animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-1/3 right-1/4 h-2 w-2 rounded-full bg-blue-500 animate-pulse [animation-delay:1.5s]"></div>

        {/* Animated Neon Trade Routes (SVG lines) */}
        <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="xMidYMid slice">
          <motion.line
            x1="25%" y1="50%" x2="66%" y2="33%"
            stroke="url(#blue-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line
            x1="50%" y1="75%" x2="75%" y2="66%"
            stroke="url(#blue-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
           <defs>
            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          variants={itemVariants}
        >
          WEAVE is the future of Trade for Business Owners and Governments Across the Global South
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl font-sans text-lg md:text-xl text-blue-700"
          variants={itemVariants}
        >
          From Nairobi to São Paulo, Accra to Jakarta — your markets are alive. But your money still moves like it’s 1993.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Learn How
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
