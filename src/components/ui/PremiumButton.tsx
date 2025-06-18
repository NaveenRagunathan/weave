
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  className?: string;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  const baseClasses = cn(
    "relative overflow-hidden font-semibold tracking-wider transition-all duration-300 rounded-full border-2 flex items-center justify-center gap-3",
    size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base',
    variant === 'primary' 
      ? 'bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-600 hover:from-silk-crimson-500 hover:to-imperial-gold-400 text-pearl-white border-imperial-gold-400/15' 
      : 'bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md',
    className
  );

  return (
    <motion.button
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: variant === 'primary' 
          ? isHovered 
            ? '0 15px 30px rgba(220, 20, 60, 0.25), 0 0 15px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 8px 20px rgba(220, 20, 60, 0.2), 0 0 10px rgba(212, 175, 55, 0.25)'
          : isHovered
            ? '0 8px 25px rgba(248, 248, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            : '0 5px 15px rgba(248, 248, 255, 0.05)'
      }}
    >
      {/* Simplified gradient overlay animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-pearl-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      
      {/* Simplified ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ width: 0, height: 0, x: '-50%', y: '-50%' }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      ))}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default PremiumButton;
