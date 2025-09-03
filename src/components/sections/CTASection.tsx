export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-dm-sans mb-4 sm:mb-6 leading-tight">
              Interested in working with us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-inter mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              We&apos;d love to hear from you!
            </p>
            <button className="bg-gray-800 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-inter font-semibold text-base sm:text-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
