"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes implementar la lógica para enviar el formulario
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Te contactaré pronto.")
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Contacto</span>
        </h2>
        <div className={`h-1 w-20 mb-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">¡Hablemos!</h3>
            <p className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Estoy interesada en oportunidades de trabajo como desarrolladora front-end. Si tienes alguna pregunta o
              quieres discutir un proyecto, no dudes en contactarme.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                  <Mail className={darkMode ? "text-purple-400" : "text-purple-600"} size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Email</h4>
                  <a
                    href="mailto:tu.email@ejemplo.com"
                    className={`${darkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}
                  >
                    tu.email@ejemplo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                  <Phone className={darkMode ? "text-purple-400" : "text-purple-600"} size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Teléfono</h4>
                  <a
                    href="tel:+56912345678"
                    className={`${darkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}
                  >
                    +56 9 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                  <MapPin className={darkMode ? "text-purple-400" : "text-purple-600"} size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Ubicación</h4>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
