
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
      { threshold: 0.5 }
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
          fontSize: 'text-lg md:text-xl',
          glow: '0 0 20px rgba(16, 185, 129, 0.1)'
        };
      case 'dramatic':
        return {
          fontSize: 'text-2xl md:text-3xl lg:text-4xl',
          glow: '0 0 40px rgba(16, 185, 129, 0.2)'
        };
      default:
        return {
          fontSize: 'text-xl md:text-2xl lg:text-3xl',
          glow: '0 0 30px rgba(16, 185, 129, 0.15)'
        };
    }
  };

  const styles = getIntensityStyles();

  return (
    <div 
      ref={bridgeRef}
      className="relative py-12 text-center"
    >
      {/* Atmospheric Background */}
      <div 
        className={`absolute inset-0 transition-all duration-3000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at center, rgba(16, 185, 129, 0.02) 0%, transparent 80%)`,
        }}
      />

      {/* Main Text with staggered animation */}
      <div 
        className={`relative z-10 transition-all duration-1200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h3 
          className={`${styles.fontSize} font-semibold text-pearl-white/90 mb-3 transition-all duration-1200`}
          style={{
            textShadow: isInView ? styles.glow : 'none',
            animationDelay: '0.2s'
          }}
        >
          {text}
        </h3>
        
        {subtext && (
          <p 
            className={`text-base text-gray-400/80 max-w-xl mx-auto transition-all duration-1200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            {subtext}
          </p>
        )}
      </div>

      {/* Subtle directional indicator */}
      <div 
        className={`absolute ${direction === 'up' ? 'top-6' : 'bottom-6'} left-1/2 transform -translate-x-1/2 transition-all duration-1500 ${
          isInView ? 'opacity-30' : 'opacity-0'
        }`}
        style={{ animationDelay: '1s' }}
      >
        <div className={`w-px h-6 bg-gradient-to-${direction === 'up' ? 't' : 'b'} from-jade-flow-400/40 to-transparent`} />
      </div>
    </div>
  );
};

export default NarrativeBridge;
