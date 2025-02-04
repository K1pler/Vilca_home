const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Render usa esta variable de entorno
  ssl: { rejectUnauthorized: false } // Necesario para conexiones seguras en Neon
});

pool.connect()
  .then(() => console.log('🔥 Conectado a PostgreSQL en Neon'))
  .catch(error => console.error('❌ Error al conectar PostgreSQL:', error));

module.exports = pool;
