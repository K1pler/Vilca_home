import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import DepartmentsSection from "../components/DepartmentsSection";

export default function App() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://vilca-home.onrender.com/habitaciones") // Reemplaza con la URL real de tu backend
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data) => {
        setDepartments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener departamentos:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <DepartmentsSection departments={departments} loading={loading} error={error} />
      <Footer />
    </div>
  );
}
