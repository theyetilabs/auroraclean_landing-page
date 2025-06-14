"use client";

import { Calendar, ClipboardCheck, SmilePlus } from "lucide-react";
import { motion } from "framer-motion";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  highlight?: boolean;
}

const stepData = [
  {
    icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" />, // icon size
    title: "Schedule Your Service",
    description: "Easily share your cleaning needs and preferred date with us.",
    highlight: true,
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 md:w-10 md:h-10" />, // icon size
    title: "Expert Cleaning",
    description:
      "Our dedicated team of full-time professionals will meticulously clean and refresh your property.",
  },
  {
    icon: <SmilePlus className="w-8 h-8 md:w-10 md:h-10" />, // icon size
    title: "Enjoy Your Beautiful Space",
    description:
      "Step back and appreciate the comfort and beauty of a perfectly cleaned environment.",
  },
];

const Step: React.FC<StepProps> = ({
  icon,
  title,
  description,
  index,
  highlight,
}) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="relative bg-white rounded-2xl shadow-lg pt-16 pb-8 px-6 flex flex-col items-center text-center min-h-[300px]"
  >
    {/* Floating Number + Icon */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div className="bg-gradient-to-b from-blue-500 to-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg">{`0${index + 1}`}</span>
      </div>
      <div className="-mt-6 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md border-4 border-white">
        <span className="text-green-600">{icon}</span>
      </div>
    </div>
    {/* Top-right green dot */}
    <div className="absolute top-4 right-4">
      <span className="inline-block w-4 h-4 bg-green-200 rounded-full"></span>
    </div>
    {/* Title */}
    <h3
      className={
        highlight
          ? "text-blue-600 font-bold text-xl md:text-2xl mb-2 mt-2"
          : "text-gray-900 font-bold text-xl md:text-2xl mb-2 mt-2"
      }
    >
      {title}
    </h3>
    {/* Description */}
    <p className="text-gray-500 text-base md:text-[17px] max-w-xs mx-auto">
      {description}
    </p>
  </motion.div>
);

export default function QuickAndEasy() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#f6fbff] to-[#eef6fa] rounded-3xl md:mx-8 mx-2 mt-8 md:mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Aurora Clean
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Partner for a Perfectly{" "}
            <span className="text-green-600">Clean Space</span>
          </h2>
        </div>
        {/* Steps with connecting line */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
          {/* Connecting line (only on md+) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 z-0">
            <div className="mx-[8.5%] h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 rounded-full"></div>
          </div>
          {/* Steps */}
          {stepData.map((step, i) => (
            <div
              key={step.title}
              className="w-full md:w-1/3 z-10 flex justify-center"
            >
              <Step
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={i}
                highlight={!!step.highlight}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
