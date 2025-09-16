"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import AwardSection from "./award-section";
import SkillsSection from "./skills-section";
import AddPhotoSection from "./add-photo-section";
import CertificationsSection from "./certifications-section";
import ContactSection from "./contact-section";
import PatentsSection from "./patents-section";
import PhotoSection from "./photo-section";
import ProjectsSection from "./projects-section";

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav className="p-4">
      {isMobile ? (
        <button className="p-2 rounded bg-gray-200">☰ Menu</button>
      ) : (
        <ul className="flex space-x-4">
          <HeroSection/>
          <AboutSection/>
          <AwardSection />
          <SkillsSection />
          <ProjectsSection />
          <PhotoSection />
          <AddPhotoSection />
          <CertificationsSection />
          <PatentsSection />
          <ContactSection />
        </ul>
      )}
    </nav>
  );
}





{/* <li>Home</li>
          <li>Projects</li>
          <li>Contact</li> */}