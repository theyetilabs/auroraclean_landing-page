import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import GetQuotes from "@/components/quotes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  keywords: [
    "Cleaning Services Australia",
    "Cleaning Services Nepal",
    "Cleaning Services Rarotonga",
    "Cleaning Services Christchurch",
    "Cleaning Services Wellington",
    "Cleaning Services Perth",
    "Cleaning Services Brisbane",
    "Cleaning Services Adelaide",
    "Cleaning Services Sydney",
    "Cleaning Services Melbourne",
    "Cleaning Services Gold Coast",
    "Cleaning Services Sunshine Coast",
    "Cleaning Services Toowoomba",
  ].join(", "),
  authors: [{ name: "Aurora Cleaning Services" }],
  creator: "Aurora Cleaning Services",
  publisher: "Aurora Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://auroracleaning.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aurora Cleaning Services - Leading Cleaning Services in Australia",
    description:
      "Aurora Cleaning Services specializes in providing cleaning services to businesses and individuals in Australia. We are a leading cleaning services provider in Australia and we are committed to providing the best cleaning services to our clients.",
    url: "https://auroracleaning.com.au",
    siteName: "Aurora Cleaning Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Aurora Cleaning Services - Leading Cleaning Services in Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Cleaning Services - Leading Cleaning Services in Australia",
    description:
      "Aurora Cleaning Services specializes in providing cleaning services to businesses and individuals in Australia. We are a leading cleaning services provider in Australia and we are committed to providing the best cleaning services to our clients.",
    images: ["/images/hero-placeholder.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-site-verification",
  // },
  title: "Aurora Cleaning Services",
  description:
    "Aurora Cleaning Services - Leading Cleaning Services in Australia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${raleway.className} font-raleway`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors closeButton />

        <FloatingContact />
        <GetQuotes />
      </body>
    </html>
  );
}
