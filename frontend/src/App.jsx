// frontend/src/App.jsx
import { useState } from 'react';

function App() {
  const [saludo, setSaludo] = useState('');

  // Función para obtener el saludo desde el backend
  const obtenerSaludo = async () => {
    try {
      // Durante el desarrollo usas localhost; luego actualizarás esta URL con la del backend desplegado
      const response = await fetch('http://localhost:3000/saludo');
      const data = await response.json();
      setSaludo(`${data.mensaje} - ${data.time}`);
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
