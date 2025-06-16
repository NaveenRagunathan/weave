import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PremiumButton from "@/components/ui/PremiumButton";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";

// Major world currencies, can be expanded
const CURRENCIES = [
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "USDC", name: "USD Coin", symbol: "₮" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "MXN", name: "Mexican Peso", symbol: "$" },
  { code: "KES", name: "Kenyan Shilling", symbol: "Ksh" },
  { code: "ZAR", name: "South African Rand", symbol: "R" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
  { code: "PHP", name: "Philippine Peso", symbol: "₱" },
  { code: "TRY", name: "Turkish Lira", symbol: "₺" },
];

// Dummy FX rates for demo (CNY→USDC, USDC→target)
const FX = {
  CNY: { USDC: 0.14 }, // 1 CNY = 0.14 USDC
  USDC: {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.79,
    NGN: 1400,
    BRL: 5,
    MXN: 17,
    KES: 130,
    ZAR: 18,
    IDR: 16200,
    PHP: 57,
    TRY: 32,
    CNY: 7.2,
  },
};

function getCurrencyMeta(code: string) {
  return CURRENCIES.find((c) => c.code === code) || { code, name: code, symbol: code };
}

// Demo ticker data
const TICKER_RATES = [
  { pair: "USD/INR", rate: "83.12" },
  { pair: "EUR/USD", rate: "1.08" },
  { pair: "GBP/USD", rate: "1.27" },
  { pair: "CNY/USDC", rate: "0.14" },
  { pair: "USDC/NGN", rate: "1400" },
  { pair: "USDC/BRL", rate: "5.0" },
  { pair: "USD/MXN", rate: "17.0" },
  { pair: "USDC/INR", rate: "83.0" },
  { pair: "USDC/KES", rate: "130.0" },
];

const CurrencyConverterWidget = () => {
  const [sendCurrency, setSendCurrency] = useState("CNY");
  const [receiveCurrency, setReceiveCurrency] = useState("INR");
  const [sendAmount, setSendAmount] = useState(1000);
  const [usdcAmount, setUsdcAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);

  useEffect(() => {
    // Step 1: CNY → USDC
    const cnyToUsdc = FX[sendCurrency]?.USDC || 0.14;
    const usdc = sendAmount * cnyToUsdc;
    setUsdcAmount(usdc);
    // Step 2: USDC → recipient
    const usdcToRecip = FX["USDC"][receiveCurrency] || 1;
    setReceiveAmount(usdc * usdcToRecip);
  }, [sendCurrency, receiveCurrency, sendAmount]);

  return (
    <motion.section
      className="w-full flex flex-col justify-center items-center py-12 px-4 bg-gradient-to-br from-silk-crimson-600 via-pearl-white/5 to-imperial-gold-400/40 border-t border-pearl-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ minHeight: 320 }}
    >
      {/* Live Rate Ticker Banner */}
      <div className="w-full max-w-3xl mb-4 overflow-hidden">
        <div className="relative w-full h-10 bg-gradient-to-r from-imperial-gold-400/20 to-silk-crimson-400/10 rounded-full flex items-center">
          <div className="animate-marquee flex gap-8 whitespace-nowrap px-4 text-pearl-white/90 text-sm font-medium">
            {TICKER_RATES.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <span className="font-bold text-imperial-gold-400">{item.pair}</span>
                <span className="mx-1">•</span>
                <span className="font-mono">{item.rate}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl rounded-3xl shadow-xl bg-ink-black/80 border border-pearl-white/10 p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
        {/* Left: QuickCalc fields */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-2">
            <label className="text-pearl-white/90 text-sm font-semibold mb-1">You send</label>
            <div className="flex items-center gap-2 bg-pearl-white/5 rounded-xl px-4 py-2 border border-pearl-white/10">
              <input
                type="number"
                min={1}
                className="w-28 bg-transparent text-lg font-bold text-pearl-white outline-none"
                value={sendAmount}
                onChange={e => setSendAmount(Number(e.target.value))}
              />
              <Select
                value={sendCurrency}
                onValueChange={setSendCurrency}
              >
                <SelectTrigger className="w-28 bg-transparent text-lg font-bold text-pearl-white outline-none border-none" />
                <SelectContent>
                  {CURRENCIES.map((c) => (
                    <SelectItem key={c.code} value={c.code} className="flex items-center gap-2 min-w-[80px] bg-pearl-white/10 rounded-lg text-pearl-white font-medium border-none focus:ring-0">
                      <span>{c.symbol}</span>
                      <span>{c.code}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-pearl-white/90 text-sm font-semibold mb-1">Recipient gets</label>
            <div className="flex items-center gap-2 bg-pearl-white/5 rounded-xl px-4 py-2 border border-pearl-white/10">
              <input
                type="number"
                className="w-28 bg-transparent text-lg font-bold text-pearl-white outline-none"
                value={Math.floor(receiveAmount)}
                readOnly
              />
              <Select
                value={receiveCurrency}
                onValueChange={setReceiveCurrency}
              >
                <SelectTrigger className="w-28 bg-transparent text-lg font-bold text-pearl-white outline-none border-none" />
                <SelectContent>
                  {CURRENCIES.filter(c => c.code !== sendCurrency).map((c) => (
                    <SelectItem key={c.code} value={c.code} className="flex items-center gap-2 min-w-[80px] bg-pearl-white/10 rounded-lg text-pearl-white font-medium border-none focus:ring-0">
                      <span>{c.symbol}</span>
                      <span>{c.code}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-xs text-pearl-white/60 mt-1">via <span className="font-semibold text-imperial-gold-400">USDC</span> rails</div>
          </div>
        </div>

        {/* Right: Visual/Value Prop */}
        <div className="flex-1 flex flex-col gap-4 justify-center items-center text-center">
          <div className="text-2xl md:text-3xl font-bold text-pearl-white mb-1">
            Instantly convert & move money globally
          </div>
          <div className="text-pearl-white/80 text-base md:text-lg mb-2">
            Powered by <span className="text-imperial-gold-400 font-semibold">USDC</span> and <span className="text-silk-crimson-400 font-semibold">Weave</span> rails.<br />
            No banks. No delays. No losses.
          </div>
          <PremiumButton size="default" className="w-full md:w-auto mt-2">
            Try Weave Currency Converter
          </PremiumButton>
        </div>
      </div>
    </motion.section>
  );
};

export default CurrencyConverterWidget;
