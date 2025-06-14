
import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from '@/components/interactions/ScrollReveal';

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
          {/* LEFT: Headline & Copy for Story */}
          <div className="space-y-8">
            <ScrollReveal delay={200} direction="left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight">
                When capital flows, civilizations rise.<br />
                When it clogs, empires fall.
              </h2>
            </ScrollReveal>
            {/* Animated Underline */}
            <div
              className={`h-1 mt-1 mx-0 bg-gradient-to-r from-jade-flow-400 via-imperial-gold-500 to-jade-flow-600 rounded-full origin-left ${isInView ? 'animate-underline-reveal' : 'scale-x-0'}`}
              style={{ animationDelay: isInView ? '0.4s' : '0s', width: 'clamp(100px, 35%, 250px)' }}
            />
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed pt-4">
              <ScrollReveal delay={400} direction="up">
                <p>
                  For decades, the Global South has received billions in trade, investment, and infrastructure.<br />
                  But its arteries are blocked.
                  <br />
                  Broken money rails. Colonized finance. Delays that kill deals, kill trust, kill growth.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={600} direction="up">
                <p className="text-jade-flow-300 font-semibold">
                  WEAVE rips out the old plumbing — and installs something sovereign, stable, unstoppable.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={800} direction="up">
                <p>
                  This is more than payments, this is economic revitalization. <br />
                  We’re building the circulatory system of the next world economy.
                  <br />
                  From China to Lagos, São Paulo to Jakarta — we enable trusted, high-volume capital movement for a new generation of builders, traders, and empires.
                </p>
              </ScrollReveal>
            </div>
          </div>
          {/* RIGHT: Docu-style Brand Film */}
          <ScrollReveal delay={400} direction="right">
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                >
                  <source
                    src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a87a9a&profile_id=164&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/40 to-transparent" />
                {/* Play button or overlay could be added if desired */}
              </div>
              {/* Optional: stats, removed for clarity */}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
