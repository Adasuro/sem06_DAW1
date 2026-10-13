import { useState } from 'react';

const Hermano1 = ({ onActualizarPersona }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    onActualizarPersona({ nombre, apellido });
  };

  return (
    <div style={{ background: '#e3f2fd', padding: '16px', borderRadius: '8px', flex: 1, border: '1px solid #90caf9' }}>
      <h3 style={{ color: '#0d47a1', marginBottom: '8px' }}>Hermano 1 (Emisor)</h3>
      <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px' }}>
          Transferir a Hermano 2
        </button>
      </form>
    </div>
  );
};

const Hermano2 = ({ persona }) => (
  <div style={{ background: '#fff3e0', padding: '16px', borderRadius: '8px', flex: 1, border: '1px solid #ffcc80' }}>
    <h3 style={{ color: '#e65100', marginBottom: '8px' }}>Hermano 2 (Receptor)</h3>
    <p style={{ marginTop: '8px' }}><strong>Nombre:</strong> {persona.nombre || '—'}</p>
    <p style={{ marginTop: '4px' }}><strong>Apellido:</strong> {persona.apellido || '—'}</p>
  </div>
);

export default function Ejercicio4() {
  const [persona, setPersona] = useState({ nombre: '', apellido: '' });

  return (
    <div style={{ border: '2px solid #555', padding: '20px', borderRadius: '8px', maxWidth: '650px', margin: '0 auto', background: '#fff' }}>
      <h2>Componente Padre (Gestor de Estado)</h2>
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <Hermano1 onActualizarPersona={setPersona} />
        <Hermano2 persona={persona} />
      </div>
    </div>
  );
}