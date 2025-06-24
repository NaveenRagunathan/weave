
import React from "react";

const links = [
  { name: "Corridors", href: "/corridors" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Fees", href: "/fees" },
  { name: "Why Weave", href: "/why-weave" },
  { name: "About", href: "/about" },
  { name: "Legal", href: "/legal" },
];

import { Linkedin, Twitter, MessageCircle, Phone } from 'lucide-react';

const socials = [
  { name: "LinkedIn", url: "#", icon: Linkedin },
  { name: "X", url: "#", icon: Twitter },
  { name: "WeChat", url: "#", icon: MessageCircle },
  { name: "WhatsApp", url: "#", icon: Phone },
];

const FooterSection = () => (
  <footer className="border-t border-brand-blue/10 py-10 px-4">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
      <nav className="flex flex-wrap justify-center gap-4 mb-2">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            className="text-brand-blue hover:text-brand-blue-700 transition text-sm font-semibold"
          >
            {l.name}
          </a>
        ))}
      </nav>
      <div className="flex gap-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            className="p-2 bg-gradient-to-br from-brand-blue-100 via-cool-gray-100 to-off-white rounded-full hover:bg-brand-blue-200 transition border border-brand-blue/10"
            aria-label={s.name}
          >
            <s.icon className="w-5 h-5 text-brand-blue-700" />
          </a>
        ))}
      </div>
      <div className="text-cool-gray-700 text-xs text-center mt-2">
        &copy; 2025 WEAVE Financial Systems<br />
        <span className="italic">“Capital. Trust. Growth.”</span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
