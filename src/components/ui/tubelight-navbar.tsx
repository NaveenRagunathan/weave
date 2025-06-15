
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
          <span className="text-pearl-white/70 text-xl cursor-pointer">☰</span>
        </div>
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
