"use client";
import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "House cleaning",
    description:
      "Our professional home cleaning services are designed to give you a spotless home without the hassle. We provide customized cleaning that fits your needs and schedule.",
    image: "/images/Sectors/sector-01.png",
  },
  {
    title: "Office cleaning",
    description:
      "If you need recurring cleaning at the office or you just want us to come for a one-off visit, we can accommodate you. We clean for parties and other special events, and we can make your office space look its best.",
    image: "/images/Sectors/sector-02.png",
  },
  {
    title: "Deep cleaning",
    description:
      "Are there parts of your homeland you just never feel like cleaning because they're too much of a challenge? Maybe you're thinking of the oven or the basement and you dread having to clean these areas.",
    image: "/images/Sectors/sector-03.png",
  },
  {
    title: "Move in out cleaning",
    description:
      "You've packed up and are ready to move into your new home, but the place you're leaving behind still needs a thorough cleaning. Moving out can be stressful, and cleaning may be the last thing on your mind.",
    image: "/images/Sectors/sector-04.png",
  },
  {
    title: "Post construction cleaning",
    description:
      "In the bustling world of construction, the final stages of a project often steal the spotlight, but there's a crucial detail that shouldn't be overlooked - post-construction cleaning.",
    image: "/images/Sectors/sector-05.png",
  },
  {
    title: "Recurring cleaning",
    description:
      "If you need to schedule cleaning services weekly, monthly, or on some other regular schedule, give us a call. We can provide scheduled cleaning services as often as you need, with special discounts for recurring visits.",
    image: "/images/Sectors/sector-01.png",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            SERVICES
          </p>
          <h2 className="text-4xl font-bold">Services We Provide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors duration-200 flex items-center gap-2">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
