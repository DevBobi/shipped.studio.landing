import BuiltToBuildSection from "@/components/sections/BuiltToBuildSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OurWorkSection from "@/components/sections/OurWorkSection";
import PricingSection from "@/components/sections/PricingSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Web3PortfolioSection from "@/components/sections/Web3PortfolioSection";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gray-50">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        ></div>
      </div>

      {/* All sections with relative positioning to appear above noise */}
      <div className="relative z-10">
        <HeroSection />
        <WhyDifferentSection />
        <BuiltToBuildSection />
        <ProcessSection />
        <PricingSection />
        <OurWorkSection />
        {/* <Web3PortfolioSection /> */}
        {/* <TestimonialsSection /> */}
        <TeamSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
