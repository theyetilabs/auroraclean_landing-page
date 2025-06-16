"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";

interface ServiceSidebarProps {
  contact: {
    phone: string;
    email: string;
    website: string;
    note: string;
  };
  region: string;
  currentService: string;
}

export default function ServiceSidebar({
  contact,
  region,
  currentService,
}: ServiceSidebarProps) {
  return (
    <div className="lg:w-1/3 space-y-8">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-6">Choose Any Service</h3>
        <div className="space-y-4">
          {services
            .filter((service) => service.slug !== currentService)
            .map((service) => (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
              >
                <span className="group-hover:text-blue-600 transition-colors duration-200">
                  {service.service_name}
                </span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </Link>
            ))}
        </div>
      </motion.div>

      <div className="w-full h-auto flex flex-col justify-center items-center rounded-[2.5rem] bg-gradient-to-br from-yellow-300 via-yellow-100 to-green-100 p-8 md:p-12">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 leading-snug">
            Looking for the cleaning
            <br />
            service in {region}?
            <br />
            Contact us now!
          </div>
          <div className="flex justify-center">
            <div
              className="flex cursor-pointer items-center gap-4 bg-white rounded-full px-6 py-3 shadow-md"
              onClick={() => {
                window.open(`tel:${contact.phone}`, "_blank");
              }}
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400 text-white text-2xl">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
              </span>
              <span className="text-lg md:text-xl font-medium text-gray-900 tracking-wide select-all">
                {contact.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
