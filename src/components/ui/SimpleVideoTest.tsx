import React, { useRef, useEffect } from 'react';

export const SimpleVideoTest = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play the video
    const playVideo = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        await video.play();
        console.log('Video is playing!');
      } catch (err) {
        console.error('Error playing video:', err);
      }
    };

    playVideo();

    return () => {
      if (video) {
        video.pause();
        video.src = '';
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 w-64 h-48 bg-black rounded-lg overflow-hidden z-50 shadow-xl">
      <h3 className="text-white text-center py-2 bg-black/80">Video Test</h3>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
      >
        <source src="/Weave.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
