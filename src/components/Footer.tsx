"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import { TikTokIcon } from "@/components/ui/icons/TikTok";
import { YetiLabsIcon } from "./ui/icons/YetiLabs";

const footerLinks = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blogs" },
    { label: "FAQs", href: "/faq" },
  ],
  businessCorporate: [
    { label: "Commercial Cleaning", href: "/service/commercial-cleaning" },
    { label: "Office Cleaning", href: "/service/office-cleaning" },
    { label: "Strata Cleaning", href: "/service/strata-cleaning" },
    {
      label: "Local Government Buildings",
      href: "/service/government-cleaning",
    },
    { label: "Supermarket & Retail", href: "/service/retail-cleaning" },
  ],
  healthcareSocial: [
    { label: "Medical Cleaning", href: "/service/medical-cleaning" },
    { label: "Aged Care & Disability", href: "/service/aged-care-cleaning" },
    { label: "Childcare Cleaning", href: "/service/childcare-cleaning" },
    { label: "School Cleaning", href: "/service/school-cleaning" },
  ],
  hospitalityLeisure: [
    { label: "Restaurant & Cafe", href: "/service/restaurant-cleaning" },
    { label: "Gym Cleaning", href: "/service/gym-cleaning" },
    { label: "Airbnb & Short Stay", href: "/service/airbnb-cleaning" },
    { label: "Explore All Services", href: "/services" },
  ],
  resources: [
    { label: "Gallery", href: "/gallery" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
  contact: {
    phone: ["0406 158 054"],
    email: "hello@auroraclean.com.au",
    request: "Request a Free Quote",
    social: ["Facebook", "Twitter", "LinkedIn"],
  },
  contactHead: {
    email: "ktm@customergroup.com.np",
    phone: ["+977 01-5911783", "9820 151440"],
    address: "Gongabu Chowk, oppsite to Bajaj Showroom, Kathmandu, Nepal",
  },
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/Auroracleaningserv",
      icon: <Facebook size={20} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/auroracleaningservices",
      icon: <Instagram size={20} />,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@auroracleaningservices",
      icon: <Youtube size={20} />,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@auroracleaningservices",
      icon: <TikTokIcon size={20} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#01401e] to-[#018D43] text-white py-16 relative">
      <BackgroundBeams className="z-10" />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-14 gap-8 relative z-20">
        {/* Logo and Contact */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white rounded-lg p-4 w-fit relative">
            <div className="h-10 w-32 relative">
              <Image
                src="/logo.png"
                alt="Customer Group Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-400" />
              <a
                href={`mailto:${footerLinks.contact.email}`}
                className="text-gray-400 hover:text-white"
              >
                {footerLinks.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-400" />
              <div className="text-gray-400">
                {footerLinks.contact.phone.join(" | ")}
              </div>
            </div>
            {/* <div className="flex items-start gap-2">
              <MapPin size={16} className="text-gray-400 mt-1" />
              <p className="text-gray-400">{footerLinks.contact.address}</p>
            </div> */}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-medium mb-4">About</h3>
          <ul className="space-y-3">
            {footerLinks.about.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-8">
          {/* Business & Corporate */}
          <div>
            <h3 className="text-lg font-medium mb-4">Business & Corporate</h3>
            <ul className="space-y-3">
              {footerLinks.businessCorporate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare & Social Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Healthcare & Social</h3>
            <ul className="space-y-3">
              {footerLinks.healthcareSocial.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality & Leisure */}
          <div>
            <h3 className="text-lg font-medium mb-4">Hospitality & Leisure</h3>
            <ul className="space-y-3">
              {footerLinks.hospitalityLeisure.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter and Social */}
        <div className="md:col-span-3 space-y-6">
          {/* <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay Updated with Visa Tips & Japanese Learning Resources
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-[#018D43] hover:bg-white/90">
                <Send size={16} />
              </Button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="text-xs flex items-center gap-2 flex-wrap">
            © 2025 CustomerGroup.com.np. DEVELOPED IN PARTNERSHIP WITH Add
            commentMore actions
            <Link href="https://theyetilabs.com" target="_blank">
              YETI LABS
            </Link>
            <YetiLabsIcon />{" "}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
