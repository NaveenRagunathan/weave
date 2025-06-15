
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGlobe = () => {
  const tradeRoutes = [
    { from: [20, 30], to: [60, 70], delay: 0 },
    { from: [40, 20], to: [80, 60], delay: 1 },
    { from: [10, 60], to: [70, 40], delay: 2 },
    { from: [30, 80], to: [90, 20], delay: 3 },
  ];

  const cities = [
    { x: 20, y: 30, name: "New York", size: 4 },
    { x: 60, y: 70, name: "Shanghai", size: 5 },
    { x: 40, y: 20, name: "London", size: 3 },
    { x: 80, y: 60, name: "Singapore", size: 4 },
    { x: 10, y: 60, name: "São Paulo", size: 3 },
    { x: 70, y: 40, name: "Dubai", size: 4 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <svg
        width="800"
        height="400"
        viewBox="0 0 100 50"
        className="w-full h-full max-w-4xl"
      >
        {/* World Map Outline */}
        <motion.path
          d="M10 25 Q20 20 30 22 Q40 18 50 25 Q60 20 70 23 Q80 18 90 25"
          stroke="rgba(212, 175, 55, 0.3)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Trade Routes */}
        {tradeRoutes.map((route, index) => (
          <motion.line
            key={index}
            x1={route.from[0]}
            y1={route.from[1]}
            x2={route.to[0]}
            y2={route.to[1]}
            stroke="rgba(220, 20, 60, 0.8)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 1, 0] 
            }}
            transition={{
              duration: 4,
              delay: route.delay,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
        
        {/* City Nodes */}
        {cities.map((city, index) => (
          <motion.circle
            key={city.name}
            cx={city.x}
            cy={city.y}
            r={city.size}
            fill="rgba(212, 175, 55, 0.8)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{
              duration: 2,
              delay: index * 0.3,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))}
        
        {/* Pulsing Effects */}
        {cities.map((city, index) => (
          <motion.circle
            key={`pulse-${city.name}`}
            cx={city.x}
            cy={city.y}
            r={city.size}
            fill="none"
            stroke="rgba(220, 20, 60, 0.4)"
            strokeWidth="0.5"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
              scale: [1, 3, 1], 
              opacity: [0.8, 0, 0.8] 
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedGlobe;
