// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // Carga las variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para permitir peticiones del frontend
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Configurar la conexión a la base de datos PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Esta variable la establecerás en Render
  ssl: {
    rejectUnauthorized: false
  }
});

// Endpoint para probar la conexión a la base de datos
app.get('/saludo', async (req, res) => {
  try {
    // Ejemplo: obtenemos la hora actual desde la base de datos
    const result = await pool.query('SELECT NOW()');
    res.json({ mensaje: '¡Hola desde el backend con PostgreSQL!', time: result.rows[0].now });
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

// Endpoint de prueba simple
app.get('/', (req, res) => {
  res.send('¡Hola mundo desde el backend!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
