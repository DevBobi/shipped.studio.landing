// @ts-nocheck
"use client";
import {
  Zap,
  ShoppingCart,
  Wrench,
  Image as ImageIcon,
  Link,
  Cloud,
  BarChart3,
  Users,
  DollarSign,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BuiltToBuildSection() {
  const leftColumnItems = [
    {
      title: "AI & Automation",
      icon: Zap,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
    {
      title: "Online Marketplaces",
      icon: ShoppingCart,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
    {
      title: "Internal Tools",
      icon: Wrench,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
    {
      title: "Content & Media Apps",
      icon: ImageIcon,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
    {
      title: "Integrations and APIs",
      icon: Link,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
  ];

  const rightColumnItems = [
    {
      title: "SaaS Applications",
      icon: Cloud,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
    {
      title: "Community Platforms",
      icon: Users,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
    },
    {
      title: "Financial Tools",
      icon: DollarSign,
      className: "w-5 h-5 sm:w-6 sm:h-6 text-icon fill-current",
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={headerVariants}
        >
          <motion.h2
            className="tracking-tighter text-4xl md:text-5xl font-bold text-primary font-dm-sans mb-6"
            variants={headerVariants}
          >
            Built to build just about any idea
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted font-inter max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            From AI to marketplaces, we build both core and differentiating
            features you need to test your idea and start generating real
            revenue.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Left Column */}
          <motion.div
            className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6"
            variants={containerVariants}
          >
            {leftColumnItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 border-b border-gray-200 group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  <item.icon className={item.className} />
                </motion.div>
                <span className="text-base sm:text-lg md:text-xl text-secondary font-inter group-hover:text-purple transition-colors duration-200">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6"
            variants={containerVariants}
          >
            {rightColumnItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 border-b border-gray-200 group cursor-pointer"
                variants={rightItemVariants}
                whileHover={{
                  x: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  <item.icon className={item.className} />
                </motion.div>
                <span className="text-base sm:text-lg md:text-xl text-secondary font-inter group-hover:text-purple transition-colors duration-200">
                  {item.title}
                </span>
              </motion.div>
            ))}
            <motion.div
              className="py-2 sm:py-3 md:py-4"
              variants={rightItemVariants}
            >
              <span className="text-base sm:text-lg md:text-xl text-secondary font-inter">
                and so much more...
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Collaboration Visualization */}
          <motion.div
            className="flex items-center gap-4"
            variants={profileVariants}
          >
            {/* Collaboration Text */}
            <div className="hidden sm:block ml-4">
              <p className="text-base sm:text-lg font-dm-sans text-secondary font-medium leading-relaxed">
                <span className="text-purple font-bold">We build</span>
                <br />
                your ideas together
              </p>
            </div>
          </motion.div>

          {/* Book a Call Button */}
          <motion.button
            className="bg-purple sm:w-auto rounded-full text-white px-6 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-3 md:py-4 lg:py-5 font-inter font-semibold hover:bg-purple-dark transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer text-base sm:text-lg md:text-xl"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book a call
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
