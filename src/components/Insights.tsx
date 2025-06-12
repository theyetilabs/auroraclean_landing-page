"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import staticBlogs from "@/lib/staticBlogs";

export default function Insights() {
  const [isHovered, setIsHovered] = useState(-1);
  return (
    <section className="w-full relative overflow-hidden py-24">
      {/* Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-200 400C100 400 300 600 700 600C1100 600 1300 400 1600 400V800H-200V400Z"
          fill="#018D43"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#E8F1EE] text-[#1B4B40] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Blogs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B40] mb-6">
            Our Latest Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We will provide more detailed information about recruiting
            foreigners in our blog post.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staticBlogs.map((blog, index) => (
            <Link href={`/blogs/${blog.id}`} key={blog.title} prefetch>
              <div
                key={blog.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                <div className="relative h-full flex flex-col">
                  {/* Curved Background Shape */}
                  <svg
                    className={`absolute ${
                      index === 0 ? "left-0" : "right-0"
                    } top-0 h-full transition-all duration-300 ${
                      isHovered === index ? "w-[100%]" : "w-1/2"
                    } ${index === 0 ? "transform rotate-180" : ""}`}
                    viewBox="0 0 200 400"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H200V400H0C100 300 100 100 0 0Z"
                      fill="#9ec3c3"
                      fillOpacity="1"
                    />
                  </svg>

                  <div className="relative p-8 flex flex-col h-full">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-[#1B4B40] rounded mb-4">
                      {blog.categories[0].name}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 pr-12">
                      {blog.title}
                    </h3>

                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
                      <Image
                        src={blog.imageUrls[0]}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-auto">
                      <button className="flex items-center gap-2 text-[#1B4B40] font-medium group-hover:gap-4 transition-all duration-300">
                        Read More <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="bg-[#9ec3c3] text-[#1B4B40] px-8 py-3 rounded-full font-medium hover:bg-[#018D43]/90 hover:text-white transition-all duration-300"
            prefetch
          >
            More Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
