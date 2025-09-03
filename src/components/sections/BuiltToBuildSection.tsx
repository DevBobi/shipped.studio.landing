import { Zap, ShoppingCart, Wrench, Image, Link, Cloud, BarChart3, Users, DollarSign } from 'lucide-react'

export default function BuiltToBuildSection() {
  const leftColumnItems = [
    { title: 'AI & Automation', icon: Zap, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' },
    { title: 'Online Marketplaces', icon: ShoppingCart, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' },
    { title: 'Internal Tools', icon: Wrench, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' },
    { title: 'Content & Media Apps', icon: Image, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' },
    { title: 'Integrations and APIs', icon: Link, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' }
  ]

  const rightColumnItems = [
    { title: 'SaaS Applications', icon: Cloud, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' },
    { title: 'Data & Analytics', icon: BarChart3, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' },
    { title: 'Community Platforms', icon: Users, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' },
    { title: 'Financial Tools', icon: DollarSign, className: 'w-5 h-5 sm:w-6 sm:h-6 text-slate-600 fill-current' }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-dm-sans mb-6">
            Built to build just about any idea
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            From AI to marketplaces, we build the core features you need to test your idea and start generating real revenue.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Left Column */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            {leftColumnItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 border-b border-gray-200">
                <item.icon className={item.className} />
                <span className="text-base sm:text-lg md:text-xl text-gray-700 font-inter">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            {rightColumnItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 border-b border-gray-200">
                <item.icon className={item.className} />
                <span className="text-base sm:text-lg md:text-xl text-gray-700 font-inter">{item.title}</span>
              </div>
            ))}
            <div className="py-2 sm:py-3 md:py-4">
              <span className="text-base sm:text-lg md:text-xl text-gray-700 font-inter">and so much more...</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Profile Image Circle - Fixed Mobile Size */}
              <div className="w-16 h-16 rounded-full border-4 border-purple-500 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* "You" Circle - Overlapping and Same Size, Fixed Mobile Size */}
              <div className="absolute -right-10 -bottom-0 w-16 h-16 bg-white rounded-full border-4 border-purple-500 flex items-center justify-center">
                <span className="text-base font-inter text-purple-600 font-semibold transform -rotate-12">
                  You
                </span>
              </div>
            </div>
          </div>

          {/* Book a Call Button */}
          <button className="w-full sm:w-auto bg-gray-800 rounded-full text-white px-6 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-3 md:py-4 lg:py-5 font-inter font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-2xl cursor-pointer text-base sm:text-lg md:text-xl">
            Book a call
          </button>
        </div>
      </div>
    </section>
  )
}
