import React, { useState, useMemo } from "react";
import { gradients } from "@/lib/gradients";
import { ArrowRight } from "lucide-react";

const interpolateFee = (high: number, low: number, amount: number): number => {
  if (amount <= 10000) return high;
  if (amount >= 100000) return low;
  const ratio = (amount - 10000) / (100000 - 10000);
  return +(high + (low - high) * ratio).toFixed(2);
};

const allProviders = ["WEAVE", "Stripe", "Wise", "Yeepay", "XTransfer"] as const;
type Provider = typeof allProviders[number];

const competitors = ["Stripe", "Wise", "Yeepay", "XTransfer"] as const;
type Competitor = typeof competitors[number];

export default function FeesComparisonSection() {
  const [amount, setAmount] = useState('5000');
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor>("Stripe");
  const numericAmount = useMemo(() => Number(amount) || 0, [amount]);

  const tiers: Record<Provider, { high: number; low: number }> = {
    WEAVE: { high: 0.5, low: 0.3 },
    Stripe: { high: 2.0, low: 1.5 },
    Wise: { high: 1.5, low: 1.2 },
    Yeepay: { high: 1.8, low: 1.5 },
    XTransfer: { high: 1.2, low: 1.0 },
  };

  const percents = useMemo(() => {
    return Object.fromEntries(
      allProviders.map((p) => [p, interpolateFee(tiers[p].high, tiers[p].low, numericAmount)])
    ) as Record<Provider, number>;
  }, [numericAmount]);

  const fees = useMemo(() => {
    return Object.fromEntries(
      allProviders.map((p) => [p, +(numericAmount * (percents[p] / 100)).toFixed(0)])
    ) as Record<Provider, number>;
  }, [percents, numericAmount]);

  const currencyFormatter = useMemo(() => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }), []);

  const weaveFee = fees["WEAVE"];
  const competitorFee = fees[selectedCompetitor];
  const savings = competitorFee - weaveFee;

  return (
    <section className={`relative py-16 sm:py-24 px-4 ${gradients[3]}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-ink-black mb-4">
            Compare Fees. Win More Deals.
          </h2>

          {/* Deal Size Control */}
          <div className="mt-8 flex flex-col items-center gap-4 max-w-3xl mx-auto">
            <label className="text-sm uppercase tracking-wide text-ink-black/70 font-semibold">
              Transaction Amount (CN¥)
            </label>
            <div className="w-full flex items-center gap-4">
              <span className="text-sm font-bold text-ink-black/60">0</span>
              <input
                type="range"
                min={0}
                max={50000}
                step={1000}
                value={numericAmount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full accent-imperial-gold-500 cursor-pointer h-3"
              />
              <span className="text-sm font-bold text-ink-black/60">50k</span>
            </div>
            <input
              type="number"
              min={0}
              step={500}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-48 text-center text-lg font-bold px-4 py-2 border-2 border-stone-300 rounded-lg bg-black/60 backdrop-blur-sm focus:ring-2 focus:ring-imperial-gold-500 focus:border-imperial-gold-500 outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200/80 rounded-2xl shadow-2xl shadow-stone-400/20 overflow-hidden border border-stone-200/80">
          {/* Weave Panel */}
          <div className="bg-imperial-gold-500/10 p-8 text-center">
            <h3 className="text-2xl font-bold text-imperial-gold-700 mb-4 font-serif">WEAVE</h3>
            <p className="text-ink-black/60 text-sm mb-2">Your Fee</p>
            <p className="text-5xl font-extrabold text-ink-black">{currencyFormatter.format(weaveFee)}</p>
            <p className="text-lg font-semibold text-imperial-gold-600 mt-2">~{percents["WEAVE"]}%</p>
            <span className="inline-block bg-imperial-gold-500 text-pearl-white text-xs font-bold px-3 py-1 rounded-full mt-6">
              Best Value
            </span>
          </div>

          {/* Competitor Panel */}
          <div className="bg-white/70 backdrop-blur-sm p-8 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              {competitors.map((c) => (
                <button 
                  key={c} 
                  onClick={() => setSelectedCompetitor(c)}
                  className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
                    selectedCompetitor === c 
                      ? 'bg-silk-crimson-500 text-pearl-white shadow'
                      : 'bg-stone-200/80 text-ink-black/70 hover:bg-stone-300/80'
                  }`}>
                  {c}
                </button>
              ))}
            </div>
            <p className="text-ink-black/60 text-sm mb-2">{selectedCompetitor}'s Fee</p>
            <p className="text-5xl font-extrabold text-silk-crimson-600">{currencyFormatter.format(competitorFee)}</p>
            <p className="text-lg font-semibold text-silk-crimson-500 mt-2">~{percents[selectedCompetitor]}%</p>
            <p className="text-sm font-bold text-silk-crimson-700 mt-6 bg-silk-crimson-500/10 px-3 py-2 rounded-lg">
              You would save {currencyFormatter.format(savings)}!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-pearl-white bg-imperial-gold-600 rounded-full shadow-lg hover:bg-imperial-gold-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-imperial-gold-500/50">
            <span>Start Moving Smarter</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
