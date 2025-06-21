"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Users,
  Wrench,
  MessageCircle,
  Lightbulb,
  Target,
  Clock,
  Heart,
  Brain,
  Palette,
  GitBranch,
} from "lucide-react"

interface Skill {
  name: string
  description: string
  icon?: string
  iconType: "devicon" | "lucide" | "image"
  lucideIcon?: any
}

const technicalSkills: Skill[] = [
  {
    name: "HTML5",
    description: "Semantic markup language for creating web pages and applications",
    icon: "html5",
    iconType: "devicon",
  },
  {
    name: "CSS3",
    description: "Styling language for designing responsive and modern web interfaces",
    icon: "css3",
    iconType: "devicon",
  },
  {
    name: "JavaScript",
    description: "Dynamic programming language for interactive web development",
    icon: "javascript",
    iconType: "devicon",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript for building scalable applications",
    icon: "typescript",
    iconType: "devicon",
  },
  {
    name: "React",
    description: "Popular JavaScript library for building user interfaces",
    icon: "react",
    iconType: "devicon",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for production-ready applications",
    icon: "nextjs",
    iconType: "devicon",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for building server-side applications",
    icon: "nodejs",
    iconType: "devicon",
  },
  {
    name: "Python",
    description: "Versatile programming language for web development and data science",
    icon: "python",
    iconType: "devicon",
  },
  {
    name: "Java",
    description: "Object-oriented programming language for enterprise applications",
    icon: "java",
    iconType: "devicon",
  },
  {
    name: "MongoDB",
    description: "NoSQL database for flexible and scalable data storage",
    icon: "mongodb",
    iconType: "devicon",
  },
  {
    name: "C++",
    description: "High-performance system programming language with object-oriented capabilities.",
    icon: "cplusplus",
    iconType: "devicon",
  },
  {
    name: "Data Structures",
    description: "Fundamental concepts for organizing and manipulating data efficiently",
    iconType: "lucide",
    lucideIcon: GitBranch,
  },
]

const softSkills: Skill[] = [
  {
    name: "Problem-Solving",
    description: "Analytical thinking to identify issues and develop effective solutions",
    iconType: "lucide",
    lucideIcon: Lightbulb,
  },
  {
    name: "Communication",
    description: "Clear and effective verbal and written communication skills",
    iconType: "lucide",
    lucideIcon: MessageCircle,
  },
  {
    name: "Teamwork",
    description: "Collaborative approach to achieve common goals with diverse teams",
    iconType: "lucide",
    lucideIcon: Users,
  },
  {
    name: "Adaptability",
    description: "Flexibility to adjust to changing environments and requirements",
    iconType: "lucide",
    lucideIcon: Heart,
  },
  {
    name: "Time Management",
    description: "Efficient organization and prioritization of tasks and deadlines",
    iconType: "lucide",
    lucideIcon: Clock,
  },
  {
    name: "Critical Thinking",
    description: "Objective analysis and evaluation of information to form judgments",
    iconType: "lucide",
    lucideIcon: Brain,
  },
  {
    name: "Creativity",
    description: "Innovative thinking to generate unique ideas and solutions",
    iconType: "lucide",
    lucideIcon: Palette,
  },
  {
    name: "Leadership",
    description: "Ability to guide, motivate, and inspire teams toward success",
    iconType: "lucide",
    lucideIcon: Target,
  },
]

const toolsFrameworks: Skill[] = [
  {
    name: "GitHub",
    description: "Version control platform for collaborative software development",
    icon: "github",
    iconType: "devicon",
  },
  {
    name: "VS Code",
    description: "Powerful code editor with extensive customization and extensions",
    icon: "vscode",
    iconType: "devicon",
  },
  {
    name: "Azure",
    description: "Microsoft's cloud computing platform for scalable applications",
    icon: "azure",
    iconType: "devicon",
  },
  {
    name: "Figma",
    description: "Collaborative design tool for creating user interfaces and prototypes",
    icon: "figma",
    iconType: "devicon",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    icon: "tailwindcss",
    iconType: "devicon",
  },
  {
    name: "Redux",
    description: "Predictable state container for JavaScript applications",
    icon: "redux",
    iconType: "devicon",
  },
  {
    name: "Express",
    description: "Fast and minimalist web framework for Node.js applications",
    icon: "express",
    iconType: "devicon",
  },
]

interface SkillCarouselProps {
  title: string
  skills: Skill[]
  icon: any
}

function SkillCarousel({ title, skills, icon: Icon }: SkillCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 5)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      // Center the scroll container initially
      const centerPosition = (scrollElement.scrollWidth - scrollElement.clientWidth) / 2
      scrollElement.scrollLeft = Math.max(0, centerPosition)

      checkScrollButtons()
      scrollElement.addEventListener("scroll", checkScrollButtons)
      return () => scrollElement.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleMouseEnter = (skill: Skill, event: React.MouseEvent) => {
    setHoveredSkill(skill)
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredSkill) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
  }

  const renderSkillIcon = (skill: Skill) => {
    if (skill.iconType === "devicon") {
      return (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
          alt={skill.name}
          className="w-10 h-10 group-hover:scale-125 transition-all duration-300"
          onError={(e) => {
            e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`
          }}
        />
      )
    } else if (skill.iconType === "lucide" && skill.lucideIcon) {
      const LucideIcon = skill.lucideIcon
      return (
        <LucideIcon className="w-10 h-10 group-hover:scale-125 transition-all duration-300 text-blue-600 dark:text-blue-400" />
      )
    }
    return (
      <Code className="w-10 h-10 group-hover:scale-125 transition-all duration-300 text-blue-600 dark:text-blue-400" />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{title}</h3>
      </div>

      <div className="relative group">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
            canScrollLeft ? "opacity-100 hover:shadow-2xl hover:scale-110" : "opacity-30 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
            canScrollRight ? "opacity-100 hover:shadow-2xl hover:scale-110" : "opacity-30 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Skills container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-6 px-16 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            justifyContent: skills.length <= 4 ? "center" : "flex-start",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex-shrink-0 flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-100 dark:border-gray-700 min-w-[140px] cursor-pointer relative"
              onMouseEnter={(e) => handleMouseEnter(skill, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/30 dark:group-hover:to-purple-800/30 transition-all duration-300 shadow-inner">
                {renderSkillIcon(skill)}
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredSkill && (
        <>
          {/* Background blur overlay */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 pointer-events-none" />

          {/* Tooltip */}
          <div
            className="fixed z-40 max-w-xs p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{
              left: mousePosition.x,
              top: mousePosition.y - 10,
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                {renderSkillIcon(hoveredSkill)}
              </div>
              <h4 className="font-bold text-gray-800 dark:text-gray-200">{hoveredSkill.name}</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{hoveredSkill.description}</p>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
          </div>
        </>
      )}
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical expertise, interpersonal abilities, and the cutting-edge tools I
            leverage to transform innovative ideas into reality.
          </p>
        </div>

        {/* Skills carousels */}
        <div className="space-y-20">
          <SkillCarousel title="Technical Skills" skills={technicalSkills} icon={Code} />
          <SkillCarousel title="Soft Skills" skills={softSkills} icon={Users} />
          <SkillCarousel title="Tools & Frameworks" skills={toolsFrameworks} icon={Wrench} />
        </div>
      </div>

      {/* Custom scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
