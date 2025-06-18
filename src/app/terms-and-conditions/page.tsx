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
    content: `Aurora Clean Company is committed to providing exceptional cleaning services across Sydney, NSW, with a focus on transparency, fairness, and customer satisfaction. Our terms of service outline the mutual responsibilities and expectations between Aurora Clean Company and our valued clients. These terms are designed to be clear and straightforward, ensuring a positive experience for all parties involved.

By engaging our services, you agree to the following terms, which govern our cleaning services, including commercial cleaning, school cleaning, carpet cleaning, warehouse cleaning, after-builders cleaning, church cleaning, green cleaning, warehouse sweeping, and warehouse floor scrubbing.`,
  },
  {
    title: "1. Agreement on Price and Frequency",
    content: `Before commencing services, Aurora Clean Company will conduct an onsite visit to assess your cleaning needs and provide a detailed proposal. This proposal will specify the agreed-upon price, cleaning frequency (e.g., daily, weekly, or monthly), and the service address.

The service address must match the quoted location, and all terms agreed upon will be documented in the initial contract. This ensures clarity and alignment on the scope of services, whether for a corporate office in Sydney CBD or a school in Parramatta.`,
  },
  {
    title: "2. Invoicing and Payment Terms",
    content: `Invoices are generated and emailed to the responsible party on the 20th of each month, with payment due within seven days. Timely payment ensures uninterrupted service. Late payments may incur additional fees, which will be communicated in advance.

For inquiries about invoicing, contact us at hello@auroraclean.com.au or 0406158054.`,
  },
  {
    title: "3. GST",
    content: `All quoted prices are exclusive of Goods and Services Tax (GST) unless explicitly stated otherwise in the proposal. This aligns with standard Australian business practices, ensuring transparency in pricing.`,
  },
  {
    title: "4. Cleaning Chemicals and Materials",
    content: `Aurora Clean Company provides all necessary cleaning chemicals and materials, including eco-friendly, TGA-approved products, to ensure high-quality results. If you require special or hypoallergenic cleaning products (e.g., for sensitive environments like childcare centers or medical facilities), please notify us before the first cleaning session.

We will accommodate such requests where possible, but an additional fee may apply to cover the cost of specialized products. This ensures that our services meet your specific needs while maintaining safety and efficacy.`,
  },
  {
    title: "5. Access to Property",
    content: `The customer is responsible for providing Aurora Clean Company with full access to the property, including all areas specified in the scope of service, at the agreed-upon date and time. This includes ensuring that our cleaners can enter the premises and access areas such as offices, classrooms, or warehouses.

Failure to provide access may result in a "Call Out Fee" (see Section 7).`,
  },
  {
    title: "6. Non-Solicitation of Cleaners",
    content: `Aurora Clean Company invests significant time and resources in training our professional cleaners to deliver exceptional service. To protect this investment, customers agree not to directly or indirectly engage our cleaners for cleaning services, either personally or through an associated company, for 12 months following the conclusion of the contract.

Violation of this clause constitutes a breach of contract, and Aurora Clean Company reserves the right to pursue appropriate remedies.`,
  },
  {
    title: "7. Cancellation Policy",
    content: `If you need to cancel or reschedule a cleaning session, please provide at least 24 hours' notice by contacting us at hello@auroraclean.com.au or 0406158054.

If a cleaner arrives at the premises but is unable to perform the service due to reasons beyond our control (e.g., lack of access or unforeseen circumstances on the customer's end), a "Call Out Fee" equivalent to 60% of the agreed per-visit price will be charged. This fee compensates for the cleaner's time and travel expenses.`,
  },
  {
    title: "8. Termination of Agreement",
    content: `Either party may terminate the cleaning agreement by providing written notice specifying the termination date, with at least 45 days' notice required. Written notice can be sent via email to hello@auroraclean.com.au.

This allows both parties sufficient time to adjust plans and ensures a smooth transition.`,
  },
  {
    title: "9. Non-Assignment",
    content: `The rights and obligations outlined in this agreement are specific to the customer and Aurora Clean Company and may not be transferred or assigned to any other party without written consent from both parties. This ensures that the contract remains binding and clear for the original parties involved.`,
  },
  {
    title: "10. Entire Agreement",
    content: `This contract represents the complete agreement between Aurora Clean Company and the customer. No other promises, conditions, or agreements, whether oral or written, apply unless explicitly included in this contract.

This agreement supersedes any prior arrangements and governs the scope of routine cleaning services as outlined in the attached scope of service. Any amendments must be made in writing and signed by both parties.`,
  },
  {
    title: "Additional Notes",
    content: `Aurora Clean Company is dedicated to providing high-quality, eco-friendly cleaning services across Sydney, NSW, serving over 600 suburbs, including Sydney CBD, Bondi, Parramatta, and Manly. Our terms are designed to foster a fair and transparent partnership.

For any questions or clarifications, please contact us at:
Email: hello@auroraclean.com.au
Phone: 0406158054

Last Updated: May 28, 2025`,
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
