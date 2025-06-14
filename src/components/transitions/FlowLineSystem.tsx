
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

  const getColorStops = () => {
    switch (color) {
      case 'jade':
        return {
          start: 'rgba(16, 185, 129, 0.8)',
          middle: 'rgba(16, 185, 129, 0.6)',
          end: 'rgba(16, 185, 129, 0.4)'
        };
      case 'gold':
        return {
          start: 'rgba(245, 158, 11, 0.8)',
          middle: 'rgba(245, 158, 11, 0.6)',
          end: 'rgba(245, 158, 11, 0.4)'
        };
      case 'crimson':
        return {
          start: 'rgba(239, 68, 68, 0.8)',
          middle: 'rgba(239, 68, 68, 0.6)',
          end: 'rgba(239, 68, 68, 0.4)'
        };
      default:
        return {
          start: 'rgba(16, 185, 129, 0.8)',
          middle: 'rgba(245, 158, 11, 0.6)',
          end: 'rgba(16, 185, 129, 0.4)'
        };
    }
  };

  const colors = getColorStops();

  const getPatternPaths = () => {
    switch (pattern) {
      case 'smooth':
        return [
          "M0,50 Q200,30 400,50 T800,50",
          "M0,70 Q250,40 500,70 T1000,70",
          "M0,90 Q300,60 600,90 T1200,90"
        ];
      case 'disrupted':
        return [
          "M0,50 Q100,30 200,50 L250,40 L300,60 Q400,45 500,50",
          "M0,70 Q150,40 300,70 L350,55 L400,85 Q500,65 600,70",
          "M0,90 Q200,60 400,90 L450,75 L500,105 Q600,85 700,90"
        ];
      case 'converging':
        return [
          "M0,20 Q200,40 400,50",
          "M0,80 Q200,60 400,50",
          "M0,50 Q200,50 400,50"
        ];
      case 'explosive':
        return [
          "M400,50 Q300,20 200,10 Q100,5 0,0",
          "M400,50 Q300,80 200,90 Q100,95 0,100",
          "M400,50 Q500,30 600,20 Q700,15 800,10",
          "M400,50 Q500,70 600,80 Q700,85 800,90"
        ];
      default:
        return ["M0,50 Q200,50 400,50"];
    }
  };

  const paths = getPatternPaths();

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`flow-gradient-${pattern}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.start} />
            <stop offset="50%" stopColor={colors.middle} />
            <stop offset="100%" stopColor={colors.end} />
          </linearGradient>
        </defs>
        
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            stroke={`url(#flow-gradient-${pattern})`}
            strokeWidth={intensity === 'high' ? '3' : intensity === 'medium' ? '2' : '1'}
            fill="none"
            strokeDasharray={pattern === 'disrupted' ? '10,5' : '8,4'}
            className={`transition-all duration-1000 ${
              isActive ? 'animate-marching-ants opacity-100' : 'opacity-30'
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: pattern === 'explosive' ? '1s' : '2s'
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FlowLineSystem;
