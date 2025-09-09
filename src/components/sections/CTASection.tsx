export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            <h2 className="tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-dm-sans mb-4 sm:mb-6 leading-tight">
              Interested in working with us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary font-inter mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              We&apos;d love to hear from you!
            </p>
            <button className="bg-gray-800 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-inter font-semibold text-base sm:text-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
