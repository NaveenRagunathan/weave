
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();
  const isScrolled = scrollProgress > 1;

  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 16]);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close menu on outside click
  React.useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-nav-menu');
      if (menu && !menu.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4",
          "transition-all duration-500 ease-in-out",
          scrollDirection === "down" && isScrolled
            ? "-translate-y-full"
            : "translate-y-0"
        )}
        style={{
          backgroundColor: `rgba(28, 28, 28, ${navOpacity.get()})`,
          backdropFilter: `blur(${navBlur.get()}px)`,
          borderBottom: isScrolled 
            ? '1px solid rgba(212, 175, 55, 0.2)' 
            : '1px solid transparent'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="text-3xl font-extrabold tracking-tight font-serif text-silk-crimson-400 flex items-center gap-3"
          style={{ fontFamily: "'Harnet Serif', serif", letterSpacing: "-.04em" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent">
            WEAVE
          </span>
        </motion.div>
        
        <ul className="hidden md:flex gap-7 xl:gap-10 font-medium text-pearl-white/80 text-base items-center">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.a
                href={link.href}
                className="relative px-1 pb-1 hover:text-silk-crimson-400 transition-all duration-200"
                whileHover={{ y: -2 }}
                data-cursor="pointer"
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-silk-crimson-400 rounded origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>
        
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.a
            href="#"
            className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-500 hover:to-imperial-gold-400 text-pearl-white font-bold px-6 py-2 text-base rounded-full shadow-lg transition-all duration-200 border border-imperial-gold-400/25"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(220, 20, 60, 0.3), 0 0 15px rgba(212, 175, 55, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            data-cursor="pointer"
          >
            Create Account
          </motion.a>
        </motion.div>
        
        <div className="md:hidden flex items-center">
          <span
            className="text-pearl-white/70 text-2xl cursor-pointer"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open mobile menu"
            data-cursor="pointer"
          >
            ☰
          </span>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="fixed inset-0 z-[100] w-screen h-screen min-h-screen flex items-center justify-center md:hidden animate-fade-in bg-gradient-to-br from-[#1a1a1a] via-[#7c1d34] to-[#d4af37] backdrop-blur-xl border border-[rgba(212,175,55,0.10)] shadow-[0_0_40px_8px_rgba(212,175,55,0.12),_0_0_0_2px_rgba(212,175,55,0.15)_inset]"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-7 w-12 h-12 flex items-center justify-center rounded-full border-2 border-imperial-gold-400 bg-ink-black/70 shadow-lg text-4xl text-imperial-gold-400 hover:bg-silk-crimson-400/20 hover:text-silk-crimson-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-imperial-gold-400/40"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
              style={{boxShadow: '0 0 16px 2px rgba(212,175,55,0.25)'}}
            >
              ×
            </button>
            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center w-full h-full gap-12">
              <ul className="flex flex-col gap-8 items-center w-full">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full flex justify-center">
                    <a
                      href={link.href}
                      className="text-pearl-white text-2xl font-extrabold tracking-wider uppercase px-6 py-2 rounded transition-all duration-200 hover:text-imperial-gold-400 hover:scale-105 focus:text-silk-crimson-400 focus:underline shadow-md"
                      style={{textShadow: '0 2px 10px rgba(0,0,0,0.12), 0 0 6px rgba(212,175,55,0.09)'}}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 text-pearl-white font-extrabold text-xl px-12 py-4 rounded-full shadow-2xl border-2 border-imperial-gold-400/60 hover:from-imperial-gold-500 hover:to-silk-crimson-400 hover:scale-105 focus:ring-4 focus:ring-imperial-gold-400/40 transition-all duration-200"
                style={{boxShadow: '0 4px 32px 0 rgba(212,175,55,0.19), 0 0 0 2px rgba(212,175,55,0.18) inset'}}
                onClick={() => setMobileMenuOpen(false)}
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </motion.nav>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 transform-gpu z-[60] origin-left"
        style={{
          scaleX: useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1])
        }}
      />
    </>
  );
};

export default TubelightNavbar;
