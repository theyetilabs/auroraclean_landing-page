"use client";
import React from "react";
import { InfiniteForm } from "@/components/ui/infinite-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ContactForm } from "@/components/ui/contact-form";
import dynamic from "next/dynamic";

// Dynamically import the Map component with no SSR
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false, // This is important because Leaflet needs window object
  loading: () => (
    <div className="w-full h-[400px] rounded-xl bg-[#1e1e3f] animate-pulse" />
  ),
});

interface BranchContent {
  title: string;
  description: string;
  email: string;
  content?: React.ReactNode;
  phone: string;
}

const branches: BranchContent[] = [
  {
    title: "Kathmandu Branch",
    description: "Sushi Bomber, Gongabu chowk, Kathmandu,Nepal",
    email: "kathmandu@customergroup.com.np",
    phone: "(KTM) 01-5911783 | 9820151440",
    content: <ContactForm branchTitle="Kathmandu Branch" />,
  },
  {
    title: "Pokhara Branch",
    description: "Sushi Bomber Pokhara, Sabhagriha chowk, Pokhara,Nepal",
    email: "pokhara@customergroup.com.np",
    phone: "(PKR) 061-589103 | 9820151442",
    content: <ContactForm branchTitle="Pokhara Branch" />,
  },
  {
    title: "Chitwan Branch",
    description: "Sushi Bomber Chitwan, Chitwan,Nepal",
    email: "chitwan@customergroup.com.np",
    phone: "(CTW) 056-493959 | 9820151441",
    content: <ContactForm branchTitle="Chitwan Branch" />,
  },
  {
    title: "Butwal Branch",
    description:
      "CG, Customer Group, Raj Shree Complex (4th floor), Traffic Chowk, Butwal",
    email: "butwal@customergroup.com.np",
    phone: "(BTW) +977 9704591439",
    content: <ContactForm branchTitle="Butwal Branch" />,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="gradient min-h-screen relative overflow-hidden w-full">
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/40 to-transparent">
        {/* Hero Section */}
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with our team at any of our branches across Nepal.
              We&apos;re here to help you achieve your dreams of working in
              Japan.
            </p>
          </div>
        </section>
      </div>
      {/* Contact Forms Section */}
      <section className="pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <InfiniteForm content={branches} contentClassName="bg-white/70" />
        </div>
      </section>

      {/* Map Section */}
      <section
        className="relative py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#363672] to-[#00378b]"
        id="branches"
      >
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Locations
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-1 gap-8">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl col-span-2">
              <Map />
            </div>
            <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
              <div className="bg-white/10 p-4 rounded-lg space-y-2 flex flex-col justify-center ">
                <h3 className="text-white font-semibold">Kathmandu Branch</h3>
                <p className="text-white/80 text-sm">
                  Sushi Bomber, Gongabu chowk, Kathmandu, Nepal
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg space-y-2 flex flex-col justify-center">
                <h3 className="text-white font-semibold">Pokhara Branch</h3>
                <p className="text-white/80 text-sm">
                  Sushi Bomber Pokhara, Sabhagriha chowk, Pokhara, Nepal
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg space-y-2 flex flex-col justify-center">
                <h3 className="text-white font-semibold">Chitwan Branch</h3>
                <p className="text-white/80 text-sm">
                  Sushi Bomber Chitwan, Tisha Complex, Sahid Chowk, Chitwan
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg space-y-2 flex flex-col justify-center">
                <h3 className="text-white font-semibold">Butwal Branch</h3>
                <p className="text-white/80 text-sm">
                  CG, Customer Group, Raj Shree Complex (4th floor)
                </p>
                <p className="text-white/80 text-sm">Traffic Chowk, Butwal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
