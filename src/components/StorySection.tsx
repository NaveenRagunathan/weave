import React, { useState, useRef, useEffect } from 'react';
// Removed Button import as it's not used per new plan for this section

const StorySection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-ink-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight">
                When capital flows,{' '}
                <span className="weave-gradient-text">civilizations rise</span>.
                <br />
                When it clogs, empires fall.
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  For decades, the Global South has received billions in trade, investment, and infrastructure. 
                  But its arteries are blocked. Broken money rails. Colonized finance. Delays that kill deals, 
                  kill trust, kill growth.
                </p>
                
                <p className="text-jade-flow-300 font-semibold">
                  WEAVE rips out the old plumbing — and installs something sovereign, stable, unstoppable.
                </p>
                
                <p>
                  This is more than payments, this is economic revitalization. We're building the circulatory 
                  system of the next world economy. From China to Lagos, São Paulo to Jakarta — we enable 
                  trusted, high-volume capital movement for a new generation of builders, traders, and empires.
                </p>
              </div>
            </div>
          </div>

          {/* Video Panel */}
          <div className={`relative ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80" // Placeholder poster
              >
                <source
                  src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a87a9a&profile_id=164&oauth2_token_id=57447761" // Placeholder video
                  type="video/mp4"
                />
              </video>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/40 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-jade-flow-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-jade-flow-500 transition-all duration-300 hover:scale-110">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                </button>
              </div>
            </div>
            
            {/* Floating Stats - This is from original, new plan does not specify for Section 1. Keeping for visual consistency for now. */}
            <div className="absolute -bottom-4 -right-4 bg-ink-black/90 backdrop-blur-sm border border-jade-flow-500/20 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-jade-flow-400">$1.2B+</div>
                <div className="text-sm text-gray-400">Capital Moved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
