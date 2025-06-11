"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "1. Personalized Consultation",
    description:
      "We begin with a one-on-one consultation to understand your goals, assess your Japanese language level, and outline your visa needs. Get a tailored plan to start your journey.",
    content: (
      <div className="relative h-full w-full bg-[#1244CE]">
        <Image
          src="/images/infinite-section/infinite-1.png"
          alt="Personalized Consultation"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    ),
  },
  {
    title: "2. Expert Japanese Language Class",
    description:
      "Join our engaging, expert-led Japanese courses, designed for all levels. From daily conversation to JLPT preparation, we help you speak confidently.",
    content: (
      <div className="relative h-full w-full bg-[#2b2b6a]">
        <Image
          src="/images/infinite-section/infinite-2.png"
          alt="Japanese Language Class"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    ),
  },
  {
    title: "3. Seamless Visa Processing",
    description:
      "Our visa experts guide you through every step, from document preparation to submission, ensuring compliance with Japanese regulations for a stress-free experience.",
    content: (
      <div className="relative h-full w-full bg-[#33337b]">
        <Image
          src="/images/infinite-section/infinite-3.png"
          alt="Visa Processing"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    ),
  },
  {
    title: "4. Support for Your New Life",
    description:
      "Once in Japan, we provide ongoing support, from job or study placement to settling-in tips, so you thrive in your new home.",
    content: (
      <div className="relative h-full w-full bg-[#3b3b8c]">
        <Image
          src="/images/infinite-section/infinite-4.png"
          alt="Life in Japan Support"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 pt-16">
          <h2 className="text-4xl font-bold text-[#060606] mb-4">
            Your Journey to Japan, Simplified
          </h2>
          <p className="text-md  text-[#060606]">
            Follow our proven 4-step process to master Japanese, secure your
            visa, and start your new life in Japan with confidence.
          </p>
        </div>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
