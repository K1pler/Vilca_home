// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import MainLayout from '@/layouts/MainLayout'
// Puedes agregar más páginas según necesites

export default function App() {
  return (
    <Routes>
      {/* RUTA PADRE con Layout */}
      <Route element={<MainLayout />}>
        {/* RUTAS HIJAS */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Puedes agregar más rutas hijas aquí */}
      </Route>
    </Routes>
  )
}