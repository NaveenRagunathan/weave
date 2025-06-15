
import * as React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Why Weave", href: "/why-weave" },
  { name: "Benefits", href: "/benefits" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
  { name: "Legal", href: "/legal" },
];

const TubelightNavbar = () => {
  const { scrollProgress, scrollDirection } = useScrollProgress();
  const isScrolled = scrollProgress > 1;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4",
        "transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-ink-black/80 backdrop-blur-xl border-b border-imperial-gold-400/20 shadow-lg"
          : "bg-gradient-to-b from-ink-black/95 via-ink-black/80 to-transparent border-b border-transparent",
        scrollDirection === "down" && isScrolled
          ? "-translate-y-full"
          : "translate-y-0"
      )}
    >
      <div
        className="text-3xl font-extrabold tracking-tight font-serif text-silk-crimson-400 flex items-center gap-3"
        style={{ fontFamily: "'Harnet Serif', serif", letterSpacing: "-.04em" }}
      >
        <span className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent">WEAVE</span>
        <span className="ml-1 w-2 h-2 rounded-full bg-imperial-gold-400 shadow-gold-glow animate-pulse"></span>
      </div>
      <ul className="hidden md:flex gap-7 xl:gap-10 font-medium text-pearl-white/80 text-base items-center">
        {navLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.href}
              className="relative px-1 pb-1 hover:text-silk-crimson-400 transition-all duration-200 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-silk-crimson-400 after:rounded"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <a
          href="#"
          className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-500 hover:to-imperial-gold-400 text-pearl-white font-bold px-6 py-2 text-base rounded-full shadow-lg transition-all duration-200 border border-imperial-gold-400/25 hover:scale-105"
        >
          Create Account
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <span className="text-pearl-white/70 text-xl cursor-pointer">☰</span>
      </div>
    </nav>
  );
};

export default TubelightNavbar;
