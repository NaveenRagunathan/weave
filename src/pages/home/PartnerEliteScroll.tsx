import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { gradients } from '@/lib/gradients';
import { useAnimationFrame } from 'framer-motion';
import WeaveLogo from "@/components/ui/WeaveLogo";

const partners = [
  { name: "Alibaba", domain: "alibaba.com", desc: "Facilitating infrastructure payments across 4 continents." },
  { name: "Huawei", domain: "huawei.com", desc: "Using WEAVE to streamline global FX operations." },
  { name: "Sinopec", domain: "sinopecgroup.com", customLogo: "https://logotyp.us/file/sinopec-group.svg", desc: "Corridor-enabled payouts across Africa and Latin America." },
  { name: "Emirates", domain: "emirates.com", desc: "Powering seamless transactions for a global travel leader." },
  { name: "DP World", domain: "dpworld.com", desc: "Optimizing logistics and supply chain finance." },
  { name: "Nubank", domain: "nubank.com.br", desc: "Enabling innovative financial services in Latin America." },
  { name: "Mercado Libre", domain: "mercadolibre.com", desc: "Accelerating e-commerce payments for millions." },
  { name: "Dangote Group", domain: "dangote.com", desc: "Driving industrial growth with efficient cross-border finance." },
  { name: "MTN Group", domain: "mtn.com", desc: "Connecting Africa with robust and reliable payment corridors." },
  { name: "Safaricom", domain: "safaricom.co.ke", desc: "Pioneering mobile money and digital payment solutions." },
];

const PartnerEliteScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const speed = 1.4;

  const animatedWords = ["fast", "easy", "safe"];
  const [currentWord, setCurrentWord] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 1400);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);


  useAnimationFrame((t, delta) => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;
    const isPaused = el.dataset.paused;
    const scrollSpeed = isPaused === 'soft' ? 1.0 : speed;

    el.scrollLeft += scrollSpeed * (delta / 16);
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft -= el.scrollWidth / 2;
    }
  });

  return (
    <section className="w-full py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-off-white via-brand-blue-50 to-brand-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-semibold text-lg text-brand-blue tracking-wider uppercase">
          Trusted by Industry Leaders
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-ink-black">
          Why Businesses Choose <WeaveLogo className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-500 via-brand-blue-400 to-brand-blue-700 animate-gradient-x text-4xl md:text-5xl" />
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-ink-black/80">
          We're trusted by powerhouses in the Global South because we make moving money
          <span className="inline-block w-16 mx-1 text-brand-blue font-bold transition-all duration-500 animate-fade-in">
            {animatedWords[currentWord]}
          </span>
          for them.
        </p>
      </div>

      <div
        className="w-full overflow-hidden mt-16"
        ref={scrollRef}
        onMouseEnter={() => {
          if (scrollRef.current) scrollRef.current.dataset.paused = 'soft';
        }}
        onMouseLeave={() => {
          if (scrollRef.current) scrollRef.current.dataset.paused = '';
        }}
      >
        <div className="flex gap-0.5 w-max">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="relative flex-shrink-0 w-64 h-32 flex items-center justify-center group"
            >
              <div className="relative w-48 h-20 flex items-center justify-center bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/30 hover:bg-white/20 hover:brightness-110">
                <img
                  src={
                    partner.name === "Dangote Group"
                      ? `https://logo.clearbit.com/${partner.domain}`
                      : partner.customLogo ||
                      (partner.domain ? `https://www.google.com/s2/favicons?sz=128&domain=${partner.domain}` : '')
                  }
                  alt={`${partner.name} Logo`}
                  className="max-h-10 w-auto object-contain opacity-90 transition-all duration-300"
                  loading="lazy"
                  draggable={false}
                  onError={e => {
                    const target = e.currentTarget as HTMLImageElement;
                    const domain = partner.domain;
                    if (partner.name === "Dangote Group") {
                      if (target.src.includes('logo.clearbit.com')) {
                        target.src = domain ? `https://logo.brandfetch.io/${domain}` : '';
                      } else if (target.src.includes('logo.brandfetch.io')) {
                        target.src = domain ? `https://www.google.com/s2/favicons?sz=128&domain=${domain}` : '';
                      } else {
                        target.style.display = 'none';
                      }
                    } else if (partner.name === "Sinopec") {
                      target.style.display = 'none';
                    } else {
                      if (target.src.includes('google.com/s2/favicons')) {
                        target.src = domain ? `https://logo.clearbit.com/${partner.domain}` : '';
                      } else if (target.src.includes('logo.clearbit.com')) {
                        target.src = domain ? `https://logo.brandfetch.io/${partner.domain}` : '';
                      } else {
                        target.style.display = 'none';
                      }
                    }
                  }}
                />
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-xs text-black rounded px-2 py-1 shadow-lg z-10 whitespace-nowrap">
                  {partner.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerEliteScroll;
