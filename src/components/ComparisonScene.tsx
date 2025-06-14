
import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface ComparisonSceneProps {
  feature: string;
  legacy: string;
  weave: string;
  icon: LucideIcon;
  index: number;
  isLast?: boolean;
}

const ComparisonScene: React.FC<ComparisonSceneProps> = ({
  feature,
  legacy,
  weave,
  icon: Icon,
  index,
  isLast = false
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setTimeout(() => setIsAnimating(true), 200 + index * 150);
        }
      },
      { threshold: 0.6 }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={sceneRef}
      className={`relative overflow-hidden transition-all duration-1000 ease-out mb-8 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        {/* Old World Background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-gray-800/80 via-gray-700/60 to-transparent 
                     transition-all duration-1500 ${
                       isAnimating ? 'opacity-40 scale-105' : 'opacity-100 scale-100'
                     }`}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(127, 29, 29, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, rgba(156, 163, 175, 0.1) 70%)
            `
          }}
        />
        
        {/* WEAVE World Background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-l from-jade-flow-500/20 via-imperial-gold-500/10 to-transparent 
                     transition-all duration-1500 delay-300 ${
                       isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                     }`}
          style={{
            backgroundImage: `
              radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              linear-gradient(-45deg, transparent 30%, rgba(16, 185, 129, 0.05) 70%)
            `
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 items-center">
        {/* Feature Title */}
        <div className="md:col-span-1 flex items-center space-x-4">
          <div className={`transition-all duration-700 ${isAnimating ? 'animate-pulse-glow' : ''}`}>
            <Icon 
              className={`w-8 h-8 transition-all duration-500 ${
                isAnimating ? 'text-jade-flow-400 scale-110' : 'text-gray-400'
              }`} 
            />
          </div>
          <h3 className="text-xl font-bold text-pearl-white">{feature}</h3>
        </div>

        {/* Legacy Value */}
        <div className="md:col-span-1 text-center">
          <div 
            className={`relative overflow-hidden rounded-lg p-4 transition-all duration-700 ${
              isAnimating ? 'opacity-60 scale-95' : 'opacity-100 scale-100'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(127, 29, 29, 0.05) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}
          >
            {/* Cracking effect */}
            <div 
              className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${
                isAnimating ? 'opacity-20' : ''
              }`}
              style={{
                backgroundImage: `
                  linear-gradient(45deg, transparent 40%, rgba(239, 68, 68, 0.1) 42%, transparent 44%),
                  linear-gradient(-45deg, transparent 40%, rgba(239, 68, 68, 0.1) 42%, transparent 44%)
                `
              }}
            />
            <span className="relative text-silk-crimson-300 font-medium">{legacy}</span>
          </div>
        </div>

        {/* WEAVE Value */}
        <div className="md:col-span-1 text-center">
          <div 
            className={`relative overflow-hidden rounded-lg p-4 transition-all duration-700 delay-500 ${
              isAnimating ? 'opacity-100 scale-105 animate-pulse-glow' : 'opacity-70 scale-100'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(245, 158, 11, 0.1) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            {/* Shimmer effect */}
            <div 
              className={`absolute inset-0 opacity-0 transition-opacity duration-1000 delay-700 ${
                isAnimating ? 'opacity-100 animate-shimmer' : ''
              }`}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                backgroundSize: '200% 100%'
              }}
            />
            <span className="relative text-jade-flow-300 font-bold flex items-center justify-center">
              {weave}
              {isAnimating && (
                <span className="ml-2 text-imperial-gold-400 animate-pulse">⚡</span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Diagonal Flow Line */}
      {!isLast && (
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 128 32">
            <path
              d="M0,16 Q32,8 64,16 T128,16"
              stroke="url(#scene-flow-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,4"
              className={`transition-all duration-1000 ${
                isAnimating ? 'animate-marching-ants opacity-100' : 'opacity-30'
              }`}
            />
            <defs>
              <linearGradient id="scene-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.5)" />
                <stop offset="50%" stopColor="rgba(245, 158, 11, 0.7)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.8)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ComparisonScene;
