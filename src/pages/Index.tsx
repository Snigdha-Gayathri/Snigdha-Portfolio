import { useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CapstoneSection from "@/components/capstone-section"
import PublicationSection from "@/components/publication-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import MilestonesSection from "@/components/milestones-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".slide-up, .fade-in, .scale-in")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CapstoneSection />
      <PublicationSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <MilestonesSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  )
}

export default Index
