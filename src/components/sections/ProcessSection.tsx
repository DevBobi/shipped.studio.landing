// @ts-nocheck
"use client";
import { LuClock4, LuArrowRight } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Strategy Meeting",
      timeEstimate: "30-45 min",
      description:
        "We start with clarity. We explore the why: goals, users, problems, edge cases. We go deep. This is where we ask better questions and kill bad ideas early.",
      illustration: "/svgs/image-1.png",
      deliverable: "Clear project scope & requirements",
    },
    {
      number: "02",
      title: "Choose Your Package",
      timeEstimate: "24-48 hrs",
      description:
        "Once we pin down what features and specifications, we choose a package or customize one to best suit what the project needs.",
      illustration: "/svgs/image-2.png",
      deliverable: "Customized development package",
    },
    {
      number: "03",
      title: "UI & Landing Page Design",
      timeEstimate: "1 week",
      description:
        "High-fidelity UI, design system basics, and a conversion-ready landing page (copy + analytics). Output: design files + dev handoff + landing page ready to publish.",
      illustration: "/svgs/image-3.png",
      deliverable: "Design files + landing page",
    },
    {
      number: "04",
      title: "Launch Phase",
      timeEstimate: "2-3 weeks",
      description:
        "Frontend + backend, integrations, QA, and pushing to live. Weekly demos, fast feedback. Output: fully working MVP in production.",
      illustration: "/svgs/image-4.png",
      deliverable: "Live MVP in production",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section
      id="process-section"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-4 py-2 rounded-full text-sm font-semibold font-inter mb-6">
            <FaCheckCircle className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="tracking-tighter leading-normal text-2xl md:text-5xl sm:text-3xl font-bold text-primary font-dm-sans mb-6 max-w-4xl mx-auto">
            We don&apos;t follow a fixed template. Our process{" "}
            <span className="text-purple relative">
              adapts
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-purple/20 rounded-full -z-10"></div>
            </span>{" "}
            with every product, client, and challenge.
          </h2>
          <p className="text-lg text-muted font-inter max-w-2xl mx-auto">
            From strategy to launch, we guide you through every step with
            transparency and expertise.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <motion.div
            variants={progressVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-8 md:left-16 top-20 bottom-0 w-1 bg-gradient-to-b from-purple via-purple/60 to-purple/30 rounded-full origin-top hidden sm:block"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group-hover:border-purple/30">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    {/* Step Number & Illustration */}
                    <div className="flex-shrink-0 relative">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple to-purple-dark rounded-full flex items-center justify-center text-white font-bold text-lg font-dm-sans shadow-lg z-10">
                        {step.number}
                      </div>

                      {/* Illustration */}
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200/50">
                        <Image
                          src={step.illustration}
                          alt={`${step.title} illustration`}
                          width={100}
                          height={100}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                          quality={100}
                        />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-primary font-dm-sans mb-2 group-hover:text-purple transition-colors duration-300">
                            {step.title}
                          </h3>

                          {/* Time Duration */}
                          <div className="flex items-center gap-2 text-purple font-inter font-semibold mb-4">
                            <div className="p-2 bg-purple/10 rounded-full">
                              <LuClock4 className="w-4 h-4" />
                            </div>
                            <span className="text-sm md:text-base">
                              {step.timeEstimate}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted font-inter leading-relaxed mb-4 text-sm md:text-base">
                        {step.description}
                      </p>

                      {/* Deliverable */}
                      <div className="flex items-center gap-3 py-3 ">
                        <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-green-800 font-inter">
                          <strong>Deliverable:</strong> {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="flex lg:hidden justify-center mt-4 mb-4">
                    <div className="w-8 h-8 bg-purple/10 rounded-full flex items-center justify-center">
                      <LuArrowRight className="w-4 h-4 text-purple rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
