// components/home/TreatmentDeliveredSection.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Package, CheckCircle } from "lucide-react";

const MotionDiv = motion.div;

const TreatmentDeliveredSection = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const deliveryHighlights = [
    "Secure worldwide shipping",
    "Discreet packaging",
    "Tracking provided",
    "Quality guaranteed",
  ];

  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3">
          <Package className="w-10 h-10 text-emerald-900" />
          <h2 className="text-4xl font-bold text-gray-800">
            Treatment Delivered
          </h2>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Watch real patients receiving their natural herbal treatments from Dr.
          Amara Natural HealthCare
        </p>
      </motion.div>

      {/* Delivery Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6"
      >
        <div className="grid md:grid-cols-4 gap-4">
          {deliveryHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{highlight}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={() => setSelectedVideo(video)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video">
              <img
                src={video.thumbnail}
                alt={`Treatment delivery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                <div className="bg-white/90 group-hover:bg-white rounded-full p-4 transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-emerald-900 fill-emerald-900" />
                </div>
              </div>
            </div>

            {/* Video info */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">
                Delivery #{idx + 1}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Patient receiving treatment package
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-emerald-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video player */}
            <div className="bg-black rounded-xl overflow-hidden">
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Trust message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-8 text-center shadow-lg"
      >
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          We take pride in safely delivering our natural treatments to patients
          worldwide. Each package is carefully prepared with premium organic
          herbs and shipped with full tracking to ensure your treatment arrives
          safely at your doorstep.
        </p>
      </motion.div>
    </section>
  );
};

export default TreatmentDeliveredSection;
