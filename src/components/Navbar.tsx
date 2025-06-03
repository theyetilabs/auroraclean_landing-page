"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coursesSubmenu = [
    { label: "Basic Course", href: "/course#basic-course" },
    { label: "Advanced Course", href: "/course#advanced-course" },
  ];

  const servicesSubmenu = [
    {
      label: "Japanese Language Training",
      href: "/service/japanese-language-training",
    },
    { label: "Visa Processing", href: "/service/visa-processing" },
    { label: "Job Placement", href: "/service/job-placement" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Customer Group Logo"
              width={150}
              height={40}
              className={cn(scrolled ? "" : "")}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 font-medium text-blacks text-lg">
            <NavLink href="/" setIsMobileMenuOpen={setIsMobileMenuOpen}>
              <span className="text-black font-bold">Home</span>
            </NavLink>

            {/* Courses Submenu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveSubmenu("courses")}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href="/course"
                className="flex items-center gap-1 text-black font-bold hover:opacity-80"
              >
                Courses{" "}
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
              </Link>
              <div
                className={cn(
                  "absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 transition-all duration-300",
                  activeSubmenu === "courses"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                )}
              >
                {coursesSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Submenu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveSubmenu("services")}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button className="flex items-center gap-1 text-black font-bold hover:opacity-80">
                Services{" "}
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <div
                className={cn(
                  "absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-300",
                  activeSubmenu === "services"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                )}
              >
                {servicesSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink
              href="/why-choose-us"
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            >
              <span className="text-black font-bold">Why Us</span>
            </NavLink>
            <NavLink
              href="/blogs"
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              prefetch
            >
              <span className="text-black font-bold">Blog</span>
            </NavLink>
            <NavLink href="/about" setIsMobileMenuOpen={setIsMobileMenuOpen}>
              <span className="text-black font-bold">About</span>
            </NavLink>
            <NavLink href="/contact" setIsMobileMenuOpen={setIsMobileMenuOpen}>
              <span className="text-black font-bold">Contact</span>
            </NavLink>
          </div>

          {/* Inquiry Button */}
          <Link
            href="https://forms.gle/zUzeXaLBSKGPeUiu7"
            target="_blank"
            className={cn(
              "hidden md:flex px-6 py-4 rounded-full font-sm  transition-all items-center gap-2 font-bold",
              scrolled
                ? "bg-[#00378b] text-white hover:bg-[#363672]"
                : "bg-white text-[#00378b] hover:bg-gray-100"
            )}
          >
            <MessageCircle size={18} /> Free Consultation
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "md:hidden fixed top-0 left-0 right-0 h-screen bg-white transition-transform duration-300 ease-in-out z-40",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="container mx-auto px-4 pt-20">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col gap-6">
              <NavLink href="/" setIsMobileMenuOpen={setIsMobileMenuOpen}>
                <span className="text-black font-bold text-xl">Home</span>
              </NavLink>

              {/* Mobile Courses Submenu */}
              <div className="flex flex-col gap-2">
                <button
                  className="text-black font-bold text-xl flex items-center gap-2"
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === "courses" ? null : "courses"
                    )
                  }
                >
                  Courses{" "}
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform",
                      activeSubmenu === "courses" ? "rotate-180" : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "pl-4 flex flex-col gap-2 transition-all duration-300",
                    activeSubmenu === "courses"
                      ? "opacity-100 visible"
                      : "opacity-0 invisible h-0"
                  )}
                >
                  {coursesSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Services Submenu */}
              <div className="flex flex-col gap-2">
                <button
                  className="text-black font-bold text-xl flex items-center gap-2"
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === "services" ? null : "services"
                    )
                  }
                >
                  Services{" "}
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform",
                      activeSubmenu === "services" ? "rotate-180" : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "pl-4 flex flex-col gap-2 transition-all duration-300",
                    activeSubmenu === "services"
                      ? "opacity-100 visible"
                      : "opacity-0 invisible h-0"
                  )}
                >
                  {servicesSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <NavLink
                href="/why-choose-us"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                <span className="text-black font-bold text-xl">Why Us</span>
              </NavLink>
              <NavLink href="/blogs" setIsMobileMenuOpen={setIsMobileMenuOpen}>
                <span className="text-black font-bold text-xl">Blog</span>
              </NavLink>
              <NavLink href="/about" setIsMobileMenuOpen={setIsMobileMenuOpen}>
                <span className="text-black font-bold text-xl">About</span>
              </NavLink>
              <NavLink
                href="/contact"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                <span className="text-black font-bold text-xl">Contact</span>
              </NavLink>
              <Link
                href="https://forms.gle/zUzeXaLBSKGPeUiu7"
                target="_blank"
                className={cn(
                  "px-6 py-4 rounded-full font-sm transition-all flex items-center gap-2 font-bold mt-4",
                  scrolled
                    ? "bg-[#00378b] text-white hover:bg-[#363672]"
                    : "bg-[#00378b] text-white hover:bg-[#363672]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={18} /> Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Consultation Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0  z-50">
        <a
          href="https://forms.gle/zUzeXaLBSKGPeUiu7"
          target="_blank"
          className="group flex items-center gap-2 bg-gradient-to-r from-[#00378b] to-transparent hover:bg-[#0099db] text-white px-6 py-3  text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Get Free Consultation</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  setIsMobileMenuOpen,
  prefetch,
}: {
  href: string;
  children: React.ReactNode;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  prefetch?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={cn(
        "font-medium hover:opacity-80 transition-colors",
        scrolled ? "text-gray-800" : "text-black"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );
}
