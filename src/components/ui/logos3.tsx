
import React from "react";

const partners = [
  { name: "Emirates Group", domain: "emirates.com" },
  { name: "DP World", domain: "dpworld.com" },
  { name: "Nubank", domain: "nubank.com.br" },
  { name: "Mercado Libre", domain: "mercadolibre.com" },
  { name: "Dangote Group", domain: "dangote.com" },
  { name: "MTN Group", domain: "mtn.com" },
];

export function Logos3() {
  return (
    <section className="w-full bg-gradient-to-b from-pearl-white via-white/70 to-pearl-white/80 py-10 md:py-14 border-y border-imperial-gold-400/15 shadow-sm overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-7 px-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink-black tracking-tight mb-3" style={{letterSpacing: "-0.5px"}}>
          Trusted by Thousands Across the New Trade Order
        </h2>
        <p className="text-base md:text-lg leading-relaxed font-semibold mb-8">
          From <span className="text-silk-crimson-400 font-extrabold">Guangzhou</span> to <span className="text-imperial-gold-500 font-extrabold">Bogotá</span>. <span className="text-silk-crimson-400 font-extrabold">Lagos</span> to <span className="text-imperial-gold-500 font-extrabold">Dubai</span>. The architects of the Global South rely on <span className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent font-bold">WEAVE</span> to move capital where it matters — fast, secure, unstoppable.
        </p>
        <div className="flex flex-wrap gap-5 md:gap-8 items-stretch justify-center mb-7">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center flex-grow basis-[100px] max-w-[110px] sm:basis-[140px] sm:max-w-[152px]"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-pearl-white/50 px-6 py-5 md:px-7 md:py-6 flex min-h-[68px] min-w-[68px] items-center justify-center mb-2" style={{ boxShadow: "0 4px 24px 0 rgba(212, 175, 55, 0.06)" }}>
                <img
                  src={`https://logo.clearbit.com/${partner.domain}`}
                  alt={`${partner.name} Logo`}
                  className="h-9 w-9 sm:h-11 sm:w-11 object-contain transition-transform duration-200 hover:scale-105"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="text-ink-black text-sm md:text-base font-semibold mt-1 text-center">{partner.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-[15px] md:text-base text-ink-black/70 font-medium mb-7">
          WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by{" "}
          <span className="text-silk-crimson-400 font-semibold">multinationals</span>,{" "}
          <span className="text-imperial-gold-500 font-semibold">megaproject leaders</span>, and{" "}
          <span className="text-jade-flow-500 font-semibold">digital exporters</span> across the Global South.
        </p>
        <div className="flex justify-center mt-3">
          <button
            className="px-8 py-3 rounded-full font-extrabold text-base bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-400 text-white shadow-lg transition-all duration-300 hover:from-silk-crimson-500 hover:to-imperial-gold-500 focus:ring-2 focus:ring-imperial-gold-400/30"
            style={{
              boxShadow: "0 2px 24px 0 rgba(220, 20, 60, 0.06), 0 1.5px 6px 0 rgba(212, 175, 55, 0.09)",
            }}
          >
            See How These Leaders Use WEAVE &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Logos3;

