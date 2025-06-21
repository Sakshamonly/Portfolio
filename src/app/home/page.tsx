"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero"

export default function Page() {
  return (
    <div>
      <Navbar />

      {/* Spacer between Navbar and Hero */}
      <div className="pt-20"> {/* This pushes hero down — you can adjust 32 to 24 or 20 if needed */}
        <HeroSection />
      </div>
    </div>
  )
}
