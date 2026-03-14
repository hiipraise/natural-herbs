// components/home/SuccessStories.jsx

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
const MotionDiv = motion.div;

const SuccessStories = ({ successStories }) => (
  <section className="space-y-8">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-4"
    >
      <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
      <p className="text-xl text-gray-600">Real results from real patients</p>
    </motion.div>

    <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
      {successStories.map((story, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.2 }}
          className="min-w-[85%] snap-start bg-white rounded-2xl shadow-xl overflow-hidden sm:min-w-[70%] md:min-w-0"
        >
          {story.image && (
            <img
              src={story.image}
              alt={story.title}
              loading="lazy"
              className="hidden sm:block w-full object-cover"
            />
          )}
          <div className="p-6 space-y-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-emerald-500 text-emerald-500"
                />
              ))}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{story.title}</h3>
            <p className="text-gray-600 italic">"{story.testimonial}"</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SuccessStories;
