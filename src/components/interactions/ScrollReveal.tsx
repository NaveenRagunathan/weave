
import React, { useState, useRef, useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 800,
  direction = 'up',
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getDirectionClasses = () => {
    const base = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${base} ${durationClass} opacity-0 translate-y-8`;
        case 'down':
          return `${base} ${durationClass} opacity-0 -translate-y-8`;
        case 'left':
          return `${base} ${durationClass} opacity-0 translate-x-8`;
        case 'right':
          return `${base} ${durationClass} opacity-0 -translate-x-8`;
        default:
          return `${base} ${durationClass} opacity-0`;
      }
    }
    
    return `${base} ${durationClass} opacity-100 translate-x-0 translate-y-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getDirectionClasses()} ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
