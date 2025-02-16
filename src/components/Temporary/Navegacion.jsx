
import { useState } from "react";
import AgregarEjercicio from "./AgregarEjercicio";
import Historial from "./Historial";

 
  function Navegacion() {
    const [pestaniaActiva, setPestania] = useState("registro");
  
    return (
       
         <div>

        <div style={{ display: "flex", gap: "10px", padding: "10px", background: "#eee" }}>
          <button onClick={() => setPestania("registro")}>Agregar Registro</button>
          <button onClick={() => setPestania("historial")}>Historial</button>
          <button onClick={() => setPestania("estadisticas")}>Estadísticas</button>
          <button onClick={() => setPestania("graficos")}>Gráficos</button>xº
        </div>
  
        <div style={{ padding: "20px" }}>
          {pestaniaActiva === "registro" && <AgregarEjercicio />}
          {pestaniaActiva === "historial" && <Historial />}
          {/* {pestaniaActiva === "estadisticas" && <Statistics />}
          {pestaniaActiva === "graficos" && <Graphs />} */}
        </div>
        </div>
    );
  }

  export default Navegacion;