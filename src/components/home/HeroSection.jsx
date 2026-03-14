// components/home/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const MotionDiv = motion.div;

const HeroSection = ({ setCurrentPage, heroImage }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative bg-gradient-to-r from-emerald-900 to-emerald-700 text-white rounded-3xl overflow-hidden"
  >
    <div className="grid md:grid-cols-2 gap-6 items-center p-6 sm:p-8 md:p-12">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Natural Healthcare Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-emerald-100">
          Unraveling cures for diseases through the powerful wonders of roots
          and herbs. Your health is your wealth.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage("order")}
            className="bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            Place Order <ChevronRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage("contact")}
            className="border-2 border-white px-8 py-4 rounded-full font-semibold"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative hidden md:block"
      >
        <img
          src={heroImage}
          alt="Natural Healthcare"
          loading="lazy"
          className="rounded-2xl shadow-2xl w-full"
        />
      </motion.div>
    </div>
  </motion.section>
);

export default HeroSection;
