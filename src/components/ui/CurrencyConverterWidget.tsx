import React, { useState, useEffect, useRef } from "react";
import { ChevronsUpDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { currencies } from "../../lib/currency-data";

// Cache object to store exchange rates
let exchangeRatesCache: Record<string, number> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache duration
let lastFetchTime = 0;
const API_KEY = '621b1fc9287a4763968a031ababd8c85'; // Note: In production, move this to environment variables

interface CurrencyConverterWidgetProps {
  sendAmount: number;
  onSendAmountChange: (amount: number) => void;
}

const CurrencyConverterWidget: React.FC<CurrencyConverterWidgetProps> = ({ sendAmount, onSendAmountChange }) => {
  const [sendCurrency, setSendCurrency] = useState("CNY");
  const receiveCurrency = "USDC"; // Output is always USDC
  const [receiveAmount, setReceiveAmount] = useState(0);

  const [isCalculating, setIsCalculating] = useState(false);
  const [openSelector, setOpenSelector] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchExchangeRates = async () => {
    const now = Date.now();
    
    // Return cached rates if they're still valid
    if (Object.keys(exchangeRatesCache).length > 0 && (now - lastFetchTime) < CACHE_DURATION) {
      return exchangeRatesCache;
    }

    try {
      const response = await fetch(
        `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      if (data.rates) {
        // Cache the rates and update the timestamp
        exchangeRatesCache = data.rates;
        lastFetchTime = now;
        return data.rates;
      }
      throw new Error('Invalid response format');
    } catch (err) {
      console.error('Error fetching exchange rates:', err);
      throw err;
    }
  };

  useEffect(() => {
    if (!sendCurrency || !sendAmount) {
      setReceiveAmount(0);
      return;
    }

    const convertCurrency = async () => {
      if (!isMounted.current) return;
      
      setIsCalculating(true);
      setError(null);

      try {
        const rates = await fetchExchangeRates();
        
        if (sendCurrency === 'USDC') {
          setReceiveAmount(sendAmount);
          return;
        }

        const usdRate = rates[sendCurrency];
        if (!usdRate) {
          throw new Error(`Exchange rate not available for ${sendCurrency}`);
        }

        // Convert from send currency to USD (since USDC is pegged to USD)
        const usdAmount = sendAmount / parseFloat(usdRate);
        setReceiveAmount(parseFloat(usdAmount.toFixed(6))); // USDC typically has 6 decimal places
      } catch (err) {
        console.error('Conversion error:', err);
        setError('Failed to convert currency. Please try again.');
        setReceiveAmount(0);
      } finally {
        if (isMounted.current) {
          setIsCalculating(false);
        }
      }
    };

    const timer = setTimeout(convertCurrency, 300);
    return () => clearTimeout(timer);
  }, [sendAmount, sendCurrency]);

  const currencyList = Object.keys(currencies).filter(c => c !== 'USDC');

  const handleSelectCurrency = (currency: string) => {
    setSendCurrency(currency);
    setOpenSelector(false);
  };

  return (
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 w-full">
      {/* You Send Input */}
      <div className="relative z-20 w-full sm:flex-1">
                <label className="text-white text-xs font-medium mb-1 block text-left">You send</label>
        <div className="flex items-center bg-gray-100 rounded-lg border border-gray-300">
          <input
            type="number"
                      className="w-full bg-transparent p-3 text-2xl font-bold text-gray-800 focus:outline-none"
            value={sendAmount}
            onChange={(e) => onSendAmountChange(Number(e.target.value))}
            placeholder="100,000"
          />
          <CurrencySelector
            currency={sendCurrency}
            onSelect={handleSelectCurrency}
            currencyList={currencyList}
            isOpen={openSelector}
            onToggle={() => setOpenSelector(!openSelector)}
          />
        </div>
      </div>

      {/* Recipient Gets Output */}

      <div className="hidden sm:flex items-center justify-center p-2">
        <ArrowRight className="w-6 h-6 text-gray-500" />
      </div>

      <div className="relative z-10 w-full sm:flex-1">
                <label className="text-white text-xs font-medium mb-1 block text-left">Recipient gets (USDC)</label>
        <div className="flex items-center bg-gray-100 rounded-lg border border-gray-300">
          <input
            type="text"
            readOnly
                        className={`w-full bg-transparent p-3 text-2xl font-bold text-gray-800 outline-none transition-opacity duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}
            value={isCalculating ? '...' : receiveAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          />
                                            <div className="flex items-center gap-2 p-4 bg-gray-200 rounded-r-lg h-full">
                <img src={`https://flagcdn.com/16x12/us.png`} alt={`USDC flag`} className="w-4 h-3" />
                <span className="font-bold text-gray-800 text-lg">USDC</span>
            </div>
        </div>
      </div>
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
            <button onClick={onToggle} className="flex items-center gap-2 p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 h-full rounded-r-lg">
        <img src={`https://flagcdn.com/16x12/${currencies[currency]?.flag.toLowerCase()}.png`} alt={`${currency} flag`} className="w-4 h-3" />
        <span className="font-bold text-gray-800 text-lg">{currency}</span>
        <ChevronsUpDown className="h-4 w-4 text-gray-500" />
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 top-full mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-2xl z-50 overflow-hidden"
        >
          <div className="p-2">
            <input
              type="text"
              placeholder="Search currency..."
              className="w-full bg-gray-100 p-2 rounded-md text-gray-800 border border-gray-300 focus:ring-1 focus:ring-brand-blue outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {filteredCurrencies.map(c => (
              <li key={c} onClick={() => { onSelect(c); setSearchTerm(''); }} className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer transition-colors duration-150">
                <img src={`https://flagcdn.com/16x12/${currencies[c]?.flag.toLowerCase()}.png`} alt={`${c} flag`} className="w-4 h-3" />
                <div>
                  <span className="font-bold text-gray-800">{c}</span>
                  <span className="text-sm text-gray-500 ml-2">{currencies[c].name}</span>
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
