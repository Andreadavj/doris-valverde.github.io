import { Code, Building, GraduationCap } from "lucide-react"

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Sobre mí</span>
        </h2>
        <div className={`h-1 w-20 mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>

        <div className={`p-6 rounded-xl mb-8 ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
          <p className={`text-lg mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Soy una desarrolladora front-end con formación en Ingeniería en Construcción, lo que me ha brindado una
            perspectiva única para resolver problemas y crear soluciones estructuradas y eficientes.
          </p>
          <p className={`text-lg mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Mi transición al desarrollo web comenzó con mi pasión por crear experiencias digitales atractivas y
            funcionales. Me especializo en React y tecnologías modernas de front-end, con conocimientos en SQL y
            fundamentos de back-end.
          </p>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Busco oportunidades para aplicar mis habilidades técnicas y mi experiencia en resolución de problemas en
            proyectos desafiantes que me permitan seguir creciendo como desarrolladora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Desarrollo</h3>
            </div>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Especializada en React, JavaScript, HTML5, CSS3 y Tailwind CSS. Experiencia en desarrollo de interfaces
              responsivas y accesibles.
            </p>
          </div>

          <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 mr-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Educación</h3>
            </div>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Ingeniería en Construcción - INACAP
              <br />
              Desarrollo Front-End - Desafío Latam
              <br />
              SQL y fundamentos de Back-End
            </p>
          </div>

          <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 mr-4">
                <Building size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Experiencia</h3>
            </div>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Proyectos de desarrollo web con React
              <br />
              Experiencia previa en ingeniería
              <br />
              Enfoque en soluciones estructuradas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
