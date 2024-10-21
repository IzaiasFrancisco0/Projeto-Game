import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'; // Importa o React Router
import App from './App.jsx'
import './index.css'
import Container from './components/Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HashRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Rota inicial */}
        <Route path="/blank" element={<Container />} /> {/* Rota para a página em branco */}
      </Routes>
    </HashRouter>
  </StrictMode>,
)
