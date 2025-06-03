import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">
            First Branch in Kathmandu (2021)
          </h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            In 2021, we opened our first branch in Kathmandu, welcoming 100+
            students who successfully began their journey to Japan with strong
            support and high success rates.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/04/history-09.png"
                alt="Kathmandu Branch Opening"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/04/history-10.png"
                alt="First Batch of Students"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Expanding to Chitwan (2023)
          </h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            By 2023, we opened our Chitwan branch, receiving an overwhelming
            response and helping 200+ more students pursue their dreams in
            Japan.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/02/history-03.png"
                alt="Chitwan Branch Opening"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/02/history-04.png"
                alt="Student Success Stories"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Reaching Pokhara (2024)</h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            In 2024, we expanded to Pokhara with a new branch, achieving a
            milestone of sending 500+ students to Japan, driven by strong
            community support.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/03/history-05.png"
                alt="Pokhara Branch Opening"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/03/history-06.png"
                alt="Community Events"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Aiming Higher in Butwal (2025)
          </h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            In 2025, we launched our Butwal branch, targeting 1,000+ students to
            Japan this year, with a growing network and unwavering commitment.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/04/history-07.jpg"
                alt="Butwal Branch Opening"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
            <div className="relative h-40 md:h-60 lg:h-100 w-full">
              <Image
                src="/images/Journey/04/history-08.jpg"
                alt="Future Vision"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
