import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

/**
 * Navbar principal al aplicației Simplex.
 * - Efect de scroll: devine solid când user-ul scrollează
 * - Meniu hamburger pentru mobile
 * - NavLink marchează automat linkul activ
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detectează scroll-ul pentru a schimba stilul navbar-ului
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup: eliminăm event listener-ul când componenta se demontează
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Închide meniul când user-ul navighează pe o altă pagină
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">⬡</span>
          <span className="navbar__logo-text">Simplex</span>
        </Link>

        {/* Linkuri navigare — desktop */}
        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <NavLink to="/" end className="navbar__link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className="navbar__link" onClick={closeMenu}>
            Products
          </NavLink>
          <NavLink to="/about" className="navbar__link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className="navbar__link navbar__link--cta" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Buton hamburger — doar pe mobile */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}

export default Navbar