import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aurora Clean Services",
  description:
    "Learn about Aurora Cleaning Service, a proud member of Asta Business Group, dedicated to transforming Sydney's commercial spaces into pristine environments with professional cleaning solutions.",
  keywords: [
    "About Aurora Clean",
    "Professional Cleaning Sydney",
    "Commercial Cleaning Company",
    "Aurora Cleaning Service History",
    "Sydney Cleaning Experts",
  ],
  openGraph: {
    title: "About Us | Aurora Clean Services",
    description:
      "Learn about Aurora Cleaning Service, a proud member of Asta Business Group, dedicated to transforming Sydney's commercial spaces into pristine environments.",
    url: "https://auroraclean.com.au/about",
    siteName: "Aurora Clean Services",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Aurora Clean Services",
    description:
      "Learn about Aurora Cleaning Service, dedicated to transforming Sydney's commercial spaces into pristine environments.",
  },
  alternates: {
    canonical: "https://auroraclean.com.au/about",
  },
};

export { default } from "./AboutPage";
