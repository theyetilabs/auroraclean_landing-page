"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useStore } from "@/store/useStore";

interface ServiceHeroProps {
  serviceName: string;
  introduction: string;
  image: string;
}

export default function ServiceHero({
  serviceName,
  introduction,
  image,
}: ServiceHeroProps) {
  const { openGetQuotes } = useStore();
  return (
    <div className="relative  bg-white pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              SERVICES
            </p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              {serviceName}
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">{introduction}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#018D43] text-white px-8 py-3 rounded-md font-medium hover:bg-[#007436] transition-colors duration-300"
              onClick={() => openGetQuotes()}
            >
              Free Quote
            </motion.button>
          </motion.div>
        </div>
        <div className="flex items-center gap-2 justify-center mt-4 mb-4 w-full">
          <Image
            src={image}
            alt="Service Image"
            width={1000}
            height={1000}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
