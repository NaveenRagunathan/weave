import React from "react";
import { Button } from "@/components/ui/button";

const tableRows = [
  ["3–5 day wires", "Same-day confirmations"],
  ["6–15% FX loss", "0–1% FX loss (stablecoin)"],
  ["Third-party brokers", "Corridor-native automation"],  
  ["Bank suspicion", "Instant trust frameworks"],
  ["Stress, guessing", "Clarity. Confidence. Flow."]
];

const MeetWeaveSection = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-ink-black via-silk-crimson-600/6 to-imperial-gold-400/10 shadow-inner">
    {/* Dynamic Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-ink-black to-silk-crimson-400/10 opacity-50 animate-flowing-gradient"></div>
    <div className="absolute inset-0 pointer-events-none">
      <div className="particle-system"></div>
    </div>

    <div className="relative max-w-5xl mx-auto text-center mb-2">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_2px_14px_rgba(220,20,60,0.08)] animate-glow" style={{ fontFamily: "'Harnet Serif', serif" }}>
        Meet WEAVE: Built for Real Traders
      </h2>
      <div className="mb-4 text-imperial-gold-500 font-serif text-2xl animate-fade-in">Not a Wallet. A Weapon.</div>
      <div className="mb-4 text-pearl-white/80 text-lg max-w-2xl mx-auto animate-slide-in">
        Stablecoin rails. Corridor-specific logic. Compliance embedded. All built for the Global South.
      </div>

      {/* Interactive Table */}
      <div className="overflow-x-auto mb-7">
        <table className="min-w-full mx-auto border-separate border-spacing-y-3 text-lg shadow-xl rounded-xl overflow-hidden">
          <thead>
            <tr>
              <th className="text-pearl-white/60 font-semibold px-6 py-3 bg-silk-crimson-400/12 rounded-tl-xl animate-glow">Without WEAVE</th>
              <th className="text-imperial-gold-500 font-semibold px-6 py-3 bg-imperial-gold-400/9 rounded-tr-xl animate-glow">With WEAVE</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map(([a, b], idx) => (
              <tr key={idx} className="hover:scale-105 transition-transform duration-300">
                <td className="bg-ink-black/90 text-pearl-white px-6 py-3 rounded-l-xl border-b border-silk-crimson-400/8 shadow-md hover:shadow-lg">{a}</td>
                <td className="bg-gradient-to-r from-silk-crimson-400/15 to-imperial-gold-500/12 text-pearl-white px-6 py-3 rounded-r-xl border-b border-imperial-gold-400/10 shadow-md hover:shadow-lg">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-10 flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-600 hover:to-imperial-gold-600 text-pearl-white font-bold px-10 py-5 rounded-full shadow-xl transition hover:scale-110"
        >
          Start Using WEAVE — It's Free
        </Button>
      </div>
    </div>
  </section>
);

export default MeetWeaveSection;
