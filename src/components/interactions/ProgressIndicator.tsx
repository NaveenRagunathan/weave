
import React, { useState, useEffect } from 'react';

interface ProgressIndicatorProps {
  sections: string[];
  currentSection?: string;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  sections,
  currentSection,
  className = ''
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sectionHeight = 100 / sections.length;
      const currentSectionIndex = Math.floor(progress / sectionHeight);
      setActiveSection(Math.min(currentSectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, [sections.length]);

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 ${className}`}>
      {/* Overall Progress Bar */}
      <div className="w-1 h-64 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div
          className="w-full bg-gradient-to-t from-jade-flow-400 to-imperial-gold-500 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Indicators */}
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index <= activeSection
                ? 'bg-jade-flow-400 border-jade-flow-400 shadow-lg shadow-jade-flow-400/30'
                : 'bg-transparent border-gray-600'
            }`}
            title={section}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
