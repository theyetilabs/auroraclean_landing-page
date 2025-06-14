"use client";
import React, { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/constants";
import Link from "next/link";
type FilterType = "all" | "commercial" | "residential" | "specialized";

const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

  const filterCount = {
    all: services.length,
    commercial: services.filter((s) => s.category === "commercial").length,
    residential: services.filter((s) => s.category === "residential").length,
    specialized: services.filter((s) => s.category === "specialized").length,
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-[#01401e]">Serv</span>
            <span className="text-teal-600">ices</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored to meet the unique needs
            of every space. From commercial offices to specialized medical
            facilities, we deliver excellence in every service.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
              ${
                activeFilter === "all"
                  ? "bg-[#01401e] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            All Services ({filterCount.all})
          </button>
          <button
            onClick={() => setActiveFilter("commercial")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
              ${
                activeFilter === "commercial"
                  ? "bg-[#01401e] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            Commercial ({filterCount.commercial})
          </button>
          <button
            onClick={() => setActiveFilter("residential")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
              ${
                activeFilter === "residential"
                  ? "bg-[#01401e] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            Residential ({filterCount.residential})
          </button>
          <button
            onClick={() => setActiveFilter("specialized")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
              ${
                activeFilter === "specialized"
                  ? "bg-[#01401e] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            Specialized ({filterCount.specialized})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.service_name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {service.service_name}
                </h3>
                <p className="text-[#007436] font-medium mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link href={`/service/${service.slug}`}>
                    <button className="bg-[#01401e] hover:bg-[#007436] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                      View Details
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
