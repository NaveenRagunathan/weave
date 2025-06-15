
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
  <footer className="bg-ink-black border-t border-silk-crimson-400/10 pt-8 pb-2 px-4 font-sans">
    <div className="max-w-6xl mx-auto">
      {/* Top row: links left, socials right */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <nav className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-pearl-white/80 hover:text-silk-crimson-400 font-medium text-base transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="rounded-full p-2 bg-transparent hover:bg-silk-crimson-400/10 text-pearl-white/80 hover:text-silk-crimson-400 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-silk-crimson-400/10 my-4" />
      {/* Bottom row: copyright left, tagline right (on desktop) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
        <div className="text-pearl-white/60 text-sm">
          © 2025 WEAVE Financial Systems
        </div>
        <div className="text-pearl-white/50 italic text-xs sm:text-sm">
          &quot;Capital. Trust. Growth.&quot;
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;

