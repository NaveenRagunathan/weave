
import React from "react";
import { Button } from "@/components/ui/button";

const bullets = [
  "Embedded compliance",
  "AI-powered intelligence",
  "Corridor-native onboarding",
  "Instant confirmation, human support"
];

const LiberationSection = () => (
  <section className="py-14 px-4 bg-gradient-to-br from-ink-black via-silk-crimson-400/7 to-imperial-gold-400/10">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-silk-crimson-400 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
        This Isn’t About Fintech. This Is Liberation.
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-6">
        The banks failed you. The corridors ignored you. The systems drained you.
      </h3>
      <p className="text-pearl-white/80 mb-4">
        WEAVE is infrastructure — liquid, trusted, sovereign. We’re not moving payments. We’re moving power.
      </p>
      <ul className="text-left max-w-lg mx-auto space-y-2 mb-7">
        {bullets.map((b, i) => <li key={i} className="text-lg">• {b}</li>)}
      </ul>
      <div className="mb-6 flex justify-center">
        <div className="rounded-xl border border-silk-crimson-400 p-8 bg-gradient-to-tr from-imperial-gold-400/5 to-silk-crimson-400/10 text-center text-imperial-gold-500">
          {/* Visual: Trust Triangle Glowing */}
          <span className="block text-lg">[Trust Triangle: Compliance ↔ Security ↔ Relationships]</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold px-8 py-4 rounded-full"
        >
          Join the WEAVE Network Today
        </Button>
      </div>
    </div>
  </section>
);

export default LiberationSection;
