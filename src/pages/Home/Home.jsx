import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero.png'
import services from '../../data/services.json'
import benefits from '../../data/benefits.json'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__content">
            <span className="hero__eyebrow">
              Companie IT pentru afaceri moderne
            </span>

            <h1 className="hero__title">
              Soluții digitale simple, scalabile și sigure pentru compania ta
            </h1>

            <p className="hero__description">
              Simplex dezvoltă produse software, soluții cloud și servicii de
              securitate IT care ajută companiile să lucreze mai eficient.
            </p>

            <div className="hero__actions">
              <Link to="/products" className="btn btn--primary btn--lg">
                Vezi produsele
              </Link>

              <Link to="/contact" className="btn btn--outline btn--lg">
                Contactează-ne
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <img src={heroImage} alt="Previzualizare platformă digitală Simplex" />
          </div>
        </div>
      </section>

      <section className="section home-about">
        <div className="container home-about__container">
          <div>
            <span className="home-section-label">Despre Simplex</span>
            <h2>Construim tehnologie utilă pentru companii în creștere.</h2>
          </div>

          <p>
            Simplex este o companie IT specializată în produse software,
            servicii cloud și soluții de securitate. Misiunea noastră este să
            transformăm procesele complexe în instrumente digitale clare,
            rapide și ușor de folosit.
          </p>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Servicii principale</h2>
            <p>
              Oferim servicii IT care acoperă dezvoltarea, infrastructura și
              securitatea produselor digitale.
            </p>
          </div>

          <div className="grid-3">
            {services.map((service) => (
              <article className="home-card" key={service.id}>
                <img
                  className="home-card__image"
                  src={service.imagine}
                  alt={service.titlu}
                />

                <div className="home-card__content">
                  <span className="home-card__number">0{service.id}</span>
                  <h3>{service.titlu}</h3>
                  <p>{service.descriere}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>De ce Simplex?</h2>
            <p>
              Produsele noastre sunt gândite pentru echipe care au nevoie de
              soluții stabile, clare și pregătite pentru scalare.
            </p>
          </div>

          <div className="grid-4">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.id}>
                <h3>{benefit.titlu}</h3>
                <p>{benefit.descriere}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home