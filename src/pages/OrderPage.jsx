// pages/OrderPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Send, CheckCircle, XCircle } from "lucide-react";
import images from "../assets/order.jpg";
import images1 from "../assets/applepay.png";
import images2 from "../assets/paypal.avif";
import images3 from "../assets/cashapp.webp";

const MotionDiv = motion.div;

const OrderPage = () => {
  const [orderType, setOrderType] = useState("");
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mykkaylk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setOrderType("");
        // Auto-hide success message after 5 seconds
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
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
        <h1 className="text-5xl font-bold text-gray-800">Place Your Order</h1>
        <p className="text-xl text-gray-600">
          Start your journey to natural healing
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          <img
            src={images}
            alt="Place Order"
            className="rounded-2xl shadow-xl w-full"
          />

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Clock className="w-6 h-6 text-emerald-700" />
              Delivery Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Orders are usually processed within 24 hours. They are shipped via
              UPS, DHL Ground or VFE. Our shopping cart offers a variety of real
              time shipping options including DHL AND VFE Express Mail.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you wish to have an order shipped to a PO Box or APO/FPO it
              will be shipped DHL Priority Mail.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              We Accept All Forms of Payment
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <img
                src={images1}
                // src="https://placehold.co/150x100/FFF/8B4513?text=UPS"
                alt="UPS"
                className="rounded-lg shadow h-24"
              />
              <img
                src={images2}
                // src="https://placehold.co/150x100/FFF/8B4513?text=DHL"
                alt="DHL"
                className="rounded-lg shadow h-24"
              />
              <img
                src={images3}
                // src="https://placehold.co/150x100/FFF/8B4513?text=VFE"
                alt="CASHAPP"
                className="rounded-lg shadow h-24"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Form</h3>

          {/* Success/Error Messages */}
          <AnimatePresence>
            {formStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">
                    Order Submitted Successfully!
                  </p>
                  <p className="text-sm text-green-700">
                    Thank you for your order. We'll contact you within 24 hours
                    to confirm details and arrange payment.
                  </p>
                </div>
              </motion.div>
            )}

            {formStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3"
              >
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">
                    Submission Failed
                  </p>
                  <p className="text-sm text-red-700">
                    Please try again or contact us directly via WhatsApp at +1
                    (448) 200-8706.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Do you want to place order?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {["Yes", "Maybe", "No"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="order_intent"
                      value={option}
                      required
                      disabled={isSubmitting}
                      checked={orderType === option}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="w-5 h-5 text-emerald-700 disabled:cursor-not-allowed"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-700 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-700 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-700 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="+1 (123) 456-7890"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                name="comment"
                required
                rows="5"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-700 focus:outline-none resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Please specify the treatment you're interested in and any questions..."
              />
            </div>

            <motion.button
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-emerald-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Order <Send size={20} />
                </>
              )}
            </motion.button>

            <p className="text-sm text-gray-500 text-center">
              <span className="text-red-500">*</span> Indicates required field
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrderPage;
