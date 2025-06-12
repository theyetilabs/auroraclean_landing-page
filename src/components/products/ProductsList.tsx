"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "1,200 Wipes x 4-Pack (Carton)",
    price: 79.99,
    features:
      "Hospital-grade antibacterial wipes, effective against bacteria and viruses.",
    image: "/images/Sectors/sector-01.png",
  },
  {
    id: 2,
    name: "Matt Black Wipe Dispensers",
    price: 159.99,
    features:
      "Durable, stylish, holds 1,200 wipes, ideal for gyms and studios.",
    image: "/images/Sectors/sector-02.png",
  },
  {
    id: 3,
    name: "Silver Wipe Dispensers",
    price: 149.99,
    features: "Elegant silver finish, easy to refill, holds 1,200 wipes.",
    image: "/images/Sectors/sector-03.png",
  },
];

export default function ProductsList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Product Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-[#FFB347] mb-4">
                  ${product.price}
                </p>
                <p className="text-gray-600 mb-6">{product.features}</p>
                <button className="w-full bg-[#FFB347] text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center gap-2">
                  Add to Cart
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
