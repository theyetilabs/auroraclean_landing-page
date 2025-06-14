"use client";

import { services } from "@/lib/constants";
import ServiceHero from "@/components/service/ServiceHero";
import TaskList from "@/components/service/TaskList";
import ServiceSidebar from "@/components/service/ServiceSidebar";
import { use } from "react";
import Image from "next/image";
interface ServiceType {
  slug: string;
  service_name: string;
  introduction: string;
  whats_included: Array<{
    category: string;
    description: string;
  }>;
  service_area: {
    region: string;
    suburbs_count: number;
    covered_areas: string[];
  };
  contact: {
    phone: string;
    email: string;
    website: string;
    note: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  why_choose_us: {
    highlights: string[];
    description: string;
  };
  image: string;
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = services.find(
    (s: ServiceType) => s.slug === slug
  ) as ServiceType;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 mt-40">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Service not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <ServiceHero
        serviceName={service.service_name}
        introduction={service.introduction}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Save Time and Stress with Professional Home Cleaning
            </h2>
            <div className="flex items-center gap-2 justify-center mt-4 mb-4 w-full">
              <Image
                src={service.image}
                alt="Service Image"
                width={1000}
                height={1000}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600 mb-12">
              {service.why_choose_us.description}
            </p>

            <TaskList tasks={service.whats_included} />

            {/* Highlights Section */}
            <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.why_choose_us.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Area Section */}
            <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Service Area
              </h3>
              <p className="text-gray-600 mb-4">
                We proudly serve {service.service_area.region} with coverage in{" "}
                {service.service_area.suburbs_count}+ suburbs
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.service_area.covered_areas.map((area) => (
                  <div key={area} className="text-gray-700">
                    • {area}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {service.faq.map((item) => (
                  <div
                    key={item.question}
                    className="border-b border-gray-200 pb-6"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.question}
                    </h4>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <ServiceSidebar
            contact={service.contact}
            region={service.service_area.region}
            currentService={service.slug}
          />
        </div>
      </div>
    </div>
  );
}
