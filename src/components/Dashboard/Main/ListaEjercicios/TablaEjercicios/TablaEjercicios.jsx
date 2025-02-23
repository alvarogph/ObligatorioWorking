import { useSelector } from "react-redux";
import TablaEjerciciosFila from "./TablaEjerciciosFila/TablaEjerciciosFila";


const TablaEjercicios = () => {
 const ejercicios = useSelector((state) => state.userSlice.ejercicios);
 console.log(ejercicios);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Ejercicio</th>
          <th>Minutos?</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
      {ejercicios.registros.map((ejercicio) => (
          <TablaEjerciciosFila
            key={ejercicio.id}
            id={ejercicio.id}
            fecha={ejercicio.fecha}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablaEjercicios;
