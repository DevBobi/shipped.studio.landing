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
      image: "/carousel/image-1.png",
    },
    {
      id: 2,
      title: "Krillion AI",
      description:
        "AI-powered ad creation platform that generates high-converting ads and creatives in under 60 seconds. Used by over 1100 companies for revenue-generating marketing content.",
      image: "/carousel/image-2.jpg",
    },
    {
      id: 3,
      title: "Find me leads",
      description:
        "A lead generation bot that monitors subreddits and uses AI to find potential leads based on custom keywords.",
      image: "/carousel/image-3.jpg",
    },
    {
      id: 4,
      title: "Aura Maxxing",
      description:
        "iOS app for face analysis and dating optimization. Features conversation analysis, masculinity scoring, and personalized recommendations to improve dating success.",
      image: "/carousel/image-5.png",
    },
    {
      id: 5,
      title: "Content Wizard",
      description:
        "A curated collection of open-source boilerplates and starter kits for building modern scalable applications.",
      image: "/carousel/image-6.png",
    },
    {
      id: 6,
      title: "Open-source Boilerplates",
      description:
        "A curated list of open source boilerplates and starter kits for building modern applications. From web development with React & Next.js to mobile apps with React Native, Flutter, and native platforms.",
      image: "/carousel/image-6.jpg",
    },
    {
      id: 7,
      title: "Re-engage",
      description:
        "An AI content repurposing tool to transform YouTube videos, articles, & newsletters in LinkedIn and X posts.",
      image: "/carousel/image-13.png",
    },
    {
      id: 8,
      title: "Crunkspot",
      description:
        "A Web3 marketplace that enables artists to tokenize and sell their music as digital assets on Polygon chain.",
      image: "/carousel/image-14.png",
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
    <section id="our-work" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-dm-sans mb-6">
            Our Work
          </h2>
          <p className="text-lg text-muted font-inter max-w-2xl mx-auto">
            Scalable MVP in 21 days that actually delivers. We build any SaaS
            idea whether for web or mobile.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 sm:mb-16">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group">
              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl aspect-[4/3] ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-dm-sans mb-3">
                  {project.title}
                </h3>
                <div className="text-base text-muted font-inter leading-relaxed">
                  <p>
                    {expandedDescriptions.has(project.id)
                      ? project.description
                      : truncateDescription(project.description)}
                  </p>
                  {project.description.length > 120 && (
                    <button
                      onClick={() => toggleDescription(project.id)}
                      className="text-purple hover:text-purple-dark font-medium mt-2 transition-colors duration-200 text-sm"
                    >
                      {expandedDescriptions.has(project.id)
                        ? "See Less"
                        : "See More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-purple text-white px-8 py-3 rounded-full font-inter font-semibold hover:bg-purple-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
}
