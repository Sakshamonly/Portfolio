"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)


    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Handle theme persistence with localStorage
    useEffect(() => {
        // Check if we're in the browser (not SSR)
        if (typeof window !== "undefined") {
            // Load theme from localStorage on mount
            const savedTheme = localStorage.getItem("theme")
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

            // Use saved theme, or fall back to system preference
            const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark)

            setIsDarkMode(shouldUseDark)

            // Apply theme to document
            if (shouldUseDark) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }, [])

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", isDarkMode ? "dark" : "light")
        }
    }, [isDarkMode])

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode
        setIsDarkMode(newDarkMode)

        // Apply theme immediately
        if (newDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
        handleLinkClick()
    }

    const navLinks = [
        { name: "About", href: "about" },
        { name: "Skills", href: "skills" },
        { name: "Projects", href: "projects" },
        { name: "Certifications", href: "certifications" },
        { name: "Contact", href: "contact" },
    ]

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[90%]">
                <div
                    className={`transition-all duration-300 rounded-2xl border ${isDarkMode
                        ? scrolled
                            ? "bg-gray-900/80 backdrop-blur-md border-gray-700/60 shadow-lg"
                            : "bg-gray-900/60 backdrop-blur-sm border-gray-700/40 shadow-md"
                        : scrolled
                            ? "bg-white/80 backdrop-blur-md border-gray-200/60 shadow-lg"
                            : "bg-white/60 backdrop-blur-sm border-gray-200/40 shadow-md"
                        }`}
                >
                    <div className="px-6 py-3">
                        <div className="flex items-center justify-between">
                            {/* Left - Logo/Name */}
                            <div className="flex-shrink-0">
                                <button
                                    onClick={() => scrollToSection("home")}
                                    className="text-2xl font-bold transition-transform duration-200 hover:scale-105"
                                >
                                    <span className="text-red-500">S</span>
                                    <span className={isDarkMode ? "text-white" : "text-black"}>aksham</span>
                                </button>
                            </div>

                            {/* Center - Desktop Navigation */}
                            <div className="hidden md:block">
                                <div className="flex items-center space-x-8">
                                    {navLinks.map((link) => (
                                        <button
                                            key={link.name}
                                            onClick={() => scrollToSection(link.href)}
                                            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${isDarkMode ? "text-white hover:text-red-500" : "text-black hover:text-red-500"
                                                }`}
                                        >
                                            {link.name}
                                            {/* Animated underline */}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                        </button>
                                    ))}
                                </div>
                            </div>



                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 ${isDarkMode
                                        ? "text-gray-300 hover:text-red-500 hover:bg-gray-800/50"
                                        : "text-gray-600 hover:text-red-500 hover:bg-gray-100/50"
                                        }`}
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {/* Hamburger icon */}
                                    <div className="w-6 h-6 relative">
                                        <span
                                            className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                                                }`}
                                        ></span>
                                        <span
                                            className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                                                }`}
                                        ></span>
                                        <span
                                            className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                                                }`}
                                        ></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div
                        className={`px-4 pt-2 pb-4 space-y-1 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-200/50"
                            }`}
                    >
                        {navLinks.map((link, index) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 transform ${isDarkMode
                                    ? "text-white hover:text-red-500 hover:bg-red-900/20"
                                    : "text-black hover:text-red-500 hover:bg-red-50/50"
                                    } ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                                }}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>

            </nav>
        </>
    )
}