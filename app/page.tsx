import { Header } from "@/components/oxcentro/header"
import { HeroSection } from "@/components/oxcentro/hero-section"
import { BenefitsBar } from "@/components/oxcentro/benefits-bar"
import { ClinicCarousel } from "@/components/oxcentro/clinic-carousel"
import { WhyChooseSection } from "@/components/oxcentro/why-choose-section"
import { ConveniosSection } from "@/components/oxcentro/convenios-section"
import { SpecialtiesSection } from "@/components/oxcentro/specialties-section"
import { ExamsSection } from "@/components/oxcentro/exams-section"
import { ContactSection } from "@/components/oxcentro/contact-section"
import { Footer } from "@/components/oxcentro/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsBar />
      <ClinicCarousel />
      <WhyChooseSection />
      <ConveniosSection />
      <SpecialtiesSection />
      <ExamsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
