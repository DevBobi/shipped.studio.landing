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
          {/* Enhanced Collaboration Visualization */}
          <motion.div
            className="flex items-center gap-4"
            variants={profileVariants}
          >
            <div className="relative w-32 h-20 sm:w-40 sm:h-24">
              {/* Connection Lines */}
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 160 96"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                {/* Animated connection paths */}
                <motion.path
                  d="M32 32 Q64 16 96 32"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.path
                  d="M32 64 Q64 80 100 40"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
                <motion.path
                  d="M32 48 L96 48"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />

                {/* Gradient definitions */}
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="gradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Team Avatar */}
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-full h-full rounded-full border-3 border-purple overflow-hidden shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "#7C3AED",
                      boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Our Team"
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Team indicator */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", bounce: 0.6 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Your Avatar */}
              <motion.div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-full h-full rounded-full border-3 border-purple bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "#7C3AED",
                      boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.span
                      className="text-lg sm:text-xl font-bold text-purple-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      You
                    </motion.span>
                  </motion.div>
                  {/* Idea indicator */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.3, type: "spring", bounce: 0.8 }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <span className="text-xs">💡</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full"
                  style={{
                    left: `${30 + i * 25}%`,
                    top: `${40 + i * 10}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: 2 + i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              ))}
            </div>

            {/* Collaboration Text */}
            <motion.div
              className="hidden sm:block ml-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <motion.p
                className="text-sm font-inter text-muted font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                <motion.span
                  className="text-purple-600 font-semibold"
                  animate={{
                    color: ["#8B5CF6", "#7C3AED", "#8B5CF6"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  We build
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  your ideas together
                </motion.span>
              </motion.p>
            </motion.div>
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
