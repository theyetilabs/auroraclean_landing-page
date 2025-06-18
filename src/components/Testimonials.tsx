"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { serviceCategories } from "@/lib/constants";
import Image from "next/image";

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to leaf positions
  const y1 = useTransform(scrollYProgress, [0, 1], [100, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 550]);

  // Transform scroll progress to rotation
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % serviceCategories.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white  text-[#018D43] py-20">
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
                    ? "bg-[#018D43]/10 border border-[#018D43]/20 text-[#018D43]"
                    : "hover:bg-[#018D43]/10 text-[#018D43]"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className="flex items-center gap-4">
                  <div className=" bg-white rounded-full p-4 ">
                    <Image
                      src={cat.image}
                      alt={cat.category}
                      width={100}
                      height={100}
                      className="w-10 h-10"
                    />
                  </div>
                  {cat.category}
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Services for selected category */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#018D43]/10 to-[#018D43]/5 rounded-2xl p-8 border border-[#018D43]/10"
          >
            <h3 className="text-2xl font-bold mb-4">
              {serviceCategories[activeCategory].category}
            </h3>
            <ul className="ml-2 space-y-3">
              {serviceCategories[activeCategory].services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#018D43] hover:underline hover:text-[#018D43] transition-colors text-lg"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0  overflow-visible">
        <motion.div
          style={{
            y: y1,
            rotate: rotate1,
            x: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
          className="absolute right-[10%] bottom-0"
        >
          <Image
            src="/images/Leaf/leaf-01.webp"
            alt="Aurora Cleaning Services"
            width={100}
            height={100}
            className="w-16 h-16 opacity-70"
          />
        </motion.div>
        <motion.div
          style={{
            y: y2,
            rotate: rotate2,
            x: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
          className="absolute right-[5%] bottom-20"
        >
          <Image
            src="/images/Leaf/leaf-02.webp"
            alt="Aurora Cleaning Services"
            width={100}
            height={100}
            className="w-20 h-20 opacity-60"
          />
        </motion.div>
        <motion.div
          style={{
            y: y3,
            rotate: rotate3,
            x: useTransform(scrollYProgress, [0, 1], [0, 30]),
          }}
          className="absolute right-[12%] bottom-20"
        >
          <Image
            src="/images/Leaf/leaf-03.webp"
            alt="Aurora Cleaning Services"
            width={100}
            height={100}
            className="w-14 h-14 opacity-50"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-40 left-0 right-0  overflow-visible">
        <motion.div
          style={{
            y: y1,
            rotate: rotate1,
            x: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
          className="absolute left-[10%] bottom-0"
        >
          <Image
            src="/images/Leaf/leaf-01.webp"
            alt="Aurora Cleaning Services"
            width={100}
            height={100}
            className="w-16 h-16 opacity-70"
          />
        </motion.div>
        <motion.div
          style={{
            y: y2,
            rotate: rotate2,
            x: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
          className="absolute left-[5%] bottom-20"
        >
          <Image
            src="/images/Leaf/leaf-02.webp"
            alt="Aurora Cleaning Services"
            width={100}
            height={100}
            className="w-20 h-20 opacity-60"
          />
        </motion.div>
        <motion.div
          style={{
            y: y3,
            rotate: rotate3,
            x: useTransform(scrollYProgress, [0, 1], [0, 30]),
          }}
          className="absolute left-[12%] bottom-20"
        >
          <Image
            src="/images/Leaf/leaf-03.webp"
            alt="Aurora Cleaning Services"
            width={100}
            height={100}
            className="w-14 h-14 opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
}
