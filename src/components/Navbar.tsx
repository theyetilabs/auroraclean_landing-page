"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const router = useRouter();
  const { openGetQuotes } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

            {/* Services Submenu */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveSubmenu("services")}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button
                className="flex items-center cursor-pointer gap-1 text-black font-bold hover:opacity-80"
                onClick={() => router.push("/services")}
              >
                Services{" "}
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>
              <div
                className={cn(
                  "absolute top-full left-[-100%] w-[700px] max-w-[90vw] bg-white rounded-2xl shadow-2xl py-10 px-12 transition-all duration-300 flex flex-col gap-2 ",
                  activeSubmenu === "services"
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                )}
                style={{ zIndex: 100 }}
                role="menu"
                aria-label="Services submenu"
              >
                {/* Map services into 3 columns, fill with dummy if less than 9 */}
                {(() => {
                  const columns = 3;
                  const minItems = 9;
                  const filledServices =
                    services.length < minItems
                      ? [
                          ...services,
                          ...Array.from(
                            { length: minItems - services.length },
                            (_, i) => ({
                              slug: `dummy-${services.length + i + 1}`,
                              service_name: `Dummy Service ${
                                services.length + i + 1
                              }`,
                              category: "dummy",
                              introduction: "This is a dummy service.",
                              whats_included: [
                                {
                                  category: "General",
                                  description: "Dummy description.",
                                },
                              ],
                              service_area: {
                                region: "Dummy Region",
                                suburbs_count: 0,
                                covered_areas: ["Dummy Area"],
                              },
                              contact: {
                                phone: "0000000000",
                                email: "dummy@example.com",
                                website: "dummy.com",
                                note: "Dummy note.",
                              },
                              faq: [
                                {
                                  question: "Dummy question?",
                                  answer: "Dummy answer.",
                                },
                              ],
                              why_choose_us: {
                                highlights: ["Dummy highlight"],
                                description: "Dummy why choose us.",
                              },
                              description: "Dummy service description.",
                              image: "/images/Services/dummy.png",
                            })
                          ),
                        ]
                      : services;
                  const colLength = Math.ceil(filledServices.length / columns);
                  const serviceColumns = Array.from(
                    { length: columns },
                    (_, i) =>
                      filledServices.slice(i * colLength, (i + 1) * colLength)
                  );
                  return (
                    <div className="flex gap-16">
                      {serviceColumns.map((col, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col min-w-[180px] gap-3"
                        >
                          {col.map((item) => (
                            <Link
                              key={item.slug}
                              href={
                                item.slug.startsWith("dummy-")
                                  ? "#"
                                  : `/service/${item.slug}`
                              }
                              className="text-gray-700 text-sm hover:text-black font-bold transition-colors"
                            >
                              {item.service_name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>

            <NavLink href="/products" setIsMobileMenuOpen={setIsMobileMenuOpen}>
              <span className="text-black font-bold">Products</span>
            </NavLink>
            <NavLink
              href="/blogs"
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              prefetch
            >
              <span className="text-black font-bold">Blog</span>
            </NavLink>

            <NavLink
              href="/why-choose-us"
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            >
              <span className="text-black font-bold">Why Choose Us?</span>
            </NavLink>
            <NavLink
              href="/about"
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              prefetch
            >
              <span className="text-black font-bold">About us</span>
            </NavLink>
            <NavLink href="/contact" setIsMobileMenuOpen={setIsMobileMenuOpen}>
              <span className="text-black font-bold">Contact</span>
            </NavLink>
          </div>

          {/* Inquiry Button */}
          <Button
            onClick={openGetQuotes}
            className={cn(
              "hidden md:flex px-6 py-4 rounded-full font-sm  transition-all items-center gap-2 font-bold",
              scrolled
                ? "bg-[#018D43] text-white hover:bg-[#363672]"
                : "bg-white text-[#018D43] hover:bg-gray-100"
            )}
          >
            <MessageCircle size={18} /> Get Quotes
          </Button>
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

              {/* Mobile Services Submenu */}
              <div className="flex flex-col gap-2 cursor-pointer">
                <button
                  className="text-black font-bold text-xl flex items-center gap-2"
                  onClick={() => router.push("/services")}
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
                  {services.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/service/${item.slug}`}
                      className="text-gray-700 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.service_name}
                    </Link>
                  ))}
                </div>
              </div>
              <NavLink
                href="/products"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                <span className="text-black font-bold text-xl">Products</span>
              </NavLink>
              <NavLink href="/blogs" setIsMobileMenuOpen={setIsMobileMenuOpen}>
                <span className="text-black font-bold text-xl">Blog</span>
              </NavLink>
              <NavLink href="/about" setIsMobileMenuOpen={setIsMobileMenuOpen}>
                <span className="text-black font-bold text-xl">About</span>
              </NavLink>
              <NavLink
                href="/why-choose-us"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                <span className="text-black font-bold text-xl">
                  Why Choose Us?
                </span>
              </NavLink>
              <NavLink
                href="/contact"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              >
                <span className="text-black font-bold text-xl">Contact</span>
              </NavLink>
              <Button
                onClick={() => {
                  openGetQuotes();
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "px-6 py-4 rounded-full font-sm transition-all flex items-center gap-2 font-bold mt-4",
                  scrolled
                    ? "bg-[#018D43] text-white hover:bg-[#363672]"
                    : "bg-[#018D43] text-white hover:bg-[#363672]"
                )}
              >
                <MessageCircle size={18} /> Get Quotes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Consultation Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0  z-50">
        <a
          href="https://forms.gle/zUzeXaLBSKGPeUiu7"
          target="_blank"
          className="group flex items-center gap-2 bg-gradient-to-r from-[#018D43] to-transparent hover:bg-[#0099db] text-white px-6 py-3  text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Get Quotes</span>
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
};

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

export default Navbar;
