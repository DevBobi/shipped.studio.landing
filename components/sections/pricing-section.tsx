import { FaCheck } from "react-icons/fa";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Starts at just ",
      price: "$2,499",
      description:
        "Ideal for startups and small businesses looking to quickly validate their ideas with a strong MVP foundation.",
      features: [
        "Full MVP development in 21 days",
        "High-quality UI design in Figma",
        "2 rounds of revisions in UI design",
        "Integrations (Analytics, Payment)",
        "Mobile responsive",
        "Source code and Figma files included",
        "1 month of post-launch support",
      ],
      highlighted: false,
    },
    {
      name: "MVP+ Landing Page",
      price: "$2,799",
      description:
        "From idea to MVP in days. Ready to impress investors and early adopters.",
      features: [
        "Full MVP development in 21 days",
        "High-quality UI design in Figma",
        "2 rounds of revisions in UI design",
        "Landing page design + development",
        "Copywriting for maximum conversion",
        "Integrations (Analytics, Payment)",
        "Mobile responsive",
        "Source code and Figma files included",
        "1 month of post-launch support",
      ],
      highlighted: true,
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="text-xs sm:text-sm font-semibold text-purple uppercase tracking-wider mb-3 sm:mb-4">
            Simple Pricing
          </div>
          <h2 className="tracking-tighter text-4xl md:text-5xl font-bold text-primary font-dm-sans mb-6">
            Simple packages, no surprises.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed px-4">
            Choose the package that fits your needs. All prices are fixed with
            no hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-2">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                plan.highlighted
                  ? "bg-purple text-white"
                  : "bg-white text-primary"
              }`}
            >
              {/* Plan Header with Background */}
              <div
                className={`p-6 sm:p-7 lg:p-8 ${
                  plan.highlighted ? "bg-purple-dark" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl sm:text-2xl font-bold font-dm-sans mb-3 sm:mb-4 ${
                    plan.highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed ${
                    plan.highlighted ? "text-white" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-4 sm:mb-6">
                  <span
                    className={`text-xs sm:text-sm ${
                      plan.highlighted ? "text-white" : "text-muted"
                    }`}
                  >
                    Starts at just
                  </span>
                  <div
                    className={`text-3xl sm:text-4xl font-bold font-dm-sans ${
                      plan.highlighted ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 sm:p-7 lg:p-8">
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2.5 sm:gap-3"
                    >
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? "bg-purple text-white rounded-full"
                            : "text-purple"
                        }`}
                      >
                        <FaCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                      <span
                        className={`text-sm sm:text-base font-inter leading-relaxed ${
                          plan.highlighted ? "text-white" : "text-secondary"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 rounded-full font-inter font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl ${
                    plan.highlighted
                      ? "bg-white text-purple hover:bg-gray-100"
                      : "bg-purple text-white hover:bg-purple-dark"
                  }`}
                >
                  Book a call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
