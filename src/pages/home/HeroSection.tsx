import CurrencyConverterWidget from "@/components/ui/CurrencyConverterWidget";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';



const HeroSection = () => {
  console.log('Component rendering');
  const [sendAmount, setSendAmount] = useState(100000);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [liveCounter, setLiveCounter] = useState(1200000000);
  const [currency, setCurrency] = useState("USD");
  const [userLocale, setUserLocale] = useState("en-US");

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Log video state changes
  React.useEffect(() => {
    console.log('isPlaying state changed:', isPlaying);
  }, [isPlaying]);
  
  // Log video reference changes
  React.useEffect(() => {
    console.log('Video ref updated:', {
      current: videoRef.current,
      readyState: videoRef.current?.readyState,
      error: videoRef.current?.error,
      networkState: videoRef.current?.networkState,
      src: videoRef.current?.currentSrc || videoRef.current?.src
    });
  }, [videoRef.current]);

  // Set video source after component mounts
  React.useEffect(() => {
    console.log('useEffect - Component mounted');
    setIsVisible(true);
    
    // Try to play video on initial load
    const attemptPlay = () => {
      console.log('Attempting to play video...');
      if (videoRef.current) {
        console.log('Video element found, checking readyState:', videoRef.current.readyState);
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video playback started successfully');
              setIsPlaying(true);
            })
            .catch((error) => {
              console.warn('Initial play failed, will wait for user interaction:', error);
              // Will be handled by user interaction
            });
        }
      } else {
        console.warn('Video ref is not available');
      }
    };
    
    // Add event listeners for video events
    const video = videoRef.current;
    const addVideoListeners = () => {
      if (video) {
        video.addEventListener('loadeddata', () => {
          console.log('Video loaded data, readyState:', video.readyState);
        });
        video.addEventListener('canplay', () => {
          console.log('Video can play');
        });
        video.addEventListener('play', () => {
          console.log('Video play event fired');
        });
        video.addEventListener('error', (e) => {
          console.error('Video error:', e);
          console.error('Video error details:', {
            error: video.error,
            networkState: video.networkState,
            readyState: video.readyState,
            src: video.currentSrc || video.src
          });
        });
        video.addEventListener('waiting', () => {
          console.log('Video waiting for data');
        });
        video.addEventListener('stalled', () => {
          console.log('Media data download has been stalled');
        });
      }
    };
    
    // Add a small delay to ensure the video element is in the DOM
    const timer = setTimeout(() => {
      console.log('Initial play attempt after mount');
      addVideoListeners();
      attemptPlay();
    }, 100);
    
    // Add click event to document to handle first interaction
    const handleFirstInteraction = () => {
      console.log('First user interaction detected, attempting to play video');
      if (videoRef.current && !isPlaying) {
        videoRef.current.play()
          .then(() => {
            console.log('Video started after user interaction');
            setIsPlaying(true);
          })
          .catch(e => {
            console.error('Playback failed after user interaction:', e);
            console.error('Video state:', {
              error: videoRef.current?.error,
              networkState: videoRef.current?.networkState,
              readyState: videoRef.current?.readyState,
              src: videoRef.current?.currentSrc || videoRef.current?.src
            });
          });
      }
      document.removeEventListener('click', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    
    return () => {
      console.log('Cleaning up event listeners');
      document.removeEventListener('click', handleFirstInteraction);
      clearTimeout(timer);
      if (video) {
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('canplay', () => {});
        video.removeEventListener('play', () => {});
        video.removeEventListener('error', () => {});
        video.removeEventListener('waiting', () => {});
        video.removeEventListener('stalled', () => {});
      }
    };
  }, []);


  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data.currency || "USD");
        const languages = data.languages;
        if (typeof languages === "string" && languages.length > 0) {
          setUserLocale(languages.split(",")[0] || "en-US");
        } else {
          setUserLocale("en-US");
        }
      })
      .catch(() => {
        setCurrency("USD");
        setUserLocale("en-US");
      });
  }, []);

  useEffect(() => {
    const startValue = 1200000000;
    const endValue = 1289000000;
    const duration = 2000;
    const increment = (endValue - startValue) / (duration / 16);
    let current = startValue;
    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setLiveCounter(endValue);
        clearInterval(timer);
      } else {
        setLiveCounter(Math.floor(current));
      }
    }, 16);

    const liveTimer = setInterval(() => {
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 50000) + 10000);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(liveTimer);
    };
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(userLocale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Live Counter */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-black/50 text-white py-2 z-20 text-center text-sm font-medium"
        style={{ y, opacity }}
      >
        <span className="text-amber-400">Live:</span> {formatCurrency(liveCounter)} sent and counting...
      </motion.div>
      {/* Video Background */}
      {isVisible && (
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay 
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              backgroundColor: 'black',
              zIndex: 1,
              opacity: 0.3
            }}
            onPlay={() => setIsPlaying(true)}
          >
            <source src="/Weave.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Send Money To and From China — <br className="md:hidden"/>
            <span className="bg-gradient-to-r from-amber-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Without Delay
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-white">
            No banks. No brokers. No waiting. <br />  Just instant money movement with USDC.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 w-full max-w-md md:max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <CurrencyConverterWidget sendAmount={sendAmount} onSendAmountChange={setSendAmount} />
          <p className="text-xs text-center text-white mt-4">
            Guaranteed rate for 1 hour
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
          >
            Create Your Free Account <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
