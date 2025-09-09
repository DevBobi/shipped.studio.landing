"use client";

import { Disclosure } from "@headlessui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "How fast can you really build an MVP?",
      answer:
        "We typically deliver MVPs in 14 days or less. Our streamlined process, experienced team, and proven methodologies allow us to work efficiently without compromising quality. We focus on building the core features that matter most for validating your idea.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, scalable technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. We choose the best tech stack for each project based on requirements, scalability needs, and your team's expertise.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes! All our packages include post-launch support. We offer 30-60 days of support depending on your package, and we can arrange ongoing maintenance and development services for long-term partnerships.",
    },
    {
      question: "Can you help with marketing and user acquisition?",
      answer:
        "While our core focus is development, we do offer landing page optimization and basic SEO setup. For comprehensive marketing services, we partner with specialized agencies and can make recommendations based on your needs.",
    },
    {
      question: "What if I need changes after the MVP is delivered?",
      answer:
        "We understand that MVPs evolve based on user feedback. We offer flexible iteration packages and can work with you to implement changes and improvements. Our goal is to help you build a successful product, not just deliver a one-time project.",
    },
    {
      question: "How do you handle intellectual property?",
      answer:
        "You own 100% of the code and intellectual property we create for your project. We provide full source code delivery and documentation. We also sign NDAs to protect your confidential information and ideas.",
    },
  ];

  return (
    <section
      id="faq-section"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="tracking-tighter text-4xl md:text-5xl font-bold text-primary font-dm-sans mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Got questions? We've got answers. Here are the most common questions
            we receive about our services and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-white/80 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/50 shadow-sm">
                  <Disclosure.Button className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6  text-left flex items-center justify-between hover:bg-gray-50/80 transition-colors">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-primary font-dm-sans pr-2 sm:pr-4 leading-tight">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 ml-2 sm:ml-4">
                      {open ? (
                        <FaMinus className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-muted" />
                      ) : (
                        <FaPlus className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-muted" />
                      )}
                    </div>
                  </Disclosure.Button>

                  <Disclosure.Panel className="px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8 border-t border-gray-200/30">
                    <div className="pt-4 sm:pt-6">
                      <p className="text-sm sm:text-base md:text-lg text-muted font-inter leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
