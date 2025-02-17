//import Dashboard from "../Dashboard";
import { useState } from "react";
import Login from "../../AuthPage/Login/Login";

function Header({ user, onLogout }) {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#007bff", color: "white" }}>
       <h2>Bienvenido, {user.name}</h2>
       <button onClick={onLogout} style={{ background: "red", color: "white", border: "none", padding: "5px 10px" }}>
        Cerrar Sesión
      </button>
      </header>
    );
  }

  export default Header;