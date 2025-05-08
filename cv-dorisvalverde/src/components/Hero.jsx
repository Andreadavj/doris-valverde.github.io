import { GitlabIcon as GitHub, Linkedin, FileText, ArrowDown } from "lucide-react"

const Hero = ({ darkMode }) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hola, soy</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Doris Valverde
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Desarrolladora Front-End
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Ingeniera en Construcción reconvertida al desarrollo web. Especializada en crear experiencias digitales
            atractivas y funcionales con React y tecnologías modernas de front-end.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contáctame
            </a>
            <a
              href="#projects"
              className={`px-6 py-3 font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
                darkMode ? "bg-gray-800 text-gray-200 hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Ver proyectos
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a
              href="https://github.com/Andreadavj"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dorisvalverde/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="Descargar CV"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
            <div
              className={`absolute inset-1 rounded-full ${darkMode ? "bg-gray-900" : "bg-gray-50"} flex items-center justify-center`}
            >
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Doris Valverde"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a
          href="#about"
          className={`animate-bounce p-2 rounded-full ${
            darkMode
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}

export default Hero
