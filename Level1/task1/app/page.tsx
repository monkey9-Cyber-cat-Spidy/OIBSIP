import Hero from "@/components/hero"
import About from "@/components/about"
import InternshipPrograms from "@/components/internship-programs"
import ProjectShowcase from "@/components/project-showcase"
import AdditionalServices from "@/components/additional-services"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import ApplicationForm from "@/components/application-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <InternshipPrograms />
      <ProjectShowcase />
      <AdditionalServices />
      <Testimonials />
      <FAQ />
      <ApplicationForm />
      <Footer />
    </main>
  )
}

