import './About.css'

const values = [
  {
    title: 'Claritate',
    description:
      'Construim soluții ușor de înțeles, de folosit și de administrat pe termen lung.',
  },
  {
    title: 'Scalabilitate',
    description:
      'Gândim arhitecturi care pot crește odată cu echipele, datele și procesele clienților.',
  },
  {
    title: 'Securitate',
    description:
      'Tratăm protecția datelor ca o parte esențială a fiecărui produs digital.',
  },
]

const stats = [
  {
    value: '10+',
    label: 'produse IT',
  },
  {
    value: '3',
    label: 'direcții principale',
  },
  {
    value: '24/7',
    label: 'monitorizare servicii',
  },
]

function About() {
  return (
    <section className="about-page">
      <div className="about-hero section">
        <div className="container about-hero__container">
          <span className="about-page__label">Despre Simplex</span>

          <h1>Tehnologie construită pentru companii care vor să crească inteligent</h1>

          <p>
            Simplex dezvoltă produse software, soluții cloud și servicii de
            securitate IT pentru organizații care au nevoie de sisteme stabile,
            rapide și ușor de integrat în activitatea zilnică.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container about-story">
          <div>
            <span className="about-page__label">Misiunea noastră</span>
            <h2>Transformăm procesele complexe în experiențe digitale clare.</h2>
          </div>

          <div className="about-story__content">
            <p>
              Echipa Simplex creează produse care ajută companiile să gestioneze
              mai bine clienții, operațiunile, infrastructura și securitatea.
              Punem accent pe interfețe intuitive, performanță și flexibilitate.
            </p>

            <p>
              Fiecare soluție este proiectată pentru a susține decizii mai bune,
              automatizări eficiente și colaborare între echipe. De la aplicații
              de business până la servicii cloud și securitate, obiectivul
              nostru este să livrăm tehnologie practică, nu complexitate inutilă.
            </p>
          </div>
        </div>
      </div>

      <div className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Valorile Simplex</h2>
            <p>
              Principiile care ne ghidează în dezvoltarea produselor și în
              colaborarea cu fiecare client.
            </p>
          </div>

          <div className="grid-3">
            {values.map((value) => (
              <article className="about-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container about-stats">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About