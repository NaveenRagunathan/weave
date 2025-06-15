
import React from "react";

const powerhouses = [
  "Dangote Group", "Alibaba Group", "Flutterwave", "Tencent", "Interswitch",
  "Shein", "MTN Group", "JD.com", "Jumia", "Zhongtai Logistics",
  "UBA Group", "BYD (Build Your Dreams)", "Chipper Cash", "Huawei"
];

const TrustedPowerhousesSection = () => (
  <section className="py-14 px-4 bg-ink-black/98">
    <div className="max-w-4xl mx-auto text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-silk-crimson-400 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
        "The Titans of Trade Move With WEAVE."
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-8">
        From ports to tech parks, from Lagos to Shenzhen — the most influential businesses in China and Africa count on WEAVE to keep their money flowing and their deals closing.
      </h3>
      {/* Logos grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-5">
        {powerhouses.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-tr from-silk-crimson-400/10 via-imperial-gold-500/10 to-ink-black/50 border border-imperial-gold-500/20 font-bold text-pearl-white text-center text-sm"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700
            }}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="italic text-pearl-white/60 mb-5">
        "If you move goods across borders or power the next billion, chances are you’ve already moved with us — or soon will."
        <div className="block text-right text-pearl-white/50 mt-1">
          — WEAVE Partnerships Team
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
        <button className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold px-8 py-3 rounded-full transition">
          Become a WEAVE Partner
        </button>
        <button className="border border-imperial-gold-500 text-imperial-gold-500 hover:bg-imperial-gold-500 hover:text-ink-black px-8 py-3 rounded-full font-semibold transition">
          See Corridor Case Studies
        </button>
      </div>
      <div className="mt-6 bg-imperial-gold-400/5 p-5 rounded-xl aspect-video flex items-center justify-center border border-imperial-gold-500/30">
        <span className="text-imperial-gold-400 text-center text-sm">
          [Placeholder for video testimonials/quotes slider]
        </span>
      </div>
      <div className="italic text-pearl-white/70 mt-5 text-base">
        <span className="block">“What used to take 3 days and cost us 5% in FX slippage now settles in 10 minutes, on-chain, with full transparency.”</span>
        <span className="block text-right text-pearl-white/60">— CFO, Tier 1 Textile Importer, Nigeria</span>
      </div>
    </div>
  </section>
);

export default TrustedPowerhousesSection;
