// backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Habilitar CORS (útil para desarrollo o llamadas externas)
app.use(cors());

// Ruta de ejemplo para el API
app.get('/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
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
