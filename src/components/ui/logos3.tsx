import React from "react";
import { Button } from "./button";
import WeaveLogo from "@/components/ui/WeaveLogo";
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
    <section className="w-full bg-gradient-to-br from-brand-blue/90 via-cool-gray/80 to-brand-blue/80 py-10 md:py-14 border-y border-brand-blue/40 shadow-xl overflow-hidden">
      <div className="text-center mb-2 px-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight md:mb-1 bg-gradient-to-r from-cool-gray-500 via-brand-blue-400 to-cool-gray-600 bg-clip-text text-transparent drop-shadow-lg" style={{letterSpacing: "-0.5px"}}>
          Trusted by Thousands Across the New Trade Order
        </h2>
        {/* Premium Fast • Secure • Unstoppable row */}
        <div className="flex justify-center">
          <FastSecureUnstoppable />
        </div>
        <p className="text-base md:text-lg text-[#A67C36] mt-2 max-w-2xl mx-auto font-semibold leading-snug drop-shadow-gold">
          From <span className="text-brand-blue-400 font-semibold">Guangzhou</span> to <span className="text-cool-gray-500 font-semibold">Bogotá</span>.{" "}
          <span className="text-brand-blue-400 font-semibold">Lagos</span> to <span className="text-cool-gray-500 font-semibold">Dubai</span>. The architects of the Global South rely on{" "}
          <WeaveLogo className="bg-gradient-to-r from-brand-blue-400 via-cool-gray-500 to-brand-blue-600 bg-clip-text text-transparent text-4xl" /> to move capital where it matters — <span className="text-cool-gray-500">fast</span>, <span className="text-brand-blue-400">secure</span>, <span className="text-cool-gray-500">unstoppable</span>.
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
                    <div className="rounded-xl p-2 md:p-3 bg-gradient-to-br from-cool-gray/90 via-brand-blue/30 to-cool-gray/10 border border-brand-blue/40 shadow-glow-blue hover:shadow-xl transition-all flex items-center justify-center">
                      <img
                        src={`https://logo.clearbit.com/${partner.domain}`}
                        alt={`${partner.name} Logo`}
                        className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="z-40 font-semibold text-xs max-w-xs min-h-[54px] text-brand-blue bg-gradient-to-br from-cool-gray-50 via-off-white/95 to-cool-gray-100 border border-brand-blue/30 shadow-xl rounded-3xl px-4 py-9">
                    {partner.tooltip}
                  </TooltipContent>
                </Tooltip>
                <span className="text-xs md:text-sm text-brand-blue/80 mt-2 font-bold whitespace-nowrap drop-shadow-glow-blue">
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
      <p className="text-center text-sm md:text-base text-brand-blue/70 mt-8 md:mt-7 max-w-2xl mx-auto font-semibold">
        <WeaveLogo /> is the invisible engine behind thousands of cross-border transactions every day — trusted by 
        <span className="text-brand-blue font-bold">multinationals</span>, 
        <span className="text-brand-blue font-bold">megaproject leaders</span>, and 
        <span className="text-jade-flow-500 font-bold">digital exporters</span> across the Global South.
      </p>
      <div className="flex justify-center mt-4">
        <button className="px-7 py-3 rounded-full font-bold text-base bg-gradient-to-r from-brand-blue via-cool-gray to-brand-blue/80 text-off-white shadow-xl hover:from-cool-gray hover:to-brand-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-blue/40 border-2 border-brand-blue">
          See How These Leaders Use <WeaveLogo /> &rarr;
        </button>
      </div>
    </section>
  );
}

export default Logos3;
