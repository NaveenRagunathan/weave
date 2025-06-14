
import React, { useState, useRef, useEffect } from 'react';
import { Clock, DollarSign, AlertTriangle } from 'lucide-react';
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

  const problemPoints = [
    { icon: Clock, text: 'Transfers take 3–5 days', color: 'text-imperial-gold-500' },
    { icon: DollarSign, text: 'Remittance fees average 6.5%', color: 'text-imperial-gold-500' },
    { icon: AlertTriangle, text: 'FX swings wreck deals in minutes', color: 'text-imperial-gold-500' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-silk-crimson-400 to-ink-black" // New: deep red to ink black
      // Optionally, use: bg-red-glow-panel if you want a more vibrant shimmer
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal delay={200} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pearl-white leading-tight mb-6">
              The Global South is rising.
              <br />
              But its <span className="text-imperial-gold-500">money pipes</span> are still{' '}
              <span className="text-silk-crimson-500">colonial</span>.
            </h2>
            {/* Animated Underline */}
            <div
              className={`h-1 mt-1 mx-auto bg-gradient-to-r from-silk-crimson-500 via-imperial-gold-500 to-silk-crimson-400 rounded-full origin-center
                          ${isInView ? 'animate-underline-reveal' : 'scale-x-0'}`}
              style={{ animationDelay: isInView ? '0.4s' : '0s', width: 'clamp(100px, 35%, 250px)' }}
            />
          </div>
        </ScrollReveal>

        {/* Problem Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ScrollReveal delay={400} direction="left">
              <div className="text-xl text-pearl-white leading-relaxed space-y-3">
                <p>
                  This isn’t just a payment problem.<br />
                  It’s a <span className="font-semibold text-imperial-gold-500">development emergency:</span>
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {problemPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <ScrollReveal key={index} delay={600 + index * 200} direction="left">
                    <StoryBeat trigger="hover" intensity="subtle">
                      <li className="flex items-center text-lg">
                        <Icon className={`w-6 h-6 mr-3 shrink-0 ${point.color}`} />
                        <span className="text-pearl-white">{point.text}</span>
                      </li>
                    </StoryBeat>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={1200} direction="up">
              <div className="space-y-4 text-pearl-white leading-relaxed">
                <p>
                  A <span className="text-imperial-gold-500">$2M real estate project in Brazil collapsed</span> — not from risk, but from FX clearance delays.
                </p>
                <p>
                  A <span className="text-imperial-gold-500">Nigerian factory lost a major buyer</span> — not from fraud, but from a broken yuan-to-naira conversion.
                </p>
                <p>
                  These aren’t bugs. They’re systemic sabotage.
                  <br />
                  And they drain over <span className="text-imperial-gold-500">15% of revenue</span> from Global South businesses every year.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1600} direction="up">
              <p className="text-2xl text-silk-crimson-400 font-bold mt-6">
                WEAVE turns that loss into lifeblood. <br /> <span className="text-imperial-gold-500">Friction becomes flow.</span> <span className="text-imperial-gold-500">Delay becomes power.</span>
              </p>
            </ScrollReveal>
          </div>
          
          {/* Visuals: Timeline animation placeholder */}
          <ScrollReveal delay={800} direction="right">
            <div className="bg-ink-black/70 p-8 rounded-xl aspect-video flex items-center justify-center border border-silk-crimson-400/60">
              <p className="text-pearl-white text-center">Visual Placeholder: <br /> Timeline animation of a failed deal vs. a WEAVE success story.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
