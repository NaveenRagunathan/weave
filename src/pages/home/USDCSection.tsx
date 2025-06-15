import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WeaveUSDCSection() {
  return (
    <section className="relative bg-[#1C1C1C] text-[#F8F8FF] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2023/03/26/157105-814234897_large.mp4"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col gap-10">
        {/* Title & Intro */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#DC143C] hover:scale-105 transition-transform duration-300">
            The Dollar, Reborn for This Century
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#D4AF37]">
            A Stablecoin You Can Bet Your Business On.
          </p>
          <p className="text-md md:text-lg text-[#F8F8FF] max-w-3xl mx-auto">
            In a world where capital must move fast and stay safe, <span className="text-[#00A86B] font-bold">WEAVE</span> runs on <span className="underline">USDC</span>.<br/>
            Because in cross-border trade, you don’t gamble with your money.
          </p>
        </div>

        {/* Trust Section */}
        <div className="flex items-center gap-6 justify-center hover:scale-105 transition-transform duration-300">
        <img src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png" alt="USDC" width="32" />
          <h3 className="text-2xl font-semibold">Powering WEAVE with Trust You Can Count.</h3>
        </div>

        {/* Tagline */}
        <div className="text-center text-[#F8F8FF] text-lg italic">
          In Trade, <span className="text-[#D4AF37] font-semibold">Trust</span> Is the Real Currency.
        </div>

        {/* Animated Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "✅",
              title: "Fully Regulated",
              desc: "Audited monthly. Backed 1:1 with U.S. dollars in U.S. banks.",
            },
            {
              icon: "⚡",
              title: "Final & Fast",
              desc: "No rollbacks. No 72-hour maybes. Just money—settled.",
            },
            {
              icon: "🌍",
              title: "Globally Liquid",
              desc: "Accepted across the Global South. No conversion headaches.",
            },
            {
              icon: "🔒",
              title: "Rock-Solid Trust",
              desc: "No funny business. Just the safest rails in digital finance.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1C1C1C]/50 backdrop-blur-sm border border-[#F8F8FF]/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="text-xl font-semibold text-[#D4AF37]">{item.title}</h4>
              <p className="text-sm text-[#F8F8FF] mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer Copy */}
        <div className="text-center text-lg max-w-3xl mx-auto mt-10 text-[#F8F8FF]">
          <p className="font-medium italic">
            The old dollar was built for banks.<br/>
            <span className="text-[#00A86B] font-bold">USDC</span> was built for builders.
          </p>
          <p className="mt-4 text-[#D4AF37] font-semibold">
            💼 This isn’t crypto hype. It’s modern money.
          </p>
          <p className="text-sm text-[#F8F8FF]/80">
            It’s how <span className="font-semibold">WEAVE</span> powers serious trade and the engine that will build your Business Empire.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-[#DC143C] text-white px-8 py-3 text-lg rounded-full shadow-md hover:bg-[#b01030] hover:scale-105 transition-all">
            Experience the USDC Advantage →
          </Button>
        </div>
      </div>
    </section>
  );
}
