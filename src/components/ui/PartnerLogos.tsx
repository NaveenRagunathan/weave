
import React from "react";

const partners = [
  { name: "Huawei", domain: "huawei.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Emirates Group", domain: "emirates.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "Sinopec", domain: null, customLogo: "http://www.sinopecgroup.com/r/cms/jtyw/default/images/logo2021.png", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Nubank", domain: "nubank.com.br", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Mercado Libre", domain: "mercadolibre.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Dangote Group", domain: "dangote.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
];

const PartnerLogos = () => {
  return (
    <section className="w-full bg-pearl-white/95 py-16 sm:py-20 border-t border-b border-imperial-gold-400/15 overflow-hidden shadow-sm">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-black tracking-tight">
          Trusted by Thousands Across the New Trade Order
        </h2>
        <p className="text-base sm:text-lg text-ink-black/80 mt-4 max-w-3xl mx-auto font-medium leading-relaxed">
          From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on{" "}
          <span className="text-silk-crimson-400 font-semibold">WEAVE</span> to move capital where it matters — fast, secure, unstoppable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="relative group">
              <img
                src={partner.customLogo || (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : "")}
                alt={`${partner.name} Logo`}
                className="h-10 md:h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-ink-black text-pearl-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 border border-silk-crimson-400/20 shadow-lg">
                {partner.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-base text-ink-black/70 mt-12 max-w-3xl mx-auto leading-relaxed">
        WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by <span className="text-silk-crimson-400 font-semibold">multinationals</span>, <span className="text-imperial-gold-500 font-semibold">megaproject leaders</span>, and <span className="text-jade-flow-500 font-semibold">digital exporters</span> across the Global South.
      </p>

      <div className="text-center mt-8">
        <button className="px-8 py-3.5 rounded-full font-bold text-base bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-400 to-silk-crimson-400 text-pearl-white shadow-lg shadow-silk-crimson-500/10 hover:shadow-xl hover:shadow-silk-crimson-500/20 hover:from-silk-crimson-500 hover:to-imperial-gold-500 transition-all duration-300 outline-none focus:ring-2 focus:ring-imperial-gold-400/30">
          See How These Leaders Use WEAVE →
        </button>
      </div>
    </section>
  );
};

export default PartnerLogos;
