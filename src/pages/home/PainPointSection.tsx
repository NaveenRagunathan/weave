import React from "react";

const bullets = [
  "❌ Your payment took 5 days and the rate changed.",
  "❌ Your supplier ghosted because funds didn’t clear.",
  "❌ You lost 9% in FX on a 6-figure deal.",
  "❌ You had to trust a broker you barely know."
];

const PainPointSection = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-ink-black/97 via-ink-black/90 to-silk-crimson-400/4 border-b border-imperial-gold-400/8">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_2px_12px_rgba(220,20,60,0.08)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
        If You’ve Ever Tried to Move Money Across Borders...
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-10">You already know the pain.</h3>
      <ul className="text-left max-w-2xl mx-auto space-y-4 mb-9">
        {bullets.map((b, idx) => (
          <li key={idx} className="text-lg text-pearl-white/90 bg-gradient-to-r from-silk-crimson-400/6 to-imperial-gold-400/1 px-5 py-3 rounded-lg border border-silk-crimson-400/7 shadow-sm">
            {b}
          </li>
        ))}
      </ul>
      <div className="italic text-pearl-white/70 mb-5">
        <span className="block font-medium text-pearl-white/90">This isn't inconvenience. It’s erosion.</span>
        <div className="text-xs mt-2 bg-ink-black/80 rounded-lg px-5 py-3 border border-imperial-gold-400/14 max-w-lg mx-auto">
          <q className="text-pearl-white/95">
            We lost a $200K opportunity because of a delayed FX confirmation.
          </q>
          <span className="block text-right text-pearl-white/60">— Nana, Timber Exporter, Ghana</span>
        </div>
      </div>
    </div>
  </section>
);

export default PainPointSection;
