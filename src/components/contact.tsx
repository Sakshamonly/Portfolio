import { Mail, Linkedin, Github, User, Code, Award, Home } from "lucide-react"

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative w-full bg-white/20 backdrop-blur-lg border-t border-white/30 py-8 px-4 sm:px-6 lg:px-8">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {/* Contact Me Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-6 h-6" />
              Contact Me
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:saksham@example.com"
                className="flex items-center justify-center md:justify-start gap-3 text-blue-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 group hover:border-b-2 hover:border-red-500 pb-1"
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                <span className="text-sm">sp.saksham2004@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/saksham-pandey-546319282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-blue-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 group hover:border-b-2 hover:border-red-500 pb-1"
              >
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/Sakshamonly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-blue-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 group hover:border-b-2 hover:border-red-500 pb-1"
              >
                <Github className="w-5 h-5 group-hover:animate-pulse" />
                <span className="text-sm">GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center justify-center md:justify-start gap-2">
              <Home className="w-6 h-6" />
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="flex items-center justify-center md:justify-start gap-3 text-blue-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 group hover:border-b-2 hover:border-red-500 pb-1"
              >
                <User className="w-5 h-5 group-hover:animate-pulse" />
                <span id="about" className="text-sm">About</span>
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center md:justify-start gap-3 text-blue-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 group hover:border-b-2 hover:border-red-500 pb-1"
              >
                <Code className="w-5 h-5 group-hover:animate-pulse" />
                <span id="projects" className="text-sm">Projects</span>
              </a>

              <a
                href="#skills"
                className="flex items-center justify-center md:justify-start gap-3 text-blue-600 hover:text-gray-900 hover:scale-105 transition-all duration-300 group hover:border-b-2 hover:border-red-500 pb-1"
              >
                <Award className="w-5 h-5 group-hover:animate-pulse" />
                <span id="skills" className="text-sm">Skills</span>
              </a>
            </div>
          </div>

          {/* Motivational Message Section */}
          <div className="text-center lg:text-left md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{"Let's build something cool!"}</h3>
            <p className="text-blue-600 text-sm leading-relaxed">
              Ready to collaborate on your next project? I'm passionate about creating innovative solutions.
              <br/>
              Let's get that shit done together!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700">
            © {new Date().getFullYear()} Saksham Pandey. All rights reserved.
          </p>
          {/* <p className="text-xs mt-1 text-gray-500">Built with ❤️ using React & Tailwind CSS</p> */}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gray-100/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-100/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-100/5 rounded-full blur-xl"></div>
    </footer>
  )
}
