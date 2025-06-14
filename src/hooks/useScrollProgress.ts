
import { useState, useEffect } from 'react';

interface ScrollProgressReturn {
  scrollProgress: number;
  scrollDirection: 'up' | 'down';
  isScrolling: boolean;
}

export const useScrollProgress = (): ScrollProgressReturn => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const updateProgress = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((currentScrollY / docHeight) * 100, 100);
      
      setScrollProgress(progress);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  return { scrollProgress, scrollDirection, isScrolling };
};
