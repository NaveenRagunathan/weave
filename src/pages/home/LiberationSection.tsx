import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const keyLines = [
  "Embedded compliance",
  "AI-powered intelligence",
  "Corridor-native onboarding",
  "Instant confirmation, human support",
];

const LiberationSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-ink-black via-ink-black/95 to-silk-crimson-400/6 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Animated Money Lines Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" style={{zIndex:1}}>
        <defs>
          <linearGradient id="moneyLineGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#DC143C" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        {[...Array(7)].map((_, i) => (
          <path
            key={i}
            d={`M0,${80 + i * 60} Q${300 + i * 40},${100 + i * 60} 1000,${120 + i * 60}`}
            stroke="url(#moneyLineGold)"
            strokeWidth={i % 2 === 0 ? 2.5 : 1.2}
            fill="none"
            style={{
              opacity: 0.18 + 0.04 * (i % 3),
              filter: 'blur(0.5px)',
              animation: `moneyline-move-${i} 12s linear infinite alternate`,
            }}
          />
        ))}
        <style>{`
          ${[...Array(7)].map((_, i) => `@keyframes moneyline-move-${i} {
            0% { transform: translateY(0px); }
            100% { transform: translateY(${i % 2 === 0 ? 12 : -10}px); }
          }`).join('\n')}
        `}</style>
      </svg>
      {/* Radial Gold Glow */}
      <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none select-none"
        style={{
          background: 'radial-gradient(ellipse at center, #D4AF3740 0%, transparent 70%)',
          zIndex: 2,
          filter: 'blur(8px)',
        }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent tracking-tight drop-shadow-[0_2px_14px_rgba(220,20,60,0.13)] animate-reveal-text">
          This Isn't About Fintech. This Is Liberation.
        </h2>
        {/* Subheadline */}
        <div className="text-2xl sm:text-2.5xl font-bold text-imperial-gold-500 mb-8 animate-fade-in">
          The banks failed you. The corridors ignored you. The systems drained you.
        </div>
        {/* Manifesto Statement */}
        <div className="mb-12 max-w-2xl mx-auto px-6 py-5 rounded-2xl bg-gradient-to-r from-imperial-gold-400/10 to-silk-crimson-400/8 border border-imperial-gold-400/20 text-pearl-white/90 text-lg font-medium shadow-lg backdrop-blur-md animate-fade-in delay-100">
          WEAVE is infrastructure — liquid, trusted, sovereign. We're not moving payments. We're moving power.
        </div>
        {/* Key Lines as 2x2 Grid with Hover Effect */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 place-items-center">
          {keyLines.map((line, i) => (
            <div
              key={i}
              className={`px-7 py-3 rounded-full bg-ink-black/60 border border-imperial-gold-400/20 shadow-md text-lg sm:text-xl font-semibold text-pearl-white/95 tracking-wide backdrop-blur-md animate-fade-in transition-all duration-200 cursor-pointer ${hovered === i ? 'ring-4 ring-imperial-gold-400/30 scale-105 shadow-xl border-silk-crimson-400' : ''}`}
              style={{
                animationDelay: `${0.2 + i * 0.15}s`,
                animationFillMode: 'backwards',
                minWidth: 220,
                maxWidth: 380,
                boxShadow: hovered === i ? '0 0 32px 0 #D4AF3740, 0 2px 16px #DC143C55' : undefined,
                background: hovered === i
                  ? '#111112'
                  : 'rgba(20,20,24,0.60)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(i)}
              onTouchEnd={() => setHovered(null)}
            >
              <span className="bg-gradient-to-r from-imperial-gold-400 to-silk-crimson-400 bg-clip-text text-transparent">
                {line}
              </span>
            </div>
          ))}
        </div>
        {/* CTA */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-600 hover:to-imperial-gold-600 text-pearl-white font-bold px-10 py-5 rounded-full shadow-xl transition"
        >
          Join the WEAVE Network Today
        </Button>
      </div>
    </section>
  );
};

export default LiberationSection;
