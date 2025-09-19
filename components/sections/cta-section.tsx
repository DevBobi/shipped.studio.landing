"use client";
import { FaArrowRight, FaRocket, FaClock, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CTASection() {
  const benefits = [
    {
      icon: FaClock,
      text: "21-day delivery",
    },
    {
      icon: FaCheckCircle,
      text: "Fixed pricing",
    },
    {
      icon: FaRocket,
      text: "Launch ready",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-white/90 via-purple-50/90 to-blue-50/90 backdrop-blur-sm border border-purple/20 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple via-blue to-purple"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple/20 to-blue/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue/20 to-purple/20 rounded-full blur-xl"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple/10 text-purple px-4 py-2 rounded-full text-sm font-semibold font-inter mb-6 border border-purple/20"
            >
              <FaRocket className="w-4 h-4" />
              Ready to Launch?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-dm-sans mb-4 sm:mb-6 leading-tight"
            >
              Turn Your Idea Into Reality{" "}
              <span className="text-purple relative">
                Today
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-purple/20 rounded-full -z-10"></div>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-muted font-inter mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Stop waiting for the perfect moment. Let&apos;s build your SaaS,
              mobile app, or web platform in just 21 days with our proven
              process.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-10"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-200/50 shadow-lg"
                >
                  <div className="p-1.5 sm:p-2 bg-purple/10 rounded-full">
                    <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple" />
                  </div>
                  <span className="text-xs sm:text-sm whitespace-nowrap font-semibold text-primary font-inter">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group justify-center bg-gradient-to-r from-purple to-purple-dark text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 w-full sm:w-auto shadow-lg">
                Book a Strategy Call
              </button>

              <button className="group justify-center text-purple px-8 py-4 rounded-full font-inter font-semibold text-lg hover:text-purple-dark transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto border-2 border-purple hover:border-purple-dark hover:bg-purple/5 shadow-lg hover:shadow-xl">
                View Our Work
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pt-6 border-t border-gray-200/50"
            >
              <p className="text-sm text-muted font-inter mb-2">
                Trusted by founders and teams worldwide
              </p>
              <div className="flex items-center justify-center gap-6 text-xs text-light">
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-green-600" />
                  No hidden fees
                </span>
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-green-600" />
                  Money-back guarantee
                </span>
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-green-600" />
                  24/7 support
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
