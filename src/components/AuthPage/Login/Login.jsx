import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import Button from "../../UI/Button/Button";

const Login = ({ onLogin }) => {
  const [credenciales, setCredenciales] = useState({
    usuario: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const cambiosInputLogin = (element) => {
    const { name, value } = element.target;
    setCredenciales({ ...credenciales, [name]: value });
  };

  const handleSubmit = async (login) => {
    login.preventDefault();
    if (!credenciales.usuario || !credenciales.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("https://movetrack.develotion.com/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciales),
      });

      const data = await response.json();

      if (data.codigo !== 200) {
        setError("Credenciales incorrectas");
        return;
      }

      onLogin(data); // Guarda Datos de inicio en LocalStorage
      navigate("/dashboard");

    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="usuario"
          placeholder="Nombre de usuario"
          value={credenciales.usuario}
          onChange={cambiosInputLogin}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credenciales.password}
          onChange={cambiosInputLogin}
        />
        <Button type="submit">Iniciar Sesión</Button>
      </form>

      {/* Botón para ir a la página de registro */}
      <p className="register-link">
        ¿Aún no tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;