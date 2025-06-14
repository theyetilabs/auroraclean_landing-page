import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import Link from "next/link";
interface Service {
  title: string;
  description: string;
  image: string;
  actionText: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Gym Cleaning",
    description:
      "Aurora Clean’s gym cleaning services in Sydney, NSW, keep fitness centers hygienic, odor-free, and inviting, ensuring a positive experience for all users.",
    image: "/images/Explore/gym-cleaning.png",
    actionText: "Learn More",
    link: "/service/gym-cleaning",
  },
  {
    title: "Office Cleaning",
    description:
      "Ensure your workspace remains spotless, hygienic, and inviting, tailored to your business needs, helping to create a positive impression for clients and a healthy environment for employees.",
    image: "/images/Explore/residential.png",
    actionText: "Learn More",
    link: "/service/office-cleaning",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Our tailored solutions ensure a clean, safe, and welcoming environment that enhances productivity and leaves a lasting impression on clients and employees.",
    image: "/images/Explore/Business-and-Corporate-Services.png",
    actionText: "Learn More",
    link: "/service/commercial-cleaning",
  },
  {
    title: "Restaurant & Cafe Cleaning",
    description:
      "Delivers exceptional cleaning services for restaurants and cafes across Sydney, ensuring a pristine and hygienic environment that enhances customer satisfaction and complies with food safety regulations",
    image: "/images/Explore/restaurant.png",
    actionText: "Learn More",
    link: "/service/restaurant-cafe-cleaning",
  },
  {
    title: "Aged Care & Disability Homes Cleaning",
    description:
      "provides specialized cleaning services for aged care and disability homes in Sydney, creating safe, hygienic, and comfortable environments for residents and staff.",
    image: "/images/Explore/aged-care.png",
    actionText: "Learn More",
    link: "/service/aged-care-disability-homes-cleaning",
  },
  {
    title: "After-Builders Cleaning",
    description:
      "offers expert after-builders cleaning services in Sydney, transforming newly constructed or renovated properties into spotless, move-in-ready spaces.",
    image: "/images/Explore/builders.png",
    actionText: "Learn More",
    link: "/service/after-builders-cleaning",
  },
];

const CleaningServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Explore our cleaning Services
        </h2>
        <p className="text-center text-gray-600 mb-20 max-w-2xl mx-auto">
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
              containerClassName="mb-40"
            >
              <Link href={service.link}>
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
              </Link>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
