"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

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
        "relative flex h-[30rem] justify-center  lg:space-x-10 overflow-y-auto rounded-md p-2 pb-0 lg:p-10 transition-colors duration-1000 modern-scrollbar",
        currentGradient
      )}
      ref={ref}
    >
      <div className="div relative flex items-start px-4 w-full lg:w-auto">
        <div className="w-full lg:max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
                className={cn(
                  "h-80 w-full overflow-hidden rounded-xl shadow-lg lg:hidden backdrop-blur-sm bg-white/70 mb-10",
                  contentClassName
                )}
              >
                {item.content ?? null}
              </motion.div>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-gray-900"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-6 w-full lg:max-w-sm text-gray-600"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
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
          "sticky top-10 hidden h-80 w-96 overflow-hidden rounded-xl shadow-lg lg:block backdrop-blur-sm bg-white/70",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
