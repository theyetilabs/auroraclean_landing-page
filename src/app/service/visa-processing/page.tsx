"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VisaProcessingPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Comprehensive Visa Support",
      description:
        "We handle every step of the visa application process, from document preparation to submission, tailored to the SSW Program and other visa categories. Our in-house Japanese lawyer ensures compliance with Japan's immigration laws, maximizing your approval chances.",
      image: "/images/visa.jpg",
    },
    {
      title: "SSW Visa Processing with a Japanese Lawyer",
      description:
        "Benefit from the expertise of our dedicated Japanese lawyer, who oversees your SSW visa application. This personalized service guarantees adherence to legal standards, streamlining your transition to Japan's workforce.",
      image: "/images/Services/SSW-Visa.png",
    },
    {
      title: "Document Arrangement",
      description:
        "Our team meticulously arranges all required documents, ensuring accuracy and completeness to avoid delays. We guide you through gathering certificates, translations, and other essentials specific to your visa type.",
      image: "/images/Services/Document-Arrangement.png",
    },
  ];

  const successIndicators = [
    {
      number: "99.99%",
      title: "Visa Success Rate",
      description:
        "Our exceptional success rate reflects our commitment to excellence in visa processing, giving you peace of mind.",
      icon: "✓",
    },
    {
      number: "4,000+",
      title: "Applicants Enrolled",
      description:
        "The growing number of enrolled applicants showcases the trust we've earned in the community.",
      icon: "👥",
    },
    {
      number: "300+",
      title: "Companies/Partners",
      description:
        "Our extensive network of partners enhances your visa and job placement prospects.",
      icon: "🤝",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description:
        "Our team, including a Japanese lawyer, provides unparalleled support throughout the process.",
      icon: "🎓",
    },
    {
      title: "High Success Rate",
      description:
        "With a 99.99% visa approval rate, we ensure your application stands out.",
      icon: "📈",
    },
    {
      title: "Transparent Process",
      description:
        "We maintain clear communication, with no hidden fees or surprises.",
      icon: "🔍",
    },
    {
      title: "Reliable Support",
      description:
        "From document preparation to final approval, we're with you every step of the way.",
      icon: "💪",
    },
    {
      title: "Tailored Solutions",
      description:
        "Services are customized to meet the specific needs of the SSW Program and your personal goals.",
      icon: "🎯",
    },
    {
      title: "Strong Network in Japan",
      description:
        "Leverage our established connections with top employers, training institutions, and legal professionals to enhance your opportunities.",
      icon: "🌐",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/40 to-transparent"
      >
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text"
            >
              Visa Processing Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-10"
            >
              Our comprehensive visa processing services ensure a smooth
              transition to Japan through the SSW Program and other visa
              categories. With our in-house Japanese lawyer and expert team, we
              handle every step of the process with precision and care.
            </motion.p>
          </div>
        </section>
      </motion.div>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Our Services Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-full"
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00378b] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredService === index ? "100%" : 0 }}
                      className="h-1 bg-[#00378b] absolute bottom-0 left-0"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Indicators Section */}
          <div className="mb-20 bg-gradient-to-t from-[#232359] to-[#00378b] rounded-3xl p-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-white"
            >
              Our Success Indicators
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4  font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                    {indicator.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {indicator.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {indicator.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-[#00378b]"
            >
              Why Choose Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-[#00378b] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-[#00378b] text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your <span className="text-red-500">Journey</span> to
            Japan?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Let us help you navigate the visa process with confidence and ease.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-[#00378b] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
