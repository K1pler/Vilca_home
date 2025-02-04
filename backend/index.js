// backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;
const { Pool } = require('pg');
const express = require('express');
const { obtenerHabitaciones, crearHabitacion } = require('./models/Habitacion');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_JXhD47cYQpLM@ep-holy-flower-a9dwddes-pooler.gwc.azure.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false } // Importante para conexiones seguras
});

pool.connect()
  .then(() => console.log('🔥 Conectado a PostgreSQL en Neon'))
  .catch(error => console.error('❌ Error al conectar PostgreSQL:', error));

module.exports = pool;

// Habilitar CORS (útil para desarrollo o llamadas externas)
app.use(cors());

// Ruta de ejemplo para el API
app.get('/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

// Obtener todas las habitaciones
app.get('/habitaciones', async (req, res) => {
  try {
    const habitaciones = await obtenerHabitaciones();
    res.json(habitaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener habitaciones' });
  }
});

// Servir archivos estáticos generados por el build del frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Redirigir cualquier otra ruta a index.html (para SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
