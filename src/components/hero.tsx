"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section id="about" className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Hi, I'm <span className="block">Saksham Pandey</span>
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-500">
                                Software Developer
                            </h2>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            I’m a Computer Science student who enjoys building responsive websites and solving coding problems. I work with tools like React, Next.js, and explore AI/ML in my free time. I believe in hands-on learning and constantly push myself to grow through projects.
                            </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                Hire Me
                            </Button>
                            <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-transparent hover:bg-blue-50">
                                <a
                                    href="https://www.linkedin.com/in/saksham-pandey-546319282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Let's Talk
                                </a>
                            </Button>
                        </div>

                        <div className="flex justify-center lg:justify-start space-x-6 pt-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/saksham-pandey-546319282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
                                { icon: Github, href: "https://github.com/Sakshamonly", label: "GitHub" },
                                { icon: Twitter, href: "https://x.com/fcuksham?t=Hi6f8CaJjZzGSKWT8-5xVQ&s=08", label: "Twitter" },
                                // { icon: Mail, href: "mailto:sakshampandey234@gmail.com", label: "Email" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="p-3 rounded-full bg-gray-100 hover:bg-white text-gray-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-md border border-transparent hover:border-gray-200"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Profile Image Only (Clean) */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                            <Image
                                src="/mypic.jpg" // 👈 Replace this with your actual image path
                                alt="Saksham - Frontend Developer"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Optional: Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                        <div className="flex flex-col items-center space-y-2 text-gray-400">
                            <span className="text-sm font-medium">Scroll Down</span>
                            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
