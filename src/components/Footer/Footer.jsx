import { Link } from 'react-router-dom'
import './Footer.css'

/**
 * Footer global al aplicației Simplex.
 * Conține: logo, descriere, linkuri rapide, contact, copyright.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        {/* Rândul principal cu coloane */}
        <div className="footer__grid">

          {/* Coloana 1 — Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">⬡</span>
              <span>Simplex</span>
            </Link>
            <p className="footer__tagline">
              Soluții IT moderne pentru afaceri în creștere.
              Transformăm tehnologia în avantaj competitiv.
            </p>
          </div>

          {/* Coloana 2 — Navigare rapidă */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigare</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Produse</Link></li>
              <li><Link to="/about">Despre noi</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Coloana 3 — Categorii produse */}
          <div className="footer__col">
            <h4 className="footer__col-title">Produse</h4>
            <ul className="footer__links">
              <li><Link to="/products">Business Software</Link></li>
              <li><Link to="/products">Cloud Solutions</Link></li>
              <li><Link to="/products">Security Solutions</Link></li>
            </ul>
          </div>

          {/* Coloana 4 — Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-icon">📍</span>
                Bd. Dacia 42, Chișinău
              </li>
              <li>
                <span className="footer__contact-icon">📧</span>
                contact@simplex.io
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                +373 6558 1234
              </li>
            </ul>
          </div>

        </div>

        {/* Linie separator */}
        <div className="footer__divider" />

        {/* Copyright */}
        <div className="footer__bottom">
          <p>© {currentYear} Simplex. Toate drepturile rezervate.</p>
          
        </div>

      </div>
    </footer>
  )
}

export default Footer