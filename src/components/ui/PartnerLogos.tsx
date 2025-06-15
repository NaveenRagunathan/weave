
import React from "react";
import FlowLineSystem from "@/components/transitions/FlowLineSystem";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const partners = [
  { name: "Alibaba", domain: "alibaba.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "Huawei", domain: "huawei.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Sinopec", domain: null, customLogo: "http://www.sinopecgroup.com/r/cms/jtyw/default/images/logo2021.png", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Emirates Group", domain: "emirates.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "DP World", domain: "dpworld.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Nubank", domain: "nubank.com.br", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Mercado Libre", domain: "mercadolibre.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Dangote Group", domain: "dangote.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "MTN Group", domain: "mtn.com", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Safaricom", domain: "safaricom.co.ke", tooltip: "Using WEAVE to streamline FX operations" },
];

const PartnerLogos = () => {
  return (
    <section className="relative z-10 w-full bg-ink-black py-8 border-t border-b border-imperial-gold-400/15 overflow-hidden shadow-sm">
      <FlowLineSystem pattern="smooth" intensity="low" color="gold" />
      
      <div className="relative z-10">
        <div className="text-center mb-6 px-4">
          <h2 className="text-lg md:text-xl font-semibold text-pearl-white mb-2">
            Trusted by Thousands Across the New Trade Order
          </h2>
          <p className="text-sm text-pearl-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
            From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on{" "}
            <span className="text-silk-crimson-400 font-semibold">WEAVE</span> to move capital where it matters — fast, secure, unstoppable.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-scroll space-x-12 w-max px-6">
            {[...partners, ...partners].map((partner, index) => (
              <Tooltip key={`${partner.name}-${index}`} delayDuration={100}>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center min-w-[100px] h-14 group cursor-pointer">
                    <img
                      src={partner.customLogo || (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : "")}
                      alt={`${partner.name} Logo`}
                      className="h-10 md:h-12 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-ink-black/90 backdrop-blur-sm border-imperial-gold-500/30 text-pearl-white max-w-xs text-center shadow-lg z-50">
                  <p className="font-medium">{partner.name}</p>
                  <p className="text-xs text-pearl-white/80 mt-1">{partner.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 35s linear infinite;
            }
          `}</style>
        </div>

        <div className="text-center mt-6 px-4">
          <p className="text-sm text-pearl-white/60 max-w-2xl mx-auto mb-4">
            WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by{" "}
            <span className="text-silk-crimson-400 font-semibold">multinationals</span>,{" "}
            <span className="text-imperial-gold-500 font-semibold">megaproject leaders</span>, and{" "}
            <span className="text-jade-flow-500 font-semibold">digital exporters</span> across the Global South.
          </p>

          <button className="px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-400 to-silk-crimson-400 text-pearl-white shadow hover:from-silk-crimson-500 hover:to-imperial-gold-500 transition-all duration-300 outline-none focus:ring-2 focus:ring-imperial-gold-400/30">
            See How These Leaders Use WEAVE →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
