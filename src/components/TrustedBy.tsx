"use client";

import Image from "next/image";

const companies = [
  { name: "1", logo: "/images/partners/partners-01.png" },
  { name: "2", logo: "/images/partners/partners-02.png" },
  { name: "3", logo: "/images/partners/partners-03.png" },
  { name: "4", logo: "/images/partners/partners-04.png" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Marquee container */}
          <div className="w-full flex  marquee-container">
            <div className="flex  animate-scroll w-fit">
              {/* First set of logos */}
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="relative w-52 h-20 flex-shrink-0 opacity-100 hover:opacity-60 transition-all duration-300"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex  animate-scroll">
              {/* First set of logos */}
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="relative w-52 h-20 flex-shrink-0 opacity-100 hover:opacity-60 transition-all duration-300"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
