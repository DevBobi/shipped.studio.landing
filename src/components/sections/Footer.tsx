export default function Footer() {
  const navigationLinks = [
    { name: 'MVP Calculator', href: '#mvp-calculator' },
    { name: 'Why Shipped Studio', href: '#why-shipped-studio' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ]

  return (
    <footer className="bg-gray-50 relative overflow-hidden py-20">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Company Title */}
        <h3 className="text-4xl font-bold text-gray-900 font-dm-sans mb-6">
          Shipped Studio
        </h3>
        
        {/* Description */}
        <p className="text-gray-700 font-inter leading-relaxed max-w-2xl mx-auto text-lg mb-12">
          Done-for-you MVP development services, delivered by 10-year SaaS experts.
        </p>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          {navigationLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 font-inter transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Copyright */}
        <p className="text-gray-600 font-inter text-sm">
          © 2025 Shipped.Studio All rights reserved.
        </p>
      </div>
    </footer>
  )
}
