"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import PhotoSection from "@/components/photo-section"
import CertificationsSection from "@/components/certifications-section"
import PatentsSection from "@/components/patents-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ThemeToggle from "@/components/theme-toggle"
import { ThemeProvider } from "@/components/theme-provider"
import AddPhotoSection from "@/components/add-photo-section"
import AwardSection from "@/components/award-section"
import Navbar from "@/components/navbar"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <ThemeToggle />

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
          style={{ scaleX: scrollYProgress}}
        />

        <main className="relative">
          <HeroSection />
          <AboutSection />
          <AwardSection />
          <SkillsSection />
          <ProjectsSection />
          <PhotoSection />
          <AddPhotoSection />
          <CertificationsSection />
          <PatentsSection />
          <ContactSection />
        </main>

        {/* Floating Resume Button */}
        <motion.div className="fixed bottom-8 right-8 z-40" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            📄 Download Resume
          </button>
        </motion.div>
      </div>
    </ThemeProvider>
  )
}
