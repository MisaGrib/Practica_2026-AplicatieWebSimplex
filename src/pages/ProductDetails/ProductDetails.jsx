import { Link, useParams } from 'react-router-dom'
import products from '../../data/products.json'
import './ProductDetails.css'

function getCategoryClass(category) {
  if (category === 'Business Software') return 'badge--business'
  if (category === 'Cloud Solutions') return 'badge--cloud'
  if (category === 'Security Solutions') return 'badge--security'

  return ''
}

function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <section className="product-details product-details--empty section">
        <div className="container">
          <h1>Produsul nu a fost găsit</h1>
          <p>
            Produsul pe care îl cauți nu există sau linkul accesat nu mai este
            disponibil.
          </p>

          <Link to="/products" className="btn btn--primary btn--lg">
            Înapoi la catalog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="product-details section">
      <div className="container">
        <Link to="/products" className="product-details__back">
          Înapoi la catalog
        </Link>

        <div className="product-details__layout">
          <div className="product-details__image-wrap">
            <img
              className="product-details__image"
              src={product.imagine}
              alt={product.nume}
            />
          </div>

          <div className="product-details__content">
            <span className={`badge ${getCategoryClass(product.categorie)}`}>
              {product.categorie}
            </span>

            <h1>{product.nume}</h1>

            <p className="product-details__description">
              {product.descriere}
            </p>

            <div className="product-details__features">
              <h2>Caracteristici principale</h2>

              <ul>
                {product.caracteristici.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <Link to="/contact" className="btn btn--primary btn--lg">
              Solicită o ofertă
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails