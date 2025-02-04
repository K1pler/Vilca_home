const pool = require('../db'); // Conexión a PostgreSQL

// Obtener todas las habitaciones con su tipo
const obtenerHabitaciones = async () => {
  const result = await pool.query(`
    SELECT h.id, h.nombre, h.descripcion, h.metros_cuadrados, t.nombre AS tipo 
    FROM habitaciones h
    JOIN tipos_habitaciones t ON h.tipo_id = t.id
  `);
  return result.rows;
};

module.exports = { obtenerHabitaciones };
