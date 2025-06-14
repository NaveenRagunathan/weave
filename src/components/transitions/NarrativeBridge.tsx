
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
          fontSize: 'text-xl md:text-2xl',
          glow: '0 0 10px rgba(16, 185, 129, 0.2)'
        };
      case 'dramatic':
        return {
          fontSize: 'text-3xl md:text-4xl lg:text-5xl',
          glow: '0 0 30px rgba(16, 185, 129, 0.4)'
        };
      default:
        return {
          fontSize: 'text-2xl md:text-3xl lg:text-4xl',
          glow: '0 0 20px rgba(16, 185, 129, 0.3)'
        };
    }
  };

  const styles = getIntensityStyles();

  return (
    <div 
      ref={bridgeRef}
      className="relative py-16 text-center"
    >
      {/* Background Pulse */}
      <div 
        className={`absolute inset-0 transition-all duration-2000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)`,
          animation: isInView ? 'pulse 3s ease-in-out infinite' : 'none'
        }}
      />

      {/* Main Text */}
      <div 
        className={`relative z-10 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 
          className={`${styles.fontSize} font-bold text-pearl-white weave-gradient-text mb-4`}
          style={{
            textShadow: isInView ? styles.glow : 'none',
            animationDelay: '0.3s'
          }}
        >
          {text}
        </h3>
        
        {subtext && (
          <p 
            className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            {subtext}
          </p>
        )}
      </div>

      {/* Directional Arrow */}
      <div 
        className={`absolute ${direction === 'up' ? 'top-4' : 'bottom-4'} left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isInView ? 'opacity-60 animate-bounce' : 'opacity-0'
        }`}
        style={{ animationDelay: '1s' }}
      >
        <div className={`w-1 h-8 bg-gradient-to-${direction === 'up' ? 't' : 'b'} from-jade-flow-400 to-transparent rounded-full`} />
      </div>
    </div>
  );
};

export default NarrativeBridge;
