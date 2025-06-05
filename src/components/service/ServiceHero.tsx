"use client";

import { motion } from "framer-motion";

interface ServiceHeroProps {
  serviceName: string;
  introduction: string;
}

export default function ServiceHero({
  serviceName,
  introduction,
}: ServiceHeroProps) {
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
            SERVICES
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {serviceName}
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">{introduction}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Free Quote
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
