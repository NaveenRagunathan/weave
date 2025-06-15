import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import FastSecureUnstoppable from "./FastSecureUnstoppable";

const partners = [
  { name: "Alibaba", domain: "alibaba.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "Huawei", domain: "huawei.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Sinopec", domain: "sinopecgroup.com", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Emirates Group", domain: "emirates.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "DP World", domain: "dpworld.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Nubank", domain: "nubank.com.br", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Mercado Libre", domain: "mercadolibre.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Dangote Group", domain: "dangote.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "MTN Group", domain: "mtn.com", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Safaricom", domain: "safaricom.co.ke", tooltip: "Using WEAVE to streamline FX operations" },
];

export function Logos3() {
  return (
    <section className="w-full bg-gradient-to-br from-[#D4AF37]/90 via-[#fffbe7]/80 to-[#DC143C]/80 py-10 md:py-14 border-y border-imperial-gold-400/40 shadow-xl overflow-hidden">
      <div className="text-center mb-2 px-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight md:mb-1 bg-gradient-to-r from-imperial-gold-500 via-silk-crimson-400 to-imperial-gold-600 bg-clip-text text-transparent drop-shadow-lg" style={{letterSpacing: "-0.5px"}}>
          Trusted by Thousands Across the New Trade Order
        </h2>
        {/* Premium Fast • Secure • Unstoppable row */}
        <div className="flex justify-center">
          <FastSecureUnstoppable />
        </div>
        <p className="text-base md:text-lg text-[#A67C36] mt-2 max-w-2xl mx-auto font-semibold leading-snug drop-shadow-gold">
          From <span className="text-silk-crimson-400 font-semibold">Guangzhou</span> to <span className="text-imperial-gold-500 font-semibold">Bogotá</span>.{" "}
          <span className="text-silk-crimson-400 font-semibold">Lagos</span> to <span className="text-imperial-gold-500 font-semibold">Dubai</span>. The architects of the Global South rely on{" "}
          <span className="bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-500 to-silk-crimson-600 bg-clip-text text-transparent font-bold">WEAVE</span> to move capital where it matters — <span className="text-imperial-gold-500">fast</span>, <span className="text-silk-crimson-400">secure</span>, <span className="text-imperial-gold-500">unstoppable</span>.
        </p>
      </div>
      <div className="relative w-full">
        <TooltipProvider>
          {/* Scrolling logos */}
          <div className="flex animate-premium-scroll space-x-10 md:space-x-14 w-max px-6 py-3">
            {[...partners, ...partners].map((partner, idx) => (
              <div key={`${partner.name}-${idx}`} className="relative group flex flex-col items-center min-w-[90px] md:min-w-[108px]">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="rounded-xl p-2 md:p-3 bg-gradient-to-br from-[#fffbe7]/90 via-[#D4AF37]/30 to-[#DC143C]/10 border border-imperial-gold-400/40 shadow-gold hover:shadow-xl transition-all flex items-center justify-center">
                      <img
                        src={`https://logo.clearbit.com/${partner.domain}`}
                        alt={`${partner.name} Logo`}
                        className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="z-40 font-semibold text-xs max-w-xs text-silk-crimson-600 bg-gradient-to-br from-imperial-gold-50 via-pearl-white/95 to-imperial-gold-100 border border-imperial-gold-400/30 shadow-xl rounded-xl px-3 py-2">
                    {partner.tooltip}
                  </TooltipContent>
                </Tooltip>
                <span className="text-xs md:text-sm text-imperial-gold-700 mt-2 font-bold whitespace-nowrap drop-shadow-gold">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </TooltipProvider>
        {/* Premium custom scroll animation */}
        <style>{`
          @media (max-width: 600px) {
            .animate-premium-scroll {
              animation: premium-scroll 38s linear infinite;
            }
          }
          @keyframes premium-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
      <p className="text-center text-sm md:text-base text-imperial-gold-700/80 mt-8 md:mt-7 max-w-2xl mx-auto font-semibold">
        WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by 
        <span className="text-silk-crimson-400 font-bold">multinationals</span>, 
        <span className="text-imperial-gold-500 font-bold">megaproject leaders</span>, and 
        <span className="text-jade-flow-500 font-bold">digital exporters</span> across the Global South.
      </p>
      <div className="flex justify-center mt-4">
        <button className="px-7 py-3 rounded-full font-bold text-base bg-gradient-to-r from-imperial-gold-500 via-silk-crimson-400 to-imperial-gold-600 text-pearl-white shadow-xl hover:from-silk-crimson-500 hover:to-imperial-gold-500 transition-all duration-300 outline-none focus:ring-2 focus:ring-imperial-gold-400/40 border-2 border-imperial-gold-400">
          See How These Leaders Use WEAVE &rarr;
        </button>
      </div>
    </section>
  );
}

export default Logos3;
