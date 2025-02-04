// frontend/src/App.jsx
import { useState } from 'react';

function App() {
  const [saludo, setSaludo] = useState('');

  // Función para obtener el saludo desde el backend
  const obtenerSaludo = async () => {
    try {
      const response = await fetch('https://vilca-home.onrender.com/saludo');
      const data = await response.json();
      setSaludo(`${data.mensaje}`);
    } catch (error) {
      console.error('Error al obtener el saludo:', error);
      setSaludo('Error al conectar con el backend');
    }
  };

  return (
    <div className="App">
      <h1>Prueba de Conexión</h1>
      <button onClick={obtenerSaludo}>Obtener saludo</button>
      {saludo && <p>{saludo}</p>}
    </div>
  );
}

export default App;
