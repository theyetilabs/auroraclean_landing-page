"use client";
import React, { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/constants";
import Link from "next/link";
type FilterType = "all" | "commercial" | "residential" | "specialized" | "healthcare" | "hospitality";

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
    healthcare: services.filter((s) => s.category === "healthcare").length,
    hospitality: services.filter((s) => s.category === "hospitality").length,
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-emerald-600">Serv</span>
            <span className="text-emerald-700">ices</span>
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
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 
              ${
                activeFilter === "all"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
              }`}
          >
            All Services ({filterCount.all})
          </button>
          <button
            onClick={() => setActiveFilter("commercial")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 
              ${
                activeFilter === "commercial"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
              }`}
          >
            Commercial ({filterCount.commercial})
          </button>
          <button
            onClick={() => setActiveFilter("residential")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 
              ${
                activeFilter === "residential"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
              }`}
          >
            Residential ({filterCount.residential})
          </button>
          <button
            onClick={() => setActiveFilter("specialized")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 
              ${
                activeFilter === "specialized"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
              }`}
          >
            Industrial ({filterCount.specialized})
          </button>
          <button
            onClick={() => setActiveFilter("healthcare")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 
              ${
                activeFilter === "healthcare"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
              }`}
          >
            Healthcare ({filterCount.healthcare})
          </button>
          <button
            onClick={() => setActiveFilter("hospitality")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 
              ${
                activeFilter === "hospitality"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-600 hover:text-white hover:bg-emerald-700 transform hover:-translate-y-0.5"
              }`}
          >
            Hospitality ({filterCount.hospitality})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/service/${service.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 block focus:outline-none focus:ring-2 focus:ring-emerald-600"
              tabIndex={0}
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.service_name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">
                  {service.service_name}
                </h3>
                <p className="text-[#007436] font-medium mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center gap-2 text-emerald-700 font-medium group-hover:underline">
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
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
