// components/home/MainTestimonial.jsx

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
const MotionDiv = motion.div;

const MainTestimonial = ({ testimonialImage }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-16"
  >
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src={testimonialImage}
        alt="Success Stories"
        className="rounded-2xl shadow-xl w-full"
      />
      <div className="space-y-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
          ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-800">
          Real Results, Real People
        </h3>
        <p className="text-gray-600 text-lg italic">
          "I've a patient who was deeply troubled with Hormonal imbalance, after
          weeks of using my natural treatment she is restored; her hormones are
          balanced, and her symptoms are virtually gone. She is happy her whole
          life is back."
        </p>
        <p className="font-semibold text-amber-900">— Dr. Chalopa</p>
      </div>
    </div>
  </motion.section>
);

export default MainTestimonial;
