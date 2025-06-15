import React from "react";

const bullets = [
  { emoji: "🌐", text: "Pay and get paid — instantly, globally." },
  { emoji: "📈", text: "Lock rates, not pray for stability." },
  { emoji: "⛨", text: "Avoid bank drama and delays." },
  { emoji: "❌", text: "Stop bleeding capital on hidden fees." },
  { emoji: "✅", text: "Close when the deal is hot." }
];

const WhatYouWantSection = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-ink-black/97 to-imperial-gold-400/7 border-b border-imperial-gold-400/10">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_2px_12px_rgba(220,20,60,0.08)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
        What You Really Want
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-10">Trade Should Feel Like Power. Not Panic.</h3>
      <ul className="text-left max-w-2xl mx-auto space-y-4 mb-8">
        {bullets.map((b, idx) => (
          <li key={idx} className="text-lg flex items-center gap-2 text-pearl-white/90 bg-gradient-to-r from-imperial-gold-400/7 via-silk-crimson-400/3 to-transparent px-5 py-3 rounded-lg border border-imperial-gold-400/10 shadow-sm">
            <span className="text-xl">{b.emoji}</span> {b.text}
          </li>
        ))}
      </ul>
      <div className="italic text-pearl-white/80 mb-6">
        <q className="text-pearl-white/95">
          I don’t want a fintech app. I want a f**ing weapon.*
        </q>
        <span className="block text-right text-pearl-white/65">
          — Carlos, Bulk Coffee Exporter, Colombia
        </span>
      </div>
    </div>
  </section>
);

export default WhatYouWantSection;
