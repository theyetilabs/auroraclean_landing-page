"use client";

import { Calendar, ClipboardCheck, SmilePlus } from "lucide-react";
import { motion } from "framer-motion";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ x: 200, opacity: 0 }}
    whileInView={{
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      },
    }}
    viewport={{ once: false, amount: 0.5 }}
    className="flex flex-col items-center text-center"
  >
    <div className="relative w-32 h-32 mb-6">
      <motion.div
        className="absolute inset-0 bg-green-50 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-green-600 w-12 h-12">{icon}</div>
      </motion.div>
      <motion.div
        className="absolute -right-2 -top-2"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-6">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-green-100 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
    <motion.h3
      className="text-2xl font-semibold mb-2  px-4 py-1 rounded-lg"
      whileHover={{ scale: 1.02 }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="text-gray-600 max-w-xs  px-4 py-2 rounded-lg"
      whileHover={{ scale: 1.02 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

export default function QuickAndEasy() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl font-bold mt-2">Quick and Easy</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="absolute top-1/2 left-1/4 right-1/4 hidden md:block">
            <motion.div
              className="border-t-2 border-green-200 relative"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ originX: 0 }}
            >
              <div className="absolute top-1/2 right-0 w-4 h-4 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-t-green-200 border-x-8 border-x-transparent"></div>
              </div>
            </motion.div>
          </div>

          <Step
            icon={<Calendar className="w-full h-full" />}
            title="Free Quote"
            description="Tell us about your home and choose the date you want"
            index={0}
          />

          <Step
            icon={<ClipboardCheck className="w-full h-full" />}
            title="Clean"
            description="Our seasoned team of full-time cleaners will transform your home"
            index={1}
          />

          <Step
            icon={<SmilePlus className="w-full h-full" />}
            title="Relax"
            description="Sit back and enjoy how amazing your home or business looks now"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}
