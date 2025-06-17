import React from "react";

import { ArrowRight, Network, CircleDollarSign, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Create your free WEAVE account",
    description: "",
    icon: Network,
  },
  {
    title: "Deposit CN¥ or your local currency",
    description: "",
    icon: CircleDollarSign,
  },
  {
    title: "Send USDC to your recipient — anywhere, instantly.",
    description: "",
    icon: CheckCircle2,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-pearl-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-base font-bold tracking-widest text-silk-crimson-400 uppercase mb-2">HOW WEAVE WORKS</h2>
          <div className="grid gap-10 md:grid-cols-3 mt-12">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="flex flex-col items-center bg-white border border-imperial-gold-200 rounded-2xl px-6 py-10 shadow-[0_2px_12px_0_rgba(212,175,55,0.08)]"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-silk-crimson-400/10 border border-silk-crimson-400 mb-4">
                  <step.icon className="w-7 h-7 text-silk-crimson-400" />
                </div>
                <h3 className="text-lg font-semibold text-ink-black mb-2 text-center">{step.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-silk-crimson-400 text-base font-bold rounded-full text-silk-crimson-400 bg-white hover:bg-imperial-gold-100 hover:text-silk-crimson-500 transition-all duration-200 shadow-md"
            >
              Check out your Corridor
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
