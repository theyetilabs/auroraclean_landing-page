"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const reasons = [
  {
    title: "Proven Success and High Success Rates",
    items: [
      {
        title: "99.99% Visa Success Rate",
        description:
          "Our exceptional visa approval rate ensures you can confidently pursue your aspirations in Japan.",
        icon: "✓",
      },
      {
        title: "99.99% Job Placement Rate",
        description:
          "Nearly every applicant secures a role, reflecting our commitment to your career success.",
        icon: "💼",
      },
      {
        title: "4,000+ Applicants Enrolled",
        description:
          "Our growing community of enrolled applicants showcases the trust we've earned.",
        icon: "👥",
      },
    ],
    image: "/images/why-choose-us/wcu-001.png",
  },
  {
    title: "Expert and Qualified Team",
    items: [
      {
        title: "Experienced Instructors",
        description:
          "Our young, energetic team of highly qualified Japanese language instructors uses diverse teaching methods.",
        icon: "🎓",
      },
      {
        title: "Professional Legal Assistance",
        description:
          "An in-house Japanese lawyer oversees visa processing, ensuring compliance with legal standards.",
        icon: "⚖️",
      },
      {
        title: "Industry Professionals",
        description:
          "Specialized training programs, led by experts in fields like Nursing and Food Service.",
        icon: "👨‍🏫",
      },
    ],
    image: "/images/why-choose-us/wcu-002.png",
  },
  {
    title: "Comprehensive and Tailored Support",
    items: [
      {
        title: "All-in-One Services",
        description:
          "From curriculum-based language classes to job and study placements, we cover every step of your journey.",
        icon: "🔄",
      },
      {
        title: "Personalized Guidance",
        description:
          "We tailor our services to match your skills, aspirations, and goals.",
        icon: "🎯",
      },
      {
        title: "Ongoing Support",
        description:
          "Post-placement assistance, including workplace cultural guidance and settling-in tips.",
        icon: "🤝",
      },
    ],
    image: "/images/why-choose-us/wcu-003.png",
  },
  {
    title: "Extensive Network and Partnerships",
    items: [
      {
        title: "300+ Companies/Partners",
        description:
          "Our robust network connects you to diverse opportunities in Japan's top industries.",
        icon: "🌐",
      },
      {
        title: "Industry Connections",
        description:
          "Strong ties with sectors like Nursing Care, Construction, and Restaurants.",
        icon: "🏢",
      },
      {
        title: "Trusted Employer Relationships",
        description:
          "We work closely with verified and reputable employers to ensure job security, fair treatment, and long-term growth.",
        icon: "🤝",
      },
    ],
    image: "/images/why-choose-us/wcu-004.png",
  },
  {
    title: "Transparent and Affordable Solutions",
    items: [
      {
        title: "Transparent Policies",
        description:
          "No hidden fees or pre-charges—our fee structure is clear and straightforward.",
        icon: "🔍",
      },
      {
        title: "Scholarships",
        description:
          "Available for deserving candidates, making quality education accessible.",
        icon: "🎓",
      },
      {
        title: "Affordability",
        description:
          "High-quality services at cost-friendly prices ensure value for every applicant.",
        icon: "💰",
      },
    ],
    image: "/images/why-choose-us/wcu-005.png",
  },
  {
    title: "Dynamic and Supportive Environment",
    items: [
      {
        title: "Dynamic Learning",
        description:
          "Our innovative classrooms foster an energetic and interactive learning experience.",
        icon: "⚡",
      },
      {
        title: "Convenient Facilities",
        description:
          "Hostel and bus facilities in Chitwan and Kathmandu provide a supportive environment.",
        icon: "🏠",
      },
      {
        title: "Integrity and Reliability",
        description:
          "We prioritize trust in every interaction, delivering on our promises.",
        icon: "🤝",
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
        className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/10 to-transparent"
      >
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text"
            >
              Why Choose Us?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-10"
            >
              At Customer Group, we are more than just a consultancy—we are your
              partner in achieving your dreams in Japan. With a proven track
              record of empowering Nepali individuals through the Specified
              Skilled Worker (SSW) Program and academic opportunities, we offer
              unparalleled support in language training, visa processing, job
              placement, and more.
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
                      ? "bg-[#363672] text-white shadow-lg"
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
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-b from-[#363672] to-[#00378b]/80 p-2 md:p-12  rounded-3xl"
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
        className="py-20 pb-9  bg-[#00378b] text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Commitment to You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-md mb-8 max-w-2xl mx-auto"
          >
            We are dedicated to unlocking your potential in Japan by providing a
            seamless, supportive, and successful experience. Whether you&apos;re
            aiming for a job in Japan&apos;s workforce or pursuing higher
            education, our comprehensive approach ensures you&apos;re equipped
            with the skills, legal support, and opportunities to thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-[#00378b] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
