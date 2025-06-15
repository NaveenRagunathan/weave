import React from "react";

const powerhouses = [
  "Dangote Group", "Alibaba Group", "Flutterwave", "Tencent", "Interswitch",
  "Shein", "MTN Group", "JD.com", "Jumia", "Zhongtai Logistics",
  "UBA Group", "BYD (Build Your Dreams)", "Chipper Cash", "Huawei"
];

const TrustedPowerhousesSection = () => (
  <section className="py-20 px-4 bg-ink-black/97 border-b border-imperial-gold-400/14 shadow-inner">
    <div className="max-w-4xl mx-auto text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_3px_10px_rgba(220,20,60,0.11)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
        "The Titans of Trade Move With WEAVE."
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-11">
        From ports to tech parks, from Lagos to Shenzhen — the most influential businesses in China and Africa count on WEAVE to keep their money flowing and their deals closing.
      </h3>
      {/* Logos grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-6">
        {powerhouses.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-tr from-silk-crimson-400/11 via-imperial-gold-500/13 to-ink-black/40 border border-imperial-gold-500/23 font-bold text-pearl-white text-center text-sm shadow"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700
            }}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="italic text-pearl-white/70 mb-6">
        "If you move goods across borders or power the next billion, chances are you’ve already moved with us — or soon will."
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
      <div className="mt-8 bg-imperial-gold-400/7 p-7 rounded-2xl aspect-video flex items-center justify-center border border-imperial-gold-500/25 shadow-inner">
        <span className="text-imperial-gold-400 text-center text-lg">
          [Placeholder for video testimonials/quotes slider]
        </span>
      </div>
      <div className="italic text-pearl-white/80 mt-7 text-base">
        <span className="block">“What used to take 3 days and cost us 5% in FX slippage now settles in 10 minutes, on-chain, with full transparency.”</span>
        <span className="block text-right text-pearl-white/60">— CFO, Tier 1 Textile Importer, Nigeria</span>
      </div>
    </div>
  </section>
);

export default TrustedPowerhousesSection;
