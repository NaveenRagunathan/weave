import React from "react";
import { Button } from "@/components/ui/button";

const userTypes = [
  "🇨🇳 Chinese exporters entering Africa & LatAm",
  "🌍 Diaspora entrepreneurs bridging family, trade & capital",
  "🏗️ Governments financing megaprojects",
  "🏦 Global South fintechs & banks expanding regional liquidity",
  "📦 Informal market traders scaling volume fast"
];

const WhoThisIsForSection = () => (
  <section className="py-20 px-4 bg-ink-black/97 border-b border-imperial-gold-400/9">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_2px_14px_rgba(220,20,60,0.06)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
        Who This Is For
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-9">
        If moving Products, you already know you need to move Capital Fast<br />
        <span className="text-pearl-white/70 font-normal text-base">
          And if you're building beyond borders, you're already late without WEAVE.
        </span>
      </h3>
      <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
        {userTypes.map((txt, idx) => (
          <li key={idx} className="text-lg flex items-center gap-2 text-pearl-white/90 bg-gradient-to-r from-silk-crimson-400/8 to-imperial-gold-400/8 px-5 py-3 rounded-lg border border-imperial-gold-400/13">
            {txt}
          </li>
        ))}
      </ul>
      {/* Slider Placeholder */}
      <div className="rounded-xl bg-gradient-to-tr from-imperial-gold-400/15 to-silk-crimson-400/8 border border-imperial-gold-400/25 p-6 mb-6">
        <div className="text-pearl-white text-center italic font-medium">
          [Visual slider: <span className="text-imperial-gold-500 font-semibold">Customer archetypes will auto-loop here</span>]
        </div>
      </div>
      <div className="mt-9 flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-600 hover:to-imperial-gold-600 text-pearl-white font-bold px-10 py-5 rounded-full shadow-xl transition"
        >
          Open your Weave Account Today
        </Button>
      </div>
    </div>
  </section>
);

export default WhoThisIsForSection;
