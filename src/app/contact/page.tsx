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
    title: "Sydney Office",
    description: "Serving the entire Sydney metropolitan area",
    email: "info@astabusinessgroup.com.au",
    phone: "0406 158 054 | 0468 402 663 | 0420 699 356",
    content: <ContactForm branchTitle="Sydney Office" />,
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
              We&apos;re here to help your business shine. Contact us for a free
              quote or to discuss your cleaning needs.
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
            Our Service Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl col-span-2">
              <Map />
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white/10 p-6 rounded-lg space-y-4">
                <h3 className="text-white font-semibold text-xl">
                  Sydney Metropolitan Area
                </h3>
                <p className="text-white/80">
                  We proudly serve the entire Sydney metropolitan area, from the
                  CBD to the suburbs.
                </p>
                <div className="space-y-2">
                  <p className="text-white/80">
                    <span className="font-semibold">Phone:</span>{" "}
                    {branches[0].phone}
                  </p>
                  <p className="text-white/80">
                    <span className="font-semibold">Email:</span>{" "}
                    {branches[0].email}
                  </p>
                  <p className="text-white/80">
                    <span className="font-semibold">Website:</span>{" "}
                    <a
                      href="https://astabusinessgroup.com.au"
                      className="text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      Asta Business Group
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
