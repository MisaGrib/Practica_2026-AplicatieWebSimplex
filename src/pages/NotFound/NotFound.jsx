import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found section">
      <div className="container not-found__container">
        <span className="not-found__code">404</span>

        <h1>Pagina nu a fost găsită</h1>

        <p>
          Linkul accesat nu există sau pagina a fost mutată. Poți reveni la
          pagina principală sau poți explora produsele Simplex.
        </p>

        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary btn--lg">
            Înapoi acasă
          </Link>

          <Link to="/products" className="btn btn--outline btn--lg">
            Vezi produsele
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound