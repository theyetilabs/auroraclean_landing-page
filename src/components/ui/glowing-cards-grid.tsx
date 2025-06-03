import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface GlowingCard {
  icon?: React.ReactNode;
  title: string;
  description: string;
  locked?: boolean;
}

interface GlowingCardsGridProps {
  cards: GlowingCard[];
  className?: string;
}

export default function GlowingCardsGrid({
  cards,
  className,
}: GlowingCardsGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 auto-rows-fr w-full py-8 px-4",
        className
      )}
    >
      {cards.map((card, idx) => (
        <div
          key={card.title + idx}
          className={cn("relative", idx === 1 && "row-span-2")}
        >
          <GlowingEffect
            blur={10}
            spread={30}
            borderWidth={10}
            disabled={false}
            inactiveZone={0}
          />
          <Card
            className={cn(
              "relative z-10 min-h-[180px] h-full flex flex-col justify-between bg-white/80 dark:bg-neutral-900/80 shadow-lg border-none overflow-hidden",
              card.locked && "opacity-60 pointer-events-none",
              idx === 1 && "row-span-2"
            )}
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800">
                {card.icon ? (
                  card.icon
                ) : card.locked ? (
                  <span className="text-xl">🔒</span>
                ) : (
                  <span className="text-xl">🧩</span>
                )}
              </div>
              <CardTitle className="text-lg font-semibold flex-1">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardDescription className="px-6 pb-4 text-gray-600 dark:text-gray-300">
              {card.description}
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
}
