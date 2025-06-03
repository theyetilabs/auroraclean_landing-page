"use client";
import { use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Program {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  programs: Program[];
}

const services: Record<string, Service> = {
  "japanese-language-training": {
    title: "Japanese Language Training",
    description:
      "Welcome to Customer Group's Japanese Language Training, your key to unlocking success in Japan through the Specified Skilled Worker (SSW) Program and beyond. We specialize in empowering Nepali individuals with comprehensive language skills, preparing you for Japan's dynamic workforce. Our mission is to bridge Nepali talent with opportunities in Japan, equipping you with the proficiency needed to excel in diverse industries.",
    image: "/images/Services/Course.png",
    programs: [
      {
        title: "Curriculum-Based Classes",
        description:
          "Our curriculum-based classes focus on cultural immersion and language acquisition, designed to meet the standards of Japanese language proficiency exams like JFT N4 or higher. Led by expert instructors, these classes ensure you master conversational Japanese and technical vocabulary for your chosen industry.",
      },
      {
        title: "JFT Preparation",
        description:
          "Prepare for JFT N4 level or higher with our focused training program. Our experienced instructors use diverse teaching methods, including mock tests and practical sessions, to ensure your success. This preparation equips you with the language skills needed for Japan's workforce.",
      },
      {
        title: "Additional Training Programs",
        description:
          "Enhance your skills with specialized courses like JFT Basic & Advanced Classes, Nursing, and Food Service training. Led by industry professionals, these programs offer practical knowledge to prepare you for careers in Japan's key sectors.",
      },
    ],
  },
};

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen gradient">
      {/* Hero Section */}
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/40 to-transparent">
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-10">
              {service.description}
            </p>
          </div>
        </section>
      </div>

      <div className="relative h-[70vh] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Main Content Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Programs Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <h2 className="text-2xl font-bold text-[#00378b] mb-4">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00378b] text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your{" "}
            <span className="text-red-500">Japanese Language</span> Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive training programs and take the first step
            towards your career in Japan.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00378b] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
