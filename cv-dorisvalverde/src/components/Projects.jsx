import { Github, ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Sitio web personal desarrollado con React y CSS avanzado para mostrar mis proyectos y habilidades.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/Andreadavj/doris-valverde.github.io",
      demo: "https://andreadavj.github.io/doris-valverde.github.io/",
      image: "/images/project1.png",
    },
    {
      title: "Aplicación de Tareas",
      description: "Aplicación para gestionar tareas diarias con funcionalidades de crear, editar y eliminar tareas.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      demo: "#",
      image: "/images/project2.png",
    },
    {
      title: "E-commerce",
      description: "Tienda en línea con catálogo de productos, carrito de compras y proceso de pago.",
      technologies: ["React", "JavaScript", "CSS", "API"],
      github: "#",
      demo: "#",
      image: "/images/project3.png",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="Ver código en GitHub">
                      <Github />
                    </a>
                    <a href={project.demo} className="project-link" aria-label="Ver demo">
                      <ExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
