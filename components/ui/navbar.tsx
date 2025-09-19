"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Logo - Left Column */}
          <div className="text-left">
            <h1 className="text-primary font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
              <span className="sm:inline">Shipped</span>
              <span className="hidden lg:inline"> Studio</span>
            </h1>
          </div>

          {/* Navigation Links - Center Column */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              href="/#process-section"
              className="text-gray-700 hover:text-gray-900 font-inter transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/#pricing"
              className="text-gray-700 hover:text-gray-900 font-inter transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#faq-section"
              className="text-gray-700 hover:text-gray-900 font-inter transition-colors"
            >
              FAQs
            </Link>
          </div>

          {/* CTA Button and Mobile Nav - Right Column */}
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <button className="hidden md:block bg-purple text-white px-6 py-3 rounded-full font-inter font-medium transition-colors">
              Book a Call
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden ${
          isMobileNavOpen ? "" : "hidden"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMobileNav}
        />

        {/* Mobile Menu */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-20">
              <h1 className="text-gray-900 font-bold text-xl">
                Shipped Studio
              </h1>
              <button
                onClick={closeMobileNav}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8 space-y-6">
              <Link
                href="/#process-section"
                onClick={closeMobileNav}
                className="block text-gray-700 hover:text-gray-900 font-inter text-lg font-medium transition-colors py-3 text-left w-full"
              >
                How it works
              </Link>
              <Link
                href="/#pricing-section"
                onClick={closeMobileNav}
                className="block text-gray-700 hover:text-gray-900 font-inter text-lg font-medium transition-colors py-3 text-left w-full"
              >
                Pricing
              </Link>
              <Link
                href="/#faq-section"
                onClick={closeMobileNav}
                className="block text-gray-700 hover:text-gray-900 font-inter text-lg font-medium transition-colors py-3 text-left w-full"
              >
                FAQs
              </Link>
            </div>

            {/* CTA Button */}
            <div className="px-6 py-6">
              <button className="w-full bg-gray-900 text-white px-6 py-4 rounded-full font-inter font-semibold text-lg transition-colors">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
