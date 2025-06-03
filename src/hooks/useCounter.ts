"use client";

import { useState, useEffect } from "react";

interface UseCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

// Easing function for smooth animation
const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

export function useCounter({
  end,
  duration = 2000,
  suffix = "",
  decimals = 1,
}: UseCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Apply easing function for smoother animation
      const easedProgress = easeOutQuart(progress);
      const currentCount = easedProgress * end;

      // During animation, show decimals for smoother appearance
      const displayValue =
        progress === 1 ? currentCount : Number(currentCount.toFixed(decimals));

      setCount(displayValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, decimals]);

  // Format the output to remove decimals at the end
  const formattedCount =
    count === count ? count.toString() : count.toFixed(decimals);

  return `${formattedCount}${suffix}`;
}
