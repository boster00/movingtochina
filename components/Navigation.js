"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/how-to-move-to-china", label: "How to Move to China" },
  { href: "/china-visa-types", label: "China Visa Types" },
  { href: "/wechat-pay-for-foreigners", label: "WeChat Pay for Foreigners" },
  { href: "/can-foreigners-buy-property-in-china", label: "Foreigners & Property" },
  { href: "/china-scholarships-for-international-students", label: "Scholarships" },
  { href: "/cost-of-living-china-vs-usa", label: "Cost of Living: China vs USA" },
  { href: "/teach-english-in-china-requirements", label: "Teach English in China" },
  { href: "/china-immigration-visa-services", label: "Immigration & Visa Services" },
];

export default function Navigation({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHero = variant === "hero";
  const buttonClass = isHero
    ? "text-white/95 hover:text-white"
    : "text-[#2c2c2c] hover:opacity-70";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`pointer-events-auto text-sm font-semibold uppercase tracking-wider ${buttonClass} transition-opacity`}
        aria-label="Open menu"
      >
        Guides
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#f5f0e8] pointer-events-auto overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex flex-col justify-center min-h-screen py-20 px-6 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-50 text-[#2c2c2c] text-3xl font-light hover:opacity-70 transition-opacity pointer-events-auto"
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col gap-4 text-left max-w-xl mx-auto">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-light ${pathname === "/" ? "text-[#b8860b]" : "text-[#2c2c2c] hover:opacity-70"} transition-opacity`}
              >
                Home
              </Link>
              <span className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mt-4 mb-1">
                Guides
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-light ${pathname === link.href ? "text-[#b8860b]" : "text-[#2c2c2c] hover:opacity-70"} transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
