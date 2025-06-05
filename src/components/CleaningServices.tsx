import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  actionText: string;
}

const services: Service[] = [
  {
    title: "About Us",
    description:
      "Discover our story, values, and unwavering commitment to providing exceptional cleaning services since our inception.",
    image: "/images/about-us.jpg",
    actionText: "Learn More",
  },
  {
    title: "Services",
    description:
      "Explore our comprehensive range of tailored cleaning solutions designed to meet your specific needs and preferences.",
    image: "/images/consultation.jpg",
    actionText: "View All",
  },
  {
    title: "Products",
    description:
      "Browse our selection of premium, eco-friendly cleaning products and professional-grade equipment.",
    image: "/images/ai.jpg",
    actionText: "Shop Now",
  },
  {
    title: "Testimonials",
    description:
      "Read authentic reviews and success stories from our satisfied clients who trust us with their cleaning needs.",
    image: "/images/audit.jpg",
    actionText: "Read Stories",
  },
  {
    title: "Blog",
    description:
      "Stay informed with expert cleaning tips, industry insights, and the latest trends in professional cleaning.",
    image: "/images/blog-1.png",
    actionText: "Read Articles",
  },
];

const CleaningServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Explore our cleaning Services
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Professional, reliable, and efficient cleaning solutions for homes and
          businesses. At NeatNest, we ensure every space is spotless, hygienic,
          and refreshed—so you can enjoy a cleaner, healthier environment
          without the hassle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <PinContainer
              key={service.title}
              title={service.title}
              containerClassName="mb-20"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80 h-auto flex flex-col group hover:shadow-2xl transition-all duration-300 ">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <button className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transform hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium flex items-center justify-center gap-2">
                    {service.actionText}
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
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
