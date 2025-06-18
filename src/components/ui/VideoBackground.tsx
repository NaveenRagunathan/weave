import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoSource: string;
  className?: string;
  fallbackImage?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSource, 
  className = '',
  fallbackImage = '/placeholder.jpg'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video attributes for autoplay
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';

    const handleLoadedData = () => {
      console.log('Video loaded, attempting to play...');
      setIsLoading(false);
      playVideo();
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setHasError(true);
      setIsLoading(false);
    };
    
    // Force autoplay
    const playVideo = () => {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA or more
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video is playing');
            })
            .catch(error => {
              console.log('Autoplay prevented, will try after user interaction:', error);
              // Try again with user interaction
              const playOnInteraction = () => {
                video.play().catch(console.error);
                window.removeEventListener('click', playOnInteraction);
              };
              window.addEventListener('click', playOnInteraction, { once: true });
            });
        }
      } else {
        // If video isn't ready, wait for it
        video.addEventListener('canplay', playVideo, { once: true });
      }
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', () => {
      console.log('Video can play');
      playVideo();
    });
    
    // Start loading the video
    video.load();

    // Handle visibility changes to pause/play when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', playVideo);
      if (video) {
        video.pause();
        video.src = '';
        video.load();
      }
    };
  }, [videoSource]);

  if (hasError) {
    return (
      <div className={`absolute inset-0 w-full h-full overflow-hidden bg-black/50 ${className}`}>
        <img 
          src={fallbackImage} 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-pulse text-white">Loading video...</div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        playsInline
        muted
        loop
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        onLoadedData={() => console.log('Video loaded data')}
        onCanPlay={() => console.log('Video can play')}
        onPlay={() => console.log('Video playing')}
        onError={(e) => {
          console.error('Video error:', e);
          setHasError(true);
        }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};
