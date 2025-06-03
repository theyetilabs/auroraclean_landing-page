"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const branches = [
  {
    name: "Kathmandu Branch",
    phone: "9820151440",
    location: "Kathmandu, Nepal",
  },
  {
    name: "Pokhara Branch",
    phone: "9820151442",
    location: "Pokhara, Nepal",
  },
  {
    name: "Chitwan Branch",
    phone: "9820151441",
    location: "Chitwan, Nepal",
  },
  {
    name: "Butwal Branch",
    phone: "9704591439",
    location: "Butwal, Nepal",
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#00378b]">Contact Us</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="space-y-2">
                {branches.map((branch) => (
                  <motion.div
                    key={branch.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div
                      onClick={() => handlePhoneClick(branch.phone)}
                      className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#00378b]/10 rounded-full group-hover:bg-[#00378b]/20 transition-colors">
                          <Phone size={16} className="text-[#00378b]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            {branch.name}
                          </h4>
                          <p className="text-sm text-gray-600 text-[#00378b] hover:text-[#363672] ">
                            {branch.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Pulsing Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#00378b]"
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
          className="absolute inset-0 rounded-full border-2 border-[#00378b]"
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
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-[#00378b] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#363672] transition-colors"
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
