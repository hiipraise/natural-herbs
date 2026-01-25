// components/home/ImageGallery.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Play } from "lucide-react";

const MotionDiv = motion.div;

const ImageGallery = ({ images, videos = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          Treatment Results & Patient Reviews
        </h2>
        <p className="text-xl text-gray-600">
          Real transformations from our patients
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={`img-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedMedia({ type: "image", src: img })}
          >
            <img
              src={img}
              alt={`Treatment result ${idx + 1}`}
              className="w-full object-cover aspect-square"
            />
          </motion.div>
        ))}

        {videos.map((video, idx) => (
          <motion.div
            key={`video-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (images.length + idx) * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
            onClick={() =>
              setSelectedMedia({
                type: "video",
                src: video.src,
                thumbnail: video.thumbnail,
              })
            }
          >
            <img
              src={video.thumbnail}
              alt={`Treatment video ${idx + 1}`}
              className="w-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="bg-white rounded-full p-4">
                <Play className="w-8 h-8 text-amber-900" fill="currentColor" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for viewing full image/video */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Full size view"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[90vh] rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
