"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/constants";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const router = useRouter();
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
                  "absolute top-full left-0 w-[700px] max-w-[90vw] bg-[#ffff]/90 rounded-2xl shadow-2xl py-6 px-6 transition-all duration-300 flex flex-col gap-2 ",
                  activeSubmenu === "services"
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                )}
                style={{ zIndex: 100 }}
                role="menu"
                aria-label="Services submenu"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/service/${item.slug}`}
                      className="flex flex-col items-start gap-2 rounded-xl p-4 transition-colors duration-200 min-w-[150px] group"
                    >
                      <span className=" text-black text-sm mb-1 text-nowrap">
                        {item.service_name}
                      </span>
                    </Link>
                  ))}
                </div>
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
                ? "bg-[#018D43] text-white hover:bg-[#363672]"
                : "bg-white text-[#018D43] hover:bg-gray-100"
            )}
          >
            <MessageCircle size={18} /> Get Quotes
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
                    ? "bg-[#018D43] text-white hover:bg-[#363672]"
                    : "bg-[#018D43] text-white hover:bg-[#363672]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={18} /> Get Quotes
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
