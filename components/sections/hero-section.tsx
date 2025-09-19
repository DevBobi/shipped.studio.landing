"use client";

import { FaArrowRight } from "react-icons/fa";
import InfiniteCarousel from "../ui/Infinite-carousel";
import Navbar from "../ui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden backdrop-blur-sm">
      {/* <div className="absolute -z-10 top-0 left-0 right-0 h-screen sm:h-[800px] md:h-[850px] lg:h-[900px] overflow-hidden">
        <Image
          src="/hero bg.png"
          alt="Hero background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div> */}

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 sm:min-h-0 flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-dm-sans leading-tight mb-6 sm:mb-8 px-2 sm:px-0 tracking-tighter"
            style={{
              fontWeight: "900",
            }}
          >
            <span className="text-primary">Your Idea, Designed And</span>
            <br />
            <span className="text-primary">Built In </span>{" "}
            <span className="text-white bg-purple px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Just 21 Days.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted font-inter max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 sm:px-0">
            We Design and Build Your SaaS Idea In 2-3 Weeks With No Surprises.
            We Build Everything From AI SaaS To Mobile Apps
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0">
            <Link
              href="/#book-a-call"
              className="w-full sm:w-auto bg-purple text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
            >
              Book a Call
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#our-work"
              className="w-full bg-white sm:w-auto text-purple px-8 py-3.5 rounded-full font-inter font-semibold text-lg hover:text-purple-dark transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer border-2 border-purple hover:border-purple-dark"
            >
              View Works
            </Link>
          </div>

          {/* Recent Work Section */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 px-4 sm:px-0">
            <div className="flex items-center gap-3 text-muted font-inter text-sm">
              <Image
                src="/hero-doodles.png"
                alt="Decorative doodles"
                width={256}
                height={256}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 lg:w-56 xl:w-64 object-contain opacity-80"
              />
            </div>
          </div> */}
        </div>
      </div>

      <InfiniteCarousel />
    </section>
  );
}
