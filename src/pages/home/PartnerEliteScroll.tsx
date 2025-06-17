import React from 'react';    
import { motion, Variants } from 'framer-motion';

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
  const duplicatedPartners = [...partners, ...partners];

  const marqueeVariants: Variants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        ease: "linear",
        duration: 60,
        repeat: Infinity,
        repeatType: "loop",
      }
    },
  };

  return (
    <section className="w-full py-20 relative overflow-hidden bg-pearl-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-black mb-4">
          WHY BUSINESSES TRUST WEAVE
        </h2>
        <p className="text-lg text-ink-black/70 max-w-3xl mx-auto">
          We are used by powerhouses in the Global South because we make moving money fast, easy, and safe for them. This ensures they are growing steadily.
        </p>
      </div>

      <div className="w-full overflow-hidden mt-16">
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="relative flex-shrink-0 w-64 h-32 flex items-center justify-center"
            >
              <div className="relative w-48 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-4 transition-all duration-300">
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

              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="w-full flex justify-center mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="block text-lg sm:text-xl font-semibold text-silk-crimson-400">
            From Government Institutions to infrastructure giants to high-volume traders — <span className="text-imperial-gold-500">WEAVE</span> is the Nitro Boost making their deals close faster.
          </span>
        </div>
      </div>
    </section>
  );
};

export default PartnerEliteScroll;
