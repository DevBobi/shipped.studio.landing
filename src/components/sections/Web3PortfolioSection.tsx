"use client";

import Image from "next/image";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

export default function Web3PortfolioSection() {
  const web3Projects = [
    {
      id: 1,
      title: "Ultra Woman",
      description: "Modern women's fashion and lifestyle platform with Web3 integration for exclusive NFT collections and community rewards.",
      image: "/carousel/image-9.png",
      url: "https://ultra-woman2.vercel.app/",
      revenue: "$100k+",
      category: "Fashion & Lifestyle",
      icon: Users,
    },
    {
      id: 2,
      title: "Meta Frenchies",
      description: "Premium NFT collection featuring French Bulldog characters with unique traits and community-driven utility features.",
      image: "/carousel/image-10.png",
      url: "https://meta-frenchies.vercel.app/",
      revenue: "$500k+",
      category: "NFT Collection",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "MMB NFT",
      description: "Multi-media blockchain NFT marketplace enabling artists to tokenize and trade digital art across multiple chains.",
      image: "/carousel/image-17.png",
      url: "https://mmb-nft.vercel.app/",
      revenue: "$2M+",
      category: "NFT Marketplace",
      icon: Zap,
    },
    {
      id: 4,
      title: "Goolops",
      description: "Next.js application for modern web development with Web3 wallet integration and decentralized app features.",
      image: "/carousel/image-11.png",
      url: "https://goolops-next.vercel.app/",
      revenue: "$150k+",
      category: "Web3 Development",
      icon: Zap,
    },
    {
      id: 5,
      title: "Self Loathing",
      description: "Interactive platform exploring mental health themes through Web3 technology and community support systems.",
      image: "/carousel/image-12.png",
      url: "https://self-loathing.vercel.app/",
      revenue: "$200k+",
      category: "Mental Health",
      icon: Users,
    },
    {
      id: 6,
      title: "Psycho Cats",
      description: "Unique NFT collection with feline characters featuring dynamic traits and gamified community interactions.",
      image: "/carousel/image-13.png",
      url: "https://psycho-cats.vercel.app/",
      revenue: "$300k+",
      category: "NFT Collection",
      icon: TrendingUp,
    },
    {
      id: 7,
      title: "Tiger NFT",
      description: "Exclusive tiger-themed NFT marketplace with premium collections and exclusive community access features.",
      image: "/carousel/image-14.png",
      url: "https://tiger-nft-nine.vercel.app/",
      revenue: "$1M+",
      category: "NFT Marketplace",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="web3-portfolio"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-dm-sans mb-6">
            We Work With Web3 Founders
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted font-inter max-w-4xl mx-auto leading-relaxed">
            Delivered over 60+ Web3 projects few of which reached{" "}
            <span className="text-purple font-semibold">$100k+ to $2M+</span> in revenue upon launch
          </p>
        </div>

        {/* Web3 Projects - Horizontal Card Layout */}
        <div className="space-y-8 md:space-y-12 mb-12 sm:mb-16 md:mb-20">
          {web3Projects.map((project) => (
            <div key={project.id} className="group">
              {/* Horizontal Project Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white to-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Project Image */}
                  <div className="relative lg:w-1/2 xl:w-2/5">
                    <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Revenue Badge */}
                      <div className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                        {project.revenue}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Project Content */}
                  <div className="lg:w-1/2 xl:w-3/5 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    {/* Project Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-dm-sans">
                        {project.title}
                      </h3>
                    </div>

                    {/* Project Description */}
                    <p className="text-base sm:text-lg md:text-xl text-muted font-inter leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-inter font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <span>Visit Live Project</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      
                      <button className="inline-flex items-center justify-center gap-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl font-inter font-semibold transition-all duration-300">
                        <span>View Case Study</span>
                        <TrendingUp className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-green-100 to-green-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-dm-sans mb-4">
            Ready to Launch Your Web3 Project?
          </h3>
          <p className="text-lg sm:text-xl text-muted font-inter mb-8 max-w-2xl mx-auto">
            Join the founders who&apos;ve already generated millions in revenue with their Web3 projects.
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 rounded-full text-white px-8 md:px-10 py-4 md:py-6 font-inter font-semibold transition-colors duration-300 shadow-lg hover:shadow-2xl cursor-pointer text-lg md:text-xl">
            Start Your Web3 Project
          </button>
        </div>
      </div>
    </section>
  );
}
