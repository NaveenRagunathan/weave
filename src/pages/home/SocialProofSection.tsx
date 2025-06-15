import React from "react";
import { Button } from "@/components/ui/button";

interface SocialStat {
  stat: string;
  desc: string;
}

const socialStats: SocialStat[] = [
  { stat: "$1.2B+", desc: "volume moved" },
  { stat: "12", desc: "corridors live" },
  { stat: "99.9%", desc: "uptime" },
  { stat: "24,000+", desc: "verified business accounts" },
  { stat: "Real-time", desc: "human support" },
  { stat: "60+", desc: "partnered institutions" },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-ink-black to-imperial-gold-400/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_3px_12px_rgba(220,20,60,0.14)]"
          style={{ fontFamily: "'Harnet Serif', serif" }}
        >
          The Network Gets Smarter With You
        </h2>
        <h3 className="text-xl sm:text-2xl text-imperial-gold-500 font-semibold mb-8">
          Every new account makes the network smarter, faster, safer.
          <br />
          Every dollar accelerates the flow.
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-9 gap-y-6 mb-10 max-w-2xl mx-auto">
          {socialStats.map(({ stat, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gradient-to-t from-silk-crimson-400/5 to-imperial-gold-400/5 px-5 py-6 rounded-2xl shadow-md border border-imperial-gold-500/10"
            >
              <span className="text-silk-crimson-400 font-extrabold text-3xl">
                {stat}
              </span>
              <span className="text-pearl-white/70 text-base">{desc}</span>
            </div>
          ))}
        </div>

        {/* Trusted By Wall */}
        <div className="flex flex-col items-center justify-center mb-12">
          <span className="text-base font-semibold text-imperial-gold-400 mb-3 tracking-wide opacity-90 text-center block">
            Trusted By
          </span>
          <div className="flex flex-wrap justify-center gap-3 mb-10 w-full max-w-3xl mx-auto">
            {[
              "Chamber of Commerce China–Africa",
              "Shenzhen Port Tech",
              "Nairobi Corridor Fund",
              "Diaspora Capital Alliance",
              "African Fintech Circle",
            ].map((name, idx) => (
              <span
                key={idx}
                className="px-5 py-2 rounded-full bg-ink-black/60 text-pearl-white/90 text-base font-medium shadow-sm border border-imperial-gold-400/15 hover:bg-imperial-gold-400/10 transition-colors duration-200"
                style={{ letterSpacing: "0.01em" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-600 hover:to-imperial-gold-600 text-pearl-white font-bold px-10 py-5 rounded-full shadow-xl transition"
          >
            Join the Winning Network →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
