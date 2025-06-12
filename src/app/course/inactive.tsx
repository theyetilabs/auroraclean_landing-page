"use client";
import React from "react";
import { motion } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Users,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
interface CourseFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CourseLevel {
  title: string;
  duration: string;
  focus: string[];
  content: string[];
  classDuration: string;
}

const courseFeatures: CourseFeature[] = [
  {
    title: "Experienced Instructors",
    description:
      "Highly qualified instructors dedicated to providing engaging and effective SSW-focused lessons.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Curriculum-based Classes",
    description:
      "Meticulously designed curriculum meeting JFT Basic standards for the SSW program.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Regular Assessments",
    description:
      "Track your progress with regular assessments and feedback for SSW program requirements.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Flexible Durations",
    description:
      "Choose between 1-month Basic and 6-month Advanced courses tailored for SSW.",
    icon: <Clock className="w-6 h-6" />,
  },
];

const courseLevels: CourseLevel[] = [
  {
    title: "Basic Course",
    duration: "1 Month",
    focus: [
      "Introduction to Japanese writing system (Hiragana, Katakana)",
      "Basic grammar and sentence structure",
      "Essential vocabulary for daily life and SSW",
      "Basic conversational skills",
      "JFT Basic preparation",
    ],
    content: [
      "Learning Hiragana and Katakana",
      "Basic greetings and workplace introductions",
      "Numbers, time, and dates in professional context",
      "Basic sentence patterns",
      "Shopping and ordering food",
      "Basic workplace vocabulary",
    ],
    classDuration: "1.5 hours daily",
  },
  {
    title: "Advanced Course",
    duration: "6 Months",
    focus: [
      "Expanding vocabulary for SSW job sectors",
      "Complex sentence structures",
      "Work-related conversational skills",
      "Introduction to Kanji",
      "JFT N3 preparation",
    ],
    content: [
      "Sector-specific Kanji",
      "Daily routines and work schedules",
      "Professional communication",
      "Making plans and appointments",
      "Understanding workplace instructions",
      "Basic business Japanese",
    ],
    classDuration: "4 hours daily",
  },
];

export default function CoursePage() {
  return (
    <main className="min-h-screen relative overflow-hidden w-full">
      {/* Hero Section */}
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#018D43]/40 to-transparent">
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#018D43] to-red-500 text-transparent bg-clip-text">
              Japanese Language Courses
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive Japanese language program designed specifically for
              success in the Specified Skilled Worker (SSW) program.
            </p>
          </div>
        </section>
      </div>

      {/* Course Objectives */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#018D43] mb-8 text-center">
            Course Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <GraduationCap className="w-8 h-8 text-[#018D43] mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                What You&apos;ll Learn
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Strong foundational skills in Japanese grammar, vocabulary,
                    reading, and writing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Enhanced conversational fluency and listening comprehension
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span> JFT Basic exam preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Cultural insights for living and working in Japan</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="p-4 rounded-lg bg-blue-50">
                    <div className="text-[#018D43] mb-2">{feature.icon}</div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div id="basic-course" className=" mt-10"></div>
      <div id="advanced-course" className=" mt-10"></div>
      {/* Course Levels */}
      <section className="relative py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#363672] to-[#018D43]">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Course Levels and Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {level.title}
                  </h3>
                  <p className="text-white/80">Duration: {level.duration}</p>
                  <p className="text-white/80">
                    Class Duration: {level.classDuration}
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Focus Areas:
                    </h4>
                    <ul className="space-y-2">
                      {level.focus.map((item, i) => (
                        <li key={i} className="flex items-start text-white/80">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Course Content:
                    </h4>
                    <ul className="space-y-2">
                      {level.content.map((item, i) => (
                        <li key={i} className="flex items-start text-white/80">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-white text-[#018D43] hover:bg-white/90 cursor-pointer">
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#018D43] mb-8">
            Additional Course Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Comprehensive Materials
              </h3>
              <p className="text-gray-600">
                All necessary learning materials provided, including textbooks,
                workbooks, and SSW-focused supplementary resources.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Mock Tests</h3>
              <p className="text-gray-600">
                Free mock tests for JFT Basic exam preparation, with focus on
                SSW-specific content.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Cultural Training</h3>
              <p className="text-gray-600">
                Japanese business etiquette and workplace culture training
                included in the curriculum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
