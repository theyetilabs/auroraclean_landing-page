import { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Our Services | Aurora Clean Services Sydney",
  description:
    "Explore our comprehensive cleaning services in Sydney including commercial cleaning, office cleaning, gym cleaning, medical cleaning, warehouse cleaning, and more. Professional eco-friendly solutions.",
  keywords: [
    "Cleaning Services Sydney",
    "Commercial Cleaning Sydney",
    "Office Cleaning",
    "Medical Cleaning",
    "Gym Cleaning Sydney",
    "Warehouse Cleaning",
    "Aged Care Cleaning",
    "Restaurant Cleaning",
  ],
  openGraph: {
    title: "Our Services | Aurora Clean Services Sydney",
    description:
      "Explore our comprehensive cleaning services in Sydney including commercial, office, gym, medical, warehouse cleaning and more.",
    url: "https://auroraclean.com.au/services",
    siteName: "Aurora Clean Services",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Aurora Clean Services Sydney",
    description:
      "Explore our comprehensive cleaning services in Sydney.",
  },
  alternates: {
    canonical: "https://auroraclean.com.au/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-20  bg-gradient-to-br from-blue-50 to-green-50">
      <Services />
    </main>
  );
}
