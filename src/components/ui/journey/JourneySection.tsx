import { ReactNode, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type ThemeType = 'light' | 'dark' | 'accent';

interface JourneySectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  theme?: ThemeType;
  onViewChange?: (id: string | undefined) => void;
}

export function JourneySection({ 
  children, 
  className, 
  id,
  theme = 'light',
  onViewChange
}: JourneySectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: '-20% 0px -20% 0px', amount: 0.3 });

  useEffect(() => {
    if (isInView && id && onViewChange) {
      onViewChange(id);
    }
  }, [isInView, id, onViewChange]);

  const bgVariants: Record<ThemeType, string> = {
    light: 'bg-background text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary/5 text-foreground',
  };

  return (
    <section 
      ref={ref}
      id={id}
      data-theme={theme}
      className={cn(
        'min-h-screen w-full relative overflow-hidden py-20 md:py-32',
        'flex items-center justify-center transition-colors duration-500',
        bgVariants[theme],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="container px-4 mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
