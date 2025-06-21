interface Certification {
  id: number
  title: string
  issuer: string
  logo: string
  verifyUrl: string
  color: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals AZ-900 Exam Prep",
    issuer: "Microsoft",
    logo: "/MS.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/T182PVYLQUGN",
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 2,
    title: "Project Planning: Putting It All Together",
    issuer: "Google",
    logo: "/G.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/HDF6QR8395S1",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    title: "Computer Networks and Network Security",
    issuer: "IBM",
    logo: "/IBM.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/KMTO4MQIV3F7",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: 4,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    logo: "/meta.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/VAVQ99KKSMHX",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 5,
    title: "Google AI Essentials",
    issuer: "Google",
    logo: "/G.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/ZSCK459EUC4X",
    color: "from-green-400 to-green-600",
  },
  {
    id: 6,
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    logo: "/IBM.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/FF570UF4ZS7R",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 7,
    title: "Operating Systems and You: Becoming a Power User",
    issuer: "Google",
    logo: "/G.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/NPN6YLJCCNHM",
    color: "from-blue-400 to-blue-700",
  },
  {
    id: 8,
    title: "Improving Deep Neural Networks",
    issuer: "DeepLearningAI",
    logo: "/deep.png?height=60&width=60",
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/8CTXUK9YRZ9W",
    color: "from-purple-500 to-pink-600",
  },
//   {
//     id: 9,
//     title: "Jenkins Engineer",
//     issuer: "CloudBees",
//     logo: "/placeholder.svg?height=60&width=60",
//     verifyUrl: "https://www.cloudbees.com/jenkins/certification",
//     color: "from-red-400 to-red-600",
//   },
//   {
//     id: 10,
//     title: "Scrum Master",
//     issuer: "Scrum Alliance",
//     logo: "/placeholder.svg?height=60&width=60",
//     verifyUrl: "https://www.scrumalliance.org/get-certified",
//     color: "from-yellow-400 to-orange-500",
//   },
//   {
//     id: 11,
//     title: "GitHub Actions",
//     issuer: "GitHub",
//     logo: "/placeholder.svg?height=60&width=60",
//     verifyUrl: "https://github.com/certification",
//     color: "from-gray-600 to-gray-800",
//   },
//   {
//     id: 12,
//     title: "Node.js Developer",
//     issuer: "OpenJS Foundation",
//     logo: "/placeholder.svg?height=60&width=60",
//     verifyUrl: "https://openjsf.org/certification",
//     color: "from-green-500 to-green-700",
//   },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          {/* <p className="text-gray-600 text-lg">Professional certifications and achievements</p> */}
        </div>

        {/* Certifications Grid - 4 columns, 3 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 overflow-hidden cursor-pointer transform hover:scale-110 hover:-rotate-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Floating particles effect */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

              {/* Logo with enhanced hover effect */}
              <div className="flex justify-center mb-4 relative">
                <div className="relative group-hover:scale-100 transition-transform duration-100">
                  <img
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.issuer} logo`}
                    className="w-16 h-16 object-contain rounded-xl group-hover:shadow-lg transition-shadow duration-100"
                  />
                  {/* Glow effect behind logo */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}
                  />
                </div>
              </div>

              {/* Certification Title with color transition */}
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {cert.title}
              </h3>

              {/* Issuer with slide up effect */}
              <p className="text-gray-600 text-center mb-6 text-sm transform group-hover:-translate-y-1 transition-transform duration-300">
                Issued by {cert.issuer}
              </p>

              {/* Enhanced Verify Button */}
              <div className="flex justify-center">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative inline-flex items-center px-6 py-3 bg-gradient-to-r ${cert.color} text-white font-semibold text-sm rounded-xl hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-pulse" />

                  <svg
                    className="w-4 h-4 mr-2 transform group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span className="relative z-10">Verify</span>
                </a>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-100 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Enhanced bottom note with animation
        <div className="text-center mt-16">
          <div className="inline-block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-gray-600 text-sm flex items-center justify-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Click "Verify" to authenticate these certifications on official issuer websites
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
