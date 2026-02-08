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

// JSON-LD Structured Data for SEO and Google Sitelinks
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aurora Clean Services",
  alternateName: "Aurora Cleaning Service",
  url: "https://auroraclean.com.au",
  logo: "https://auroraclean.com.au/logo.png",
  description:
    "Aurora Cleaning Services is a leading professional cleaning company in Sydney, Australia, providing eco-friendly commercial cleaning services for offices, gyms, restaurants, medical facilities, warehouses, and more.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61-406-158-054",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  sameAs: [],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aurora Clean Services",
  url: "https://auroraclean.com.au",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://auroraclean.com.au/blogs?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://auroraclean.com.au",
  name: "Aurora Clean Services",
  image: "https://auroraclean.com.au/logo.png",
  telephone: "+61-406-158-054",
  email: "hello@auroraclean.com.au",
  url: "https://auroraclean.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -33.8688,
      longitude: 151.2093,
    },
    geoRadius: "100000",
  },
};

// Site Navigation for Google Sitelinks
const jsonLdSiteNavigation = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "About Us",
      description:
        "Learn about Aurora Cleaning Service and our commitment to excellence",
      url: "https://auroraclean.com.au/about",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Our Services",
      description:
        "Explore our comprehensive cleaning services for all business types",
      url: "https://auroraclean.com.au/services",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Contact Us",
      description: "Get in touch for a free cleaning quote",
      url: "https://auroraclean.com.au/contact",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Why Choose Us",
      description:
        "Discover why Aurora is Sydney's trusted cleaning partner",
      url: "https://auroraclean.com.au/why-choose-us",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "FAQ",
      description: "Frequently asked questions about our cleaning services",
      url: "https://auroraclean.com.au/faq",
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Blogs",
      description: "Read the latest cleaning tips and industry news",
      url: "https://auroraclean.com.au/blogs",
    },
  ],
};

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  keywords: [
    "Cleaning Services Sydney",
    "Office Cleaning Sydney",
    "Restaurant Cleaning Sydney",
    "Gym Cleaning Sydney",
    "Aged Care Cleaning Sydney",
    "Eco-Friendly Cleaning Sydney",
    "Professional Cleaning Services Sydney",
    "Commercial Cleaning Sydney",
    "Green Cleaning Sydney",
    "Sustainable Cleaning Sydney",
    "Aurora Cleaning Service Sydney",
    "Best Cleaning Company Sydney",
    "Affordable Cleaning Services Sydney",
    "Reliable Cleaning Services Sydney",
    "Deep Cleaning Sydney",
    "Disinfection Services Sydney",
    "Non-Toxic Cleaning Sydney",
    "Biodegradable Cleaning Sydney",
    "Best Eco-Friendly Cleaning Company Sydney",
    "COVID-19 Cleaning Sydney",
    "Childcare Cleaning Sydney",
    "Strata Cleaning Sydney",
    "Retail Cleaning Sydney",
    "Airbnb Cleaning Sydney",
    "Warehouse Cleaning Sydney",
    "Carpet Cleaning Sydney",
    "Vehicle Detailing Sydney",
    "Medical Cleaning Sydney",
    "Aurora Clean Sydney"
  ].join(", "),
  authors: [{ name: "Aurora Clean Services" }],
  creator: "Aurora Clean Services",
  publisher: "Aurora Clean Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://auroraclean.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aurora Cleaning Services - Leading Cleaning Services in Australia",
    description:
      "Aurora Cleaning Services specializes in providing cleaning services to businesses and individuals in Australia. We are a leading cleaning services provider in Australia and we are committed to providing the best cleaning services to our clients.",
    url: "https://auroraclean.com.au",
    siteName: "Aurora Clean Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-og.png",
        width: 1200,
        height: 630,
        alt: "Aurora Clean Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Clean Services - Leading Cleaning Services in Australia",
    description:
      "Aurora Clean Services specializes in providing cleaning services to businesses and individuals in Australia. We are a leading cleaning services provider in Australia and we are committed to providing the best cleaning services to our clients.",
    images: ["/logo-og.png"],
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
  title: "Aurora Clean Services",
  description:
    "Aurora Clean Services - Leading Cleaning Services in Australia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSiteNavigation),
          }}
        />
      </head>
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
