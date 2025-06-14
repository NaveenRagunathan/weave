
import React, { useState, useRef, useEffect } from 'react';

interface FlowLineSystemProps {
  pattern: 'smooth' | 'disrupted' | 'converging' | 'explosive';
  intensity?: 'low' | 'medium' | 'high';
  color?: 'jade' | 'gold' | 'crimson' | 'mixed';
}

const FlowLineSystem: React.FC<FlowLineSystemProps> = ({
  pattern,
  intensity = 'medium',
  color = 'mixed'
}) => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getParticleCount = () => {
    switch (intensity) {
      case 'high': return 20;
      case 'medium': return 12;
      default: return 8;
    }
  };

  const getColorVariant = () => {
    switch (color) {
      case 'jade': return 'bg-jade-flow-400/20';
      case 'gold': return 'bg-imperial-gold-500/20';
      case 'crimson': return 'bg-silk-crimson-400/20';
      default: return 'bg-jade-flow-400/20';
    }
  };

  const getPatternClass = () => {
    switch (pattern) {
      case 'disrupted': return 'animate-pulse-erratic';
      case 'explosive': return 'animate-burst-out';
      case 'converging': return 'animate-converge-in';
      default: return 'animate-gentle-float';
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Atmospheric particles instead of lines */}
      {[...Array(getParticleCount())].map((_, index) => (
        <div
          key={index}
          className={`absolute w-1 h-1 ${getColorVariant()} rounded-full transition-all duration-2000 ${
            isActive ? `opacity-100 ${getPatternClass()}` : 'opacity-0'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Subtle gradient overlay for depth */}
      <div 
        className={`absolute inset-0 transition-opacity duration-2000 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: pattern === 'disrupted' 
            ? 'linear-gradient(45deg, rgba(239, 68, 68, 0.01) 0%, transparent 50%, rgba(239, 68, 68, 0.01) 100%)'
            : 'linear-gradient(45deg, rgba(16, 185, 129, 0.01) 0%, transparent 50%, rgba(16, 185, 129, 0.01) 100%)'
        }}
      />
    </div>
  );
};

export default FlowLineSystem;
