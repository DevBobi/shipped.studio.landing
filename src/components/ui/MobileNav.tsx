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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="px-6 py-4 space-y-4">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-700 hover:text-gray-900 font-inter transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-gray-800 transition-colors">
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
