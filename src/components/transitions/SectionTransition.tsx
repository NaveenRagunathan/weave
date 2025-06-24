
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
      { threshold: 0.1 }
    );

    if (transitionRef.current) {
      observer.observe(transitionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransitionOverlay = () => {
    switch (type) {
      case 'bridge':
        return 'bg-gradient-to-b from-transparent via-jade-flow-500/5 to-transparent';
      case 'portal':
        return 'bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent';
      case 'reveal':
        return 'bg-gradient-to-b from-transparent via-brand-blue-500/5 to-transparent';
      case 'transform':
        return 'bg-gradient-to-b from-brand-blue-500/5 via-cool-gray-500/5 to-transparent';
      default:
        return 'bg-transparent';
    }
  };

  return (
    <div 
      ref={transitionRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {/* Invisible atmospheric overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-2000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        } ${getTransitionOverlay()}`}
      />

      {/* Minimal particle system */}
      {isInView && [...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-0.5 h-0.5 bg-jade-flow-400/20 rounded-full transition-all duration-3000 ${
            isInView ? 'opacity-100 animate-gentle-float' : 'opacity-0'
          }`}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default SectionTransition;
