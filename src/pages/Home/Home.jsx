import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero.png'
import './Home.css'

function Home() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">Companie IT pentru afaceri moderne</span>

          <h1 className="hero__title">
            Solutii digitale simple, scalabile si sigure pentru compania ta
          </h1>

          <p className="hero__description">
            Simplex dezvolta produse software, solutii cloud si servicii de
            securitate IT care ajuta companiile sa lucreze mai eficient.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary btn--lg">
              Vezi produsele
            </Link>

            <Link to="/contact" className="btn btn--outline btn--lg">
              Contacteaza-ne
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <img src={heroImage} alt="Simplex digital platform preview" />
        </div>
      </div>
    </section>
  )
}

export default Home