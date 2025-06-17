import React, { useState, useEffect } from "react";
import { ChevronsUpDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { currencies } from "../../lib/currency-data";



interface CurrencyConverterWidgetProps {
  sendAmount: number;
  onSendAmountChange: (amount: number) => void;
}

const CurrencyConverterWidget: React.FC<CurrencyConverterWidgetProps> = ({ sendAmount, onSendAmountChange }) => {
  const [sendCurrency, setSendCurrency] = useState("CNY");
  const [receiveCurrency, setReceiveCurrency] = useState("INR");
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [openSelector, setOpenSelector] = useState<'send' | 'receive' | null>(null);

  useEffect(() => {
    if (!sendCurrency || !receiveCurrency || !sendAmount) return;

    const getConversion = async () => {
      if (sendCurrency === receiveCurrency) {
        setReceiveAmount(sendAmount);
        return;
      }
      setIsCalculating(true);
      const from = sendCurrency === 'USDC' ? 'USD' : sendCurrency;
      const to = receiveCurrency === 'USDC' ? 'USD' : receiveCurrency;

      try {
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${sendAmount}&from=${from}&to=${to}`);
        if (!response.ok) throw new Error('API error fetching conversion rate');
        const data = await response.json();
        if (data.rates && data.rates[to]) {
          setReceiveAmount(data.rates[to]);
        } else {
          if (from === to) {
            setReceiveAmount(sendAmount);
          } else {
            throw new Error('Could not find rate for the selected currency.');
          }
        }
      } catch (error) {
        console.error("Failed to fetch real-time rates:", error);
        setReceiveAmount(0);
      }
      setIsCalculating(false);
    };

    const timer = setTimeout(() => getConversion(), 300);
    return () => clearTimeout(timer);
  }, [sendAmount, sendCurrency, receiveCurrency]);

  const currencyList = Object.keys(currencies);

  const handleSelectCurrency = (type: 'send' | 'receive', currency: string) => {
    if (type === 'send') {
      setSendCurrency(currency);
    } else {
      setReceiveCurrency(currency);
    }
    setOpenSelector(null);
  };

  return (
    <div className="flex flex-col gap-6 justify-center w-full max-w-md">
      <div className={`flex flex-col gap-2 relative ${openSelector === 'send' ? 'z-20' : 'z-10'}`}>
        <label className="text-pearl-white/90 text-sm font-semibold mb-1">You send</label>
        <div className="flex items-center bg-gray-800/50 rounded-xl border border-pearl-white/10 backdrop-blur-sm">
          <div className="relative flex-grow">
            <input
              type="number"
              className="w-full bg-transparent p-4 text-2xl font-bold text-pearl-white outline-none"
              value={sendAmount}
              onChange={(e) => onSendAmountChange(Number(e.target.value))}
              placeholder="0"
            />
          </div>
          <CurrencySelector
            currency={sendCurrency}
            onSelect={(c) => handleSelectCurrency('send', c)}
            currencyList={currencyList}
            isOpen={openSelector === 'send'}
            onToggle={() => setOpenSelector(openSelector === 'send' ? null : 'send')}
          />
        </div>
      </div>

      <div className={`flex flex-col gap-2 relative ${openSelector === 'receive' ? 'z-20' : 'z-10'}`}>
        <label className="text-pearl-white/90 text-sm font-semibold mb-1">Recipient gets</label>
        <div className="flex items-center bg-gray-800/50 rounded-xl border border-pearl-white/10 backdrop-blur-sm">
          <div className="relative flex-grow">
            <input
              type="text"
              readOnly
              className={`w-full bg-transparent p-4 text-2xl font-bold text-pearl-white outline-none transition-opacity duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}
              value={isCalculating ? '...' : receiveAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            />
          </div>
          <CurrencySelector
            currency={receiveCurrency}
            onSelect={(c) => handleSelectCurrency('receive', c)}
            currencyList={currencyList}
            isOpen={openSelector === 'receive'}
            onToggle={() => setOpenSelector(openSelector === 'receive' ? null : 'receive')}
          />
        </div>
      </div>

      <p className="text-center text-xs text-pearl-white/50 font-mono tracking-tighter">
        via USDC rails
      </p>
    </div>
  );
};

const CurrencySelector = ({ currency, onSelect, currencyList, isOpen, onToggle }: {
  currency: string;
  onSelect: (c: string) => void;
  currencyList: string[];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCurrencies = currencyList.filter(c =>
    c.toLowerCase().includes(searchTerm.toLowerCase()) ||
    currencies[c].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button onClick={onToggle} className="flex items-center gap-2 p-4 hover:bg-gray-700/50 transition-colors duration-200 h-full">
        <img src={`https://flagcdn.com/16x12/${currencies[currency]?.flag.toLowerCase()}.png`} alt={`${currency} flag`} className="w-4 h-3" />
        <span className="font-bold text-pearl-white text-lg">{currency}</span>
        <ChevronsUpDown className="h-4 w-4 text-pearl-white/60" />
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 top-full mt-2 w-72 bg-gray-900 border border-pearl-white/20 rounded-lg shadow-2xl z-50 overflow-hidden"
        >
          <div className="p-2">
            <input
              type="text"
              placeholder="Search currency..."
              className="w-full bg-ink-black p-2 rounded-md text-pearl-white border border-pearl-white/10 focus:ring-1 focus:ring-imperial-gold-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {filteredCurrencies.map(c => (
              <li key={c} onClick={() => { onSelect(c); setSearchTerm(''); }} className="flex items-center gap-3 p-3 hover:bg-imperial-gold-500/10 cursor-pointer transition-colors duration-150">
                <img src={`https://flagcdn.com/16x12/${currencies[c]?.flag.toLowerCase()}.png`} alt={`${c} flag`} className="w-4 h-3" />
                <div>
                  <span className="font-bold text-pearl-white">{c}</span>
                  <span className="text-sm text-pearl-white/60 ml-2">{currencies[c].name}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export default CurrencyConverterWidget;
