"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects"
import Certifications from "@/components/certifications"
import ContactFooter from "@/components/contact"


export default function Page() {
  return (
    <div>
      <Navbar />

      {/* Spacer between Navbar and Hero */}
      <div className="pt-20"> {/* This pushes hero down — you can adjust 32 to 24 or 20 if needed */}
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <Certifications />
        <ContactFooter /> 
      </div>
    </div>
  )
}
