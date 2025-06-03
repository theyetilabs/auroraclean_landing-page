"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Anil B.K",
    role: "Specified Skilled Worker (SSW), Toyama",
    image: "/images/Review/Review_01.png",
    quote:
      "Ohayougozaimasu! Thanks to Sushi Bomber Nepal, my journey to Japan was smooth and stress-free.",
    content:
      "I'm Anil B.K., now living in Toyama, Japan. Thanks to Sushi Bomber Nepal, my journey to Japan as a Specified Skilled Worker (SSW) was smooth and stress-free. They provided full support, from language training to visa processing, and delivered all facilities as promised.",
    stars: 5,
  },
  {
    name: "Kiran Malla Thakuri",
    role: "SSW Worker, Syangja",
    image: "/images/Review/Review_02.png",
    quote: "Sushi Bomber Nepal made my dream a reality!",
    content:
      "I'm Kiran Malla Thakuri from Syangja, Nepal, now working in Japan for three months. Sushi Bomber Nepal made my dream a reality with seamless visa processing and job placement support. They delivered all promised facilities, making them one of Nepal's best consultancies!",
    stars: 5,
  },
  {
    name: "Bikash Gurung",
    role: "Student, Kyoto",
    image: "/images/Review/Review_03.png",
    quote: "Their support made my transition to Japan smooth and inspiring!",
    content:
      "Namaste! I'm Bikash Gurung from Pokhara, Nepal, now Kyoto, Japan. Sushi Bomber Nepal helped me pass JLPT N3 with their expert language training and guided me through the student visa process. Their support made my transition to Japan smooth and inspiring!",
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
    <section className="w-full bg-[#00378b] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Testimonial list */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-white/10 border border-white/20"
                    : "hover:bg-white/5"
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="relative h-14 w-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Active testimonial content */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xl font-medium mb-6">
              &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
            </p>
            <p className="text-gray-400 leading-relaxed">
              {testimonials[activeTestimonial].content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
