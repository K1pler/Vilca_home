const pool = require('../db'); // Conexión a PostgreSQL

// Obtener todas las habitaciones (sin JOIN, solo la tabla habitaciones)
const obtenerHabitaciones = async () => {
  const result = await pool.query(`
    SELECT id, nombre, descripcion, metros_cuadrados, id 
    FROM habitaciones
  `);
  return result.rows;
};

module.exports = { obtenerHabitaciones };
