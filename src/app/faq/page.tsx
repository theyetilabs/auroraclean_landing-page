"use client";

import { FAQ } from "@/components/ui/faq";

const faqData = [
  {
    title: "Company Overview",
    description: "Learn about Aurora Clean and our service coverage",
    items: [
      {
        question: "In which regions does Aurora Clean offer its services?",
        answer:
          "Aurora Clean provides its services across New South Wales, Victoria, and Queensland.",
      },
      {
        question: "How long has Aurora Clean been operating?",
        answer: "Aurora Clean has been in business for over 5 years.",
      },
      {
        question:
          "What types of cleaning products and equipment does Aurora Clean use?",
        answer:
          "Aurora Clean uses gentle and safe cleaning products, with a Material Data Sheet (MSDS) available upon request. We also utilize modern, up-to-date cleaning equipment.",
      },
      {
        question: "Does Aurora Clean have insurance coverage?",
        answer:
          "Yes, Aurora Clean maintains all necessary insurances to cover our cleaning operations.",
      },
    ],
  },
  {
    title: "Booking and Scheduling",
    description: "Information about booking our services and scheduling",
    items: [
      {
        question:
          "Can clients remain on-site while cleaning is being performed?",
        answer:
          "No, Aurora Clean typically conducts cleaning after hours to avoid disrupting operations. However, we can accommodate cleaning during business hours if requested, with clients specifying their preferred start time.",
      },
      {
        question:
          "How quickly can Aurora Clean respond to urgent cleaning requests?",
        answer:
          "Aurora Clean aims to respond to urgent bookings within 24 to 48 hours.",
      },
      {
        question:
          "What are the operating hours for customer service, and how much notice is needed for scheduling?",
        answer:
          "Customer service is available from 9 AM to 6 PM. For scheduling, clients should contact at least 24 hours before their desired cleaning time.",
      },
      {
        question: "Does Aurora Clean offer a maintenance agreement?",
        answer:
          "Yes, Aurora Clean offers a non-binding maintenance agreement. Clients must provide 45 days' notice to terminate the agreement.",
      },
      {
        question: "What is the minimum cleaning frequency required?",
        answer:
          "Routine cleaning requires a minimum frequency of fortnightly, but daily cleaning (Monday to Sunday) can be arranged if needed.",
      },
    ],
  },
  {
    title: "Services and Pricing",
    description: "Details about our cleaning services and pricing structure",
    items: [
      {
        question:
          "What is included in Aurora Clean's commercial cleaning services?",
        answer:
          "Commercial cleaning includes routine and basic cleaning of areas such as tiles, floors, walls, doors, windows, furniture, fixtures, lighting, ceilings, kitchens, toilets, and more.",
      },
      {
        question: "How are cleaning rates determined?",
        answer:
          "Cleaning rates vary depending on the specifics of the premises. A Sales Manager will provide a personalized quote based on the property type, size, and requirements.",
      },
      {
        question:
          "What is the average cost to clean a 2,000 square foot office?",
        answer:
          "For a 2,000 sq. ft. office, the cleaning cost typically ranges from $80 to $180, based on an average of 2 hours at the hourly rate of $40 to $90.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "Payment can be made via electronic fund transfer, credit card, or cheque in the mail. Invoices are sent on the 20th of each month.",
      },
      {
        question:
          "What supplies does Aurora Clean provide during their cleaning services?",
        answer:
          "Aurora Clean supplies cleaning chemicals, bin liners, toilet paper, hand towels, and other toilet consumables. A detailed quotation for these supplies can be provided upon request.",
      },
    ],
  },
  {
    title: "Special Services and Requirements",
    description:
      "Information about specialized cleaning services and customer requirements",
    items: [
      {
        question: "What is included in deep cleaning of commercial premises?",
        answer:
          "Deep cleaning encompasses in-depth cleaning of floors, tiles, bathrooms, toilets, breakrooms, kitchens, lobbies, and may include carpet and window cleaning. Advanced methods like electrostatic spraying are often used.",
      },
      {
        question: "Does Aurora Clean offer green cleaning?",
        answer:
          "Yes, green cleaning involves using minimal or no chemicals, often with concentrated fruit enzymes. Aurora Clean can provide green cleaning options upon request.",
      },
      {
        question: "Where does Aurora Clean offer carpet cleaning services?",
        answer:
          "Carpet cleaning services are currently offered only in New South Wales.",
      },
      {
        question:
          "What should customers do if something is missed during cleaning?",
        answer:
          "Customers should contact Aurora Clean immediately, and the issue will be addressed promptly.",
      },
      {
        question:
          "Do customers need to be present during the cleaning process?",
        answer:
          "No, customers do not need to be present. Our cleaners are trustworthy, and keys can be left with them if necessary.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#018D43]/40 to-transparent py-32">
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to clarify any doubts about our commercial cleaning
            services. Below are answers to common questions from our clients. If
            you don&apos;t find the answer you&apos;re looking for, please
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
