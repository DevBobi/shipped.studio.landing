'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#faqs' }
  ]

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 transition-colors"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Full Screen Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="fixed inset-0 z-[9999] bg-white">
            <div className="flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="w-8 h-8 text-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-xl">S</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-6">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-700 hover:text-gray-900 font-inter text-lg font-medium transition-colors py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="px-6 py-6 border-t border-gray-200">
                <button className="w-full bg-gray-900 text-white px-6 py-4 rounded-full font-inter font-semibold text-lg hover:bg-gray-800 transition-colors">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
