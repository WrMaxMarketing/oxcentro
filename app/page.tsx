import { Header } from "@/components/oxcentro/header"
import { HeroSection } from "@/components/oxcentro/hero-section"
import { BenefitsBar } from "@/components/oxcentro/benefits-bar"
import { ClinicCarousel } from "@/components/oxcentro/clinic-carousel"
import { WhyChooseSection } from "@/components/oxcentro/why-choose-section"
import { CtaBand } from "@/components/oxcentro/cta-band"
import { ConveniosSection } from "@/components/oxcentro/convenios-section"
import { SpecialtiesSection } from "@/components/oxcentro/specialties-section"
import { ExamsSection } from "@/components/oxcentro/exams-section"
// import { TestimonialsSection } from "@/components/oxcentro/testimonials-section" // temporariamente desativado
import { ContactSection } from "@/components/oxcentro/contact-section"
import { Footer } from "@/components/oxcentro/footer"
import { WhatsAppButton } from "@/components/oxcentro/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsBar />
      <ClinicCarousel />
      <WhyChooseSection />
      <CtaBand />
      <ConveniosSection />
      <SpecialtiesSection />
      <ExamsSection />
      {/* <TestimonialsSection /> */} {/* seção de depoimentos temporariamente desativada */}
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
