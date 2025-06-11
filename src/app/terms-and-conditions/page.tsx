"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const terms = [
  {
    title: "Introduction",
    content: `Welcome to Customer Group's Terms and Conditions. By accessing or using our website and services, you agree to comply with and be bound by the following terms. These terms govern your use of our Japanese language training, visa processing, job and study placement, additional training programs, and support facilities (collectively, "Services"). Please read these terms carefully before engaging with our Services. If you do not agree with these terms, you should not use our Services.`,
  },
  {
    title: "1. Acceptance of Terms",
    content: `By enrolling in our programs, submitting an application, or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. Customer Group reserves the right to update these terms at any time, and such changes will be effective upon posting on our website. Your continued use of our Services after changes are posted constitutes acceptance of the updated terms.`,
  },
  {
    title: "2. Eligibility",
    content: `You must be at least 18 years of age to use our Services independently. If you are under 18, you may use our Services only with the consent of a parent or legal guardian.

Our Services are primarily intended for Nepali individuals seeking opportunities in Japan through the Specified Skilled Worker (SSW) Program, academic placements, or related support. Customer Group reserves the right to determine eligibility for specific programs at its discretion.`,
  },
  {
    title: "3. Services Provided",
    content: `Customer Group offers the following Services:

- Japanese Language Training: Curriculum-based classes, JLPT N3 or higher preparation, and charge-free mock tests.
- Visa Processing: Document arrangement and SSW/student visa processing with a Japanese lawyer.
- Job and Study Placement: Placement in industries (e.g., Agriculture, Nursing Care, Restaurants) and academic programs (e.g., universities, language schools).
- Additional Training Programs: JFT Basic & Advanced Classes, Nursing, and Food Service training.
- Support Facilities: Hostel and bus facilities in Chitwan and Pokhara.

Customer Group does not guarantee specific outcomes (e.g., visa approval, job placement, or exam success) but will provide reasonable efforts to support your goals.`,
  },
  {
    title: "4. Client Responsibilities",
    content: `- Accurate Information: You must provide accurate and complete information (e.g., personal details, documents) for visa processing, job/study placement, and enrollment. Customer Group is not liable for delays or rejections due to inaccurate information.
- Compliance: You agree to comply with all applicable laws, including Japanese immigration laws, and to follow our program guidelines (e.g., attendance, conduct).
- Timely Submission: You are responsible for submitting required documents and payments on time to avoid delays in processing.`,
  },
  {
    title: "5. Visa and Job/Study Placement Outcomes",
    content: `- No Guarantee: While Customer Group boasts a 99.99% visa success rate and job placement rate, we do not guarantee visa approval, job placement, or study placement, as these decisions are made by third parties (e.g., Japanese immigration authorities, employers, schools).
- Third-Party Decisions: Customer Group is not liable for decisions made by external entities, including visa rejections, job offer withdrawals, or academic admission denials.
- Support: We will provide reasonable assistance to address issues, but outcomes remain outside our control.`,
  },
  {
    title: "6. Intellectual Property",
    content: `All content on our website, including training materials, mock tests, and guides, is the intellectual property of Customer Group. You may not reproduce, distribute, or modify these materials without prior written consent. Materials provided (e.g., books, stationery) are for personal use only during your enrollment.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `Customer Group is not liable for any indirect, incidental, or consequential damages arising from the use of our Services, including but not limited to loss of income, visa rejections, or academic failures. Our liability is limited to the amount paid for the Services. We are not responsible for circumstances beyond our control, such as changes in immigration laws, employer decisions, or natural disasters.`,
  },
  {
    title: "8. Termination of Services",
    content: `Customer Group reserves the right to terminate or suspend Services if:
- You fail to comply with these Terms and Conditions.
- You provide false or misleading information.
- You engage in misconduct during training, hostel stays, or interactions with staff/partners.
- You fail to make timely payments.

Upon termination, you will not be entitled to a refund of any fees paid.`,
  },
  {
    title: "9. Privacy and Data Protection",
    content: `Your personal information is handled in accordance with our Privacy Policy. By using our Services, you consent to the collection, use, and sharing of your data as necessary for visa processing, job/study placement, and other Services. Customer Group will take reasonable measures to protect your data but is not liable for unauthorized access beyond our control.`,
  },
  {
    title: "10. Governing Law and Dispute Resolution",
    content: `These Terms and Conditions are governed by the laws of Nepal. Any disputes arising from your use of our Services will be resolved through negotiation. If unresolved, disputes will be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.`,
  },
  {
    title: "11. Contact Information",
    content: `If you have questions about these Terms and Conditions, please contact us at:

Email: hello@customergroup.com.np
Phone: +977 9704591439
Address: Customer Group, Raj Shree Complex (4th floor) Ram Mandir Line, Traffic Chowk, Butwal

Last Updated: April 01, 2025`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#018D43]/10 to-transparent"
      >
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#018D43] to-red-500 text-transparent bg-clip-text"
            >
              Terms and Conditions
            </motion.h1>
          </div>
        </section>
      </motion.div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-0"
          >
            {terms.map((term, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#018D43] hover:text-[#363672]">
                  {term.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {term.content.split("\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
