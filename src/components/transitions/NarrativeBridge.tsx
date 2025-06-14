
import React, { useState, useRef, useEffect } from 'react';

interface NarrativeBridgeProps {
  text: string;
  subtext?: string;
  direction?: 'up' | 'down';
  intensity?: 'subtle' | 'medium' | 'dramatic';
}

const NarrativeBridge: React.FC<NarrativeBridgeProps> = ({
  text,
  subtext,
  direction = 'down',
  intensity = 'medium'
}) => {
  const [isInView, setIsInView] = useState(false);
  const bridgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bridgeRef.current) {
      observer.observe(bridgeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIntensityStyles = () => {
    switch (intensity) {
      case 'subtle':
        return {
          fontSize: 'text-sm md:text-base',
          opacity: 'opacity-60'
        };
      case 'dramatic':
        return {
          fontSize: 'text-lg md:text-xl',
          opacity: 'opacity-90'
        };
      default:
        return {
          fontSize: 'text-base md:text-lg',
          opacity: 'opacity-75'
        };
    }
  };

  const styles = getIntensityStyles();

  return (
    <div 
      ref={bridgeRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 2 }}
    >
      {/* Completely invisible transition text that appears on scroll */}
      <div 
        className={`text-center transition-all duration-2000 ${
          isInView ? `${styles.opacity} translate-y-0` : 'opacity-0 translate-y-4'
        }`}
      >
        <div 
          className={`${styles.fontSize} font-medium text-jade-flow-300/80 mb-1`}
        >
          {text}
        </div>
        
        {subtext && (
          <div 
            className={`text-xs text-gray-400/60 transition-all duration-2000 ${
              isInView ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};

export default NarrativeBridge;
