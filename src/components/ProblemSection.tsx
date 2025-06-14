
import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from '@/components/interactions/ScrollReveal';

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
          {/* LEFT: Headline & Problem Copy */}
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
                  A $2M real estate project in Brazil collapsed — not from risk, but from FX clearance delays.
                </p>
                <p>
                  A Nigerian factory lost a major buyer — not from fraud, but from a broken yuan-to-naira conversion.
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
          {/* RIGHT: Place for Timeline Visual or (currently) same docu-style video as placeholder */}
          <ScrollReveal delay={800} direction="right">
            <div className="relative">
              {/* Timeline/animation placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-ink-black/70">
                {/* Placeholder for “timeline animation” (to be built/plugged later) */}
                <span className="text-pearl-white text-lg opacity-70 px-8 text-center">
                  Timeline animation goes here:<br />
                  <span className="font-semibold">Failed deal pain vs. WEAVE success (8s close)</span><br />
                  [Animation or visual]
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
