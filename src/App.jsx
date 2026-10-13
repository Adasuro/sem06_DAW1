import { useState } from 'react';
import Ejercicio1 from './Ejercicio1';
import Ejercicio2 from './Ejercicio2';
import Ejercicio3 from './Ejercicio3';
import Ejercicio4 from './Ejercicio4';
import Ejercicio5 from './Ejercicio5';

export default function App() {
  const [tab, setTab] = useState(1);

  return (
    <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '1.8rem' }}>
        Laboratorio: Práctica con Componentes React
      </h1>
      
      {/* Botonera de navegación */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setTab(num)}
            style={{
              padding: '10px 20px',
              backgroundColor: tab === num ? '#2563eb' : '#e2e8f0',
              color: tab === num ? '#ffffff' : '#334155',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px'
            }}
          >
            Ejercicio {num}
          </button>
        ))}
      </div>

      {/* Contenedor del ejercicio activo */}
      <main style={{ minHeight: '400px' }}>
        {tab === 1 && <Ejercicio1 />}
        {tab === 2 && <Ejercicio2 />}
        {tab === 3 && <Ejercicio3 />}
        {tab === 4 && <Ejercicio4 />}
        {tab === 5 && <Ejercicio5 />}
      </main>
    </div>
  );
}