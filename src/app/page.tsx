"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("visited")
    if (alreadyVisited) {
      router.push("/home")
    } else {
      router.push("/intro")
    }
  }, [router])

  return null
}
// This page checks if the user has already visited the site.