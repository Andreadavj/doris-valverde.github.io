import { Briefcase, Calendar } from "lucide-react"

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      title: "Desarrollo Front-End",
      company: "Desafío Latam",
      period: "2023",
      description:
        "Formación intensiva en desarrollo front-end con React. Creación de proyectos prácticos aplicando los conocimientos adquiridos en HTML, CSS, JavaScript y React.",
      type: "education",
    },
    {
      title: "SQL y Fundamentos de Back-End",
      company: "Desafío Latam",
      period: "2023",
      description:
        "Curso complementario sobre bases de datos SQL y conceptos básicos de desarrollo back-end para complementar mis habilidades de front-end.",
      type: "education",
    },
    {
      title: "Ingeniería en Construcción",
      company: "INACAP",
      period: "2015 - 2020",
      description:
        "Formación en ingeniería con enfoque en resolución de problemas, gestión de proyectos y trabajo en equipo. Desarrollo de habilidades analíticas y técnicas aplicables al desarrollo de software.",
      type: "education",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experiencia y Formación
          </span>
        </h2>
        <div className={`h-1 w-20 mb-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
          ></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} md:w-1/2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform -translate-x-1/2 md:translate-x-1/2">
                  {exp.type === "work" ? (
                    <Briefcase size={16} className="text-white" />
                  ) : (
                    <Calendar size={16} className="text-white" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 p-6 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center mt-1 mb-3">
                    <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                      {exp.company}
                    </span>
                    <span className={`mx-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>•</span>
                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{exp.period}</span>
                  </div>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
