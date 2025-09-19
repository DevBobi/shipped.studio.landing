"use client";
import { FaCheck, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyDifferentSection() {
  const comparisonData = [
    {
      category: "Speed to market",
      shippedStudio: { has: true, text: "21–60 days" },
      freelancer: { has: true, text: "Can be fast if available" },
      traditionalAgency: { has: false, text: "Typically 4–6 months" },
      inHouse: { has: false, text: "3–4 months (capacity/hiring)" },
    },
    {
      category: "Pricing predictability",
      shippedStudio: { has: true, text: "Fixed fee" },
      freelancer: { has: false, text: "Variable & scope-creep risk" },
      traditionalAgency: { has: true, text: "Fixed (often high)" },
      inHouse: { has: true, text: "Salaries known (overhead)" },
    },
    {
      category: "PM effort required",
      shippedStudio: { has: true, text: "Dedicated PM" },
      freelancer: { has: false, text: "You manage" },
      traditionalAgency: { has: true, text: "Account manager" },
      inHouse: { has: true, text: "You manage directly" },
    },
    {
      category: "Technical breadth & scale",
      shippedStudio: { has: true, text: "MVP, SaaS & AI; elastic team" },
      freelancer: { has: false, text: "Solo bandwidth, narrow stack" },
      traditionalAgency: { has: true, text: "Multi-discipline bench" },
      inHouse: { has: false, text: "Limited without new hires" },
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  };

  const tableVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
      },
    },
  };

  return (
    <section id="why-shipped-studio" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-dm-sans mb-6 text-primary"
            variants={itemVariants}
          >
            Why we&apos;re different
          </motion.h2>
          <motion.p
            className="text-xl text-muted max-w-3xl mx-auto font-inter"
            variants={itemVariants}
          >
            See how we stack up against the alternatives and why top startups
            choose us
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-0 overflow-hidden w-full mx-auto shadow-xl border border-secondary backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={tableVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Desktop Table */}
          <div className="hidden md:block">
            {/* Header Row */}
            <div className="grid grid-cols-5 bg-gradient-to-r from-secondary to-muted">
              <div className="p-8 text-white font-semibold font-dm-sans mt-2 text-lg flex items-center justify-center">
                Category
              </div>
              <div className="bg-gradient-to-br from-blue-100 via-white to-purple-50 p-8 mt-2 text-primary font-bold text-center font-dm-sans rounded-t-3xl shadow-lg border-2 border-purple">
                <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent text-xl">
                  🚀 Shipped Studio
                </span>
              </div>
              <div className="p-8 text-white font-semibold text-center font-dm-sans mt-2 text-lg flex items-center justify-center">
                Freelancer
              </div>
              <div className="p-8 text-white font-semibold text-center font-dm-sans mt-2 text-lg flex items-center justify-center">
                Traditional Agency
              </div>
              <div className="p-8 text-white font-semibold text-center font-dm-sans mt-2 text-lg flex items-center justify-center">
                In-House
              </div>
            </div>

            {/* Content Rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-5 border-t border-muted/50 hover:bg-secondary/30 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="p-8 text-white font-semibold font-inter text-lg">
                  {row.category}
                </div>
                <div
                  className={`bg-gradient-to-br from-blue-100 via-white to-purple-50 p-8 flex items-center border-x-2 border-purple ${
                    index === comparisonData.length - 1
                      ? "rounded-b-3xl mb-2"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4 font-bold text-primary">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FaCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-inter font-semibold text-lg">
                      {row.shippedStudio.text}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-8 flex items-center ${
                    index === comparisonData.length - 1 ? "rounded-b-3xl" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 text-white">
                    {row.freelancer.has ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaCheck className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaTimes className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <span className="font-inter font-medium text-lg">
                      {row.freelancer.text}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-8 flex items-center ${
                    index === comparisonData.length - 1 ? "rounded-b-3xl" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 text-white">
                    {row.traditionalAgency.has ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaCheck className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaTimes className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <span className="font-inter font-medium text-lg">
                      {row.traditionalAgency.text}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-8 flex items-center ${
                    index === comparisonData.length - 1 ? "rounded-b-3xl" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 text-white">
                    {row.inHouse.has ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaCheck className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaTimes className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <span className="font-inter font-medium text-lg">
                      {row.inHouse.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Table */}
          <div className="md:hidden overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Header Row */}
              <div className="grid grid-cols-5 bg-gradient-to-r from-secondary to-muted">
                <div className="p-6 text-white font-semibold font-dm-sans mt-2">
                  Category
                </div>
                <div className="bg-gradient-to-br from-blue-100 via-white to-purple-50 p-6 mt-2 text-primary font-bold text-center font-dm-sans rounded-t-2xl shadow-lg border-2 border-purple">
                  <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
                    🚀 Shipped Studio
                  </span>
                </div>
                <div className="p-6 text-white font-semibold text-center font-dm-sans mt-2">
                  Freelancer
                </div>
                <div className="p-6 text-white font-semibold text-center font-dm-sans mt-2">
                  Traditional Agency
                </div>
                <div className="p-6 text-white font-semibold text-center font-dm-sans mt-2">
                  In-House
                </div>
              </div>

              {/* Content Rows */}
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-5 border-t border-gray-600/50 hover:bg-gray-700/30 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="p-6 text-white font-semibold font-inter">
                    {row.category}
                  </div>
                  <div
                    className={`bg-gradient-to-br from-blue-100 via-white to-purple-50 p-6 flex items-center border-x-2 border-purple ${
                      index === comparisonData.length - 1
                        ? "rounded-b-2xl mb-2"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 font-bold text-primary">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-inter font-semibold">
                        {row.shippedStudio.text}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-6 flex items-center ${
                      index === comparisonData.length - 1 ? "rounded-b-2xl" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 text-white">
                      {row.freelancer.has ? (
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <FaTimes className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <span className="font-inter font-medium">
                        {row.freelancer.text}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-6 flex items-center ${
                      index === comparisonData.length - 1 ? "rounded-b-2xl" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 text-white">
                      {row.traditionalAgency.has ? (
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <FaTimes className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <span className="font-inter font-medium">
                        {row.traditionalAgency.text}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-6 flex items-center ${
                      index === comparisonData.length - 1 ? "rounded-b-2xl" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 text-white">
                      {row.inHouse.has ? (
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <FaTimes className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <span className="font-inter font-medium">
                        {row.inHouse.text}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
