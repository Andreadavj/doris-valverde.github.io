const Education = () => {
  const education = [
    {
      degree: "Bootcamp Desarrollo Front-End",
      institution: "Desafío Latam",
      period: "2024 - 2025",
      description: "Formación intensiva en desarrollo web front-end, con enfoque en HTML, CSS, JavaScript y React.",
      skills: ["HTML", "CSS", "JavaScript", "React", "SQL", "Git"],
    },
    {
      degree: "Ingeniería en Construcción",
      institution: "Universidad Tecnológica Inacap",
      period: "2014 - 2019",
      description: "Formación en gestión de proyectos de construcción, materiales, estructuras y normativas.",
      skills: ["Gestión de Proyectos", "Cálculo Estructural", "Normativas"],
    },
  ]

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Formación</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <span className="timeline-period">{edu.period}</span>
                </div>
                <div className="timeline-company">{edu.institution}</div>
                <p className="timeline-description">{edu.description}</p>
                <div className="timeline-skills">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
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

export default Education
