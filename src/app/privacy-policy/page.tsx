"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const privacyPolicy = [
  {
    title: "Introduction",
    content: `At Customer Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard the data you provide when using our website and Services, including Japanese language training, visa processing, job and study placement, additional training programs, and support facilities. By accessing our website or engaging with our Services, you agree to the practices described in this policy. Please read this policy carefully.`,
  },
  {
    title: "1. Information We Collect",
    content: `We may collect the following types of information:

- Personal Information: Name, address, date of birth, contact details (phone, email), passport number, educational background, and work experience, provided during enrollment, visa applications, or job/study placements.
- Usage Data: Information about your interactions with our website, such as IP address, browser type, and pages visited, collected automatically.
- Third-Party Data: Information from partners (e.g., Japanese employers, universities) or government authorities (e.g., visa status updates) shared with your consent.`,
  },
  {
    title: "2. How We Collect Information",
    content: `- Directly from You: When you enroll in courses, apply for visas, seek job/study placement, or use support facilities (e.g., hostels in Chitwan/Pokhara).
- Automatically: Through cookies and tracking technologies on our website to improve user experience.
- From Third Parties: With your permission, we may receive data from partners or immigration authorities to facilitate Services.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your personal information to:

- Provide and manage our Services (e.g., language training, visa processing, job placement).
- Process payments and communicate about fees or scholarships.
- Assess eligibility for programs and match you with opportunities (e.g., Agriculture, Nursing Care roles).
- Comply with legal obligations, such as Japanese immigration laws or Nepali regulations.
- Improve our website and Services based on usage data.
- Send updates, promotional materials, or support notifications (with your consent).`,
  },
  {
    title: "4. How We Share Your Information",
    content: `We may share your information with:

- Service Providers: Third parties who assist with visa processing, job placement (e.g., 300+ companies/partners), or training delivery, under confidentiality agreements.
- Legal Authorities: Japanese immigration or Nepali government bodies as required by law.
- Partners: Employers or educational institutions with your consent for placement purposes.
- Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred, subject to this Privacy Policy.

We do not sell your personal information to third parties for marketing purposes.`,
  },
  {
    title: "5. Data Security",
    content: `Customer Group employs reasonable physical, technical, and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure. We are not liable for breaches beyond our control, and you are encouraged to safeguard your login credentials.`,
  },
  {
    title: "6. Your Rights and Choices",
    content: `- Access and Correction: You may request access to or correction of your personal information by contacting us.
- Opt-Out: You can opt out of promotional emails by following the unsubscribe link provided.
- Data Deletion: We will delete your data upon request, unless required for legal or operational purposes (e.g., visa records).
- Cookies: You can disable cookies in your browser, though this may affect website functionality.`,
  },
  {
    title: "7. Retention of Information",
    content: `We retain your personal information only as long as necessary to fulfill the purposes outlined (e.g., visa processing records for 5 years, per Japanese immigration requirements) or as required by law. After this period, data will be securely deleted or anonymized.`,
  },
  {
    title: "8. International Data Transfers",
    content: `Your information may be transferred to Japan or other countries where our partners or service providers operate. These transfers are conducted in compliance with applicable data protection laws, and we ensure appropriate safeguards are in place.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our Services are not intended for individuals under 18 without parental consent. We do not knowingly collect data from minors unless authorized by a guardian. If we become aware of such collection, we will delete the information promptly.`,
  },
  {
    title: "10. Changes to This Privacy Policy",
    content: `Customer Group may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on our website with the "Last Updated" date revised. Your continued use of our Services after changes constitutes acceptance of the new policy.`,
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/10 to-transparent"
      >
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text"
            >
              Privacy Policy
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
            {privacyPolicy.map((policy, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#00378b] hover:text-[#363672]">
                  {policy.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {policy.content.split("\n").map((paragraph, pIndex) => (
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
