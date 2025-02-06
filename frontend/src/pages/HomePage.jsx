// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import DepartmentsSection from "@/components/DepartmentsSection";

export default function HomePage() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://vilca-home.onrender.com/habitaciones")
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
    <div>
      <HeroSection />
      <DepartmentsSection 
        departments={departments} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
}
