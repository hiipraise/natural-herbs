// components/home/ALSSection.jsx
import React from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const ALSSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12"
  >
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
        Amyotrophic Lateral Sclerosis (ALS) Treatment
      </h2>

      <div className="bg-white rounded-2xl p-8 space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Amyotrophic lateral sclerosis (ALS) is a specific disorder that
          involves the death of neurons. In a number of countries, the term
          motor neurone disease (MND) is commonly used. ALS is characterized by
          stiff muscles, muscle twitching, and gradually worsening weakness due
          to muscles decreasing in size.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This results in difficulty speaking, swallowing, and eventually
          breathing. The disorder causes muscle weakness and atrophy throughout
          the body due to the degeneration of the upper and lower motor neurons.
          Individuals affected by the disorder may ultimately lose the ability
          to initiate and control all voluntary movement, although bladder and
          bowel function and the muscles responsible for eye movement are
          usually spared until the final stages.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Cognitive function is generally spared for most people, although some
          (about 5%) also develop frontotemporal dementia. A higher proportion
          of people (30–50%) also have more subtle cognitive changes which may
          go unnoticed. Sensory nerves and the autonomic nervous system are
          generally unaffected, meaning the majority of people with ALS maintain
          hearing, sight, touch, smell, and taste.
        </p>
      </div>

      <div className="bg-indigo-900 text-white rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold">Natural Herbal Cure for ALS</h3>
        <p className="text-indigo-100 leading-relaxed">
          My herbal medicine CURES ALS. It's Tested and Approved. After
          purchasing the medicine, it will be delivered to you on your doorstep.
          Once the herb is sent, a tracking number will be given to you which
          you will use to track the parcel, and you will receive the herb after
          3-4 working days.
        </p>
        <p className="text-indigo-100 leading-relaxed">
          You are advised to take the Herbal Remedy for 14 days, 3 times daily.
          It has no negative influence (SIDE EFFECTS). After taking the Herbal
          remedy for 14 days you will be cured. Remember, once you are cured,
          you are cured forever—the condition will not come back again.
        </p>
      </div>
    </div>
  </motion.section>
);

export default ALSSection;
