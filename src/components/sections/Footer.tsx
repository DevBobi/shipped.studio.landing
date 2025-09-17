export default function Footer() {
  const navigationLinks = [
    { name: "MVP Calculator", href: "#mvp-calculator" },
    { name: "Why Shipped Studio", href: "#why-shipped-studio" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative overflow-hidden py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Company Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-dm-sans mb-6">
          Shipped Studio
        </h3>

        {/* Description */}
        <p className="text-secondary font-inter leading-relaxed max-w-2xl mx-auto text-lg mb-12">
          Done-for-you MVP development services, delivered by 10-year SaaS
          experts.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-secondary hover:text-purple font-inter transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-muted font-inter text-sm">
          © 2025 Shipped.Studio All rights reserved.
        </p>
      </div>
    </footer>
  );
}
