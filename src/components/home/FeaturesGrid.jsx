// components/home/FeaturesGrid.jsx
import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const FeaturesGrid = ({ features }) => (
  <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {features.map((feature, idx) => (
      <motion.div
        key={idx}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: idx * 0.1 }}
        whileHover={{ y: -10 }}
        className="bg-white p-6 rounded-2xl shadow-lg text-center"
      >
        <feature.icon className="w-12 h-12 mx-auto mb-4 text-amber-700" />
        <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm">{feature.text}</p>
      </motion.div>
    ))}
  </section>
);

export default FeaturesGrid;
