import './Ejercicio5.css';

const estudiantesData = [
  { id: 1, name: 'Jose Lazo', city: 'Huancayo' },
  { id: 2, name: 'Ana Trelles', city: 'Lima' },
  { id: 3, name: 'Pedro Gonzales', city: 'Arequipa' },
  { id: 4, name: 'Rosa Soto', city: 'Trujillo' }
];

export default function Ejercicio5() {
  const handleVer = (estudiante) => {
    alert(`Estudiante seleccionado:\nID: ${estudiante.id}\nNombre: ${estudiante.name}\nCiudad: ${estudiante.city}`);
  };

  return (
    <div className="table-wrapper">
      <h2 className="table-title">Lista de estudiantes</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {estudiantesData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>
                <button className="btn-action" onClick={() => handleVer(item)}>
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}