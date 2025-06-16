import React from "react";

const partners = [
  { name: "Alibaba", domain: "alibaba.com", desc: "Facilitating infrastructure payments in 4 continents" },
  { name: "Huawei", domain: "huawei.com", desc: "Using WEAVE to streamline FX operations" },
  { name: "Sinopec", domain: "sinopecgroup.com", customLogo: "https://logotyp.us/file/sinopec-group.svg", desc: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Emirates Group", domain: "emirates.com", desc: "Facilitating infrastructure payments in 4 continents" },
  { name: "DP World", domain: "dpworld.com", desc: "Using WEAVE to streamline FX operations" },
  { name: "Nubank", domain: "nubank.com.br", desc: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Mercado Libre", domain: "mercadolibre.com", desc: "Using WEAVE to streamline FX operations" },
  { name: "Dangote Group", domain: "dangote.com", desc: "Facilitating infrastructure payments in 4 continents" },
  { name: "MTN Group", domain: "mtn.com", desc: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Safaricom", domain: "safaricom.co.ke", desc: "Using WEAVE to streamline FX operations" },
];

export default function PartnerEliteScroll() {
  return (
    <section
      className="w-full py-14 relative overflow-hidden"
      style={{ background: "url('/mnt/data/b0af4113-64cb-4a11-b2ad-99bf7b479a8a.png') center/cover no-repeat" }}
    >
      <style>{`
        @keyframes premium-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .premium-logo-scroll {
          animation: premium-scroll 36s linear infinite;
          will-change: transform;
        }
        .premium-logo-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3 bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent">
          Trusted by the Global South
        </h2>
        <p className="text-base md:text-lg font-medium text-imperial-gold-400 text-center mb-8 leading-relaxed">
          From Guangzhou to Bogotá. Lagos to Dubai. Builders of the new trade order trust
          <span className="text-silk-crimson-400 font-bold px-2">WEAVE</span>
          to move capital — fast, secure, unstoppable.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="premium-logo-scroll flex items-center gap-8 w-max px-2 select-none">
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={partner.name + idx}
                className="group flex flex-col items-center min-w-[90px] relative"
              >
                <div className="rounded-xl p-2.5 bg-white/85 border border-yellow-400/15 shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={
                      // Sinopec: use customLogo from logotyp.us (already set in partner.customLogo)
                      partner.name === "Dangote Group"
                        ? `https://logo.clearbit.com/${partner.domain}`
                        : partner.customLogo ||
                          (partner.domain ? `https://www.google.com/s2/favicons?sz=128&domain=${partner.domain}` : undefined)
                    }
                    alt={`${partner.name} Logo`}
                    className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    draggable={false}
                    onError={e => {
                      const target = e.currentTarget as HTMLImageElement;
                      const domain = partner.domain;
                      if (partner.name === "Dangote Group") {
                        // Dangote: Clearbit → Brandfetch → Google favicon
                        if (target.src.includes('logo.clearbit.com')) {
                          target.src = domain ? `https://logo.brandfetch.io/${domain}` : '';
                        } else if (target.src.includes('logo.brandfetch.io')) {
                          target.src = domain ? `https://www.google.com/s2/favicons?sz=128&domain=${domain}` : '';
                        } else {
                          target.style.display = 'none';
                        }
                      } else if (partner.name === "Sinopec") {
                        // Sinopec: only try the customLogo (logotyp.us), hide if fails
                        target.style.display = 'none';
                      } else {
                        // All others: Google favicon → Clearbit → Brandfetch
                        if (target.src.includes('google.com/s2/favicons')) {
                          target.src = domain ? `https://logo.clearbit.com/${domain}` : '';
                        } else if (target.src.includes('logo.clearbit.com')) {
                          target.src = domain ? `https://logo.brandfetch.io/${domain}` : '';
                        } else {
                          target.style.display = 'none';
                        }
                      }
                    }}
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 top-[115%] px-3 py-1.5 bg-white/95 border border-yellow-400/25 shadow-xl rounded-md text-ink-black text-[11px] font-normal opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 text-center z-10" style={{ minWidth: '180px', maxWidth: '220px' }}>
                    {partner.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
