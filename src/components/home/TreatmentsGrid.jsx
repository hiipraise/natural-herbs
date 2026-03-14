// components/home/TreatmentsGrid.jsx

import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const TreatmentsGrid = ({ treatments }) => (
  <section className="space-y-8">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-4"
    >
      <h2 className="text-4xl font-bold text-gray-800">
        Our Complete Treatment Range
      </h2>
      <p className="text-xl text-gray-600">
        Natural solutions for various conditions
      </p>
    </motion.div>

    <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
      {treatments.map((treatment, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="min-w-[85%] snap-start bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer sm:min-w-[70%] md:min-w-0"
        >
          {treatment.image && (
            <img
              src={treatment.image}
              alt={treatment.title}
              loading="lazy"
              className="hidden sm:block w-full object-cover"
            />
          )}
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">
              {treatment.title}
            </h3>
            <p className="text-gray-600">{treatment.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TreatmentsGrid;
