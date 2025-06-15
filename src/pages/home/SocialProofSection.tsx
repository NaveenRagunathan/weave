
import React from "react";
import { Button } from "@/components/ui/button";

const socialStats = [
  { stat: "$1.2B+", desc: "volume moved" },
  { stat: "12", desc: "corridors live" },
  { stat: "99.9%", desc: "uptime" },
  { stat: "24,000+", desc: "verified business accounts" },
  { stat: "Real-time", desc: "human support" },
  { stat: "60+", desc: "partnered institutions" }
];

const logos = [
  "Chamber of Commerce China–Africa", "Shenzhen Port Tech", "Nairobi Corridor Fund", "Diaspora Capital Alliance", "African Fintech Circle"
];

const SocialProofSection = () => (
  <section className="py-14 px-4 bg-gradient-to-br from-ink-black via-silk-crimson-400/5 to-imperial-gold-400/20">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-silk-crimson-400 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
        Social Proof — The Network Gets Smarter With You
      </h2>
      <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-6">
        Every new account makes the network smarter, faster, safer.<br />
        Every dollar accelerates the flow.
      </h3>
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 mb-7 max-w-2xl mx-auto">
        {socialStats.map(({ stat, desc }, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-silk-crimson-400 font-extrabold text-3xl">{stat}</span>
            <span className="text-pearl-white/70 text-sm">{desc}</span>
          </div>
        ))}
      </div>
      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-3 mb-7">
        {logos.map(l => (
          <span key={l} className="bg-imperial-gold-500/10 border border-silk-crimson-400/15 px-4 py-1 rounded-full text-pearl-white/70 text-xs font-semibold">{l}</span>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold px-8 py-4 rounded-full"
        >
          Join the Winning Network →
        </Button>
      </div>
    </div>
  </section>
);

export default SocialProofSection;
