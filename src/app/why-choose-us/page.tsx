"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const reasons = [
  {
    title: "Eco-Friendly Commitment",
    items: [
      {
        title: "Non-Toxic, Biodegradable Products",
        description:
          "We use plant-based cleaning solutions free from harsh chemicals like bleach, ammonia, and phthalates, ensuring safety for your staff, clients, and pets.",
        icon: "🌱",
      },
      {
        title: "Certified Sustainability",
        description:
          "Our cleaning products meet rigorous standards, such as EPA's Safer Choice and Green Seal certifications, guaranteeing they are environmentally responsible and effective.",
        icon: "✓",
      },
      {
        title: "Sustainable Practices",
        description:
          "We minimize waste with recyclable packaging and use energy-efficient equipment, supporting your business's green credentials.",
        icon: "♻️",
      },
    ],
    image: "/images/why-choose-us/wcu-001.png",
  },
  {
    title: "Reliability and Punctuality",
    items: [
      {
        title: "Punctual Arrivals",
        description:
          "Our cleaning teams use GPS tracking to ensure they arrive on time, every time. No delays or disruptions—just dependable service you can count on.",
        icon: "⏰",
      },
      {
        title: "24/7 Monitoring System",
        description:
          "Our real-time cleaning management system tracks every shift, ensuring consistent quality and no missed tasks.",
        icon: "📱",
      },
      {
        title: "Proven Reliability",
        description:
          "With over 220 gyms, 77 offices, 17 hotels, 33 restaurants, 9 warehouses, and 3 aged care homes served, our track record speaks for itself.",
        icon: "📊",
      },
    ],
    image: "/images/why-choose-us/wcu-002.png",
  },
  {
    title: "Expert Team & Advanced Technology",
    items: [
      {
        title: "Certified Professionals",
        description:
          "Our cleaners are fully trained, certified, and insured, with expertise in commercial cleaning for diverse sectors.",
        icon: "👨‍🏫",
      },
      {
        title: "Cutting-Edge Technology",
        description:
          "We use advanced tools like electrostatic sprayers and UV-C disinfection devices to eliminate pathogens and ensure hygienic spaces.",
        icon: "🔬",
      },
      {
        title: "Safety First",
        description:
          "Our rigorous safety protocols and insured staff provide peace of mind, ensuring your workplace is cleaned with care and professionalism.",
        icon: "🛡️",
      },
    ],
    image: "/images/why-choose-us/wcu-003.png",
  },
  {
    title: "Tailored Solutions & Client Satisfaction",
    items: [
      {
        title: "Customized Cleaning Plans",
        description:
          "We design flexible schedules—daily, weekly, or monthly—tailored to your business type, size, and budget.",
        icon: "📋",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Our services adapt to your hours, offering off-peak cleaning to avoid disruptions, ensuring your workplace remains operational.",
        icon: "🕒",
      },
      {
        title: "Satisfaction Guarantee",
        description:
          "We stand behind our work with a 100% satisfaction guarantee. If you're not thrilled with our service, we'll make it right at no extra cost.",
        icon: "⭐",
      },
    ],
    image: "/images/why-choose-us/wcu-004.png",
  },
  {
    title: "Extensive Experience",
    items: [
      {
        title: "Diverse Client Base",
        description:
          "We serve a wide range of businesses including gyms, offices, hotels, restaurants, warehouses, and aged care homes.",
        icon: "🏢",
      },
      {
        title: "Industry Expertise",
        description:
          "Our experience across various sectors allows us to understand and meet the unique cleaning needs of each industry.",
        icon: "🎯",
      },
      {
        title: "Proven Track Record",
        description:
          "Our growing portfolio of satisfied clients across Sydney showcases our commitment to excellence in commercial cleaning.",
        icon: "📈",
      },
    ],
    image: "/images/why-choose-us/wcu-005.png",
  },
  {
    title: "Part of Asta Business Group",
    items: [
      {
        title: "Corporate Backing",
        description:
          "As part of the Asta Business Group, we bring corporate-level resources and support to every cleaning project.",
        icon: "🏛️",
      },
      {
        title: "Professional Standards",
        description:
          "We maintain the highest standards of professionalism and service quality expected from a leading business group.",
        icon: "🎖️",
      },
      {
        title: "Sustainable Growth",
        description:
          "Our corporate backing ensures long-term stability and continuous improvement in our cleaning services.",
        icon: "🌱",
      },
    ],
    image: "/images/why-choose-us/wcu-006.png",
  },
];

