import React, { useMemo, useState } from 'react';

const interpolateFee = (high: number, low: number, amount: number): number => {
  if (amount <= 10000) return high;
  if (amount >= 100000) return low;
  const ratio = (amount - 10000) / (100000 - 10000);
  return +(high + (low - high) * ratio).toFixed(2);
};

const allProviders = ["WEAVE", "Stripe", "Wise", "Yeepay", "XTransfer"] as const;

type Provider = typeof allProviders[number];

const tiers: Record<Provider, { high: number; low: number }> = {
  WEAVE: { high: 0.5, low: 0.3 },
  Stripe: { high: 2.0, low: 1.5 },
  Wise: { high: 1.5, low: 1.2 },
  Yeepay: { high: 1.8, low: 1.5 },
  XTransfer: { high: 1.2, low: 1.0 },
};

interface FeeComparisonWidgetProps {
  sendAmount: number;
}

import { Info } from 'lucide-react';

const domains: Record<Provider, string> = {
  WEAVE: 'weavetransfer.com', // Placeholder domain for Weave
  Stripe: 'stripe.com',
  Wise: 'wise.com',
  Yeepay: 'global.yeepay.com',
  XTransfer: 'xtransfer.com',
};

export default function FeeComparisonWidget({ sendAmount }: FeeComparisonWidgetProps) {
  const [selectedCompetitor, setSelectedCompetitor] = useState<Provider>("Stripe");
  const competitors: Provider[] = ["Stripe", "Wise", "Yeepay", "XTransfer"];
  const numericAmount = sendAmount || 0;

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
    currency: "USD",
    maximumFractionDigits: 0,
  }), []);

  const weaveFee = fees["WEAVE"];
  const competitorFee = fees[selectedCompetitor];
  const savings = competitorFee - weaveFee;

  const weaveBarWidth = competitorFee > 0 ? (weaveFee / competitorFee) * 100 : 0;

  if (numericAmount === 0) {
    return null;
  }

  return (
    <div className="mt-6 p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl flex flex-col items-center max-w-md mx-auto animate-fade-in w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="text-xl font-serif font-bold text-gray-900 tracking-tight">Fee Comparison</h4>
        <div className="relative group">
          <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Data updated June 2025
          </div>
        </div>
      </div>

      {/* Competitor Logos */}
      <div className="flex gap-4 justify-center mb-6 w-full">
        {competitors.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCompetitor(c)}
            className={`p-2 rounded-lg border-2 transition-all duration-200 ${selectedCompetitor === c ? 'border-blue-500 shadow-lg' : 'border-transparent hover:border-gray-300'}`}
          >
            {c === 'Wise' ? (
              <img
                src={`https://www.google.com/s2/favicons?sz=128&domain=${domains[c]}`}
                alt={`${c} logo`}
                className="h-6 w-auto bg-white rounded shadow"
                onError={e => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://logo.clearbit.com/${domains[c]}`;
                }}
              />
            ) : (
              <img
                src={`https://logo.clearbit.com/${domains[c]}`}
                alt={`${c} logo`}
                className="h-6 w-auto bg-white rounded shadow"
                onError={e => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://www.google.com/s2/favicons?sz=128&domain=${domains[c]}`;
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Bar Chart Visualization */}
      <div className="w-full space-y-3 text-sm">
        {/* Competitor Bar */}
        <div className="space-y-1">
          <div className="flex justify-between font-medium text-gray-600">
            <span>{selectedCompetitor} Fee</span>
            <span>{currencyFormatter.format(competitorFee)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
        {/* Weave Bar */}
        <div className="space-y-1">
          <div className="flex justify-between font-bold text-blue-600">
            <span>WEAVE Fee</span>
            <span>{currencyFormatter.format(weaveFee)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full" style={{ width: `${weaveBarWidth}%` }}></div>
          </div>
        </div>
      </div>

      {savings > 0 && (
        <div className="mt-6 w-full">
          <div className="text-center px-5 py-3 rounded-lg text-base font-bold bg-green-100 text-green-800 border border-green-200">
            You save {currencyFormatter.format(savings)}!
          </div>
        </div>
      )}
    </div>
  );
}

