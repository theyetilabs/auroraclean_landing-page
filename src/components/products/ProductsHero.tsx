"use client";

import { motion } from "framer-motion";

export default function ProductsHero() {
  return (
    <div className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            PRODUCTS
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Premium Hygiene Products for Our Clients
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            As an Aurora Cleaning Service client, you enjoy exclusive access to
            our high-quality hygiene products at discounted rates, designed to
            maintain cleanliness between our visits.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-[#FFB347] text-black px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
