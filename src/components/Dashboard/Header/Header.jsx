//import Dashboard from "../Dashboard";
import { useState } from "react";
import Login from "../../AuthPage/Login/Login";
import { useNavigate } from "react-router-dom";

function Header({ onLogout }) {
  const navigate = useNavigate();

  const CerrarSesion = () => {
    localStorage.clear();
    navigate("/login");
  };
  
  const credenciales = JSON.parse(localStorage.getItem("credenciales"));
  console.log(credenciales.usuario)

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#007bff",
        color: "white",
      }}
    >
      <h2>Bienvenido, {credenciales.usuario  } </h2>
      <button
        onClick={CerrarSesion}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
        }}
      >
        Cerrar Sesión
      </button>
    </header>
  );
}

export default Header;
