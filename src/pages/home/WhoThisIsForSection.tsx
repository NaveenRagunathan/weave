
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
  <section className="py-14 px-4 bg-ink-black/98">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-silk-crimson-400 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
        Who This Is For
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-8">
        If moving Products, you already know you need to move Capital Fast<br />
        <span className="text-pearl-white/70 font-normal text-base">
          And if you're building beyond borders, you're already late without WEAVE.
        </span>
      </h3>
      <ul className="text-left max-w-2xl mx-auto space-y-2 mb-6">
        {userTypes.map((txt, idx) => (
          <li key={idx} className="text-lg flex items-center gap-2 text-pearl-white/90">
            {txt}
          </li>
        ))}
      </ul>
      {/* Slider Placeholder */}
      <div className="rounded-xl bg-silk-crimson-400/10 border border-imperial-gold-400/30 p-4 mb-4">
        <div className="text-pearl-white text-center italic">
          [Visual slider: <span className="text-imperial-gold-500">Customer archetypes will auto-loop here</span>]
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button
          size="lg"
          className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold px-8 py-4 rounded-full"
        >
          Open your Weave Account Today
        </Button>
      </div>
    </div>
  </section>
);

export default WhoThisIsForSection;
