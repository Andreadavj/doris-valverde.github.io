import { Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">© 2024 Doris Valverde Jara. Todos los derechos reservados.</p>
          <div className="footer-social">
            <a href="https://github.com/Andreadavj" className="social-link">
              <Github />
            </a>
            <a href="https://www.linkedin.com/feed/" className="social-link">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
