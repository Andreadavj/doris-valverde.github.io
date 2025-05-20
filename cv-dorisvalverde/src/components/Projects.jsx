import { Github, ExternalLink } from "lucide-react";
import jwtImg from "../assets/img/jwt.jpg";
import apiImg from "../assets/img/consumoapi.jpg";
import jsImg from "../assets/img/js.jpg";
import cssImg from "../assets/img/css.jpg";
import backendImg from "../assets/img/backend.jpeg";

const Projects = () => {
  const projects = [
    
    {
    title: " css",
    description: "Galería interactiva con animaciones avanzadas utilizando solo HTML y CSS para mejorar la experiencia visual.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Andreadavj/doris-valverde.github.io",
    demo: "https://github.com/Andreadavj/css-animaciones",
    image: cssImg,
  },
  {
    title: " Conversor de Monedas",
    description: "Aplicación en JavaScript que consume una API para convertir monedas en tiempo real, con diseño responsivo.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Andreadavj/doris-valverde.github.io",
    demo: "https://github.com/Andreadavj/javascript-API",
    image: jsImg,
  },
  {
    title: "API",
    description:  "Proyecto React que muestra un listado de productos usando datos externos desde una API, con diseño moderno y carrito de compras.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    github: "https://github.com/Andreadavj",
    demo: "https://github.com/Andreadavj/react-api",
    image: apiImg, 
  },
  {
    title: "JWT",
    description: "Aplicación fullstack que implementa autenticación de usuarios con JSON Web Tokens, rutas protegidas y CRUD de tareas.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    github: "https://github.com/Andreadavj",
    demo: "https://github.com/Andreadavj/react-jwt",
    image: jwtImg, 
  },{
    title: " Backend",
    description: "Servidor desarrollado con Express y PostgreSQL para gestionar publicaciones de una red social tipo 'Like Me'. Incluye rutas REST y manejo de errores.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Andreadavj",
    demo: "https://github.com/Andreadavj/backend-likemill",
    image: backendImg,
  },
];


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
