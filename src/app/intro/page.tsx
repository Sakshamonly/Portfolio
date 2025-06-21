"use client"
import PortfolioIntro from "../../components/portfolio-intro"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function IntroPage() {
  const [showIntro, setShowIntro] = useState(true)
  const router = useRouter()

  const handleFinish = () => {
    setShowIntro(false)
    localStorage.setItem("visited", "true") // ✅ remember the user
    setTimeout(() => {
      router.push("/home")
    }, 300)
  }

  return <>{showIntro ? <PortfolioIntro onFinish={handleFinish} /> : null}</>
}
