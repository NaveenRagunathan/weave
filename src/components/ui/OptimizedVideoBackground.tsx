import React, { useEffect, useRef, useState } from 'react';

interface OptimizedVideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  fallbackImage?: string;
}

export const OptimizedVideoBackground: React.FC<OptimizedVideoBackgroundProps> = ({
  videoSrc,
  posterSrc,
  className = '',
  fallbackImage = '/placeholder.jpg',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize intersection observer
  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        // Disconnect after first intersection
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);
    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle video loading and playback
  useEffect(() => {
    if (!isInView || !videoRef.current) return;

    const video = videoRef.current;
    let isMounted = true;

    const handleCanPlay = () => {
      if (isMounted) {
        setIsLoaded(true);
        video.play().catch((e) => {
          console.error('Autoplay failed:', e);
          // Try muted autoplay
          video.muted = true;
          video.play().catch(console.error);
        });
      }
    };

    const handleError = () => {
      console.error('Error loading video');
      if (isMounted) {
        setIsLoaded(false);
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.load();

    return () => {
      isMounted = false;
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.pause();
      video.src = '';
    };
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Placeholder image that shows while video loads */}
      {(!isLoaded || !isInView) && (
        <div className="absolute inset-0 z-0">
          <img
            src={posterSrc || fallbackImage}
            alt="Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Actual video element */}
      {isInView && (
        <video
          ref={videoRef}
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
          playsInline
          muted
          loop
          preload="none" // Important: Don't preload until in view
          poster={posterSrc}
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
    </div>
  );
};
