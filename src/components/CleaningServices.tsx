import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  price: string;
  rating: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Home Deep Cleaning",
    description:
      "A thorough top-to-bottom cleaning to remove dust, dirt, and grime from every corner.",
    price: "$30/hr",
    rating: "4.9/5 (500+ reviews)",
    image: "/images/deep-cleaning.jpg",
  },
  {
    title: "Move-in/Move-Out Cleaning",
    description:
      "Perfect for tenants or homeowners—ensuring a fresh start in your new space.",
    price: "$35/hr",
    rating: "4.8/5 (500+ reviews)",
    image: "/images/move-cleaning.jpg",
  },
  {
    title: "Window & Glass Cleaning",
    description:
      "Streak-free windows and glass cleaning for a crystal-clear shine.",
    price: "$25/hr",
    rating: "4.7/5 (500+ reviews)",
    image: "/images/window-cleaning.jpg",
  },
  // Add more services as needed
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
            <PinContainer key={service.title} title={service.title}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80 h-96 flex flex-col">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={320}
                  height={320}
                  className="h-40 w-full object-cover"
                />
                <div className="flex-1 flex flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-emerald-600">
                      {service.price}
                    </span>
                    <span className="text-sm text-orange-500 flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                      {service.rating}
                    </span>
                  </div>
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
