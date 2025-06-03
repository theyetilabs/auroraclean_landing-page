import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MessageCircle } from "lucide-react";
import { EvervaultCard } from "@/components/ui/evervault-card";
const values = [
  {
    title: "High Job Rate",
    description:
      "Graduates hired fast! We equip you with the skills for today's job market.",
  },
  {
    title: "Expert Qualified Teachers",
    description:
      "Young, energetic, and top-notch Japanese language teachers ready to guide you!",
  },
  {
    title: "Dynamic Learning Environment",
    description:
      "Get ready for an innovative and energetic learning experience!",
  },
  {
    title: "Transparent Policies",
    description: "Fair and clear policies – no hidden costs, ever!",
  },
  {
    title: "Integrity and Reliability",
    description: "Trustworthy and reliable, we're focused on your success.",
  },
  {
    title: "Affordability",
    description: "Quality education that won't break the bank!",
  },
];

export default function AboutPage() {
  return (
    <main className="gradient min-h-screen relative overflow-hidden">
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/40 to-transparent">
        {" "}
        {/* Hero Section */}
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto  ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to Customer Group, your dedicated partner in realizing
              your aspirations of living and working in Japan through the
              Specified Skilled Worker (SSW) Program.
            </p>
          </div>
        </section>
      </div>
      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text">
              Our Story: Bridging Nepal and Japan
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Established in 2021 with our first branch in Kathmandu, Customer
                Group was founded on a clear mission: to connect the immense
                talent of Nepal with the diverse opportunities available in
                Japan&apos;s thriving industries.
              </p>
              <p>
                What began as a single location has grown into a network
                spanning across Nepal, with branches in Chitwan (2023) and
                Pokhara (2024), and an ambitious expansion planned for Butwal in
                2025.
              </p>
              <p>
                We&apos;ve witnessed firsthand the transformative impact of the
                SSW program, and we are driven by the success stories of
                individuals now building fulfilling lives in Japan.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#00378b]/10 to-[#00378b]/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/Journey/03/history-05.png"
                alt="Customer Group Story"
                fill
                className="object-cover "
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
            <span className="text-[#00378b]">Guiding Principles</span>
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
      <section className="relative py-16 px-4 md:px-6 lg:px-8 bg-[#363672]">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="relative h-[600px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ">
                <Image
                  src="/images/CEO.png"
                  alt="Subash Bohora, CEO"
                  fill
                  className="object-cover object-top aspect-[9/16] "
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                A Message from Our CEO
              </h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  At Customer Group Nepal, our commitment to unwavering quality
                  and dedication remains steadfast, whether we are guiding one
                  student or a group of ten. Rooted in the belief of &quot;काम
                  भन्दा कर्म ठुलो&quot; (Deeds Speak Louder Than Words), our
                  teaching philosophy is direct; sometimes sharp, but always
                  aimed at ensuring the success of our students.
                </p>
                <p>
                  We value fairness – we do not confuse our students, and we
                  only accept the rewards of the duties we have successfully
                  completed, without any hidden agendas.
                </p>
                <p className="font-semibold">- SUBASH BOHORA, CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 text-center relative bg-linear-to-b from-[#363672] to-[#00378b] text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Begin Your Journey to
            <span className="text-red-500 font-bold"> Japan?</span>
          </h2>
          <p className="text-md text-gray-200 ">
            We invite you to take the first step towards your dream of living
            and working in Japan. Contact us today for a Free Consultation and
            let us help you make it happen!
          </p>
          <Link href="https://forms.gle/zUzeXaLBSKGPeUiu7" target="_blank">
            <Button
              size="lg"
              className="bg-white hover:bg-[#002d70] text-[#00378b] px-8 py-6 rounded-full text-lg group"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
