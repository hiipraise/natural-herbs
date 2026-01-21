// pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, XCircle } from 'lucide-react';
import images from "../assets/images.jpg";

const MotionDiv = motion.div;

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mykkaylk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          {/* Success/Error Messages */}
          <AnimatePresence>
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                  <p className="text-sm text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3"
              >
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">Submission Failed</p>
                  <p className="text-sm text-red-700">Please try again or contact us directly via WhatsApp.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Comment</label>
              <textarea 
                name="comment"
                required
                rows="6"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Share your thoughts or questions..."
              />
            </div>

            <motion.button
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-amber-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
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
