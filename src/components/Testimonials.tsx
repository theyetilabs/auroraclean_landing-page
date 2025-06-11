"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Commercial Cleaning Services",
    role: "Professional Commercial Solutions",
    image: "/images/tabs-section/01.png",
    quote: "Comprehensive Commercial Cleaning Solutions",
    content:
      "• Routine Maintenance\n• Deep Cleaning\n• Disinfection Services\n• Specialized Cleaning\n• Emergency Cleaning\n• Eco-Friendly Options\n• Additional Services",
    stars: 5,
  },
  {
    name: "Office Cleaning Sydney",
    role: "Professional Office Solutions",
    image: "/images/tabs-section/02.png",
    quote: "Tailored Office Cleaning Services",
    content:
      "• Daily Cleaning\n• Weekly Cleaning\n• Monthly Deep Cleaning\n• Specialized Services\n• End-of-Lease\n• Post-Construction\n• COVID-19 Disinfection\n• Custom Plans",
    stars: 5,
  },
  {
    name: "Strata Cleaning Sydney",
    role: "Comprehensive Strata Solutions",
    image: "/images/tabs-section/03.png",
    quote: "Complete Strata Property Maintenance",
    content:
      "• Common Areas\n• Exterior Maintenance\n• Outdoor Areas\n• Waste Management\n• Deep Cleaning\n• Pool & Gym Cleaning\n• Community Room Cleaning\n• Minor Maintenance",
    stars: 5,
  },
  {
    name: "Medical Cleaning Sydney",
    role: "Healthcare Facility Solutions",
    image: "/images/tabs-section/04.png",
    quote: "Specialized Medical Facility Cleaning",
    content:
      "• Routine Cleaning\n• Terminal Cleaning\n• High-Touch Surface Disinfection\n• Restroom Cleaning\n• Kitchen Area Cleaning\n• Operating Rooms\n• Labs & Pharmacies\n• Medical Waste Management",
    stars: 5,
  },
  {
    name: "Gym Cleaning Sydney",
    role: "Fitness Facility Solutions",
    image: "/images/tabs-section/05.png",
    quote: "Comprehensive Gym & Fitness Center Cleaning",
    content:
      "• Equipment Cleaning\n• Floors and Carpets\n• Restrooms and Showers\n• Locker Rooms\n• Windows and Mirrors\n• Air Quality Improvement\n• Sauna Cleaning\n• Deep Cleaning Services",
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="w-full bg-[#018D43] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">Our Cleaning Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Service list */}
          <div className="space-y-4">
            {testimonials.map((service, index) => (
              <div
                key={service.name}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-white/10 border border-white/20"
                    : "hover:bg-white/5"
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className=" p-4 bg-white rounded-lg">
                  <div className="relative h-14 w-14 rounded-lg overflow-hidden bg-white">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Active service content */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4">
              {testimonials[activeTestimonial].name}
            </h3>
            <p className="text-xl font-medium mb-6 text-blue-200">
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {testimonials[activeTestimonial].content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
