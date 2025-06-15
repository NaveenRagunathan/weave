
import React, { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  // Pause scroll on hover by toggling animationPlayState
  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="relative z-10 w-full bg-gradient-to-b from-imperial-gold-50 via-pearl-white/80 to-imperial-gold-100 py-12 overflow-hidden">
      <FlowLineSystem pattern="smooth" intensity="low" color="gold" />

      <div className="relative z-10">
        <div className="text-center mb-8 px-4">
          <h2 className="text-lg md:text-xl font-semibold text-ink-black mb-3">
            Trusted by Thousands Across the New Trade Order
          </h2>
          <p className="text-sm text-ink-black/80 max-w-3xl mx-auto font-medium leading-relaxed">
            From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on{" "}
            <span className="text-silk-crimson-400 font-semibold">WEAVE</span> to move capital where it matters — fast, secure, unstoppable.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-6">
          <div
            ref={scrollRef}
            className="flex animate-scroll space-x-16 w-max px-8 transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...partners, ...partners].map((partner, index) => (
              <Tooltip key={`${partner.name}-${index}`} delayDuration={80}>
                <TooltipTrigger asChild>
                  <div
                    className="flex items-center justify-center min-w-[120px] h-16 group cursor-pointer relative"
                    tabIndex={0}
                    aria-label={partner.name}
                  >
                    <img
                      src={partner.customLogo || (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : "")}
                      alt={`${partner.name} Logo`}
                      className={`
                        h-12 md:h-14 object-contain
                        opacity-80
                        group-hover:opacity-100
                        group-hover:scale-110
                        transition-all duration-300
                        [filter:none]
                        group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]
                      `}
                      loading="lazy"
                      draggable={false}
                      style={{
                        // Gold glow and color pop on hover; grayscale removed for better contrast
                        filter:
                          "none",
                      }}
                    />
                    {/* Hide ALL other visible text during hover */}
                    {/* (No .text element is rendered here, only via Tooltip) */}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-white/95 border-imperial-gold-200 text-ink-black max-w-xs text-center shadow-2xl z-50">
                  <p className="font-semibold text-imperial-gold-600">{partner.name}</p>
                  <p className="text-xs text-ink-black/80 mt-1">{partner.tooltip}</p>
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
              animation: scroll 40s linear infinite;
              animation-play-state: running;
            }
          `}</style>
        </div>

        <div className="text-center mt-8 px-4">
          <p className="text-sm text-ink-black/60 max-w-2xl mx-auto mb-6">
            WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by{" "}
            <span className="text-silk-crimson-400 font-semibold">multinationals</span>,{" "}
            <span className="text-imperial-gold-600 font-semibold">megaproject leaders</span>, and{" "}
            <span className="text-jade-flow-600 font-semibold">digital exporters</span> across the Global South.
          </p>
          <button className="px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-400 to-silk-crimson-400 text-pearl-white shadow-lg hover:from-silk-crimson-500 hover:to-imperial-gold-500 transition-all duration-300 outline-none focus:ring-2 focus:ring-imperial-gold-400/30 hover:shadow-xl">
            See How These Leaders Use WEAVE →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
