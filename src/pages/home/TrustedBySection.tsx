
import React from "react";

const logos = [
  "Alibaba", "Huawei", "Sinopec", "Emirates Group", "DP World", "Nubank", "Mercado Libre", "Dangote Group", "MTN Group", "Safaricom"
];

const TrustedBySection = () => (
  <section className="py-10 px-4 bg-ink-black/95 border-b border-silk-crimson-400/20">
    <div className="max-w-5xl mx-auto text-center mb-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-pearl-white/80 mb-1">
        🛡️ Trusted by Thousands Across the New Trade Order
      </h3>
      <p className="text-pearl-white/70 text-xs sm:text-sm mb-4">
        From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on WEAVE to move capital where it matters — fast, secure, unstoppable.
      </p>
    </div>
    {/* Logo Wall */}
    <div className="flex flex-row items-center gap-6 overflow-x-auto justify-between pb-3 px-2 logos-scroll">
      {logos.map((logo) => (
        <div
          key={logo}
          className="min-w-[120px] flex items-center justify-center text-center px-3 py-2 rounded-md bg-gradient-to-tl from-silk-crimson-400/10 via-imperial-gold-400/5 to-ink-black/40 border border-silk-crimson-400/20 font-bold text-pearl-white"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: ".01em"
          }}
        >
          {logo}
        </div>
      ))}
    </div>
    <div className="max-w-4xl mx-auto">
      <p className="text-xs text-pearl-white/50 mt-4 mb-2">
        WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by multinationals, megaproject leaders, and digital exporters across the Global South.
      </p>
      <button className="mt-1 text-silk-crimson-400 underline underline-offset-2 text-sm font-semibold hover:text-silk-crimson-600 transition">
        See How These Leaders Use WEAVE &rarr;
      </button>
    </div>
  </section>
);

export default TrustedBySection;
