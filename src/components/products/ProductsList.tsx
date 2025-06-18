"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { useStore } from "@/store/useStore";

const products = [
  {
    id: 1,
    name: "1,200 Wipes x 4-Pack (Carton)",
    price: 79.99,
    features:
      "Hospital-grade antibacterial wipes, effective against bacteria and viruses.",
    image: "/images/Products/product-01.png",
  },
  {
    id: 2,
    name: "Matt Black Wipe Dispensers",
    price: 159.99,
    features:
      "Durable, stylish, holds 1,200 wipes, ideal for gyms and studios.",
    image: "/images/Products/2.png",
  },
  {
    id: 3,
    name: "Silver Wipe Dispensers",
    price: 149.99,
    features: "Elegant silver finish, easy to refill, holds 1,200 wipes.",
    image: "/images/Products/product-03.png",
  },
];

export default function ProductsList() {
  const { openGetQuotes } = useStore();
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
                <p className="text-2xl font-bold text-[#007436] mb-4">
                  ${product.price}
                </p>
                <p className="text-gray-600 mb-6">{product.features}</p>
                <Button
                  className="w-full bg-[#018D43] text-white hover:bg-[#018D43]/80"
                  onClick={() => openGetQuotes()}
                >
                  Inquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
