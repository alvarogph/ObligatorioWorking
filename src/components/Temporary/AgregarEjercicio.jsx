function AgregarEjercicio() {
  return (
    <div>
      <h2>Agregar Ejercicio</h2>
      <input type="text" placeholder="Actividad" /><br />
      <input type="number" placeholder="Tiempo en minutos" /><br />
      <input type="date" /><br />
      <button className="btn btn-success">Agregar</button>
    </div>
  );
}

export default AgregarEjercicio;