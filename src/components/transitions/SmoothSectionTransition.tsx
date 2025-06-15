
import React from 'react';
import { motion } from 'framer-motion';

interface SmoothSectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const SmoothSectionTransition: React.FC<SmoothSectionTransitionProps> = ({
  children,
  className = ''
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
      
      {/* Subtle gradient overlay for seamless blending */}
      <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-ink-black/20 pointer-events-none" />
      <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-ink-black/20 pointer-events-none" />
    </motion.div>
  );
};

export default SmoothSectionTransition;
