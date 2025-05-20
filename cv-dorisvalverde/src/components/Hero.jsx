import { FileText } from "lucide-react"
import aimg from "../assets/img/a.jpg";

const Hero = ({ darkMode }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hola, soy</span>
            <span className="name">Doris Valverde Jara</span>
          </h1>
          <h2 className="hero-subtitle">Desarrolladora Front-End</h2>
          <p className="hero-description">
            Ingeniera en Construcción reconvertida al desarrollo web. Especializada en crear experiencias digitales
            atractivas y funcionales con React y tecnologías modernas de front-end.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="contact-button">
              Contáctame
            </a>
            {/* <a href="#" className="cv-button">
              Descargar CV <FileText className="icon" />
            </a> */}
          </div>
        </div>
        <div className="hero-image-container">
          <div className="profile-image-border">
            <img src={aimg} alt="Doris Valverde" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
