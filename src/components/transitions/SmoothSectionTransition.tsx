
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothSectionTransition;
