import { Routes, Route } from 'react-router-dom'

// Pagini
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

// Componente layout
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navbar apare pe toate paginile */}
      <Navbar />

      {/* Zona principală de conținut */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer apare pe toate paginile */}
      <Footer />
    </div>
  )
}

export default App