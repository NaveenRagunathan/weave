import React, { useState, useRef, useEffect } from 'react';
import { Clock, DollarSign, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/interactions/ScrollReveal';
import StoryBeat from '@/components/interactions/StoryBeat';

const ProblemSection = () => {
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
      className="py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-ink-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Headline & Copy */}
          <div>
            <ScrollReveal delay={200} direction="up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-6">
                The Global South is rising.<br />
                But its <span className="text-silk-crimson-500">money pipes</span> are still <span className="text-silk-crimson-500">colonial</span>.
              </h2>
              <div
                className={`h-1 mt-1 mb-8 mx-0 bg-gradient-to-r from-silk-crimson-500 via-imperial-gold-500 to-silk-crimson-400 rounded-full origin-left ${isInView ? 'animate-underline-reveal' : 'scale-x-0'}`}
                style={{ animationDelay: isInView ? '0.4s' : '0s', width: 'clamp(100px, 35%, 250px)' }}
              />
              <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
                <div>
                  <span className="font-semibold text-pearl-white">This isn’t just a payment problem.<br />It’s a development emergency:</span>
                </div>
                <ul className="space-y-1 pl-2">
                  <li className="flex items-start">
                    <span className="mr-2">🕒</span>
                    <span>Transfers take 3–5 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💸</span>
                    <span>Remittance fees average 6.5%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⚠</span>
                    <span>FX swings wreck deals in minutes</span>
                  </li>
                </ul>
                <p>
                  A <span className="text-silk-crimson-300">$2M real estate project in Brazil collapsed</span> — not from risk, but from FX clearance delays.
                </p>
                <p>
                  A <span className="text-silk-crimson-300">Nigerian factory lost a major buyer</span> — not from fraud, but from a broken yuan-to-naira conversion.
                </p>
                <p className="font-semibold text-silk-crimson-200">
                  These aren’t bugs. They’re systemic sabotage.<br />
                  And they drain over 15% of revenue from Global South businesses every year.
                </p>
                <p className="text-2xl text-jade-flow-300 font-bold mt-4">
                  WEAVE turns that loss into lifeblood.<br />
                  Friction becomes flow. Delay becomes power.
                </p>
              </div>
            </ScrollReveal>
          </div>
          {/* RIGHT: Video Panel only, no timeline */}
          <ScrollReveal delay={800} direction="right">
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/40 to-transparent" />
                {/* Play Button Overlay removed for static layout */}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
