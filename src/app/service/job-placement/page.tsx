"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  UserRoundSearch,
  FileText,
  GraduationCap,
  Headset,
  Scale,
} from "lucide-react";

export default function JobPlacementPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Industry-Specific Job Placements",
      description:
        "We maintain strong connections with various industries, facilitating job placements in fields like Agriculture, Nursing Care, Restaurants, Cleaning, and Construction. Our deep ties with Japanese employers ensure roles that align with your qualifications and career goals.",
      icon: <Building2 className="w-12 h-12 text-[#00378b]" />,
    },
    {
      title: "Personalized Job Matching",
      description:
        "Our team works closely with you to understand your skills, experience, and aspirations. We then match you with opportunities that fit your profile, ensuring a fulfilling career in Japan.",
      icon: <UserRoundSearch className="w-12 h-12 text-[#00378b]" />,
    },
    {
      title: "Document Arrangement and Visa Processing",
      description:
        "We provide tailored document arrangement and visa processing to meet SSW Program requirements. Supported by our in-house Japanese lawyer, we ensure legal compliance for a smooth transition to your new role.",
      icon: <FileText className="w-12 h-12 text-[#00378b]" />,
    },
    {
      title: "Additional Training Programs",
      description:
        "Enhance your skills with specialized courses like JFT Basic & Advanced Classes, Nursing, and Food Service training. Led by industry professionals, these programs equip you with practical knowledge for your chosen field.",
      icon: <GraduationCap className="w-12 h-12 text-[#00378b]" />,
    },
    {
      title: "Post-Placement Support",
      description:
        "We offer ongoing support to help you settle into your new role, including workplace cultural guidance and practical settling-in tips to ensure long-term success.",
      icon: <Headset className="w-12 h-12 text-[#00378b]" />,
    },
    {
      title: "SSW/VISA Processing with a Japanese Lawyer",
      description:
        "Our in-house Japanese lawyer ensures seamless SSW and visa processing, adhering to legal requirements and facilitating smooth transitions for our applicants.",
      icon: <Scale className="w-12 h-12 text-[#00378b]" />,
    },
  ];

  const supportFacilities = [
    {
      title: "Hostel Facilities",
      description:
        "Available in Kathmandu, only for girls. Convenient living options provide a supportive environment during your preparation and transition.",
      icon: "🏠",
    },
    {
      title: "Bus Facilities",
      description: "Available in Chitwan, ensuring easy access to our centers.",
      icon: "🚌",
    },
  ];

  return (
    <div className="min-h-screen gradient">
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
              Job Placement Assistance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-10"
            >
              Welcome to Customer Group&apos;s Job Placement Assistance, your
              gateway to a rewarding career in Japan. We specialize in
              connecting Nepali talent with opportunities in Japan&apos;s
              dynamic workforce through the Specified Skilled Worker (SSW)
              Program and beyond.
            </motion.p>
          </div>
        </section>
      </motion.div>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Our Services Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="flex items-center justify-center mb-6 p-4 rounded-lg  transition-colors">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#00378b] mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-justify">
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

          {/* Support Facilities Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#00378b] to-[#363672] text-transparent bg-clip-text"
            >
              Support Facilities
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportFacilities.map((facility, index) => (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Left side - Icon and Title */}
                    <div className="w-full md:w-1/3 bg-gradient-to-br from-[#00378b] to-[#363672] p-8 flex flex-col items-center justify-center text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 text-center">
                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {facility.icon}
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-white/90 transition-colors duration-300">
                          {facility.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right side - Description */}
                    <div className="w-full md:w-2/3 p-8 flex items-center">
                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00378b] to-[#363672] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00378b] to-[#363672] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-20 bg-[#00378b] relative text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your <span className="text-red-500">Career</span> in
            Japan?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Let us help you find the perfect job opportunity in Japan.
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
