// components/home/MissionStatement.jsx

import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const MissionStatement = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
  >
    <div className="text-center space-y-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Our Mission
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Over the years we struggled to completely get rid of Herpes simplex with
        much effort we are glad it was worth it. It is important to understand
        that there is nothing that can't be cured - every illness or disease has
        its solution. And we have unraveled the cure for Herpes and are proud to
        announce that it is available and has no side effects. Results speak for
        themselves. We are determined to unravel the cure for all diseases.
      </p>
    </div>
  </motion.section>
);

export default MissionStatement;
