"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    title: "Nursing Care (介護)",
    image: "/images/Sectors/sector-01.png",
    icon: "🏥",
  },
  {
    title: "Food Service (外食業)",
    image: "/images/Sectors/sector-02.png",
    icon: "🍽️",
  },
  {
    title: "Agriculture (農業)",
    image: "/images/Sectors/sector-03.png",
    icon: "🌾",
  },
  {
    title: "Construction (建設)",
    image: "/images/Sectors/sector-04.png",
    icon: "🏗️",
  },
  {
    title: "Accommodation (宿泊業)",
    image: "/images/Sectors/sector-05.png",
    icon: "🏨",
  },
];

export default function Services() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-[#1a1a1a]/80 uppercase tracking-wider">
            Sectors
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B40] mb-16">
          Industries We Serve:
          <br />
          Your Path to Success in Japan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <SpotlightCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ service }: { service: (typeof services)[0] }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setPosition({ x, y });
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 perspective-1000"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(203,255,77,.1), transparent 40%)`,
          opacity,
        }}
      />

      <div className="aspect-[3/4] relative">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 w-10 h-10 bg-[#CBFF4D] rounded-full flex items-center justify-center text-xl">
          {service.icon}
        </div>
      </div>
      <div className="p-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">
          {service.title}
        </h3>
        <ArrowUpRight
          className="text-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          size={20}
        />
      </div>
    </div>
  );
}
