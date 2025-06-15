
import React from "react";

const partners = [
  { name: "Alibaba", domain: "alibaba.com" },
  { name: "Huawei", domain: "huawei.com" },
  { name: "Sinopec", domain: "sinopecgroup.com" },
  { name: "Emirates Group", domain: "emirates.com" },
  { name: "DP World", domain: "dpworld.com" },
  { name: "Nubank", domain: "nubank.com.br" },
  { name: "Mercado Libre", domain: "mercadolibre.com" },
  { name: "Dangote Group", domain: "dangote.com" },
  { name: "MTN Group", domain: "mtn.com" },
  { name: "Safaricom", domain: "safaricom.co.ke" },
];

export function Logos3() {
  return (
    <div className="relative w-full overflow-hidden py-12 bg-gradient-to-r from-transparent via-ink-black/30 to-transparent">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-silk-crimson-400/5 via-transparent to-imperial-gold-400/5" />
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-gradient-to-r from-silk-crimson-400/10 to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-gradient-to-l from-imperial-gold-400/10 to-transparent blur-3xl opacity-50" />
      
      {/* Main scrolling container with premium styling */}
      <div className="relative flex animate-premium-scroll space-x-16 px-8">
        {/* Duplicate the array for seamless loop */}
        {[...partners, ...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="group relative flex-shrink-0 flex flex-col items-center justify-center min-w-[140px] h-24 p-4"
          >
            {/* Premium logo container with sophisticated hover effects */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Glowing background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-silk-crimson-400/0 via-imperial-gold-400/0 to-silk-crimson-400/0 group-hover:from-silk-crimson-400/10 group-hover:via-imperial-gold-400/15 group-hover:to-silk-crimson-400/10 rounded-xl transition-all duration-700 blur-xl" />
              
              {/* Premium border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-imperial-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Logo image with premium filters */}
              <img
                src={`https://logo.clearbit.com/${partner.domain}`}
                alt={`${partner.name} Logo`}
                className="relative z-10 h-12 max-w-[120px] object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
                loading="lazy"
                draggable={false}
              />
              
              {/* Premium shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pearl-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl" />
            </div>
            
            {/* Company name with premium typography */}
            <span className="mt-2 text-xs font-semibold text-pearl-white/50 group-hover:text-imperial-gold-400 transition-all duration-300 tracking-wider uppercase">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Premium gradient overlays for seamless edge blending */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-ink-black via-ink-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-ink-black via-ink-black/80 to-transparent z-10 pointer-events-none" />
      
      {/* Subtle premium accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-silk-crimson-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-imperial-gold-400/30 to-transparent" />
    </div>
  );
}

export default Logos3;
