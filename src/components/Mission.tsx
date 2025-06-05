import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesText } from "./ui/sparkles-text";
export default function Mission() {
  return (
    <section className="w-full text-white ">
      <BackgroundGradientAnimation
        className="bg-transparent  "
        containerClassName="max-h-[500px] flex items-center justify-center "
      >
        <BackgroundBeamsWithCollision className="bg-transparent absolute inset-0 h-full max-h-[500px]">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wider">
              <SparklesText text="Our Mission" />
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10 tracking-wide">
              Welcome to Aurora Cleaning Service, your trusted partner for
              creating spotless, healthy, and inviting business environments
              across Sydney. As part of the Asta Business Group, we bring
              unmatched expertise and a passion for cleanliness to every
              project. Whether you run a gym, office, or restaurant, our
              tailored cleaning solutions ensure your space shines{" "}
            </p>
            <Link href="/about">
              <Button className="bg-white z-10 relative cursor-pointer text-[#2563EB] px-8 py-6 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </BackgroundBeamsWithCollision>
      </BackgroundGradientAnimation>
    </section>
  );
}
