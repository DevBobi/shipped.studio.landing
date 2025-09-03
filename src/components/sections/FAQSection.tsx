'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function FAQSection() {
  const faqs = [
    {
      question: 'How fast can you really build an MVP?',
      answer: 'We typically deliver MVPs in 14 days or less. Our streamlined process, experienced team, and proven methodologies allow us to work efficiently without compromising quality. We focus on building the core features that matter most for validating your idea.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, scalable technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. We choose the best tech stack for each project based on requirements, scalability needs, and your team&apos;s expertise.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! All our packages include post-launch support. We offer 30-60 days of support depending on your package, and we can arrange ongoing maintenance and development services for long-term partnerships.'
    },
    {
      question: 'Can you help with marketing and user acquisition?',
      answer: 'While our core focus is development, we do offer landing page optimization and basic SEO setup. For comprehensive marketing services, we partner with specialized agencies and can make recommendations based on your needs.'
    },
    {
      question: 'What if I need changes after the MVP is delivered?',
      answer: 'We understand that MVPs evolve based on user feedback. We offer flexible iteration packages and can work with you to implement changes and improvements. Our goal is to help you build a successful product, not just deliver a one-time project.'
    },
    {
      question: 'How do you handle intellectual property?',
      answer: 'You own 100% of the code and intellectual property we create for your project. We provide full source code delivery and documentation. We also sign NDAs to protect your confidential information and ideas.'
    }
  ]

  return (
    <section id="faq-section" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-dm-sans mb-4 sm:mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Got questions? We&apos;ve got answers. Here are the most common questions we receive about our services and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-xs overflow-hidden border border-gray-200">
                  <Disclosure.Button className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-900 font-dm-sans pr-2 sm:pr-4 leading-tight">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 ml-2 sm:ml-4">
                      {open ? (
                        <FaMinus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-500" />
                      ) : (
                        <FaPlus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-500" />
                      )}
                    </div>
                  </Disclosure.Button>
                  
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8">
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-inter leading-relaxed">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
