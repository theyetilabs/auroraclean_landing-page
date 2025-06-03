"use client";
import React, { useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const InfiniteForm = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    email: string;
    phone: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  // Function to scroll to a specific card
  const scrollToCard = (index: number) => {
    if (!ref.current) return;
    const container = ref.current;
    const cardHeight = container.scrollHeight / cardLength;
    container.scrollTo({
      top: cardHeight * index,
      behavior: "smooth",
    });
  };

  // Auto scroll functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const nextCard = (activeCard + 1) % cardLength;
      setActiveCard(nextCard);
      scrollToCard(nextCard);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, [activeCard, cardLength, isHovered]);

  // Define gradient backgrounds with proper values for all cards
  const gradients = [
    "bg-transparent ",
    "bg-gradient-to-br from-blue-50 via-white to-blue-100",
    "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
    "bg-transparent",
  ];

  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate breakpoints based on card length
    const cardsBreakpoints = content.map(
      (_, index) => index / (cardLength - 1)
    );
    // Find the closest breakpoint
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance <= Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );

    setActiveCard(closestBreakpointIndex);
    setCurrentGradient(gradients[closestBreakpointIndex % gradients.length]);
  });

  return (
    <motion.div
      className={cn(
        " relative flex h-[38rem] justify-center lg:space-x-10 overflow-y-auto rounded-md lg:p-10 transition-colors duration-1000 modern-scrollbar",
        currentGradient
      )}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="div relative flex items-start px-0 lg:px-4 w-full lg:w-auto">
        <div className="w-full lg:max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-[#00378b]"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-6 space-y-4"
              >
                <p className="text-gray-600">{item.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-600">{item.phone}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-500 hover:underline block"
                  >
                    {item.email}
                  </a>
                </div>
                <button className="px-6 py-2 mt-4 border border-[#00378b] text-[#00378b] rounded-full hover:bg-[#00378b] hover:text-white transition-colors">
                  Get Direction
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
                className={cn(
                  "mt-10 h-full w-full overflow-hidden rounded-xl shadow-lg lg:hidden backdrop-blur-sm bg-white/70 mb-10",
                  contentClassName
                )}
              >
                {item.content ?? null}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.3 },
        }}
        className={cn(
          "sticky top-0 hidden h-full w-full overflow-hidden rounded-xl shadow-lg lg:block backdrop-blur-sm bg-white/70",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
