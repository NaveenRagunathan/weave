
import * as React from "react";

const TubelightNavbar = () => (
  <nav className="w-full border-b border-silk-crimson-400/30 bg-ink-black/80 text-pearl-white px-6 py-3 flex items-center justify-between">
    <div className="text-2xl font-bold tracking-tight font-serif" style={{ fontFamily: "'Harnet Serif', serif" }}>
      WEAVE
    </div>
    <ul className="hidden md:flex gap-8 font-medium text-pearl-white/70 text-base">
      <li><a href="/" className="hover:text-silk-crimson-400 transition">Home</a></li>
      <li><a href="/product" className="hover:text-silk-crimson-400 transition">Product</a></li>
      <li><a href="/why-weave" className="hover:text-silk-crimson-400 transition">Why Weave</a></li>
      <li><a href="/benefits" className="hover:text-silk-crimson-400 transition">Benefits</a></li>
      <li><a href="/community" className="hover:text-silk-crimson-400 transition">Community</a></li>
      <li><a href="/contact" className="hover:text-silk-crimson-400 transition">Contact</a></li>
      <li><a href="/legal" className="hover:text-silk-crimson-400 transition">Legal</a></li>
    </ul>
    <div className="md:hidden">
      {/* Mobile hamburger menu would go here for real implementation */}
      <span className="text-pearl-white/60">☰</span>
    </div>
  </nav>
);

export default TubelightNavbar;
