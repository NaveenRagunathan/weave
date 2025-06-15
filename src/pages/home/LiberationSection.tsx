import React from "react";
import { Button } from "@/components/ui/button";

const bullets = [
  "Embedded compliance",
  "AI-powered intelligence",
  "Corridor-native onboarding",
  "Instant confirmation, human support"
];

const LiberationSection = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-ink-black via-silk-crimson-400/11 to-imperial-gold-400/10 border-b border-silk-crimson-400/10">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_3px_10px_rgba(220,20,60,0.10)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
        This Isn’t About Fintech. This Is Liberation.
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-7">
        The banks failed you. The corridors ignored you. The systems drained you.
      </h3>
      <p className="text-pearl-white/85 mb-6">
        WEAVE is infrastructure — liquid, trusted, sovereign. We’re not moving payments. We’re moving power.
      </p>
      <ul className="text-left max-w-lg mx-auto space-y-3 mb-8">
        {bullets.map((b, i) => <li key={i} className="text-lg bg-gradient-to-r from-silk-crimson-400/8 to-imperial-gold-400/10 px-5 py-2 rounded-lg border border-silk-crimson-400/13">• {b}</li>)}
      </ul>
      <div className="mb-8 flex justify-center">
        <div className="rounded-2xl border border-silk-crimson-400/35 p-9 bg-gradient-to-tr from-imperial-gold-400/10 to-silk-crimson-400/13 text-center text-imperial-gold-500 shadow-lg">
          {/* Visual: Trust Triangle Glowing */}
          <span className="block text-lg font-medium">[Trust Triangle: Compliance ↔ Security ↔ Relationships]</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-600 hover:to-imperial-gold-600 text-pearl-white font-bold px-10 py-5 rounded-full shadow-xl transition"
        >
          Join the WEAVE Network Today
        </Button>
      </div>
    </div>
  </section>
);

export default LiberationSection;
