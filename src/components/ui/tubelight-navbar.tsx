
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const TubelightNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when route changes
  React.useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <div className="fixed w-full z-50" ref={navRef}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-end items-center p-6 pointer-events-none">
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <motion.div
            className="relative pointer-events-auto flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            className="relative pointer-events-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <Link 
              to="/get-started" 
              className="text-sm font-medium bg-white text-black px-6 py-2 rounded-full hover:bg-white/90 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-end p-4">
        <motion.button
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 right-4 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden z-50"
          >
            <div className="flex flex-col p-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 my-1"></div>
              <Link
                to="/get-started"
                className="mx-2 my-1 px-4 py-2 text-sm font-medium text-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TubelightNavbar;
