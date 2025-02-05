// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Convierte import.meta.url a una ruta de archivo
const __filename = fileURLToPath(import.meta.url);
// Obtén el directorio del archivo actual
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', 
  resolve: {
    alias: {
      '@': __dirname + '/src',
    },
  }, // Asegura que funcione bien en Render
});
