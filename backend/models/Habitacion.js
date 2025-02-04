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

// Crear una nueva habitación con su tipo
const crearHabitacion = async (nombre, descripcion, metros_cuadrados, tipo_id) => {
  const result = await pool.query(
    `INSERT INTO habitaciones (nombre, descripcion, metros_cuadrados, tipo_id) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [nombre, descripcion, metros_cuadrados, tipo_id]
  );
  return result.rows[0];
};

module.exports = { obtenerHabitaciones, crearHabitacion };
