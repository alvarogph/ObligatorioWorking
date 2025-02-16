import Login from "./Login"; 
import Registro from "./Registro";
import { useEffect, useRef, useState } from "react";

function Principal() {

  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const ClickRegistro = () => {
    setMostrarRegistro(true);
  };

  const ClickLogin = () => {
    setMostrarRegistro(false);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Bienvenido a Movetracker</h1>
      <div className="card p-4 shadow">
      {mostrarRegistro ? (
        <div>
          <Registro />
          <p>¿Ya tienes cuenta? <button className="btn btn-primary" onClick={ClickLogin}>Inicia sesión</button></p>
        </div>
      ) : (
        <div>
          <Login />
          <p>¿No tienes cuenta?</p><br />
          <button className="btn btn-success" onClick={ClickRegistro}>Regístrate</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Principal;