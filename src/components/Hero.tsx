"use client";
import StudentAvatars from "./StudentAvatars";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import StatsCounter from "./StatsCounter";
import { useStore } from "@/store/useStore";

const texts = ["— Professional & Reliable", "— Eco-friendly Solutions"];

const stats = [
  { number: "220+", label: "Gyms & Health Clubs", duration: 2000 },
  { number: "77+", label: "Offices", duration: 2000 },
  { number: "17+", label: "Hotels", duration: 2000 },
  { number: "33+", label: "Restaurants", duration: 2000 },
  { number: "9+", label: "Warehouses", duration: 2000 },
  { number: "3+", label: "Aged Care Homes", duration: 2000 },
];

export default function Hero() {
  const { openGetQuotes } = useStore();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 600); // Match this with animation duration
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white  w-1/2 " />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 py-16  md:py-24 font-inter">
          <div className="flex flex-col gap-6 max-w-3xl mt-20  ">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#018D43]">
              Sparkle with
              <br />
              Aurora Cleaning Service
              <br />
              <div className="flip-container  overflow-hidden mt-4">
                <span
                  className={`text-3xl md:text-5xl block ${
                    isAnimating ? "animate-flip-out" : "animate-flip-in"
                  }`}
                >
                  {texts[currentTextIndex]}
                </span>
              </div>
            </h1>
            <p className="text-lg text-[#018D43]">
              Eco-friendly practices ensure health,
              <br /> safety, and environmental benefits.
            </p>

            {/* Student Count Section */}
            <div className="flex items-center gap-4 text-white">
              <StudentAvatars />
              <span className="font-medium text-[#018D43]">
                300+ Satisfied Business Clients
              </span>
            </div>

            {/* Consultation Button */}
            <div className="flex">
              <button
                onClick={() => openGetQuotes()}
                className="group flex items-center gap-2 bg-[#018D43] hover:bg-[#0099db] text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Get Quotes</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#018D43] py-4 relative">
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 ">
            {stats.map((stat, index) => (
              <StatsCounter
                key={index}
                number={stat.number}
                label={stat.label}
                duration={stat.duration}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
