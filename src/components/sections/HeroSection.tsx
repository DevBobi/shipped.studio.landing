"use client";

import { FaArrowRight } from "react-icons/fa";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-screen sm:h-[800px] md:h-[850px] lg:h-[900px] overflow-hidden">
        <img
          src="/hero bg.png"
          alt="Hero background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 min-h-screen sm:min-h-0 flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-dm-sans leading-tight mb-6 sm:mb-8 px-2 sm:px-0 tracking-tighter"
            style={{
              fontWeight: "900",
            }}
          >
            <span className="text-primary">Your Idea, Designed And</span>
            <br />
            <span className="text-primary">Built In Just</span>{" "}
            <span className="text-white bg-gray-900 px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              21 Days.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted font-inter max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 sm:px-0">
            We Build, Launch & Grow Your SaaS In 2-3 Weeks With No Surprises.
            From MVP To Market-Ready Product
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl cursor-pointer">
              Book a Call
              <FaArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("our-work");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto text-primary px-8 py-3.5 rounded-full font-inter font-semibold text-lg hover:text-gray-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer border-2 border-gray-900 hover:border-gray-700"
            >
              View Works
            </button>
          </div>

          {/* Recent Work Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 px-4 sm:px-0">
            {/* Doodles */}
            <div className="flex items-center gap-3 text-muted font-inter text-sm">
              <Image
                src="/hero-doodles.png"
                alt="Decorative doodles"
                width={256}
                height={256}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 lg:w-56 xl:w-64 object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      <InfiniteCarousel />
    </section>
  );
}
