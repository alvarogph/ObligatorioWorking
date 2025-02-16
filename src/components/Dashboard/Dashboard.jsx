import { useState } from "react";
//import ListaEjercicios from "./Dashboard/ListaEjercicios";
import Header from "./Header/Header";
// import AgregarEjercicio from "./Dashboard/AgregarEjercicio";
//import Navegacion from "./Dashboard/Navegacion";

 
function Dashboard() {

  const [usuario] = useState({ name: "Alvaro Pérez" });

  const cerrarSesion = () => {// funcionalidad cerrar sesion;
  };



  return (
    
    <div>
      <Header user={usuario} cierreSesion={cerrarSesion} />
    </div>
  );
}

export default Dashboard