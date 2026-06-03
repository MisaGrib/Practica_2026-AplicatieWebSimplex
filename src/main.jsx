import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter oferă contextul de navigare întregii aplicații */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)