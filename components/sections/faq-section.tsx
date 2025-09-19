"use client";

import { Disclosure } from "@headlessui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "How fast can we build an MVP?",
      answer:
        "We usually deliver your MVP in 2–3 weeks, depending on the scope. Our focus is on building the core and differentiating features necessary to validate your idea and get it in front of real users quickly.",
    },
    {
      question: "What technologies do we use?",
      answer:
        "We build using modern, scalable technologies. Such as ReactJS, Next.js, Node.js, Express.js, PostgreSQL, etc. This stack enables us to build fast, reliable, and scalable applications that are easy to maintain and scale.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, absolutely. After we’ve built and deployed your MVP, we provide 30 days of post-deployment support completely free. During this time, we’ll help with any fixes, tweaks, or questions to make sure everything is running smoothly.",
    },
    {
      question: "Do you design it directly or code it?",
      answer:
        "We do both based on the project requirements. For building it directly, we use component libraries such as Shadcn or Daisy UI. Making sure it looks just as professional. For the second option, we design the project in Figma first. We go through a revision process with you, so you can clearly see what’s going to be built before development starts. This way, your expectations and our output are perfectly aligned.",
    },
    {
      question: "What if I need changes after the MVP is delivered?",
      answer:
        "During the design phase, we include two full revision rounds so you’re confident about the product before development. Once the MVP is fully built and delivered, we’re open to negotiating ongoing development or one-time updates, depending on your needs.",
    },
    {
      question: "Do I own my work?",
      answer:
        "Yes. You own 100% of the code, the designs, and everything we produce for your project. At the end of the engagement, we hand everything over to you so that you have full ownership and control.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="tracking-tighter text-4xl md:text-5xl font-bold text-primary font-dm-sans mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Got questions? We&apos;ve got answers. Here are the most common
            questions we receive about our services and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-white/80 rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
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
