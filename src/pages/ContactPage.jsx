// pages/ContactPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import images from "../assets/images.jpg";


const ContactPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-xl text-gray-600">We're here to help you on your healing journey</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-8"
        >
          <img 
            src={images} 
            // src="https://placehold.co/600x400/8B4513/FFF?text=Contact+Us" 
            alt="Contact"
            className="rounded-2xl shadow-xl w-full"
          />
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">WhatsApp</p>
                <a href="https://wa.me/14482008706" className="text-amber-700 hover:underline">
                  +1 (448) 200-8706
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a href="mailto:drchalopa@gmail.com" className="text-amber-700 hover:underline">
                  drchalopa@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Pkwy B, Coconut Creek, 33036 Florida</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Processing Time</p>
                <p className="text-gray-600">Orders processed within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Share Your Thoughts</h3>
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Comment</label>
              <textarea 
                name="comment"
                required
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none resize-none"
                placeholder="Share your thoughts or questions..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-amber-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-amber-800 transition"
            >
              Send Message <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.5!2d-80.18!3d26.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE1JzAwLjAiTiA4MMKwMTAnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
          width="100%" 
          height="400" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
          title="Location Map"
        />
      </div>
    </motion.div>
  );
};

export default ContactPage;