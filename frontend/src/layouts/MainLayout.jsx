import { Outlet, Link } from 'react-router-dom'
import Footer from '@/components/Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* HEADER / NAVBAR */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">Vilca-home</Link>
          <div>
            <Link to="/" className="mx-2 text-gray-700">Inicio</Link>
            <Link to="/about" className="mx-2 text-gray-700">Acerca de</Link>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="flex-grow">
        {/* El <Outlet /> renderiza las páginas hijas definidas en las rutas */}
        <Outlet />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
