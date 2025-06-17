
import React from "react";
import { Linkedin, X, MessageCircle, Smartphone } from "lucide-react";

const footerLinks = [
  { name: "Corridors", href: "/corridors" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Fees", href: "/fees" },
  { name: "Why Weave", href: "/why-weave" },
  { name: "About", href: "/about" },
  { name: "Legal", href: "/legal" },
];

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "X", icon: X, href: "#" },
  { name: "WeChat", icon: MessageCircle, href: "#" },
  { name: "WhatsApp", icon: Smartphone, href: "#" },
];

const FooterSection = () => (
  <footer className="bg-pearl-white border-t-2 border-imperial-gold-500/25 pt-12 pb-3 px-4 font-sans shadow-[0_-2px_12px_0_rgba(212,175,55,0.04)]">
    <div className="max-w-6xl mx-auto">
      {/* Top: links left, socials right */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 border-b border-imperial-gold-500/15 pb-6 mb-6">
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ink-black/90 hover:text-silk-crimson-400 font-semibold text-base relative px-1 after:bg-silk-crimson-400/60 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="rounded-full p-2 bg-pearl-white hover:bg-imperial-gold-500/15 text-silk-crimson-400 hover:text-imperial-gold-500 transition flex items-center justify-center border border-imperial-gold-500/20 hover:border-silk-crimson-400/40 shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
      {/* Divider */}
      <div className="border-t-2 border-imperial-gold-400/10 my-4" />
      {/* Bottom: left copyright, right tagline */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
        <div className="text-pearl-white/70 text-sm">
          © 2025 WEAVE Financial Systems
        </div>
        <div className="text-pearl-white/50 italic text-xs sm:text-base text-right">
          &quot;Capital. Trust. Growth.&quot;
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
