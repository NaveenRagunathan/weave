
import React from "react";
import Logos3 from "@/components/ui/logos3";

const TrustedBySection = () => (
  <section className="py-10 px-4 bg-ink-black/95 border-b border-silk-crimson-400/20">
    <div className="max-w-5xl mx-auto text-center mb-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-pearl-white/80 mb-1">
        🛡️ Trusted by Thousands Across the New Trade Order
      </h3>
      <p className="text-pearl-white/70 text-xs sm:text-sm mb-4">
        From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on WEAVE to move capital where it matters — fast, secure, unstoppable.
      </p>
    </div>
    {/* Modern logos3 style */}
    <div className="max-w-5xl mx-auto">
      <Logos3 />
    </div>
    <div className="max-w-4xl mx-auto">
      <p className="text-xs text-pearl-white/50 mt-4 mb-2">
        WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by multinationals, megaproject leaders, and digital exporters across the Global South.
      </p>
      <button className="mt-1 text-silk-crimson-400 underline underline-offset-2 text-sm font-semibold hover:text-silk-crimson-600 transition">
        See How These Leaders Use WEAVE &rarr;
      </button>
    </div>
  </section>
);

export default TrustedBySection;
