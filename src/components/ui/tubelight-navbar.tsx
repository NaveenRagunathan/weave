
import * as React from "react";
import { motion } from "framer-motion";

const TubelightNavbar = () => {
  return (
    <div className="fixed top-8 right-8 z-50 pointer-events-none">
      {/* CTA Button */}
      <motion.div
        className="relative pointer-events-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      </motion.div>
    </div>
  );
};

export default TubelightNavbar;
