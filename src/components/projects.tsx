"use client"

import { useState } from "react"
import { Github, ExternalLink, X } from "lucide-react"

interface Project {
  id: number
  title: string
  image: string
  description: string
  githubUrl: string
  deploymentUrl: string
}

const dummyProjects: Project[] = [
  {
    id: 1,
    title: "Ayura – Virtual Herbal Wellness",
    image: "/ayuralogo.png?height=300&width=400",
    description:
      "Ayura is an interactive web platform designed to educate users about AYUSH medicinal plants and promote herbal wellness. It features detailed plant information, themed plant explorations, a personalized herbal usage tracker, and a community forum for sharing insights. Built with a focus on user-friendly design and accessibility, Ayura brings traditional healing knowledge into a modern digital experience.",
    githubUrl: "https://github.com/Sakshamonly/SIH_2024",
    deploymentUrl: "#",
  },
  {
    id: 2,
    title: "WellSphere – Unified Healthcare Management System",
    image: "/wellsphere.png?height=300&width=400",
    description:
      "WellSphere is an AI-powered digital healthcare platform that connects doctors, patients, and hospitals through a unified ecosystem. It enables secure health record access, virtual consultations, appointment scheduling, and seamless data sharing. The system is designed to streamline communication, improve chronic care management, and enhance healthcare accessibility for all stakeholders.",
    githubUrl: "https://github.com/Sakshamonly/WellSphere",
    deploymentUrl: "#",
  },
  {
    id: 3,
    title: "Trendify – Your Personal Social Media Analyst",
    image: "/trendify.png?height=300&width=400",
    description:
      "Trendify is a GenAI-based social media intelligence platform designed for influencers and content creators. It allows users to upload their datasets and interact with a chatbot to receive personalized, AI-generated insights on engagement metrics. Built with React.js, Flask, and integrated with GPT via Langflow, Trendify transforms raw data into actionable strategies, making social media analysis intuitive, dynamic, and intelligent.",
    githubUrl: "https://github.com/username/weather-app",
    deploymentUrl: "https://weather-forecast-pro.vercel.app",
  },
  {
    id: 4,
    title: "Spiruveda – Wellness eCommerce Platform",
    image: "/placeholder.svg?height=300&width=400",
    description: 
        "I'm currently working on a freelance project for a wellness startup that sells Spirulina-based health products. The goal is to build a clean, conversion-driven eCommerce website using Next.js, Tailwind CSS, and AI-assisted development. I'm responsible for the entire frontend — from designing intuitive wireframes to coding scalable UI components. This project emphasizes performance, user engagement, and future scalability.",
    githubUrl: "https://github.com/username/social-analytics",
    deploymentUrl: "https://social-analytics-dashboard.vercel.app",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300) // Delay to allow animation
  }

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
            {/* <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div> */}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full rounded-full"></div>

          {/* Projects */}
          <div className="space-y-24">
            {dummyProjects.map((project, index) => (
              <div key={project.id} className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-20 shadow-lg"></div>

                {/* Project Card - Left Side */}
                {index % 2 === 0 && (
                  <>
                    <div className="w-1/2 pr-20">
                      <div
                        className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ml-auto max-w-md"
                        onClick={() => openModal(project)}
                      >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-300 transition-all duration-300">
                          {/* Project Image */}
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          </div>

                          {/* Project Info */}
                          <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                            <p className="text-blue-600 font-medium text-sm flex items-center gap-2">
                              Click to view details
                              <span className="text-lg">→</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Project Card - Right Side */}
                {index % 2 === 1 && (
                  <>
                    <div className="w-1/2 pl-20 ml-auto">
                      <div
                        className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-md"
                        onClick={() => openModal(project)}
                      >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-300 transition-all duration-300">
                          {/* Project Image */}
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          </div>

                          {/* Project Info */}
                          <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                            <p className="text-blue-600 font-medium text-sm flex items-center gap-2">
                              Click to view details
                              <span className="text-lg">→</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isModalOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div
            className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Body */}
            {selectedProject && (
              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-3xl font-bold text-gray-800 mb-6 pr-12">{selectedProject.title}</h3>

                {/* Project Description */}
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{selectedProject.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                  <a
                    href={selectedProject.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
