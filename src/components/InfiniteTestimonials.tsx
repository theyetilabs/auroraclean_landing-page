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
      "Aurora Clean transformed my home! The team was professional and left everything spotless. Highly recommend!",
    author: "John Smith",
    role: "Homeowner",
    image: "/images/headshot/headshot-01.png",
    rating: 5,
    variant: "large",
  },
  {
    quote:
      "Eco-friendly and efficient—my office has never looked better. Thank you, Aurora Clean!",
    author: "Emily Johnson",
    role: "Business Owner",
    image: "/images/headshot/headshot-06.png",
    rating: 5,
    variant: "small",
  },
  {
    quote: "Prompt and courteous team. Aurora Clean exceeded my expectations!",
    author: "Robert Taylor",
    role: "Business Owner",
    image: "/images/headshot/headshot-04.png",
    rating: 5,
    variant: "small",
  },
  {
    quote:
      "Great service and friendly staff. Booking was easy, and the results were amazing!",
    author: "Michael Brown",
    role: "Customer",
    image: "/images/headshot/headshot-02.png",
    rating: 5,
    variant: "medium",
  },
  {
    quote:
      "The attention to detail is unmatched. My house feels fresh and clean every time!",
    author: "Sarah Davis",
    role: "Homeowner",
    image: "/images/headshot/headshot-07.png",
    rating: 5,
    variant: "large",
  },
  {
    quote:
      "Fast, reliable, and affordable. Aurora Clean is my go-to for all cleaning needs!",
    author: "David Lee",
    role: "Customer",
    image: "/images/headshot/headshot-03.png",
    rating: 5,
    variant: "small",
  },
];

const testimonials2: Testimonial[] = [
  {
    quote:
      "Impressed by the thoroughness! My carpets look brand new after their service.",
    author: "Lisa Anderson",
    role: "Homeowner",
    image: "/images/headshot/headshot-08.png",
    rating: 5,
    variant: "large",
  },
  {
    quote: "Prompt and courteous team. Aurora Clean exceeded my expectations!",
    author: "Robert Taylor",
    role: "Business Owner",
    image: "/images/headshot/headshot-04.png",
    rating: 5,
    variant: "small",
  },
  {
    quote:
      "Aurora Clean transformed my home! The team was professional and left everything spotless. Highly recommend!",
    author: "John Smith",
    role: "Homeowner",
    image: "/images/headshot/headshot-01.png",
    rating: 5,
    variant: "large",
  },
  {
    quote:
      "A breath of fresh air! The eco-friendly approach is a big plus for me.",
    author: "Anna Wilson",
    role: "Customer",
    image: "/images/headshot/headshot-09.png",
    rating: 5,
    variant: "medium",
  },
  {
    quote: "Top-notch cleaning and great value. Will definitely use again!",
    author: "James Martinez",
    role: "Customer",
    image: "/images/headshot/headshot-05.png",
    rating: 5,
    variant: "large",
  },
  {
    quote:
      "The staff was amazing, and my place sparkles now. Highly satisfied!",
    author: "Rachel Kim",
    role: "Homeowner",
    image: "/images/headshot/headshot-10.png",
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
                  {duplicatedTestimonials
                    .slice(0, 3)
                    .map((testimonial, idx) => (
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
                  {duplicatedTestimonials
                    .slice(3, 6)
                    .map((testimonial, idx) => (
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
                    .slice(0, 3)
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
                  {duplicatedTestimonials2
                    .slice(3, 6)
                    .map((testimonial, idx) => (
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
                  {duplicatedTestimonials2
                    .slice(0, 3)
                    .map((testimonial, idx) => (
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
                    .slice(3, 6)
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
