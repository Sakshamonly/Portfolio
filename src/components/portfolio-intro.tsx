"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function PortfolioIntro() {
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState(0)

  const languages = [
    { text: "Hello", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "السلام علیکم", lang: "Urdu" },
    { text: "Hola", lang: "Spanish" },
    { text: "Bonjour", lang: "French" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLanguage < languages.length - 1) {
        setCurrentLanguage((prev) => prev + 1)
      } else {
        // Wait a second after last language then redirect
        setTimeout(() => {
          router.push("/") // homepage
        }, 800)
      }
    }, 1200)

    return () => clearTimeout(timer)
  }, [currentLanguage, router])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {languages.map((item, index) => (
        <div
          key={index}
          className={`absolute text-7xl md:text-9xl font-black text-white transition-all duration-700 ease-out transform 
            ${index === currentLanguage
              ? "opacity-100 scale-100 blur-0"
              : index < currentLanguage
              ? "opacity-0 scale-90 blur-sm"
              : "opacity-0 scale-110 blur-sm"}`}
          style={{
            fontFamily:
              item.lang === "Hindi" || item.lang === "Urdu"
                ? "'Noto Sans Devanagari', serif"
                : "'Inter', sans-serif",
            textShadow:
              index === currentLanguage
                ? "0 0 10px rgba(255, 255, 255, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)"
                : "none",
          }}
        >
          {item.text}
        </div>
      ))}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400..900&display=swap');
      `}</style>
    </div>
  )
}
