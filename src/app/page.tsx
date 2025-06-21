"use client"
import { useEffect, useState } from "react"
import PortfolioIntro from "@/components/portfolio-intro"
import HomePage from "@/app/home/page"

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false)
    }, 7000) // ⏳ 5 languages * 1.2s + buffer

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {showIntro ? <PortfolioIntro /> : <HomePage />}
    </>
  )
}
