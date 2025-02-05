
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div>
      {/* Contenido específico de la página "Acerca de" */}
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center">Acerca de Nosotros</h1>
        <p className="text-center mt-4">Aquí va la información sobre nuestro proyecto.</p>
      </div>
      {/* Solo se mantiene el Footer al final */}
      <Footer />
    </div>
  );
}
