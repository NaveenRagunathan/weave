
import React, { useState, useRef, useEffect } from 'react';

interface TensionBuilderProps {
  type: 'stress' | 'relief' | 'breakthrough' | 'buildup';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
  className?: string;
}

const TensionBuilder: React.FC<TensionBuilderProps> = ({
  type,
  intensity = 'medium',
  children,
  className = ''
}) => {
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTensionStyles = () => {
    const baseIntensity = {
      low: { scale: '1.005', glow: '5px' },
      medium: { scale: '1.01', glow: '10px' },
      high: { scale: '1.02', glow: '20px' }
    }[intensity];

    switch (type) {
      case 'stress':
        return {
          transform: isActive ? `scale(${baseIntensity.scale})` : 'scale(1)',
          boxShadow: isActive ? `0 0 ${baseIntensity.glow} rgba(239, 68, 68, 0.3)` : 'none',
          transition: 'all 2s ease-in-out'
        };
      case 'relief':
        return {
          transform: isActive ? 'scale(1)' : 'scale(1.02)',
          boxShadow: isActive ? `0 0 ${baseIntensity.glow} rgba(16, 185, 129, 0.4)` : 'none',
          transition: 'all 1.5s ease-out'
        };
      case 'breakthrough':
        return {
          transform: isActive ? `scale(${baseIntensity.scale})` : 'scale(0.98)',
          boxShadow: isActive ? `0 0 ${baseIntensity.glow} rgba(245, 158, 11, 0.5)` : 'none',
          transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        };
      case 'buildup':
        return {
          transform: isActive ? `scale(${baseIntensity.scale})` : 'scale(1)',
          boxShadow: isActive ? `0 0 ${baseIntensity.glow} rgba(16, 185, 129, 0.3)` : 'none',
          transition: 'all 3s ease-in'
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${className}`}
      style={{ ...getTensionStyles(), willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default TensionBuilder;
