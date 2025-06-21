"use client"

import { useState, useEffect } from "react"

import { useRouter } from 'next/navigation'

interface PortfolioIntroProps {
  onFinish: () => void
}
export default function PortfolioIntro({ onFinish }: PortfolioIntroProps) {
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState(0)
  const [showWelcome, setShowWelcome] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
        // Add delay after the last language before showing welcome
        setTimeout(() => {
          setShowWelcome(true)
        }, 500) // 2 second delay after last language
      }
    }, 1200) // Increased delay to 2 seconds between languages

    return () => clearTimeout(timer)
  }, [currentLanguage, languages.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleEnterClick = () => {
  setIsExiting(true)
  setTimeout(() => {
    router.push("/") // redirects to homepage
  }, 1000)
}

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center transition-all duration-1000 ${
        isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div className="text-center relative">
        {/* Language Animation */}
        {!showWelcome && (
          <div className="mb-8">
            {languages.map((item, index) => (
              <div
                key={index}
                className={`text-7xl md:text-9xl font-black text-white transition-all duration-700 ease-out absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  index === currentLanguage
                    ? "opacity-100 scale-100 blur-0"
                    : index < currentLanguage
                      ? "opacity-0 scale-90 blur-sm"
                      : "opacity-0 scale-110 blur-sm"
                }`}
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
          </div>
        )}

        {/* Welcome Message */}
        {showWelcome && (
          <div
            className={`transition-all duration-1000 ease-out ${
              showWelcome ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <h1
              className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tight leading-tight"
              style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.2), 0 0 60px rgba(147, 51, 234, 0.15)",
              }}
            >
              Welcome to my Portfolio
            </h1>

            {/* Epic Enter Button */}
            <button
              onClick={handleEnterClick}
              className="group relative px-16 py-6 text-2xl font-bold text-white transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(147, 51, 234, 0.2) 0%, 
                  rgba(59, 130, 246, 0.2) 50%, 
                  rgba(16, 185, 129, 0.2) 100%)`,
                backdropFilter: "blur(20px)",
                border: "2px solid transparent",
                borderRadius: "60px",
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  0 0 40px rgba(147, 51, 234, 0.3),
                  0 0 80px rgba(59, 130, 246, 0.2)
                `,
              }}
            >
              {/* Animated background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, 
                    rgba(147, 51, 234, 0.3), 
                    rgba(59, 130, 246, 0.3), 
                    rgba(16, 185, 129, 0.3), 
                    rgba(245, 101, 101, 0.3), 
                    rgba(147, 51, 234, 0.3))`,
                  backgroundSize: "400% 400%",
                  animation: "epicGradient 3s ease infinite",
                  borderRadius: "60px",
                }}
              />

              {/* Glowing border */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `linear-gradient(45deg, 
                    #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)`,
                  backgroundSize: "400% 400%",
                  animation: "epicGradient 1s ease infinite",
                  filter: "blur(4px)",
                  zIndex: -1,
                  transform: "scale(1.05)",
                }}
              />

              {/* Particle effect overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                              radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
                  borderRadius: "60px",
                  animation: "sparkle 2s ease-in-out infinite",
                }}
              />

              <span className="relative z-10 tracking-wider font-black">ENTER</span>

              {/* Ripple effect */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 transition-opacity duration-200"
                style={{
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                  animation: "ripple 0.2s ease-out",
                }}
              />
            </button>
          </div>
        )}
      </div>

      {/* Enhanced CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes epicGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
    </div>
  )
}
