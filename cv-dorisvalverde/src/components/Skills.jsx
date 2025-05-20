const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Flexbox", "Grid", "Media Query"],
    },
    {
      category: "Backend",
      technologies: ["SQL", "Node.js (básico)"],
    },
    {
      category: "Herramientas",
      technologies: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-list">
              {skillGroup.technologies.map((tech, i) => (
                <span key={i} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
