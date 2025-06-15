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
    <section className="w-full bg-gradient-to-b from-pearl-white via-white/70 to-pearl-white/80 py-8 md:py-10 border-y border-imperial-gold-400/15 shadow-sm overflow-hidden">
      <div className="text-center mb-2 px-2">
        <h2 className="text-xl md:text-2xl font-extrabold text-ink-black tracking-tight md:mb-1" style={{letterSpacing: "-0.5px"}}>
          Trusted by Thousands Across the New Trade Order
        </h2>
        {/* Premium Fast • Secure • Unstoppable row */}
        <div className="flex justify-center">
          <FastSecureUnstoppable />
        </div>
        <p className="text-base md:text-lg text-ink-black/80 mt-2 max-w-2xl mx-auto font-medium leading-snug">
          From <span className="text-silk-crimson-400 font-semibold">Guangzhou</span> to <span className="text-imperial-gold-500 font-semibold">Bogotá</span>.{" "}
          <span className="text-silk-crimson-400 font-semibold">Lagos</span> to <span className="text-imperial-gold-500 font-semibold">Dubai</span>. The architects of the Global South rely on{" "}
          <span className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent font-bold">WEAVE</span> to move capital where it matters — fast, secure, unstoppable.
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
                    <div className="rounded-xl p-2 md:p-3 bg-white/90 border border-imperial-gold-400/10 shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                      <img
                        src={`https://logo.clearbit.com/${partner.domain}`}
                        alt={`${partner.name} Logo`}
                        className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="z-40 font-medium text-xs max-w-xs text-ink-black bg-pearl-white/90 border border-silk-crimson-400/20 shadow-lg rounded-lg px-3 py-2">
                    {partner.tooltip}
                  </TooltipContent>
                </Tooltip>
                <span className="text-xs md:text-sm text-ink-black/80 mt-2 font-semibold whitespace-nowrap">
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
      <p className="text-center text-sm md:text-base text-ink-black/60 mt-8 md:mt-7 max-w-2xl mx-auto font-medium">
        WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by{" "}
        <span className="text-silk-crimson-400 font-semibold">multinationals</span>,{" "}
        <span className="text-imperial-gold-500 font-semibold">megaproject leaders</span>, and{" "}
        <span className="text-jade-flow-500 font-semibold">digital exporters</span> across the Global South.
      </p>
      <div className="flex justify-center mt-4">
        <button className="px-7 py-3 rounded-full font-semibold text-base bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-400 to-silk-crimson-400 text-pearl-white shadow hover:from-silk-crimson-500 hover:to-imperial-gold-500 transition-all duration-300 outline-none focus:ring-2 focus:ring-imperial-gold-400/30">
          See How These Leaders Use WEAVE &rarr;
        </button>
      </div>
    </section>
  );
}

export default Logos3;
