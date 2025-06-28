import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'The Challenge' },
  { id: 'china', label: 'Global Shift' },
  { id: 'solution', label: 'Weave Solution' },
  { id: 'impact', label: 'The Impact' },
  { id: 'cta', label: 'Get Started' },
] as const;

type SectionId = typeof SECTIONS[number]['id'];

interface JourneyNavProps {
  className?: string;
  activeSection?: string | null;
}

export function JourneyNav({ className, activeSection }: JourneyNavProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<SectionId | null>(null);
  
  // Handle smooth scroll for anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: 'smooth' });
      // Reset scrolling state after scroll completes
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block",
        "transition-opacity duration-300",
        isScrolling ? 'opacity-50' : 'opacity-100',
        className
      )}
      aria-label="Page navigation"
    >
      <div className="flex flex-col items-center gap-6">
        {SECTIONS.map((section, index) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;
          
          return (
            <motion.div 
              key={section.id}
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.1 * index }
              }}
              onHoverStart={() => setHoveredSection(section.id)}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <motion.a
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap",
                  isActive 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? 'step' : undefined}
              >
                {section.label}
              </motion.a>
              <motion.div
                className={cn(
                  "h-px transition-all",
                  isActive || isHovered 
                    ? "bg-primary w-12" 
                    : "bg-foreground/20 w-8"
                )}
                initial={false}
                animate={{
                  width: isActive || isHovered ? '3rem' : '2rem',
                  backgroundColor: isActive || isHovered 
                    ? 'hsl(var(--primary))' 
                    : 'hsl(var(--foreground) / 0.2)'
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}
