'use client'

import { FaArrowRight } from 'react-icons/fa'
import MobileNav from '@/components/ui/MobileNav'
import InfiniteCarousel from '@/components/ui/InfiniteCarousel'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Full Section Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Hero Background Image - Only covers hero content area */}
      <div className="absolute top-0 left-0 right-0 h-[900px] overflow-hidden">
        <img 
          src="/hero bg.png" 
          alt="Hero background" 
          className="w-full h-full object-contain opacity-70"
        />
      </div>
      
      {/* Light Overlay to maintain readability - Only covers hero content area */}
      <div className="absolute top-0 left-0 right-0 h-[900px] bg-white/40"></div>
      
      {/* Noise/Texture Overlay - Only covers hero content area */}
      <div className="absolute top-0 left-0 right-0 h-[900px] opacity-60">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Subtle Gradient Overlay - Only covers hero content area */}
      <div className="absolute top-0 left-0 right-0 h-[900px] bg-gradient-to-br from-pink-50/20 via-purple-50/15 to-blue-50/20"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 text-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-2xl whitespace-nowrap">Shipped Studio</span>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-inter transition-colors">How it works</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-inter transition-colors">Pricing</a>
            <a href="#faqs" className="text-gray-700 hover:text-gray-900 font-inter transition-colors">FAQs</a>
          </div>
          
          {/* CTA Button and Mobile Nav */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-gray-900 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-gray-800 transition-colors">
              Book a Strategy Call
            </button>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-dm-sans leading-tight mb-8">
            <span className="text-gray-900">Your Idea, Designed And</span><br />
            <span className="text-gray-900">Built In Just</span>{' '}
            <span className="text-white bg-gray-900 px-4 py-2 rounded-lg">21 Days.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 font-inter max-w-4xl mx-auto mb-16 leading-relaxed">
            We Build, Launch & Grow Your SaaS In 2-3 Weeks With No Surprises. From MVP To Market-Ready Product
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-full font-inter font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Book a Strategy Call
              <FaArrowRight className="w-5 h-5" />
            </button>
            <button className="text-gray-900 px-10 py-5 rounded-full font-inter font-semibold text-lg hover:text-gray-700 transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              View Works
            </button>
          </div>
          
          {/* Recent Work Indicator with Doodles */}
          <div className="absolute bottom-8 left-56 text-left">
            <div className="flex items-center gap-3 text-gray-600 font-inter text-sm">
              <img 
                src="/hero-doodles.png" 
                alt="Decorative doodles" 
                className="w-32 h-24 object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Three Row Carousel */}
      <InfiniteCarousel />
    </section>
  )
}
