import { Github, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>¡Hablemos!</h3>
          <p>
            Estoy interesada en oportunidades de trabajo como desarrolladora front-end. Si tienes alguna pregunta o
            quieres conversar, no dudes en contactarme.
          </p>
          <div className="contact-links">
            <a href="mailto:dorisvalverde@gmail.com" className="contact-link">
              andrea.avj03@gmail.com
            </a>
            <a href="tel: +56968021126 " className="contact-link">
              +56 9 6802 1126
            </a>
            <div className="social-links">
              <a href="https://github.com/Andreadavj" className="social-link">
                <Github />
              </a>
              <a href="https://www.linkedin.com/feed/" className="social-link">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
