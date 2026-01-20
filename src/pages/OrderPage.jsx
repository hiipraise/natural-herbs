// pages/OrderPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Send } from "lucide-react";
import images from "../assets/order.jpg";

const OrderPage = () => {
  const [orderType, setOrderType] = useState("");

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
            // src="https://placehold.co/600x400/A0522D/FFF?text=Order+Now"
            alt="Place Order"
            className="rounded-2xl shadow-xl w-full"
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Clock className="w-6 h-6 text-amber-700" />
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
                src="https://placehold.co/150x100/FFF/8B4513?text=UPS"
                alt="UPS"
                className="rounded-lg shadow"
              />
              <img
                src="https://placehold.co/150x100/FFF/8B4513?text=DHL"
                alt="DHL"
                className="rounded-lg shadow"
              />
              <img
                src="https://placehold.co/150x100/FFF/8B4513?text=VFE"
                alt="VFE"
                className="rounded-lg shadow"
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
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-6"
          >
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
                      onChange={(e) => setOrderType(e.target.value)}
                      className="w-5 h-5 text-amber-700"
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none"
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none"
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none"
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-700 focus:outline-none resize-none"
                placeholder="Please specify the treatment you're interested in and any questions..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-amber-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-amber-800 transition"
            >
              Submit Order <Send size={20} />
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
