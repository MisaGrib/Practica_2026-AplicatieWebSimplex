import { Link } from 'react-router-dom'
import './ProductCard.css'

function getCategoryClass(category) {
  if (category === 'Business Software') return 'badge--business'
  if (category === 'Cloud Solutions') return 'badge--cloud'
  if (category === 'Security Solutions') return 'badge--security'

  return ''
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.imagine}
        alt={product.nume}
      />

      <div className="product-card__body">
        <span className={`badge ${getCategoryClass(product.categorie)}`}>
          {product.categorie}
        </span>

        <h3 className="product-card__title">{product.nume}</h3>

        <p className="product-card__description">
          {product.descriere}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-card__link"
        >
          Vezi detalii
        </Link>
      </div>
    </article>
  )
}

export default ProductCard