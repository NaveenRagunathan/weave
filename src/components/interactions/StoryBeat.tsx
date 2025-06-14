
import React, { useState, useRef, useEffect } from 'react';

interface StoryBeatProps {
  trigger: 'scroll' | 'hover' | 'click';
  intensity?: 'subtle' | 'medium' | 'dramatic';
  children: React.ReactNode;
  revealText?: string;
  className?: string;
}

const StoryBeat: React.FC<StoryBeatProps> = ({
  trigger,
  intensity = 'medium',
  children,
  revealText,
  className = ''
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            if (revealText) {
              setTimeout(() => setIsRevealed(true), 500);
            }
          }
        },
        { threshold: 0.6 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger, revealText]);

  const getIntensityStyles = () => {
    switch (intensity) {
      case 'subtle':
        return 'hover:scale-101 transition-transform duration-300';
      case 'dramatic':
        return 'hover:scale-105 hover:shadow-2xl hover:shadow-jade-flow-500/20 transition-all duration-500';
      default:
        return 'hover:scale-102 hover:shadow-lg hover:shadow-jade-flow-500/10 transition-all duration-400';
    }
  };

  const handleInteraction = () => {
    if (trigger === 'click' || trigger === 'hover') {
      setIsActive(true);
      if (revealText && !isRevealed) {
        setIsRevealed(true);
      }
    }
  };

  return (
    <div
      ref={elementRef}
      className={`relative ${getIntensityStyles()} ${className}`}
      onMouseEnter={trigger === 'hover' ? handleInteraction : undefined}
      onClick={trigger === 'click' ? handleInteraction : undefined}
      style={{ willChange: 'transform' }}
    >
      {children}
      
      {/* Reveal Text Overlay */}
      {revealText && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-ink-black/80 backdrop-blur-sm rounded-lg transition-all duration-1000 ${
            isRevealed ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <p className="text-lg font-semibold text-jade-flow-300 text-center px-4">
            {revealText}
          </p>
        </div>
      )}
    </div>
  );
};

export default StoryBeat;
