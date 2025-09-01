import { FaStar } from 'react-icons/fa'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Lisa Thompson',
      role: 'Founder, TechFlow',
      rating: 5,
      text: 'Shipped Studio delivered our MVP in just 12 days. The quality exceeded our expectations and we were able to secure our first round of funding within a month of launch.'
    },
    {
      name: 'Marcus Chen',
      role: 'CEO, DataViz',
      rating: 5,
      text: 'Working with Shipped Studio was a game-changer. They understood our vision immediately and built exactly what we needed. The 14-day timeline was incredible.'
    }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Testimonials */}
          <div className="space-y-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl p-10 shadow-sm border border-gray-200">
                {/* Avatar and Rating */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-300 rounded-full shadow-lg"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 font-dm-sans">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 font-inter text-lg">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 font-inter leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
          
          {/* Right Column - Main Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-dm-sans mb-6 leading-tight">
              No one tells you the hardest part of starting up
            </h2>
            <p className="text-xl text-gray-600 font-inter leading-relaxed">
              Building an MVP is just the beginning. The real challenge is getting it to market quickly, 
              validating your assumptions, and iterating based on real user feedback. That&apos;s where we come in.
            </p>
            <div className="mt-8">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-gray-800 transition-colors">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
