"use client";
import React from "react";
import dynamic from "next/dynamic";
import TrustedBy from "@/components/TrustedBy";
import Image from "next/image";

// Dynamically import the Map component with no SSR
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false, // This is important because Leaflet needs window object
  loading: () => (
    <div className="w-full h-[400px] rounded-xl bg-[#1e1e3f] animate-pulse" />
  ),
});

export default function ContactPage() {
  return (
    <main className="min-h-screen mt-30 bg-[#FCFDF7] w-full">
      {/* Hero Section */}
      <section className="pt-12 pb-8 flex flex-col items-center">
        <span className="text-xs tracking-widest text-[#018D43] font-semibold mb-2">
          CONTACT US
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
          Contact Us Today
        </h1>
        {/* Decorative leaves/graphic */}
        <div className="my-4 flex justify-center">
          <Image
            src="/images/Leaf/leaf-01.webp"
            alt="Leaves"
            width={1000}
            height={1000}
            className="h-12 w-auto animate-float-1"
          />
          <Image
            src="/images/Leaf/leaf-02.webp"
            alt="Leaves"
            width={2000}
            height={2000}
            className="h-10 w-auto animate-float-2"
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-5xl mx-auto mb-16 px-4">
        {/* Email */}
        <div className="bg-[#F6F8F3] rounded-2xl p-6 w-full md:w-1/4 flex flex-col items-start shadow-md rotate-[-2deg]">
          <div className="mb-2">
            <Image
              src="/images/contact/email.svg"
              alt="Email"
              width={23}
              height={37}
              className="h-7 w-7"
            />
          </div>
          <div className="font-semibold mb-1">Email us</div>
          <div className="text-xs text-gray-500 mb-1">
            hello@auroraclean.com.au
          </div>
        </div>
        {/* Call */}
        <div className="bg-[#F6F8F3] rounded-2xl p-6 w-full md:w-1/4 flex flex-col items-start shadow-md rotate-[2deg]">
          <div className="mb-2">
            <Image
              src="/images/contact/call-us.svg"
              alt="Call"
              width={23}
              height={37}
              className="h-7 w-7"
            />
          </div>
          <div className="font-semibold mb-1">Call us</div>
          <div className="text-xs text-gray-500 mb-1">0406158054</div>
        </div>
        {/* Location */}
        <div className="bg-[#F6F8F3] rounded-2xl p-6 w-full md:w-1/4 flex flex-col items-start shadow-md rotate-[-1deg]">
          <div className="mb-2">
            <Image
              src="/images/contact/location.svg"
              alt="Location"
              width={23}
              height={37}
              className="h-7 w-7"
            />
          </div>
          <div className="font-semibold mb-1">Our Location</div>
          <div className="text-xs text-gray-500 mb-1">
            Sydney, NSW, Australia
          </div>
        </div>
        {/* Working Hours */}
        <div className="bg-[#F6F8F3] rounded-2xl p-6 w-full md:w-1/4 flex flex-col items-start shadow-md rotate-[1deg]">
          <div className="mb-2">
            <Image
              src="/images/contact/working.svg"
              alt="Working Hours"
              width={46}
              height={57}
              className="h-7 w-7"
            />
          </div>
          <div className="font-semibold mb-1">Working Hours</div>
          <div className="text-xs text-gray-500 mb-1">
            <div>Mon - Fri: 9.00am - 8.00pm</div>
            <div>Saturday: 10.00am - 8.00pm</div>
            <div>Sunday: 10.00am - 4.00pm</div>
          </div>
        </div>
      </section>

      {/* Contact Form & Image Section */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-20 px-4">
        {/* Gradient Form Card */}
        <div className="w-full md:w-1/2 rounded-2xl p-8 bg-gradient-to-br from-yellow-200 to-green-100 shadow-lg flex flex-col justify-center min-h-[420px]">
          <span className="text-xs tracking-widest text-[#018D43] font-semibold mb-2">
            CONTACT FORM
          </span>
          <h2 className="text-2xl font-bold mb-4">
            Contact us Today for Any Questions
          </h2>
          {/* Custom Form */}
          <form className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Your name"
                className="w-1/2 px-3 py-2 rounded bg-white border border-gray-200 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-3 py-2 rounded bg-white border border-gray-200 text-sm"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 px-3 py-2 rounded bg-white border border-gray-200 text-sm"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-1/2 px-3 py-2 rounded bg-white border border-gray-200 text-sm"
              />
            </div>
            <textarea
              placeholder="How we can help you?"
              className="w-full px-3 py-2 rounded bg-white border border-gray-200 text-sm min-h-[60px]"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 rounded bg-black text-white font-semibold text-sm hover:bg-[#018D43] transition"
            >
              I&apos;d Like a Quote
            </button>
          </form>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/contact/form-new.png"
            alt="Cleaners"
            width={1500}
            height={1500}
            className="rounded-2xl object-cover w-full h-[420px]"
          />
        </div>
      </section>

      {/* Clients Section */}
      <section className="max-w-6xl mx-auto mb-12 px-4">
        <div className="mb-2 text-xs text-[#018D43] font-semibold">
          OUR CLIENTS
        </div>
        <h3 className="text-2xl font-bold mb-4">
          Trusted by Thousand of People & Companies
        </h3>
        <TrustedBy />
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto mb-20 px-4">
        <div className="rounded-2xl aspect-video w-full h-full overflow-hidden shadow-xl">
          <Map />
        </div>
      </section>
    </main>
  );
}
