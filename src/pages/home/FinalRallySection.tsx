
import React from "react";
import { Button } from "@/components/ui/button";

const FinalRallySection = () => (
  <section className="py-14 px-4 bg-ink-black">
    <div className="max-w-4xl mx-auto text-center mb-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-silk-crimson-400 font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
        You Built the Trade. You Deserve the Flow.
      </h2>
      <p className="text-lg text-pearl-white/80 mb-6">
        You already do the hard work. You found the customers. You made the product.<br />
        You shouldn't lose 10% of your income to systems built against you.
        <br/><br/>
        WEAVE lets you trade and move Money like it’s a superpower — no permission needed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <Button
          size="lg"
          className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold px-8 py-4 rounded-full"
        >
          Create Your Free WEAVE Account Now
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-imperial-gold-500 text-imperial-gold-500 hover:bg-imperial-gold-500 hover:text-ink-black px-8 py-4 rounded-full font-semibold transition"
        >
          Talk to a Real Human
        </Button>
      </div>
    </div>
  </section>
);

export default FinalRallySection;
