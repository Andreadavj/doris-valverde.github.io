import { Heart, Github, Linkedin } from "lucide-react"

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`py-8 border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © {currentYear} Doris Valverde. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center">
            <p className={`text-sm mr-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Hecho con</p>
            <Heart size={16} className="text-pink-500 mr-2" />
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>usando React y Tailwind CSS</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
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
              <Github size={18} />
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
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
