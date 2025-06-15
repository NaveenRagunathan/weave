
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
  <section className="py-14 px-4 bg-gradient-to-br from-ink-black via-silk-crimson-600/5 to-imperial-gold-400/10">
    <div className="max-w-5xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-silk-crimson-400 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
        Meet WEAVE: Built for Real Traders
      </h2>
      <div className="mb-4 text-imperial-gold-500 font-serif text-xl">
        Not a Wallet. A Weapon.
      </div>
      <div className="mb-3 text-pearl-white/80 text-lg max-w-2xl mx-auto">
        Stablecoin rails. Corridor-specific logic. Compliance embedded. All built for the Global South.
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full mx-auto border-separate border-spacing-y-2 text-lg">
          <thead>
            <tr>
              <th className="text-pearl-white/60 font-semibold px-4 py-2">Without WEAVE</th>
              <th className="text-imperial-gold-500 font-semibold px-4 py-2">With WEAVE</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map(([a, b], idx) => (
              <tr key={idx}>
                <td className="bg-ink-black/90 text-pearl-white px-4 py-2 rounded-l-md">{a}</td>
                <td className="bg-gradient-to-r from-silk-crimson-400/30 to-imperial-gold-500/15 text-pearl-white px-4 py-2 rounded-r-md">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold px-8 py-4 rounded-full"
        >
          Start Using WEAVE — It’s Free
        </Button>
      </div>
    </div>
  </section>
);

export default MeetWeaveSection;
