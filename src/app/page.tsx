import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import GlowingCardsGrid from "@/components/ui/glowing-cards-grid";
import { Sparkles, Cog, Cuboid } from "lucide-react";
import CleaningServices from "@/components/CleaningServices";
import InfiniteTestimonials from "@/components/InfiniteTestimonials";
import QuickAndEasy from "@/components/QuickAndEasy";

export default function Home() {
  return (
    <main className="gradient min-h-screen relative overflow-hidden">
      <div className="relative">
        <Hero />
        <TrustedBy />
        <Mission />
        <GlowingCardsGrid
          cards={[
            {
              icon: <Sparkles className="text-2xl text-blue-500" />,
              title: "Certified Professionals",
              description:
                "Our fully trained, insured team delivers top-tier results.",
            },
            {
              icon: <Cog className="text-2xl text-green-500" />,
              title: "Customized Plans",
              description:
                "Flexible cleaning schedules to fit your business needs.",
            },
            {
              icon: <Cuboid className="text-2xl text-purple-500" />,
              title: "Comprehensive Services",
              description: "From daily maintenance to COVID-19 sanitization.",
            },
            {
              icon: <Sparkles className="text-2xl text-yellow-500" />,
              title: "Exclusive Perks",
              description:
                "Discounted hygiene products for our valued clients.",
            },
            {
              icon: <Cuboid className="text-2xl text-indigo-500" />,
              title: "Trusted Experience",
              description:
                "Serving 220+ gyms, 77 offices, 17 hotels, and more.",
            },
          ]}
        />

        <Testimonials />
        <CleaningServices />
        <InfiniteTestimonials />
        <QuickAndEasy />
        <Insights />
      </div>
    </main>
  );
}
