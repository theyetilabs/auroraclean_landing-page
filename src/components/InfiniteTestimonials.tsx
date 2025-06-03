"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  variant: "small" | "medium" | "large";
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The best cleaning service I&apos;ve ever used! They are thorough, professional, and always on time.",
    author: "Sarah Johnson",
    role: "Homeowner",
    image: "/images/testimonials/1.jpg",
    rating: 5,
    variant: "large",
  },
  {
    quote:
      "NeatNest has transformed how I maintain my office space. Their attention to detail is remarkable.",
    author: "Michael Chen",
    role: "Business Owner",
    image: "/images/testimonials/2.jpg",
    rating: 5,
    variant: "small",
  },
];

const testimonials2: Testimonial[] = [
  {
    quote:
      "The best cleaning service I&apos;ve ever used! They are thorough, professional, and always on time.",
    author: "Sarah Johnson",
    role: "Homeowner",
    image: "/images/testimonials/1.jpg",
    rating: 5,
    variant: "large",
  },
  {
    quote:
      "NeatNest has transformed how I maintain my office space. Their attention to detail is remarkable.",
    author: "Michael Chen",
    role: "Business Owner",
    image: "/images/testimonials/2.jpg",
    rating: 5,
    variant: "small",
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl mx-2 p-6 shadow-xl ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.author}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed">{testimonial.quote}</p>
    </motion.div>
  );
};

const InfiniteTestimonials: React.FC = () => {
  const duplicatedTestimonials = [...testimonials];
  const duplicatedTestimonials2 = [...testimonials2];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our cleaning services.
          </p>
        </div>
        <div className="relative">
          <div className="w-full flex marquee-container overflow-hidden">
            <div className="flex animate-scroll flex-shrink-0 w-full">
              {/* First Column */}
              <div className="flex-1">
                <div className="space-y-6">
                  {duplicatedTestimonials.map((testimonial, idx) => (
                    <TestimonialCard
                      key={`col1-${idx}`}
                      testimonial={testimonial}
                      className={
                        testimonial.variant === "large"
                          ? "h-[300px]"
                          : testimonial.variant === "medium"
                          ? "h-[250px]"
                          : "h-[200px]"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Second Column */}
              <div className="flex-1">
                <div className="space-y-6">
                  {duplicatedTestimonials.reverse().map((testimonial, idx) => (
                    <TestimonialCard
                      key={`col2-${idx}`}
                      testimonial={testimonial}
                      className={
                        testimonial.variant === "large"
                          ? "h-[300px]"
                          : testimonial.variant === "medium"
                          ? "h-[250px]"
                          : "h-[200px]"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Third Column */}
              <div className="flex-1">
                <div className="space-y-6">
                  {duplicatedTestimonials
                    .slice(3)
                    .concat(duplicatedTestimonials.slice(0, 3))
                    .map((testimonial, idx) => (
                      <TestimonialCard
                        key={`col3-${idx}`}
                        testimonial={testimonial}
                        className={
                          testimonial.variant === "large"
                            ? "h-[300px]"
                            : testimonial.variant === "medium"
                            ? "h-[250px]"
                            : "h-[200px]"
                        }
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="flex  animate-scroll flex-shrink-0 w-full">
              {/* First Column */}
              <div className="flex-1">
                <div className="space-y-6">
                  {duplicatedTestimonials2.map((testimonial, idx) => (
                    <TestimonialCard
                      key={`col1-${idx}`}
                      testimonial={testimonial}
                      className={
                        testimonial.variant === "large"
                          ? "h-[300px]"
                          : testimonial.variant === "medium"
                          ? "h-[250px]"
                          : "h-[200px]"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Second Column */}
              <div className="flex-1">
                <div className="space-y-6">
                  {duplicatedTestimonials2.reverse().map((testimonial, idx) => (
                    <TestimonialCard
                      key={`col2-${idx}`}
                      testimonial={testimonial}
                      className={
                        testimonial.variant === "large"
                          ? "h-[300px]"
                          : testimonial.variant === "medium"
                          ? "h-[250px]"
                          : "h-[200px]"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Third Column */}
              <div className="flex-1">
                <div className="space-y-6">
                  {duplicatedTestimonials2
                    .slice(3)
                    .concat(duplicatedTestimonials.slice(0, 3))
                    .map((testimonial, idx) => (
                      <TestimonialCard
                        key={`col3-${idx}`}
                        testimonial={testimonial}
                        className={
                          testimonial.variant === "large"
                            ? "h-[300px]"
                            : testimonial.variant === "medium"
                            ? "h-[250px]"
                            : "h-[200px]"
                        }
                      />
                    ))}
                </div>
              </div>
            </div>
            {/* Gradient Overlays */}
          </div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteTestimonials;
