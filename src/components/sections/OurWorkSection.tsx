"use client";

import Image from "next/image";
import { useState } from "react";

export default function OurWorkSection() {
  const [showAll, setShowAll] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(
    new Set()
  );

  const projects = [
    {
      id: 1,
      title: "Testwhiz",
      description:
        "The all in one AI platform for students. Feature include AI Solver, Chrome Extension, Quiz, Flash Card, Notes, Worksheet, AI Chat, PDF Chat.",
      image: "/carousel/image-1.jpg",
      hasDescription: true,
    },
    {
      id: 2,
      title: "Krillion AI",
      description:
        "AI-powered ad creation platform that generates high-converting ads and creatives in under 60 seconds. Used by over 1100 companies for revenue-generating marketing content.",
      image: "/carousel/image-2.jpg",
      hasDescription: true,
    },
    {
      id: 3,
      title: "Find me leads",
      description:
        "A lead generation bot that monitors subreddits and uses AI to find potential leads based on custom keywords.",
      image: "/carousel/image-3.jpg",
      hasDescription: true,
    },
    {
      id: 4,
      title: "Aura Maxxing",
      description:
        "iOS app for face analysis and dating optimization. Features conversation analysis, masculinity scoring, and personalized recommendations to improve dating success.",
      image: "/carousel/image-4.png",
      hasDescription: true,
    },
    {
      id: 5,
      title: "Content Wizard",
      description:
        "A curated collection of open-source boilerplates and starter kits for building modern scalable applications.",
      image: "/carousel/image-5.png",
      hasDescription: true,
    },
    {
      id: 6,
      title: "Open-source Boilerplates",
      description:
        "A curated list of open source boilerplates and starter kits for building modern applications. From web development with React & Next.js to mobile apps with React Native, Flutter, and native platforms.",
      image: "/carousel/image-6.jpg",
      hasDescription: true,
    },
    {
      id: 7,
      title: "Re-engage",
      description:
        "An AI content repurposing tool to transform YouTube videos, articles, & newsletters in LinkedIn and X posts.",
      image: "/carousel/image-7.jpg",
      hasDescription: true,
    },
    {
      id: 8,
      title: "Crunkspot",
      description:
        "A Web3 marketplace that enables artists to tokenize and sell their music as digital assets on Polygon chain.",
      image: "/carousel/image-8.jpg",
      hasDescription: true,
    },
  ];

  // Show first 4 projects initially, all 8 when showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  // Function to toggle description expansion
  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  // Function to truncate description
  const truncateDescription = (
    description: string,
    maxLength: number = 120
  ) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  };

  return (
    <section
      id="our-work"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-dm-sans mb-6">
            Our Work
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted font-inter max-w-4xl mx-auto leading-relaxed">
            Scalable MVP in 21 days that actually delivers. We build any SaaS
            idea whether for web or mobile.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {displayedProjects.map((project) => (
            <div key={project.id} className="relative">
              {/* Project Image */}
              <div className="relative mb-4 sm:mb-5 md:mb-6">
                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Decorative Dotted Arrow */}
                <div className="absolute -bottom-2 -left-2 w-16 h-16 opacity-60">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 56 Q32 40 56 8"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    <path
                      d="M48 12 L56 8 L52 16"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Project Title - Moved to bottom */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-dm-sans mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                {project.title}
              </h3>

              {/* Project Description */}
              <div className="text-sm sm:text-base md:text-lg text-muted font-inter leading-relaxed">
                <p>
                  {expandedDescriptions.has(project.id)
                    ? project.description
                    : truncateDescription(project.description)}
                </p>
                {project.description.length > 120 && (
                  <button
                    onClick={() => toggleDescription(project.id)}
                    className="text-blue-dark hover:text-blue-dark font-medium mt-2 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {expandedDescriptions.has(project.id)
                      ? "See Less"
                      : "See More"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto bg-gray-800 rounded-full text-white px-6 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-3 md:py-4 lg:py-6 font-inter font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-2xl cursor-pointer text-base sm:text-lg md:text-xl"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
}
