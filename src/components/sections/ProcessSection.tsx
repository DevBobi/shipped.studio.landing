import { LuClock4 } from "react-icons/lu";
export default function ProcessSection() {
  const processSteps = [
    {
      number: '01',
      title: 'Strategy Meeting',
      timeEstimate: '30-45 min',
      description: 'We start with clarity. We explore the why: goals, users, problems, edge cases. We go deep. This is where we ask better questions and kill bad ideas early.',
      illustration: '🔍'
    },
    {
      number: '02',
      title: 'Choose Your Package',
      timeEstimate: '24-48 hrs',
      description: 'We start with clarity. We explore the why: goals, users, problems, edge cases. We go deep. This is where we ask better questions and kill bad ideas early.',
      illustration: '💻'
    },
    {
      number: '03',
      title: 'UI & Landing Page Design',
      timeEstimate: '1-2 weeks',
      description: 'High-fidelity UI, design system basics, and a conversion-ready landing page (copy + analytics). Output: design files + dev handoff + landing page ready to publish.',
      illustration: '👨‍💻'
    },
    {
      number: '04',
      title: 'Launch Phase',
      timeEstimate: '2-6 weeks',
      description: 'Frontend + backend, integrations, QA, and launch. Weekly demos, fast feedback. Output: fully working MVP in production with monitoring and docs.',
      illustration: '📦'
    }
  ]

  return (
    <section id="process-section" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
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
        <h2 className="text-2xl md:text-5xl sm:text-3xl font-bold text-gray-900 font-dm-sans mb-6">
            We don&apos;t follow a fixed template. Our process{' '}
            <span className="text-purple-500">adapts</span> with every product, client, and challenge.
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 lg:gap-8">
                {/* Illustration - Left Side */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-purple-50 rounded-xl flex items-center justify-center text-2xl md:text-3xl lg:text-4xl border-2 border-purple-200">
                    {step.illustration}
                  </div>
                </div>
                
                {/* Step Content - Center */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3 md:mb-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Step Number - Before Heading */}
                      <div className="flex-shrink-0">
                        <div className=" rounded-full flex items-center justify-center text-gray-400 text-xl font-black font-dm-sans">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 font-dm-sans">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Time Duration - Right Side with Icon */}
                    <div className="flex items-center gap-2 text-sm md:text-lg text-gray-500 font-inter font-medium">
                    <LuClock4 />
                      <span>{step.timeEstimate}</span>
                    </div>
                  </div>
                  <p className="text-sm max-w-2xl md:text-base lg:text-lg text-gray-600 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
