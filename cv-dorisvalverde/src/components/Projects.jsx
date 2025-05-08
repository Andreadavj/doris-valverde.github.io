import { ExternalLink, Github, Code } from "lucide-react"

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Proyecto 1",
      description:
        "Descripción del proyecto 1. Puedes reemplazar esto con la información de tus proyectos reales de GitHub.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Andreadavj/repo1",
      demo: "#",
    },
    {
      title: "Proyecto 2",
      description:
        "Descripción del proyecto 2. Puedes reemplazar esto con la información de tus proyectos reales de GitHub.",
      tags: ["React", "CSS", "API"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Andreadavj/repo2",
      demo: "#",
    },
    {
      title: "Proyecto 3",
      description:
        "Descripción del proyecto 3. Puedes reemplazar esto con la información de tus proyectos reales de GitHub.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/Andreadavj/repo3",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Proyectos</span>
        </h2>
        <div className={`h-1 w-20 mb-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                darkMode ? "bg-gray-800/50 shadow-gray-900/30" : "bg-white shadow-lg"
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-purple-600/80 text-white hover:bg-purple-500 transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs px-3 py-1 rounded-full flex items-center ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <Code size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Andreadavj?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg transition-all transform hover:-translate-y-1 ${
              darkMode ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <Github size={18} className="mr-2" />
            Ver más proyectos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
