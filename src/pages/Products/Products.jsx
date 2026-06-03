import ProductCard from '../../components/ProductCard/ProductCard'
import products from '../../data/products.json'
import './Products.css'

function Products() {
  return (
    <section className="products-page section">
      <div className="container">
        <div className="products-page__header">
          <span className="products-page__label">Catalog Simplex</span>

          <h1>Produse IT pentru companii moderne</h1>

          <p>
            Explorează soluțiile Simplex pentru software de business, cloud și
            securitate IT. Fiecare produs este conceput pentru echipe care au
            nevoie de instrumente clare, stabile și eficiente.
          </p>
        </div>

        <div className="products-page__grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products