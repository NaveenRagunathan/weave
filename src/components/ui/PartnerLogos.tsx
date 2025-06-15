
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const partners = [
  { name: "Huawei", domain: "huawei.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Emirates Group", domain: "emirates.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
  { name: "Sinopec", domain: null, customLogo: "http://www.sinopecgroup.com/r/cms/jtyw/default/images/logo2021.png", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Nubank", domain: "nubank.com.br", tooltip: "Corridor-enabled payouts across Africa and Latin America" },
  { name: "Mercado Libre", domain: "mercadolibre.com", tooltip: "Using WEAVE to streamline FX operations" },
  { name: "Dangote Group", domain: "dangote.com", tooltip: "Facilitating infrastructure payments in 4 continents" },
];

const PartnerLogos = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 border-t border-b border-imperial-gold-400/25 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-pearl-white tracking-tight">
          Trusted by Thousands Across the New Trade Order
        </h2>
        <p className="text-base sm:text-lg text-pearl-white/80 mt-4 max-w-3xl mx-auto font-medium leading-relaxed">
          From Guangzhou to Bogotá. Lagos to Dubai. The architects of the Global South rely on{" "}
          <span className="text-silk-crimson-400 font-semibold">WEAVE</span> to move capital where it matters — fast, secure, unstoppable.
        </p>
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-12">
          {partners.map((partner, index) => (
            <CarouselItem
              key={`${partner.name}-${index}`}
              className="pl-12 basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="relative group flex justify-center items-center h-20">
                <img
                  src={partner.customLogo || (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : "")}
                  alt={`${partner.name} Logo`}
                  className="h-10 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 ease-in-out filter grayscale hover:grayscale-0 hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-ink-black text-pearl-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 border border-silk-crimson-400/20 shadow-lg">
                  {partner.tooltip}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default PartnerLogos;
