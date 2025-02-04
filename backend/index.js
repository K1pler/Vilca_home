const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;
const { obtenerHabitaciones } = require('./models/Habitacion');
const pool = require('./db'); // Importar la conexión a PostgreSQL

// Habilitar CORS
app.use(cors());
app.use(express.json()); // Para manejar JSON en peticiones POST

// Ruta de prueba
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

// Redirigir cualquier otra ruta a index.html (para SPA - Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
