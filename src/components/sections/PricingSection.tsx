import { FaCheck } from 'react-icons/fa'

export default function PricingSection() {
  const pricingPlans = [
    {
      name: 'MVP Only',
      price: '$2,199',
      description: 'Ideal for startups and small businesses looking to quickly validate their ideas with a strong MVP foundation.',
      features: [
        'Full MVP development in 15 days',
        'Integrations (Analytics, Payment)',
        '1 month of post-launch support',
        'Mobile responsive',
        '2 weeks development',
        'Source code included',
        '1 week support'
      ],
      highlighted: false
    },
    {
      name: 'MVP+ Landing Page',
      price: '$2,799',
      description: 'From idea to MVP in days. Ready to impress investors and early adopters.',
      features: [
        'Full MVP development in 15 days',
        'Basic integrations (Analytics, Payment)',
        'Landing page design + development',
        'Copywriting for maximum conversion',
        '1 month of post-launch support',
        'Launch strategy',
        '2 weeks support'
      ],
      highlighted: true
    }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="pricing">
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
          <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-dm-sans mb-6">
            Simple packages, no surprises.
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
            Choose the package that fits your needs. All prices are fixed with no hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 shadow-sm transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold font-dm-sans mb-4 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-lg mb-6 ${
                  plan.highlighted ? 'text-white' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${
                    plan.highlighted ? 'text-white' : 'text-gray-600'
                  }`}>
                    Starts at just
                  </span>
                  <div className={`text-4xl font-bold font-dm-sans ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-white text-blue-600' : 'bg-purple-500 text-white'
                    }`}>
                      <FaCheck className="w-3 h-3" />
                    </div>
                    <span className={`font-inter ${
                      plan.highlighted ? 'text-white' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button className={`w-full py-4 rounded-full font-inter font-semibold transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Book a call
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
