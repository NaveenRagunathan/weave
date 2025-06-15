import React from "react";
import Logos3 from "@/components/ui/logos3";

const TrustedBySection = () => (
  <section className="relative py-20 px-4 bg-gradient-to-b from-ink-black/95 via-ink-black/98 to-ink-black border-b border-silk-crimson-400/10 overflow-hidden backdrop-blur-lg shadow-[0px_10px_60px_0_rgba(220,20,60,0.09)]">
    {/* Premium background effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-silk-crimson-400/7 to-transparent" />
    <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-imperial-gold-400/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />
    <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-silk-crimson-400/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
    
    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Premium header section */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-3 mb-6 px-8 py-4 rounded-full bg-gradient-to-r from-silk-crimson-400/13 via-imperial-gold-400/13 to-silk-crimson-400/13 border border-imperial-gold-400/30 shadow-xl">
          <div className="w-3 h-3 rounded-full bg-jade-flow-500 animate-pulse" />
          <span className="text-imperial-gold-400 text-base font-semibold uppercase tracking-wide">Trusted Global Network</span>
          <div className="w-3 h-3 rounded-full bg-silk-crimson-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h3 className="text-4xl sm:text-5xl font-extrabold mb-7 font-serif drop-shadow-[0_2px_18px_rgba(220,20,60,0.20)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
          <span className="block text-silk-crimson-400 mb-2 animate-slide-in-left">Trusted by Thousands</span>
          <span className="block text-imperial-gold-500 animate-slide-in-right">Across the New Trade Order</span>
        </h3>
        
        <p className="text-xl sm:text-2xl text-pearl-white/85 leading-relaxed max-w-4xl mx-auto mb-9 font-light">
          From <span className="text-silk-crimson-400 font-semibold">Guangzhou</span> to <span className="text-imperial-gold-500 font-semibold">Bogotá</span>. 
          <span className="text-silk-crimson-400 font-semibold"> Lagos</span> to <span className="text-imperial-gold-500 font-semibold">Dubai</span>. 
          The architects of the Global South rely on <span className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent font-bold">WEAVE</span> to move capital where it matters.
        </p>
        <div className="flex items-center justify-center gap-7 text-pearl-white/70 text-base mt-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-jade-flow-500 animate-pulse" />
            <span>Fast</span>
          </div>
          <div className="w-px h-5 bg-pearl-white/25" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-silk-crimson-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <span>Secure</span>
          </div>
          <div className="w-px h-5 bg-pearl-white/25" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-imperial-gold-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
            <span>Unstoppable</span>
          </div>
        </div>
      </div>
      
      {/* Premium logos section */}
      <div className="mb-14 px-3 py-3 rounded-xl bg-gradient-to-r from-silk-crimson-400/15 to-imperial-gold-400/10 border border-imperial-gold-400/20 shadow-lg backdrop-blur-md">
        <Logos3 />
      </div>
      
      {/* Premium bottom section */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-ink-black via-imperial-gold-400/7 to-ink-black p-12 rounded-2xl border border-imperial-gold-400/20 backdrop-blur-md mb-8 shadow-2xl">
          <p className="text-lg text-pearl-white/80 leading-relaxed mb-7 font-light">
            WEAVE is the <span className="text-imperial-gold-400 font-semibold">invisible engine</span> behind thousands of cross-border transactions every day — trusted by 
            <span className="text-silk-crimson-400 font-semibold"> multinationals</span>, 
            <span className="text-imperial-gold-500 font-semibold"> megaproject leaders</span>, and
            <span className="text-jade-flow-500 font-semibold"> digital exporters</span> across the Global South.
          </p>
          
          <div className="inline-flex items-center gap-5 px-7 py-3 bg-gradient-to-r from-silk-crimson-400/15 to-imperial-gold-400/15 rounded-full border border-silk-crimson-400/17 shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-ink-black ${
                  i === 0 ? 'bg-silk-crimson-400/25' : 
                  i === 1 ? 'bg-imperial-gold-400/25' : 
                  i === 2 ? 'bg-jade-flow-500/25' : 'bg-pearl-white/25'
                }`} />
              ))}
            </div>
            <span className="text-pearl-white/80 text-base font-medium">24,000+ Active Business Partners</span>
          </div>
        </div>
        
        <button className="group relative overflow-hidden bg-gradient-to-r from-silk-crimson-400 to-silk-crimson-600 hover:from-silk-crimson-500 hover:to-silk-crimson-700 text-pearl-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-silk-crimson-400/40">
          <span className="relative z-10 flex items-center gap-2">
            See How These Leaders Use WEAVE
            <div className="w-5 h-5 rounded-full bg-pearl-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs">→</span>
            </div>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pearl-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>
    </div>
  </section>
);

export default TrustedBySection;
