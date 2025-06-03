"use client";

import { FAQ } from "@/components/ui/faq";

const faqData = [
  {
    title: "About the SSW Program",
    description:
      "Learn about the Specified Skilled Worker program and its requirements",
    items: [
      {
        question: "What is the Specified Skilled Worker (SSW) Program?",
        answer:
          "The Specified Skilled Worker (SSW) program is a Japanese government initiative that allows foreign nationals with specific skills and Japanese language proficiency to work in designated sectors in Japan. It aims to address labor shortages in industries such as Nursing Care, Food Service, Agriculture, Construction, and Accommodation.",
      },
      {
        question:
          "Which sectors are covered under the SSW program that you assist with?",
        answer:
          "We currently focus on the following SSW sectors:\n\n• Nursing Care (介護)\n• Food Service (外食業)\n• Agriculture (農業)\n• Construction (建設)\n• Accommodation Industry (宿泊業)",
      },
      {
        question:
          "What are the basic requirements to be eligible for the SSW program?",
        answer:
          "Generally, eligibility includes:\n\n• Age 18 years or older\n• Good health\n• No criminal record\n• Passing the Japanese Language Proficiency Test (JLPT) N4 level or higher, OR passing the Japan Foundation Test for Basic Japanese (JFT Basic)\n• Passing the Skill Examination specific to the chosen sector",
      },
      {
        question: "What is the difference between JLPT and JFT Basic?",
        answer:
          "The Japanese Language Proficiency Test (JLPT) is a standardized test to evaluate and certify the Japanese language proficiency of non-native speakers. The Japan Foundation Test for Basic Japanese (JFT Basic) is another test designed to measure the basic Japanese language proficiency needed for daily communication in general situations and is often used for the SSW program.",
      },
      {
        question: "What is the visa success rate of your students?",
        answer:
          "We are proud to report a 99.99% VISA Success Rate for our students. Our meticulous guidance and expertise in visa processing contribute to this high success rate.",
      },
      {
        question: "What is the job placement rate of your graduates?",
        answer:
          "We have a 99.99% Job Placement rate for our graduates. Our strong industry connections and comprehensive preparation ensure that our students are highly sought after by Japanese employers.",
      },
    ],
  },
  {
    title: "Our Services",
    description: "Comprehensive information about our service offerings",
    items: [
      {
        question:
          "What services do you offer to help me go to Japan under the SSW program?",
        answer:
          "We provide comprehensive support, including:\n\n• Personalized Consultation\n• Expert Japanese Language Classes\n• Seamless Visa Processing\n• Job Placement Assistance\n• Ongoing Support after arrival in Japan\n• Additional Training Programs\n• Charge-Free Mock Tests\n• Document Arrangement services",
      },
      {
        question: "What kind of Japanese language training do you offer?",
        answer:
          "We offer curriculum-based classes designed to meet the standards required for success in Japanese language proficiency exams (JLPT N3 and higher, JFT Basic). Our training includes cultural immersion and language acquisition, focusing on practical communication skills and exam preparation.",
      },
      {
        question: "Do you offer courses for beginners in Japanese?",
        answer:
          "Yes, our expert-led Japanese courses are designed for all levels, from beginners to advanced learners preparing for JLPT.",
      },
      {
        question: "How long are your Japanese language courses?",
        answer:
          "We offer flexible course durations to accommodate varying student needs and schedules. For example, we have a 6-month course with 4 to 5.5 hours of daily classes. We also offer shorter, more intensive courses like the 3-month JFT Exam preparation.",
      },
    ],
  },
  {
    title: "Our Company",
    description: "Information about Customer Group and our presence",
    items: [
      {
        question: "How many years of experience do you have?",
        answer:
          "Customer Group Nepal was established in 2021. However, our parent company has been operating globally since 2019, giving us 5+ Years of Expertise in this field.",
      },
      {
        question: "How many branches do you have in Nepal?",
        answer:
          "We currently have 4+ Branches in Nepal, located in Kathmandu, Chitwan, and Pokhara, with an upcoming branch in Butwal.",
      },
      {
        question: "Where are your offices located in Nepal?",
        answer:
          "Our current branches are located in:\n\n• Kathmandu: Gongabu Chowk, opps to Bajaj Showroom\n• Chitwan: Tisha Complex, Sahid Chowk, Narayanghat\n• Pokhara: Giri Complex (2nd floor), Sabhagriha Chowk, Pokhara\n• Butwal: Raj Shree Complex (4th floor) Ram Mandir Line, Traffic Chowk, Butwal",
      },
      {
        question: "How can I contact you for more information?",
        answer:
          "For more information, please check our social media channels or visit our contact us page.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white ">
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/40 to-transparent py-32">
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to our FAQ section! Here, we&apos;ve compiled answers to
            some of the most common questions we receive about our services and
            the Specified Skilled Worker (SSW) program in Japan. If you
            don&apos;t find the answer you&apos;re looking for, please
            don&apos;t hesitate to contact us directly.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {faqData.map((section, index) => (
          <div key={index} className="mb-16">
            <FAQ
              title={section.title}
              description={section.description}
              items={section.items}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
