import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  keywords: [
    "SSW Program Nepal to Japan",
    "Japan Work Visa for Nepalese",
    "Japanese Language School Kathmandu",
    "Job Placement Japan Nepal",
    "Visa Services Japan Nepal",
    "Customer Group",
    "Best SSW Program Nepal to Japan",
    "Top Japan Work Visa for Nepalese",
    "Best Japanese Language School Kathmandu",
    "Leading Job Placement Japan Nepal",
    "Best Visa Services Japan Nepal",
    "Sushi bomber kathmandu",
    "Sushi bomber pokhara",
    "Sushi bomber butwal",
    "Sushi bomber chitwan",
  ].join(", "),
  authors: [{ name: "Customer Group" }],
  creator: "Customer Group",
  publisher: "Customer Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://customergroup.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Customer Group - Leading SSW Program & Japanese Language School in Nepal",
    description:
      "Customer Group Nepal specializes in empowering Nepalese individuals to work in Japan through the SSW Program. Benefit from our expert Japanese language classes, high visa success rate, and extensive job placement network. Start your journey to Japan with us.",
    url: "https://customergroup.com.np",
    siteName: "Customer Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Customer Group - SSW Program & Japanese Language School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Customer Group - Leading SSW Program & Japanese Language School in Nepal",
    description:
      "Customer Group Nepal specializes in empowering Nepalese individuals to work in Japan through the SSW Program. Benefit from our expert Japanese language classes, high visa success rate, and extensive job placement network. Start your journey to Japan with us.",
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
  title: "Customer Group",
  description: "Your SSW Journey to Japan with us",
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
        <FloatingContact />
      </body>
    </html>
  );
}
