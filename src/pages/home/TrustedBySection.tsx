
import React from "react";
import Logos3 from "@/components/ui/logos3";

const TrustedBySection = () => (
  <section className="relative py-16 px-4 bg-gradient-to-b from-ink-black/95 via-ink-black/98 to-ink-black border-b border-silk-crimson-400/10 overflow-hidden">
    {/* Premium background effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-silk-crimson-400/3 to-transparent" />
    <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-imperial-gold-400/5 to-transparent rounded-full blur-3xl opacity-60" />
    <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-silk-crimson-400/5 to-transparent rounded-full blur-3xl opacity-60" />
    
    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Premium header section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-silk-crimson-400/10 via-imperial-gold-400/10 to-silk-crimson-400/10 border border-imperial-gold-400/20">
          <div className="w-2 h-2 rounded-full bg-jade-flow-500 animate-pulse" />
          <span className="text-imperial-gold-400 text-sm font-semibold uppercase tracking-wider">Trusted Global Network</span>
          <div className="w-2 h-2 rounded-full bg-silk-crimson-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h3 className="text-3xl sm:text-5xl font-bold mb-6 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
          <span className="block text-silk-crimson-400 mb-2">Trusted by Thousands</span>
          <span className="block text-imperial-gold-500">Across the New Trade Order</span>
        </h3>
        
        <p className="text-xl sm:text-2xl text-pearl-white/80 leading-relaxed max-w-4xl mx-auto mb-8 font-light">
          From <span className="text-silk-crimson-400 font-semibold">Guangzhou</span> to <span className="text-imperial-gold-500 font-semibold">Bogotá</span>. 
          <span className="text-silk-crimson-400 font-semibold"> Lagos</span> to <span className="text-imperial-gold-500 font-semibold">Dubai</span>. 
          The architects of the Global South rely on <span className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent font-bold">WEAVE</span> to move capital where it matters.
        </p>
        
        <div className="flex items-center justify-center gap-6 text-pearl-white/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-jade-flow-500 animate-pulse" />
            <span>Fast</span>
          </div>
          <div className="w-px h-4 bg-pearl-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-silk-crimson-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <span>Secure</span>
          </div>
          <div className="w-px h-4 bg-pearl-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-imperial-gold-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
            <span>Unstoppable</span>
          </div>
        </div>
      </div>
      
      {/* Premium logos section */}
      <div className="mb-12">
        <Logos3 />
      </div>
      
      {/* Premium bottom section */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-ink-black via-imperial-gold-400/5 to-ink-black p-8 rounded-2xl border border-imperial-gold-400/20 backdrop-blur-sm mb-8">
          <p className="text-lg text-pearl-white/70 leading-relaxed mb-6 font-light">
            WEAVE is the <span className="text-imperial-gold-400 font-semibold">invisible engine</span> behind thousands of cross-border transactions every day — trusted by 
            <span className="text-silk-crimson-400 font-semibold"> multinationals</span>, 
            <span className="text-imperial-gold-500 font-semibold"> megaproject leaders</span>, and
            <span className="text-jade-flow-500 font-semibold"> digital exporters</span> across the Global South.
          </p>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-silk-crimson-400/10 to-imperial-gold-400/10 rounded-full border border-silk-crimson-400/20">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-ink-black ${
                  i === 0 ? 'bg-silk-crimson-400/20' : 
                  i === 1 ? 'bg-imperial-gold-400/20' : 
                  i === 2 ? 'bg-jade-flow-500/20' : 'bg-pearl-white/20'
                }`} />
              ))}
            </div>
            <span className="text-pearl-white/80 text-sm font-medium">24,000+ Active Business Partners</span>
          </div>
        </div>
        
        <button className="group relative overflow-hidden bg-gradient-to-r from-silk-crimson-400 to-silk-crimson-600 hover:from-silk-crimson-500 hover:to-silk-crimson-700 text-pearl-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-silk-crimson-400/30">
          <span className="relative z-10 flex items-center gap-2">
            See How These Leaders Use WEAVE
            <div className="w-5 h-5 rounded-full bg-pearl-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
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
