// components/home/HerbalistSection.jsx

import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const HerbalistSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
  >
    <div className="text-center space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        What Does a Herbalist Do?
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed text-left">
        A Medical Herbalist takes down a full case history, listening to all the
        physical, mental and emotional symptoms the patient relates in order to
        evaluate the overall picture and understand the root cause of the
        patient's disease.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed text-left">
        Practitioners of Herbal Medicine are not only trained in the same
        non-invasive diagnostic skills as ordinary doctors; but also use the
        benefits of a holistic viewpoint, traditional knowledge and additional
        forms of diagnosis such as Tongue, Pulse or Iris diagnosis to elicit the
        root of the health problems.
      </p>
      <div className="bg-emerald-50 p-6 rounded-xl">
        <p className="text-lg text-gray-800 font-semibold">
          Our approach is aimed at restoring true health—not at suppressing the
          symptoms.
        </p>
      </div>
    </div>
  </motion.section>
);

export default HerbalistSection;
