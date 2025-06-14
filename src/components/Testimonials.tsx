"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { serviceCategories } from "@/lib/constants";

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % serviceCategories.length);
    }, 10000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="w-full bg-[#018D43] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">Our Cleaning Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Service categories */}
          <div className="space-y-4">
            {serviceCategories.map((cat, index) => (
              <div
                key={cat.category}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 font-semibold text-lg ${
                  activeCategory === index
                    ? "bg-white/10 border border-white/20 text-white"
                    : "hover:bg-white/5 text-gray-200"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {cat.category}
              </div>
            ))}
          </div>

          {/* Right column - Services for selected category */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4">
              {serviceCategories[activeCategory].category}
            </h3>
            <ul className="ml-2 space-y-3">
              {serviceCategories[activeCategory].services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-200 hover:underline hover:text-white transition-colors text-lg"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
