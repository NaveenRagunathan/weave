
import React, { useState, useRef, useEffect } from 'react';

interface SectionTransitionProps {
  type: 'bridge' | 'portal' | 'reveal' | 'transform';
  fromSection: string;
  toSection: string;
  children?: React.ReactNode;
  className?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  type,
  fromSection,
  toSection,
  children,
  className = ''
}) => {
  const [isInView, setIsInView] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (transitionRef.current) {
      observer.observe(transitionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransitionStyles = () => {
    switch (type) {
      case 'bridge':
        return {
          background: 'linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.02) 50%, transparent 100%)',
          minHeight: '120px'
        };
      case 'portal':
        return {
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.03) 0%, transparent 70%)',
          minHeight: '150px'
        };
      case 'reveal':
        return {
          background: 'linear-gradient(180deg, transparent 0%, rgba(245, 158, 11, 0.02) 50%, transparent 100%)',
          minHeight: '100px'
        };
      case 'transform':
        return {
          background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%)',
          minHeight: '130px'
        };
      default:
        return { minHeight: '80px' };
    }
  };

  return (
    <div 
      ref={transitionRef}
      className={`relative overflow-hidden transition-all duration-1000 ${className}`}
      style={getTransitionStyles()}
    >
      {/* Subtle Particle Effect */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-jade-flow-400/30 rounded-full transition-all duration-2000 ${
              isInView ? 'opacity-100 animate-gentle-float' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-ink-black/20 to-transparent" />
    </div>
  );
};

export default SectionTransition;
