import React from "react";
import { Button } from "@/components/ui/button";

const usdcReasons = [
  "✅ Fully Regulated: Audited monthly. Backed 1:1 with U.S. dollars in U.S. banks.",
  "⚡ Final & Fast: No rollbacks. No 72-hour maybes. Just money—settled.",
  "🌍 Globally Liquid: Accepted across the Global South. No conversion headaches.",
  "🔒 Rock-Solid Trust: No funny business. Just the safest rails in digital finance."
];

const USDCSection = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-ink-black via-imperial-gold-500/10 to-silk-crimson-400/11 border-b border-silk-crimson-400/8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-7 text-silk-crimson-400 font-serif tracking-tight drop-shadow-[0_2px_14px_rgba(220,20,60,0.09)]" style={{ fontFamily: "'Harnet Serif', serif" }}>
        USDC: The Dollar, Reborn for This Century
      </h2>
      <div className="text-xl mb-4 text-pearl-white font-serif">A Stablecoin You Can Bet Your Business On.</div>
      <p className="text-pearl-white/85 mb-6 max-w-2xl mx-auto">
        In a world where capital must move fast and stay safe, WEAVE runs on USDC. Because in cross-border trade, you don’t gamble with your money.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-6">
        <img
          src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=026"
          alt="USDC Logo"
          width={88}
          className="rounded-lg bg-pearl-white/80 p-1 border border-imperial-gold-400/27 shadow"
        />
        <h3 className="text-imperial-gold-500 font-bold text-lg">Powering WEAVE with Trust You Can Count.</h3>
      </div>
      <p className="mb-9 text-pearl-white/70">In Trade, Trust Is the Real Currency.<br />
        Money dies in uncertainty.<br />
        Deals evaporate in FX limbo.<br />
        And growth bleeds out when capital crawls.<br />
        That’s why WEAVE is built on USDC — the most trusted digital dollar in the world.<br />
        Not just stable, Respected, Audited & Regulated.
      </p>
      <ul className="text-left max-w-lg mx-auto space-y-3 mb-6">
        {usdcReasons.map((r, i) => <li key={i} className="text-lg bg-gradient-to-r from-silk-crimson-400/10 to-imperial-gold-400/6 px-4 py-2 rounded-lg border border-imperial-gold-400/13">{r}</li>)}
      </ul>
      <p className="mb-7 text-pearl-white/70">
        The old dollar was built for banks.<br />
        <span className="text-imperial-gold-500">USDC was built for builders.</span>
      </p>
      <p className="mb-11 text-pearl-white/70">
        This isn’t crypto hype. It’s modern money.<br />
        It’s how WEAVE powers serious trade and it is the engine that will build your Business Empire.
      </p>
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-600 hover:from-silk-crimson-600 hover:to-imperial-gold-400 text-pearl-white font-bold px-10 py-5 rounded-full shadow-xl transition"
        >
          Experience the USDC Advantage &rarr;
        </Button>
      </div>
    </div>
  </section>
);

export default USDCSection;
