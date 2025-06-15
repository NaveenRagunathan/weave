
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Normally, use your own brand SVGs/static logo assets
const logos = [
  {
    name: "Alibaba",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Alibaba_Cloud_logo.svg",
  },
  {
    name: "Huawei",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Huawei_Standard_logo.svg",
  },
  {
    name: "Sinopec",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sinopec_Logo.svg",
  },
  {
    name: "Emirates Group",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Emirates_logo.svg",
  },
  {
    name: "DP World",
    url: "https://seeklogo.com/images/D/dp-world-logo-15D32C8DCB-seeklogo.com.png",
  },
  {
    name: "Nubank",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Nubank_logo_2021.svg",
  },
  {
    name: "Mercado Libre",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mercado_Libre_logo.svg",
  },
  {
    name: "Dangote Group",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dangote_Group_logo.png",
  },
  {
    name: "MTN Group",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/87/MTN_Logo.svg",
  },
  {
    name: "Safaricom",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Safaricom_logo.svg",
  },
];

const TrustedBySection = () => (
  <section className="py-10 px-4 bg-ink-black/95 border-b border-silk-crimson-400/20">
    <div className="max-w-5xl mx-auto text-center mb-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-pearl-white/80 mb-1">
        🛡️ Trusted by Thousands Across the New Trade Order
      </h3>
      <p className="text-pearl-white/70 text-xs sm:text-sm mb-4">
        From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on WEAVE to move capital where it matters — fast, secure, unstoppable.
      </p>
    </div>
    {/* Logo Carousel */}
    <div className="relative max-w-5xl mx-auto">
      <Carousel opts={{ loop: true, dragFree: true, align: 'start' }}>
        <CarouselContent className="flex gap-6">
          {logos.map((logo, i) => (
            <CarouselItem
              key={logo.name + i}
              className="basis-auto px-2 py-3 flex flex-col items-center justify-center"
              style={{ minWidth: 120 }}
            >
              <div className="bg-gradient-to-tl from-silk-crimson-400/10 via-imperial-gold-400/10 to-ink-black/30 border border-silk-crimson-400/15 rounded-lg w-28 h-16 flex items-center justify-center mb-1 group hover:scale-105 transition-transform duration-200">
                <img
                  src={logo.url}
                  alt={logo.name + " logo"}
                  className="max-h-10 max-w-[90px] object-contain mx-auto"
                  loading="lazy"
                  draggable={false}
                  style={{
                    filter:
                      'brightness(0) invert(1) drop-shadow(0 1px 2px #43262a40)',
                  }}
                />
              </div>
              <span className="text-xs text-pearl-white/60 font-semibold text-center line-clamp-1">
                {logo.name}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    <div className="max-w-4xl mx-auto">
      <p className="text-xs text-pearl-white/50 mt-4 mb-2">
        WEAVE is the invisible engine behind thousands of cross-border transactions every day — trusted by multinationals, megaproject leaders, and digital exporters across the Global South.
      </p>
      <button className="mt-1 text-silk-crimson-400 underline underline-offset-2 text-sm font-semibold hover:text-silk-crimson-600 transition">
        See How These Leaders Use WEAVE &rarr;
      </button>
    </div>
  </section>
);

export default TrustedBySection;
