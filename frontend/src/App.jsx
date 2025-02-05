// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
// Puedes agregar más páginas según necesites

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">Vilca-home</Link>
          <div>
            <Link to="/" className="mx-2 text-gray-700">Inicio</Link>
            <Link to="/about" className="mx-2 text-gray-700">Acerca de</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Otras rutas pueden usar un componente simple que solo incluya el Footer */}
      </Routes>
    </div>
  );
}
