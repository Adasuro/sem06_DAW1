import './Ejercicio2.css';

const Componente4 = ({ usuario }) => (
  <div className="box comp4">
    <h4>Componente 4</h4>
    <div className="user-card">
      <h3 style={{ margin: '0 0 10px 0' }}>Datos del Usuario</h3>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Dirección:</strong> {usuario.direccion}</p>
      <p><strong>Ciudad:</strong> {usuario.ciudad}</p>
    </div>
  </div>
);

const Componente3 = ({ usuario }) => (
  <div className="box comp3">
    <h4>Componente 3</h4>
    <Componente4 usuario={usuario} />
  </div>
);

const Componente2 = ({ usuario }) => (
  <div className="box comp2">
    <h4>Componente 2</h4>
    <Componente3 usuario={usuario} />
  </div>
);

export default function Ejercicio2() {
  const usuario = {
    nombre: "Jaime",
    direccion: "Jr. Junin 450",
    ciudad: "Huancayo"
  };

  return (
    <div className="box comp1">
      <h4>Componente 1</h4>
      <Componente2 usuario={usuario} />
    </div>
  );
}