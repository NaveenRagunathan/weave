import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const FinalRallySection = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-ink-black via-ink-black/95 to-silk-crimson-400/6 overflow-hidden border-t border-imperial-gold-400/14">
    {/* Premium background effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-silk-crimson-400/7 to-transparent animate-shimmer" 
         style={{ backgroundSize: '200% 100%' }} />
    
    {/* Floating geometric elements */}
    <div className="absolute top-20 left-10 w-32 h-32 border border-imperial-gold-500/27 rounded-full animate-gentle-float opacity-30" />
    <div className="absolute bottom-32 right-16 w-24 h-24 border border-silk-crimson-400/20 rounded-lg rotate-45 animate-pulse-erratic" />
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-imperial-gold-500/14 to-silk-crimson-400/10 rounded-full animate-converge-in" />
    
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

      {/* Trust indicator with premium styling */}
      <div className="flex items-center justify-center gap-5 text-pearl-white/65 text-base animate-reveal-text"
           style={{ animationDelay: '1.9s', animationFillMode: 'both' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-jade-flow-500 animate-pulse" />
          <span>Trusted by 10,000+ Global Traders</span>
        </div>
        <div className="w-px h-4 bg-pearl-white/35" />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-imperial-gold-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <span>Zero Setup Fees</span>
        </div>
      </div>
    </div>

    {/* Premium bottom glow effect */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-36 bg-gradient-to-t from-silk-crimson-400/11 via-imperial-gold-500/9 to-transparent blur-3xl" />
  </section>
);

export default FinalRallySection;
