import { useMemo, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import products from '../../data/products.json'
import './Products.css'

const categories = [
  'Business Software',
  'Cloud Solutions',
  'Security Solutions',
]

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Toate' || product.categorie === selectedCategory

      const matchesSearch = product.nume
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const resetFilters = () => {
    setSelectedCategory('Toate')
    setSearchTerm('')
  }

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

        <div className="products-filters">
          <div className="products-filters__search">
            <label htmlFor="product-search">Caută produs</label>
            <input
              id="product-search"
              type="search"
              placeholder="Ex: Simplex CRM"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div className="products-filters__categories">
            <span>Categorie</span>

            <div className="products-filters__buttons">
              <button
                className={selectedCategory === 'Toate' ? 'active' : ''}
                type="button"
                onClick={() => setSelectedCategory('Toate')}
              >
                Toate
              </button>

              {categories.map((category) => (
                <button
                  className={selectedCategory === category ? 'active' : ''}
                  type="button"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <button
            className="products-filters__reset"
            type="button"
            onClick={resetFilters}
          >
            Resetează filtrele
          </button>
        </div>

        <p className="products-page__count">
          {filteredProducts.length} produse găsite
        </p>

        {filteredProducts.length > 0 ? (
          <div className="products-page__grid">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="products-page__empty">
            <h2>Nu am găsit produse</h2>
            <p>
              Încearcă un alt termen de căutare sau resetează filtrele pentru a
              vedea toate produsele disponibile.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products