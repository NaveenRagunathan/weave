
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
          background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.5) 50%, transparent 100%)',
          minHeight: '200px'
        };
      case 'portal':
        return {
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          minHeight: '300px'
        };
      case 'reveal':
        return {
          background: 'linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.05) 50%, transparent 100%)',
          minHeight: '150px'
        };
      case 'transform':
        return {
          background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
          minHeight: '250px'
        };
      default:
        return { minHeight: '100px' };
    }
  };

  return (
    <div 
      ref={transitionRef}
      className={`relative overflow-hidden transition-all duration-1000 ${className}`}
      style={getTransitionStyles()}
    >
      {/* Animated Flow Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        <defs>
          <linearGradient id={`flow-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.4)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
          </linearGradient>
        </defs>
        
        {/* Flow Path */}
        <path
          d="M0,50 Q50,25 100,50 T200,50"
          stroke={`url(#flow-${type})`}
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,4"
          className={`transition-all duration-1000 ${
            isInView ? 'animate-marching-ants opacity-100' : 'opacity-30'
          }`}
          transform="scale(5)"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default SectionTransition;
