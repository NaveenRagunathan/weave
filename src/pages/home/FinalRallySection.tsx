import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const FinalRallySection = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-ink-black via-ink-black/95 to-silk-crimson-400/6 overflow-hidden">
    {/* Wave background effects */}
    <div className="absolute inset-0 overflow-hidden">
      {/* First wave */}
      <svg className="absolute bottom-0 left-0 w-full h-32 text-silk-crimson-400/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-wave"
          style={{ animationDuration: '10s' }}
        />
      </svg>
      
      {/* Second wave */}
      <svg className="absolute bottom-0 left-0 w-full h-40 text-imperial-gold-500/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-wave"
          style={{ animationDuration: '15s', animationDelay: '-5s' }}
        />
      </svg>
      
      {/* Third wave */}
      <svg className="absolute bottom-0 left-0 w-full h-48 text-jade-flow-500/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-wave"
          style={{ animationDuration: '20s', animationDelay: '-10s' }}
        />
      </svg>
    </div>

    <div className="max-w-5xl mx-auto text-center relative z-10">
      {/* Premium headline with staggered animations */}
      <div className="mb-10 space-y-3">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-silk-crimson-400 font-serif animate-reveal-text tracking-tight"
            style={{ fontFamily: "'Harnet Serif', serif", textShadow: '0 0 26px rgba(220, 20, 60, 0.25)', animationDelay: '0.23s', animationFillMode: 'both' }}>
          You Built the Trade.
        </h2>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-imperial-gold-500 font-serif animate-reveal-text tracking-tight"
            style={{ fontFamily: "'Harnet Serif', serif", textShadow: '0 0 25px rgba(212, 175, 55, 0.34)', animationDelay: '0.65s', animationFillMode: 'both' }}>
          You Deserve the Flow.
        </h2>
      </div>

      {/* Premium copy with elegant spacing */}
      <div className="max-w-4xl mx-auto mb-13 animate-reveal-text" 
           style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
        <p className="text-xl sm:text-2xl leading-relaxed text-pearl-white/90 mb-8 font-light">
          You already do the hard work. You found the customers. You made the product.
        </p>
        <p className="text-xl sm:text-2xl leading-relaxed text-pearl-white/80 mb-8 font-light">
          You shouldn't lose <span className="text-silk-crimson-400 font-semibold">10%</span> of your income to systems built against you.
        </p>
        <p className="text-xl sm:text-2xl leading-relaxed text-pearl-white/90 font-medium mb-8">
          <span className="text-imperial-gold-500 font-bold">WEAVE</span> lets you trade and move Money like it's a{" "}
          <span className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent font-bold">
            superpower
          </span>{" "}
          — no permission needed.
        </p>
      </div>

      {/* Premium CTA buttons with sophisticated styling */}
      <div className="flex flex-col sm:flex-row gap-7 justify-center items-center mb-7 animate-reveal-text"
           style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
        <Button
          size="lg"
          className="group relative bg-gradient-to-r from-silk-crimson-400 to-silk-crimson-600 hover:from-silk-crimson-500 hover:to-silk-crimson-700 text-pearl-white font-bold px-12 py-5 rounded-full text-lg shadow-2xl hover:shadow-silk-crimson-400/30 transition-all duration-500 transform hover:scale-106 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Create Your Free WEAVE Account Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pearl-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="group relative border-2 border-imperial-gold-500 text-imperial-gold-500 hover:bg-imperial-gold-500 hover:text-ink-black px-12 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 bg-transparent backdrop-blur-sm"
        >
          <span className="flex items-center gap-3">
            <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Talk to a Real Human
          </span>
        </Button>
      </div>
    </div>

    {/* Premium bottom glow effect */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-36 bg-gradient-to-t from-silk-crimson-400/11 via-imperial-gold-500/9 to-transparent blur-3xl" />
  </section>
);

export default FinalRallySection;
