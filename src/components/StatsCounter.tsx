"use client";

import { useInView } from "react-intersection-observer";
import { useCounter } from "@/hooks/useCounter";

interface StatsCounterProps {
  number: string;
  label: string;
  duration?: number;
}

export default function StatsCounter({
  number,
  label,
  duration = 2000,
}: StatsCounterProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Parse the number string to get numeric value and suffix
  const match = number.match(/(\d+\.?\d*)(\D*)/);
  const numericValue = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";

  // Get the number of decimal places from the original number
  const decimalPlaces = (match?.[1].split(".")[1] || "").length;
  const value = useCounter({
    end: numericValue,
    duration: duration,
    suffix: suffix,
    decimals: decimalPlaces || 0, // Use exact decimal places from original number
  });

  const displayValue = inView ? value : "0" + suffix;

  return (
    <div ref={ref} className="group relative">
      {/* Background gradient that shows on hover */}
      <div className="absolute inset-0 bg-radial from-blue-600/10 from-0%  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      {/* Content container */}
      <div className="relative p-8 text-center transition-transform duration-300 group-hover:scale-105">
        {/* Top border gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-2/3 transition-all duration-500" />

        {/* Stats content */}
        <div className="text-3xl md:text-4xl font-bold text-white mb-4">
          {displayValue}
        </div>
        <div className="text-sm md:text-base text-gray-200 max-w-[400px] mx-auto">
          {label}
        </div>

        {/* Bottom border gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-2/3 transition-all duration-500" />
      </div>
    </div>
  );
}
