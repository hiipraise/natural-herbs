// ============================================
// FILE: components/home/FinalCTA.jsx
// ============================================
import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div


const FinalCTA = ({ setCurrentPage }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-amber-900 text-white rounded-3xl p-8 md:p-16 text-center space-y-6"
  >
    <h2 className="text-4xl font-bold">Ready to Start Your Healing Journey?</h2>
    <p className="text-xl text-amber-100">
      Orders processed within 24 hours with worldwide delivery in 3-4 working
      days
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setCurrentPage("order")}
      className="bg-white text-amber-900 px-12 py-4 rounded-full font-bold text-lg"
    >
      Place Your Order Now
    </motion.button>
  </motion.section>
);

export default FinalCTA;
