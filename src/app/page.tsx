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
                "Our fully trained, certified, and insured team uses advanced techniques, like electrostatic sprayers, to deliver spotless, safe environments with precision and care.",
            },
            {
              icon: <Cog className="text-2xl text-green-500" />,
              title: "Customized Plans",
              description:
                "We design flexible cleaning schedules—daily, weekly, or monthly—to match your business hours and budget, ensuring minimal disruption and maximum cleanliness.",
            },
            {
              icon: <Cuboid className="text-2xl text-purple-500" />,
              title: "Comprehensive Services",
              description:
                "From daily maintenance to specialized COVID-19 sanitization and gym equipment cleaning, our wide-ranging services cater to all industries with top-tier results.",
            },

            {
              icon: <Cuboid className="text-2xl text-indigo-500" />,
              title: "Trusted Experience",
              description:
                "Serving over 220 gyms, 77 offices, 17 hotels, 33 restaurants, and more, our proven expertise ensures reliable, high-quality cleaning for your business.",
            },
            {
              icon: <Cog className="text-2xl text-emerald-500" />,
              title: "Eco-Friendly Practices",
              description:
                "We use non-toxic, biodegradable products and energy-efficient methods to protect your health and the environment, aligning with sustainable cleaning trends.",
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
