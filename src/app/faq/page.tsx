import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Aurora Clean Services Sydney",
  description:
    "Find answers to frequently asked questions about Aurora Clean's commercial cleaning services in Sydney. Learn about booking, pricing, services, and special requirements.",
  keywords: [
    "Aurora Clean FAQ",
    "Cleaning Services Questions Sydney",
    "Commercial Cleaning FAQ",
    "Cleaning Service Pricing",
    "Booking Cleaning Services",
  ],
  openGraph: {
    title: "FAQ | Aurora Clean Services Sydney",
    description:
      "Find answers to frequently asked questions about Aurora Clean's commercial cleaning services in Sydney.",
    url: "https://auroraclean.com.au/faq",
    siteName: "Aurora Clean Services",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Aurora Clean Services Sydney",
    description:
      "Find answers to frequently asked questions about Aurora Clean's commercial cleaning services.",
  },
  alternates: {
    canonical: "https://auroraclean.com.au/faq",
  },
};

export { default } from "./FAQPage";
