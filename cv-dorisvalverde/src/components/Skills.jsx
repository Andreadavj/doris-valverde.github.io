const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      name: "Front-End",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      name: "Herramientas",
      skills: [
        { name: "Git", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 65 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      name: "Otros",
      skills: [
        { name: "SQL", level: 60 },
        { name: "Node.js (básico)", level: 50 },
        { name: "Vite", level: 75 },
        { name: "Metodologías Ágiles", level: 70 },
        { name: "Resolución de problemas", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Habilidades
          </span>
        </h2>
        <div className={`h-1 w-20 mb-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-6 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
