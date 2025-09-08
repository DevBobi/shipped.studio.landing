import Image from "next/image";

export default function OurWorkSection() {
  const projects = [
    {
      id: 1,
      title: "Krillion AI",
      description: "AI-powered ad creation platform that generates high-converting ads and creatives in under 60 seconds. Used by over 1100 companies for revenue-generating marketing content.",
      image: "/carousel/image-2.jpg",
      hasDescription: true
    },
    {
      id: 2,
      title: "Aura Maxxing",
      description: "iOS app for face analysis and dating optimization. Features conversation analysis, masculinity scoring, and personalized recommendations to improve dating success.",
      image: "/carousel/image-4.png",
      hasDescription: true
    },
    {
      id: 3,
      title: "Testwhiz",
      description: "The all in one AI platform for students. Feature include AI Solver, Chrome Extension, Quiz, Flash Card, Notes, Worksheet, AI Chat, PDF Chat.",
      image: "/carousel/image-1.jpg",
      hasDescription: true
    },
    {
      id: 4,
      title: "Open-source Boilerplates",
      description: "A curated list of open source boilerplates and starter kits for building modern applications. From web development with React & Next.js to mobile apps with React Native, Flutter, and native platforms.",
      image: "/carousel/image-6.jpg",
      hasDescription: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-dm-sans mb-6">
            Our Work
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-inter max-w-4xl mx-auto leading-relaxed">
            Scalable MVP in 15 days that actually delivers. We build any SaaS idea whether for web or mobile.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Project Image */}
              <div className="relative mb-4">
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-dm-sans mb-4 md:mb-6">
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-inter leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="w-full sm:w-auto bg-gray-800 rounded-full text-white px-6 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-3 md:py-4 lg:py-6 font-inter font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-2xl cursor-pointer text-base sm:text-lg md:text-xl">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
