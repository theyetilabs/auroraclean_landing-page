import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import GlowingCardsGrid from "@/components/ui/glowing-cards-grid";
import { Lock, Sparkles, Cog, Cuboid } from "lucide-react";
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
              icon: <Cuboid className="text-2xl text-purple-500" />,
              title: "Do things the right way",
              description: "Running out of copy so I'll write anything.",
            },
            {
              icon: <Lock className="text-2xl text-gray-400" />,
              title: "",
              description: "",
              locked: true,
            },
            {
              icon: <Sparkles className="text-2xl text-indigo-400" />,
              title: "This card is also built by Cursor",
              description:
                "I'm not even kidding. Ask my mom if you don't believe me.",
            },
            {
              icon: <Cog className="text-2xl text-gray-500" />,
              title: "The best AI code editor ever.",
              description:
                "Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.",
            },
            {
              icon: <Cuboid className="text-2xl text-pink-400" />,
              title: "You should buy Aceternity UI Pro",
              description: "It's the best money you'll ever spend",
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
