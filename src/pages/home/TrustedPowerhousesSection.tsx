import React from "react";

const powerhouses = [
  "Alibaba",
  "Huawei",
  "Sinopec",
  "Emirates Group",
  "DP World",
  "Nubank",
  "Mercado Libre",
  "Dangote Group",
  "MTN Group",
  "Safaricom"
];

const TrustedPowerhousesSection = () => (
  <section className="py-20 px-4 bg-ink-black/97 shadow-inner">
    <div className="max-w-4xl mx-auto text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_3px_10px_rgba(220,20,60,0.11)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
        "The Titans of Trade Move With WEAVE."
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-11">
        From ports to tech parks, from Lagos to Shenzhen — the most influential businesses in China and Africa count on WEAVE to keep their money flowing and their deals closing.
      </h3>
      {/* Logos grid */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-10">
  {powerhouses.map((name) => (
    <span
      key={name}
      className="px-5 py-2 rounded-full border border-[#e3c770] font-extrabold text-base md:text-lg bg-transparent transition-all duration-200 shadow-none hover:shadow-[0_0_12px_2px_rgba(227,199,112,0.22)] hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-[#e3c770] via-[#ffe9a7] to-[#bfa76a] drop-shadow-[0_2px_8px_rgba(32,28,10,0.54)]"
      style={{ WebkitTextFillColor: 'transparent', letterSpacing: '0.01em' }}
    >
      {name}
    </span>
  ))}
</div>
      <div className="italic text-pearl-white/70 mb-6">
        "If you move goods across borders or power the next billion, chances are you've already moved with us — or soon will."
        <div className="block text-right text-pearl-white/55 mt-1">
          — WEAVE Partnerships Team
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-center mb-4">
        <button className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-600 hover:from-silk-crimson-600 hover:to-imperial-gold-700 text-pearl-white font-bold px-10 py-4 rounded-full shadow-lg transition">
          Become a WEAVE Partner
        </button>
        <button className="border-2 border-imperial-gold-500 text-imperial-gold-500 hover:bg-imperial-gold-500 hover:text-ink-black px-10 py-4 rounded-full font-semibold transition">
          See Corridor Case Studies
        </button>
      </div>
      <div className="italic text-pearl-white/80 mt-7 text-base">
        <span className="block">"What used to take 3 days and cost us 5% in FX slippage now settles in 10 minutes, on-chain, with full transparency."</span>
        <span className="block text-right text-pearl-white/60">— CFO, Tier 1 Textile Importer, Nigeria</span>
      </div>
    </div>
  </section>
);

export default TrustedPowerhousesSection;
