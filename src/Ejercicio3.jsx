import { useState } from 'react';

const ComponenteHijo = ({ onEnviarDato }) => {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      onEnviarDato(texto);
      setTexto('');
    }
  };

  return (
    <div style={{ border: '2px solid #0288d1', padding: '16px', borderRadius: '8px', marginTop: '14px', background: '#e1f5fe' }}>
      <h3 style={{ color: '#01579b', marginBottom: '8px' }}>Componente Hijo</h3>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Escribe un mensaje para el padre..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{ padding: '8px', width: '250px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 14px', cursor: 'pointer', backgroundColor: '#0288d1', color: 'white', border: 'none', borderRadius: '4px' }}>
          Enviar al Padre
        </button>
      </form>
    </div>
  );
};

export default function Ejercicio3() {
  const [datoRecibido, setDatoRecibido] = useState('Sin datos aún');

  return (
    <div style={{ border: '2px solid #333', padding: '20px', borderRadius: '8px', maxWidth: '550px', margin: '0 auto', background: '#ffffff' }}>
      <h2>Componente Padre</h2>
      <p style={{ marginTop: '8px' }}>
        <strong>Dato recibido en el padre:</strong>{' '}
        <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>{datoRecibido}</span>
      </p>
      
      <ComponenteHijo onEnviarDato={(nuevoDato) => setDatoRecibido(nuevoDato)} />
    </div>
  );
}