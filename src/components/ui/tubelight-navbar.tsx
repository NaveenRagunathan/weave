
import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TubelightNavbar = () => {
  return (
    <div className="fixed top-8 right-8 z-50 pointer-events-none">
      <div className="flex items-center gap-6">
        {/* Navigation Link */}
        <motion.div
          className="relative pointer-events-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link 
            to="/how-it-works" 
            className="text-sm font-medium text-white hover:text-primary transition-colors px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30"
          >
            How It Works
          </Link>
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
  );
};

export default TubelightNavbar;
