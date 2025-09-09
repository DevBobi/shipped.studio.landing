"use client";

import React from "react";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Lisa Thompson",
      role: "Founder at DataSync Pro",
      rating: 5,
      text: "We start with clarity. We explore the why: goals, users, problems, edge cases. We go deep. This is where we ask better questions and kill bad ideas early.",
      image:
        "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah Chen",
      role: "CEO at TechFlow",
      rating: 5,
      text: "The speed of execution was incredible. What would have taken us months was done in weeks, allowing us to validate our market fit much faster.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Rodriguez",
      role: "Founder at InnovateLab",
      rating: 5,
      text: "Having a clear roadmap and dedicated support made all the difference. We could focus on our customers instead of getting lost in development.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Johnson",
      role: "Startup Founder",
      rating: 5,
      text: "The structured approach eliminated guesswork. We knew exactly what we were building and why, which saved us countless hours and resources.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Park",
      role: "Co-founder at StreamlineApp",
      rating: 5,
      text: "Best investment we made for our startup. The clarity and direction we received was worth every penny and more.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Jessica Martinez",
      role: "Founder at QuickStart",
      rating: 5,
      text: "From idea to launch in record time. The systematic approach removed all the typical startup bottlenecks we were dreading.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-6 h-6 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-dm-sans mb-4 sm:mb-6 leading-tight">
            What our customers say?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter leading-relaxed max-w-3xl mx-auto px-4">
            Real results from founders who launched faster with Shipped Studio
          </p>
        </div>

        {/* Mobile Layout - Main Content First, then Button, then Header, then Slider */}
        <div className="lg:hidden">
          {/* Main Content Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6 sm:mb-8 leading-tight">
              No one tells you the hardest part of starting up
            </h2>
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg mr-3 sm:mr-4 flex-shrink-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Lisa Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left min-w-0">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Lisa Thompson
                </h4>
                <p className="text-gray-600 text-sm sm:text-lg">
                  Founder at DataSync Pro
                </p>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              &ldquo;I&apos;ve seen too many founders waste $100k+ and months of
              precious time building their MVP. Let&apos;s get your idea to
              market in 14 days, so you can focus on what matters - your
              customers.&rdquo;
            </p>
          </div>

          {/* Button Section */}
          <div className="text-center mb-8">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-base">
              Start Your Journey
            </button>
          </div>

          {/* Testimonials Slider */}
          <div className="relative h-[500px] sm:h-[550px] overflow-hidden">
            {/* Top Fade Effect */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Bottom Fade Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Container */}
            <div
              className="h-full overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div
                className="animate-scroll-up space-y-6"
                style={{
                  animation: "scrollUp 30s linear infinite",
                }}
              >
                {/* Triple the testimonials for seamless infinite scroll */}
                {[...testimonials, ...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200 flex-shrink-0"
                    >
                      {/* Avatar and Info */}
                      <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-lg">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-20 items-center">
          {/* Left Column - Auto-sliding Testimonials */}
          <div className="relative h-[600px] overflow-hidden">
            {/* Top Fade Effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Bottom Fade Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Container */}
            <div
              className="h-full overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div
                className="animate-scroll-up space-y-6"
                style={{
                  animation: "scrollUp 30s linear infinite",
                }}
              >
                {/* Triple the testimonials for seamless infinite scroll */}
                {[...testimonials, ...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 flex-shrink-0"
                    >
                      {/* Avatar and Info */}
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-full shadow-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xl font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-lg">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 leading-relaxed text-lg">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Main Text */}
          <div className="text-left">
            <h2 className="text-4xl font-medium text-gray-900 mb-8 leading-tight">
              No one tells you the hardest part of starting up
            </h2>
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 rounded-full shadow-lg mr-4 flex-shrink-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Lisa Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-xl font-semibold text-gray-900">
                  Lisa Thompson
                </h4>
                <p className="text-gray-600 text-lg">Founder at DataSync Pro</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              &ldquo;I&apos;ve seen too many founders waste $100k+ and months of
              precious time building their MVP. Let&apos;s get your idea to
              market in 14 days, so you can focus on what matters - your
              customers.&rdquo;
            </p>
            <div className="mt-8">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-base">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }

        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
