
import React from "react";

const bullets = [
  "❌ Your payment took 5 days and the rate changed.",
  "❌ Your supplier ghosted because funds didn’t clear.",
  "❌ You lost 9% in FX on a 6-figure deal.",
  "❌ You had to trust a broker you barely know."
];

const PainPointSection = () => (
  <section className="py-14 px-4 bg-ink-black/95">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-silk-crimson-400 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
        If You’ve Ever Tried to Move Money Across Borders...
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-8">You already know the pain.</h3>
      <ul className="text-left max-w-2xl mx-auto space-y-2 mb-6">
        {bullets.map((b, idx) => (
          <li key={idx} className="text-lg text-pearl-white/90">{b}</li>
        ))}
      </ul>
      <div className="italic text-pearl-white/70 mb-4">
        <span className="block font-medium">This isn't inconvenience. It’s erosion.</span>
        <div className="text-xs mt-2">
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
