
import React from "react";

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
    <section className="w-full bg-ink-black py-10 border-t border-b border-imperial-gold-400/15 overflow-hidden shadow-sm">
      <div className="text-center mb-6 px-2">
        <h2 className="text-xl font-semibold text-pearl-white">
          Trusted by Thousands Across the New Trade Order
        </h2>
        <p className="text-sm text-pearl-white/80 mt-2 max-w-2xl mx-auto font-medium leading-snug">
          From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on{" "}
          <span className="text-silk-crimson-400 font-semibold">WEAVE</span> to move capital where it matters — fast, secure, unstoppable.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-10 w-max px-4 py-3">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="relative group flex flex-col items-center min-w-[90px] md:min-w-[108px]">
              <img
                src={partner.customLogo || (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : "")}
                alt={`${partner.name} Logo`}
                className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-ink-black text-pearl-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 border border-silk-crimson-400/20 shadow-lg">
                {partner.tooltip}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}</style>
      </div>

      <p className="text-center text-sm text-pearl-white/60 mt-6 max-w-2xl mx-auto">
        WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by <span className="text-silk-crimson-400 font-semibold">multinationals</span>, <span className="text-imperial-gold-500 font-semibold">megaproject leaders</span>, and <span className="text-jade-flow-500 font-semibold">digital exporters</span> across the Global South.
      </p>

      <div className="text-center mt-4">
        <button className="px-7 py-3 rounded-full font-semibold text-base bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-400 to-silk-crimson-400 text-pearl-white shadow hover:from-silk-crimson-500 hover:to-imperial-gold-500 transition-all duration-300 outline-none focus:ring-2 focus:ring-imperial-gold-400/30">
          See How These Leaders Use WEAVE →
        </button>
      </div>
    </section>
  );
};

export default PartnerLogos;
