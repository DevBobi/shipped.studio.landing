import BuiltToBuildSection from '@/components/sections/BuiltToBuildSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import Footer from '@/components/sections/Footer'
import HeroSection from '@/components/sections/HeroSection'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhyDifferentSection from '@/components/sections/WhyDifferentSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyDifferentSection />
      <BuiltToBuildSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
