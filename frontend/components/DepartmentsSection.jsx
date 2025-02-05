import PropTypes from "prop-types";

const DepartmentsSection = ({ departments, loading, error }) => {
  if (loading) {
    return <p className="text-center text-gray-600">Cargando departamentos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error al cargar departamentos.</p>;
  }

  if (!departments || departments.length === 0) {
    return <p className="text-center text-gray-500">No hay departamentos disponibles.</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Departamentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-300 h-48 flex items-center justify-center">
              <span className="text-gray-500">[Imagen]</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{dept.nombre}</h3>
              <p className="text-gray-600">{dept.descripcion}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded">Ver detalles</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

DepartmentsSection.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Usar id como clave única
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default DepartmentsSection;
