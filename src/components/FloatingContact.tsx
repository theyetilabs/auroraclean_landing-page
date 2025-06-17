"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Pulsing Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#018D43]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Rotating Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#018D43]"
          animate={{
            rotate: 360,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Main Button with Vertical Bounce */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePhoneClick("0406158054")}
          className="relative w-14 h-14 bg-[#018D43] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#363672] transition-colors"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Phone size={24} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
