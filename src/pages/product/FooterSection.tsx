
import React from "react";
import { Linkedin, X, MessageCircle, Smartphone } from "lucide-react";

const footerLinks = [
  { name: "Products", href: "#" },
  { name: "About", href: "#" },
  { name: "Corridors", href: "#" },
  { name: "Benefits", href: "#" },
  { name: "Why Weave", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Legal", href: "#" },
  { name: "Community", href: "#" },
];

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "X", icon: X, href: "#" },
  { name: "WeChat", icon: MessageCircle, href: "#" },
  { name: "WhatsApp", icon: Smartphone, href: "#" },
];

const FooterSection = () => (
  <footer className="bg-gradient-to-t from-ink-black/95 to-ink-black border-t-2 border-silk-crimson-400/25 pt-12 pb-3 px-4 font-sans">
    <div className="max-w-6xl mx-auto">
      {/* Top: links left, socials right */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 border-b border-imperial-gold-400/10 pb-6 mb-6">
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-pearl-white/85 hover:text-imperial-gold-400 font-semibold text-base relative px-1 after:bg-imperial-gold-500/60 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200"
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
                className="rounded-full p-2 bg-transparent hover:bg-silk-crimson-400/15 text-pearl-white/80 hover:text-imperial-gold-400 transition flex items-center justify-center border border-silk-crimson-400/15 hover:border-imperial-gold-400/35"
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
