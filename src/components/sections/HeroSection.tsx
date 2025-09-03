'use client'

import { FaArrowRight, FaPlay } from 'react-icons/fa'
import MobileNav from '@/components/ui/MobileNav'
import InfiniteCarousel from '@/components/ui/InfiniteCarousel'

export default function HeroSection() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Full Section Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Hero Background Image - Full height on mobile, fixed height on larger screens */}
      <div className="absolute top-0 left-0 right-0 h-screen sm:h-[800px] md:h-[850px] lg:h-[900px] overflow-hidden">
        <img 
          src="/hero bg.png" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-100"
        />
      </div>
      
      {/* Light Overlay to maintain readability - Full height on mobile, fixed height on larger screens */}
      <div className="absolute top-0 left-0 right-0 h-screen sm:h-[800px] md:h-[850px] lg:h-[900px] bg-white/40"></div>
      
      {/* Noise/Texture Overlay - Full height on mobile, fixed height on larger screens */}
      <div className="absolute top-0 left-0 right-0 h-screen sm:h-[800px] md:h-[850px] lg:h-[900px] opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Subtle Gradient Overlay - Full height on mobile, fixed height on larger screens */}
      <div className="absolute top-0 left-0 right-0 h-screen sm:h-[800px] md:h-[850px] lg:h-[900px] bg-gradient-to-br from-pink-50/20 via-purple-50/15 to-blue-50/20"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 py-4 sm:py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                <span className="hidden sm:inline">Shipped</span>
                <span className="sm:hidden">S.S</span>
                <span className="hidden lg:inline"> Studio</span>
              </span>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('process-section')}
              className="text-gray-700 hover:text-gray-900 font-inter transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('pricing-section')}
              className="text-gray-700 hover:text-gray-900 font-inter transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq-section')}
              className="text-gray-700 hover:text-gray-900 font-inter transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </div>
          
          {/* CTA Button and Mobile Nav */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden md:block bg-gray-900 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-gray-800 transition-colors cursor-pointer">
              Book a Strategy Call
            </button>
            <div className="md:hidden">
              <button
                onClick={() => {
                  const mobileNav = document.getElementById('mobile-nav');
                  if (mobileNav) {
                    mobileNav.classList.toggle('hidden');
                  }
                }}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div id="mobile-nav" className="fixed inset-0 z-[9999] hidden md:hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => {
            const mobileNav = document.getElementById('mobile-nav');
            if (mobileNav) {
              mobileNav.classList.add('hidden');
            }
          }}
        />
        
        {/* Mobile Menu */}
        <div className="absolute inset-0 bg-white">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="w-8 h-8 text-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">S</span>
              </div>
              <button
                onClick={() => {
                  const mobileNav = document.getElementById('mobile-nav');
                  if (mobileNav) {
                    mobileNav.classList.add('hidden');
                  }
                }}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8 space-y-6">
              <button 
                onClick={() => {
                  scrollToSection('process-section');
                  const mobileNav = document.getElementById('mobile-nav');
                  if (mobileNav) {
                    mobileNav.classList.add('hidden');
                  }
                }}
                className="block text-gray-700 hover:text-gray-900 font-inter text-lg font-medium transition-colors py-3 text-left w-full"
              >
                How it works
              </button>
              <button 
                onClick={() => {
                  scrollToSection('pricing-section');
                  const mobileNav = document.getElementById('mobile-nav');
                  if (mobileNav) {
                    mobileNav.classList.add('hidden');
                  }
                }}
                className="block text-gray-700 hover:text-gray-900 font-inter text-lg font-medium transition-colors py-3 text-left w-full"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  scrollToSection('faq-section');
                  const mobileNav = document.getElementById('mobile-nav');
                  if (mobileNav) {
                    mobileNav.classList.add('hidden');
                  }
                }}
                className="block text-gray-700 hover:text-gray-900 font-inter text-lg font-medium transition-colors py-3 text-left w-full"
              >
                FAQs
              </button>
            </div>
            
            {/* CTA Button */}
            <div className="px-6 py-6 border-t border-gray-200">
              <button className="w-full bg-gray-900 text-white px-6 py-4 rounded-full font-inter font-semibold text-lg hover:bg-gray-800 transition-colors">
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 min-h-screen sm:min-h-0 flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-dm-sans leading-tight mb-6 sm:mb-8 px-2 sm:px-0">
            <span className="text-gray-900">Your Idea, Designed And</span><br />
            <span className="text-gray-900">Built In Just</span>{' '}
            <span className="text-white bg-gray-900 px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">21 Days.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-inter max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 sm:px-0">
            We Build, Launch & Grow Your SaaS In 2-3 Weeks With No Surprises. From MVP To Market-Ready Product
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl cursor-pointer">
              Book a Strategy Call
              <FaArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto text-gray-900 px-8 py-2 rounded-full font-inter font-semibold text-lg hover:text-gray-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer border-2 border-gray-900 hover:border-gray-700">
              <div className="w-10 h-10 border-2 border-gray-900 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gray-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
              </div>
              View Works
            </button>
          </div>
          
          {/* Recent Work Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 px-4 sm:px-0">
            {/* Doodles */}
            <div className="flex items-center gap-3 text-gray-600 font-inter text-sm">
              <img 
                src="/hero-doodles.png" 
                alt="Decorative doodles" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 lg:w-56 xl:w-64 object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
      

      <InfiniteCarousel />
    </section>
  )
}
