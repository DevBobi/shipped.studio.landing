export default function BuiltToBuildSection() {
  const leftColumnItems = [
    { title: 'AI & Automation', icon: '⚡' },
    { title: 'Online Marketplaces', icon: '🛒' },
    { title: 'Internal Tools', icon: '🔧' },
    { title: 'Content & Media Apps', icon: '🖼️' },
    { title: 'Integrations and APIs', icon: '🔗' }
  ]

  const rightColumnItems = [
    { title: 'SaaS Applications', icon: '☁️' },
    { title: 'Data & Analytics', icon: '📊' },
    { title: 'Community Platforms', icon: '👥' },
    { title: 'Financial Tools', icon: '💰' }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-dm-sans mb-6">
            Built to build just about any idea
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            From AI to marketplaces, we build the core features you need to test your idea and start generating real revenue.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-200">
                <div className="text-2xl text-gray-700">{item.icon}</div>
                <span className="text-lg text-gray-700 font-inter">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-200">
                <div className="text-2xl text-gray-700">{item.icon}</div>
                <span className="text-lg text-gray-700 font-inter">{item.title}</span>
              </div>
            ))}
            <div className="py-4">
              <span className="text-lg text-gray-700 font-inter">and so much more...</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-purple-500"></div>
            <span className="text-lg font-inter text-purple-600 border border-purple-500 px-3 py-1 rounded-full">
              You
            </span>
          </div>

          {/* Book a Call Button */}
          <button className="bg-gray-800 rounded-full text-white px-8 py-3 font-inter font-semibold hover:bg-gray-700 transition-colors duration-300">
            Book a call
          </button>
        </div>
      </div>
    </section>
  )
}
