// ============================================
// FILE: components/home/TreatmentStages.jsx
// ============================================
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";const MotionDiv = motion.div


const TreatmentStages = ({ treatmentStages }) => (
  <section className="space-y-8">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-4"
    >
      <h2 className="text-4xl font-bold text-gray-800">
        Herpes Treatment Journey: 3 Stages to Recovery
      </h2>
      <p className="text-xl text-gray-600">
        Our proven treatment protocol ensures complete healing
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {treatmentStages.map((stage, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <img
            src={stage.image}
            alt={stage.stage}
            className="w-full object-cover"
          />
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-amber-900">
              {stage.stage}
            </h3>
            <p className="text-gray-700">{stage.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Outcomes:</h4>
              <ul className="space-y-1">
                {stage.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TreatmentStages;