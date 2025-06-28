import React, { ReactNode, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { JourneyNav } from './JourneyNav';

interface JourneyWrapperProps {
  children: ReactNode;
  className?: string;
}

export function JourneyWrapper({ children, className }: JourneyWrapperProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Progress indicator for the journey
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Clone children to pass activeSection and setActiveSection
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        onViewChange: (id: string) => setActiveSection(id)
      });
    }
    return child;
  });

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <motion.div 
          className="h-full bg-primary"
          style={{ width: progress }}
        />
      </div>
      
      {/* Journey content */}
      <div className="space-y-0">
        {childrenWithProps}
      </div>
      
      {/* Navigation */}
      <JourneyNav activeSection={activeSection} />
    </div>
  );
}
