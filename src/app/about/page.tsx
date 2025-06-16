import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MessageCircle } from "lucide-react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { useStore } from "@/store/useStore";

const values = [
  {
    title: "Quality Assurance",
    description:
      "Fully trained, certified, and insured cleaners delivering consistent, high-quality results.",
  },
  {
    title: "Eco-Friendly Approach",
    description:
      "Using the latest techniques and environmentally friendly cleaning products.",
  },
  {
    title: "Comprehensive Service",
    description:
      "Catering to diverse sectors from gyms to aged care facilities with specialized cleaning solutions.",
  },
  {
    title: "Client Benefits",
    description:
      "Exclusive discounted rates on premium hygiene products for our valued clients.",
  },
  {
    title: "Reliability",
    description:
      "Consistent, timely service you can count on for your business needs.",
  },
  {
    title: "Health & Safety",
    description:
      "Promoting a healthy, safe environment for your team and clients.",
  },
];

const industries = [
  { name: "Gyms and Health Clubs", count: "220+" },
  { name: "Offices", count: "77" },
  { name: "Hotels", count: "17" },
  { name: "Restaurants", count: "33" },
  { name: "Warehouses", count: "9" },
  { name: "Aged Care and Nursing Homes", count: "3" },
];

export default function AboutPage() {
  const { openGetQuotes } = useStore();
  return (
    <main className="gradient min-h-screen relative overflow-hidden">
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#018D43]/40 to-transparent">
        {/* Hero Section */}
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto  ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#018D43] to-red-500 text-transparent bg-clip-text">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to Aurora Cleaning Service, a proud member of the Asta
              Business Group, dedicated to transforming Sydney&apos;s commercial
              spaces into pristine environments.
            </p>
          </div>
        </section>
      </div>
      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#018D43] to-red-500 text-transparent bg-clip-text">
              Our Mission: Excellence in Every Clean
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Aurora Cleaning Service, we aim to exceed expectations by
                providing exceptional cleaning services that promote health,
                safety, and productivity in your workspace.
              </p>
              <p>
                We believe that a clean space isn&apos;t just about
                appearances—it&apos;s about creating a welcoming atmosphere that
                enhances your team&apos;s productivity and impresses your
                clients.
              </p>
              <p>
                Our team of professionals is committed to delivering consistent,
                high-quality results using the latest techniques and
                eco-friendly products, ensuring your space always looks its
                best.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#018D43]/10 to-[#018D43]/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/about-us/about-us-01.png"
                alt="Professional Cleaning Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Values:{" "}
            <span className="text-[#018D43]">Service Excellence</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            {values.map((value) => (
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg shadow-gray-400 inset-shadow-sm    "
                key={value.title}
              >
                <EvervaultCard
                  text={`${value.title}`}
                  className="aspect-[4/3] h-fit text-gray-900"
                />
                <div className=" flex text-center items-center justify-center">
                  <span className="text-gray-400 p-4  font-medium text-sm">
                    {value.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="relative py-16 px-4 md:px-6 lg:px-8 bg-[#018d43]">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <h3 className="text-4xl font-bold text-white mb-2">
                  {industry.count}
                </h3>
                <p className="text-gray-200">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 text-center relative bg-linear-to-b from-[#018d43] to-[#018D43] text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Transform Your Space?
          </h2>
          <p className="text-md text-gray-200">
            Let&apos;s discuss how we can elevate your business environment with
            our professional cleaning expertise. Contact us today for a
            customized cleaning solution.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-[#002d70] text-[#018D43] px-8 py-6 rounded-full text-lg group"
            onClick={() => openGetQuotes()}
          >
            <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
            Get a Free Quote
          </Button>
        </div>
      </section>
    </main>
  );
}
