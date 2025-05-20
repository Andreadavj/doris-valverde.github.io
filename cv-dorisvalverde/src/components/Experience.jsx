const Experience = () => {
  const experiences = [
    {
      title: "Desarrolladora Front-End",
      company: "Proyecto Freelance",
      period: "2024 - Presente",
      description:
        "Desarrollo de interfaces de usuario con React, implementación de diseños responsivos utilizando CSS avanzado (Flexbox, Grid), y consumo de APIs.",
      skills: ["React", "JavaScript", "CSS", "HTML", "API REST"],
    },
    {
      title: "Ingeniera en Construcción",
      company: "MALPO",
      period: "2022",
      description:
        "Oficina Técnica, ",
      skills: ["Estudio y planificación del proyecto", "Control de avance y calidad","Cubicaciones y presupuestos","Coordinación técnica"],
    },
    {
      title: "Ingeniera en Construcción",
      company: "Ingeniería y Construcción VYV.",
      period: "2020 - 2021",
      description:
        "Gestión de proyectos de construcción, supervisión de obras, y coordinación con equipos multidisciplinarios.",
      skills: ["Gestión de Proyectos", "Supervisión", "Coordinación de Equipos"],
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experiencia</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
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

export default Experience