export default function WhyChooseUsPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<number>(0);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // ScrollSpy: update activeSection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map((ref) =>
        ref ? ref.getBoundingClientRect().top : Infinity
      );
      // Find the last section above the top of the viewport (with some offset)
      const active = offsets.findIndex((top, idx) => top > 520 && idx > 0);
      if (active === -1) {
        setActiveSection(offsets.length - 1);
      } else {
        setActiveSection(Math.max(0, active - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll nav to active button
  useEffect(() => {
    if (navContainerRef.current && buttonRefs.current[activeSection]) {
      const container = navContainerRef.current;
      const button = buttonRefs.current[activeSection];
      // Scroll so the button is centered in the nav
      const scrollLeft =
        button.offsetLeft - container.offsetWidth / 2 + button.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeSection]);

  const handleNavClick = (idx: number) => {
    const ref = sectionRefs.current[idx];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 ">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#018D43]/10 to-transparent"
      >
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#018D43] to-red-500 text-transparent bg-clip-text"
            >
              Why Choose Aurora Cleaning Service?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-10"
            >
              Sydney&apos;s Trusted Partner for Sustainable Commercial Cleaning.
              At Aurora Cleaning Service, we redefine commercial cleaning in
              Sydney with a commitment to sustainability, reliability, and
              excellence. As part of the Asta Business Group, we deliver
              tailored cleaning solutions that transform workplaces into
              spotless, healthy, and eco-friendly spaces. From gyms to offices
              and restaurants, discover why Aurora is the preferred choice for
              businesses across Sydney.
            </motion.p>
          </div>
        </section>
      </motion.div>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
          {/* Sticky Reasons Navigation */}
          <nav
            className="w-full hidden md:block sticky top-24 z-20 mb-8 lg:mb-0"
            aria-label="Reasons navigation"
          >
            <div
              className="flex overflow-x-auto flex-row gap-2 bg-white/80 rounded-2xl shadow-md p-2 lg:p-4 modern-scrollbar"
              ref={navContainerRef}
            >
              {reasons.map((reason, index) => (
                <button
                  key={reason.title}
                  onClick={() => handleNavClick(index)}
                  className={`px-4 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-left text-sm lg:text-base ${
                    activeSection === index
                      ? "bg-[#01401e] text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  aria-current={activeSection === index ? "page" : undefined}
                  ref={(el: HTMLButtonElement | null) => {
                    buttonRefs.current[index] = el;
                  }}
                >
                  {reason.title}
                </button>
              ))}
            </div>
          </nav>

          {/* Reasons Sections */}
          <div className="flex-1 space-y-16">
            {reasons.map((reason, idx) => (
              <section
                key={reason.title}
                id={`reason-section-${idx}`}
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[idx] = el;
                }}
                className="scroll-mt-32"
                aria-labelledby={`reason-title-${idx}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-t  from-[#01401e] via-[#007436] to-[#018D43]/80 p-2 md:p-12  rounded-3xl"
                >
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-contain md:object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="space-y-8">
                    <h2
                      id={`reason-title-${idx}`}
                      className="text-2xl font-bold text-white"
                    >
                      {reason.title}
                    </h2>
                    <div className="space-y-6">
                      {reason.items.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="text-xl">{item.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 pb-9  bg-[#018D43] text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Shine with Aurora?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-md mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of Sydney businesses trusting Aurora Cleaning Service
            for clean, safe, and sustainable workplaces. Contact us today for a
            free, no-obligation quote and experience the Aurora difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-[#018D43] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
