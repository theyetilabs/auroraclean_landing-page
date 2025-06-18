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
    content: `This website is owned and operated by Aurora Clean Company (referred to as "We," "our," and "us" in this Internet Privacy Policy). By using this site (https://www.auroraclean.com.au/), you agree to the terms of this Internet Privacy Policy, which governs the collection and use of personal information you may supply to us through your conduct on the website. This policy is designed to ensure transparency and compliance with applicable privacy laws in Australia, including the Privacy Act 1988 and the Australian Privacy Principles (APPs).`,
  },
  {
    title: "Terms and Conditions",
    content: `We reserve the right, at our discretion, to modify or remove portions of this Internet Privacy Policy at any time. This policy is in addition to any other terms and conditions applicable to the website. We do not make any representations about third-party websites that may be linked to our site.`,
  },
  {
    title: "Personal Information",
    content: `We recognize the importance of protecting the privacy of information collected about visitors to our website, particularly information that can identify an individual ("personal information"). This Internet Privacy Policy governs how your personal information, obtained through the website, will be handled.

Personal information is collected only when knowingly and voluntarily submitted. For example, we may collect information such as your name, email address, phone number, or service preferences when you request a quote, make an inquiry, or book a cleaning service. This information is essential to provide you with our professional cleaning services, including commercial cleaning, medical cleaning, and aged care cleaning across Sydney, NSW.

If we collect sensitive information, such as health-related data (e.g., specific cleaning requirements for medical or aged care facilities), we will handle it in strict compliance with the Australian Privacy Principles, ensuring it is used only for the purpose for which it was provided and with your consent, unless required by law.`,
  },
  {
    title: "Use of Information",
    content: `Personal information submitted to our site is used only for the purpose for which it was provided, such as scheduling cleaning services, responding to inquiries, or improving our website experience. We may also use it for secondary purposes related to the primary purpose, such as sending service confirmations or updates, unless we disclose other uses in this policy or at the time of collection. Copies of correspondence containing personal information are stored as archives for record-keeping and backup purposes only.`,
  },
  {
    title: "Disclosure",
    content: `We will not disclose your personal information except in the following circumstances:

• Where you have provided consent.
• Where disclosure is necessary to achieve the purpose for which the information was submitted (e.g., coordinating with third-party service providers to fulfill your cleaning requests).
• In special situations where we believe in good faith that disclosure is necessary to identify, contact, or bring legal action against anyone damaging, injuring, or interfering with our rights, property, users, or anyone else who could be harmed by such activities.
• When we believe in good faith that the law requires disclosure, such as in response to a legal request or to comply with regulatory obligations.

We may engage third parties to provide goods or services on our behalf, such as payment processors or scheduling software providers. In such cases, we may disclose your personal information to those third parties solely to meet your request for goods or services. These third parties are required to adhere to our privacy standards and applicable Australian privacy laws.`,
  },
  {
    title: "Security",
    content: `We strive to ensure the security, integrity, and privacy of personal information submitted to our site. We regularly review and update our security measures in light of current technologies. However, no data transmission over the Internet can be guaranteed to be completely secure.

We will take all reasonable steps to protect the personal information you transmit to us or from our online products and services. Once we receive your transmission, we make our best efforts to ensure its security on our systems.

Our employees and contractors who provide services related to our information systems are obligated to respect the confidentiality of any personal information we hold. However, we cannot be held responsible for events arising from unauthorized access to your personal information.`,
  },
  {
    title: "Cookies",
    content: `Cookies are data that a website transfers to an individual's hard drive for record-keeping purposes. Cookies, which are an industry standard used by most websites, including ours, facilitate a user's ongoing access to and use of the site.

They allow us to customize the website to your needs, such as remembering your preferences or tracking site usage for analytics purposes. If you do not want information collected through cookies, most browsers allow you to deny or accept the cookie feature. However, please note that cookies may be necessary to provide you with certain features of our online services, such as booking forms or personalized content.`,
  },
  {
    title: "Access to Information",
    content: `We will take all reasonable steps to keep secure any information we hold about you and to ensure it remains accurate and up-to-date. If you discover that information held about you is incorrect, you may contact us to have it corrected.

To access or correct your personal information, please contact us at:
Email: hello@auroraclean.com.au
Phone: 0406158054

Our employees and contractors are also obligated to respect the confidentiality of any personal information we hold.`,
  },
  {
    title: "Links to Other Sites",
    content: `We may provide links to websites outside of our own, as well as to third-party websites. These linked sites are not under our control, and we cannot accept responsibility for their conduct or privacy practices. Before disclosing your personal information on any other website, we advise you to review the terms and conditions and privacy statements of those sites.`,
  },
  {
    title: "Problems or Questions",
    content: `If we become aware of any ongoing concerns or problems with our website, we will take these issues seriously and work to address them promptly. If you have any further queries relating to this Privacy Policy or wish to report a problem or complaint, please contact us at:

Email: hello@auroraclean.com.au
Phone: 0406158054`,
  },
  {
    title: "Compliance with Privacy Laws",
    content: `Aurora Clean Company is committed to complying with all applicable privacy laws and regulations in Australia, including the Privacy Act 1988 and the Australian Privacy Principles (APPs). This includes ensuring that any sensitive information, such as health-related data, if collected, is handled in strict accordance with these principles and only for the purpose for which it was provided, unless required by law.

For example, in our medical cleaning or aged care cleaning services, we may collect information about specific cleaning requirements, which will be treated with the utmost confidentiality and used solely to deliver our services effectively.

For more information about privacy issues in Australia, visit the Office of the Australian Information Commissioner (OAIC).

Last Updated: May 28, 2025`,
  },
];

export default function PrivacyPolicyPage() {
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
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#018D43] hover:text-[#363672]">
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
