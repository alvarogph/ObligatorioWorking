import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationStart, registrationSuccess, registrationFailure } from "../../../app/slices/userSlice";
import Button from "../../UI/Button/Button"; // Ajusta la ruta según tu estructura
import "./Registro.css";

const Registro = () => {
  const [paises, setPaises] = useState([]); // Estado para almacenar la lista de países
  const [datosRegistro, setdatosRegistro] = useState({
    usuario: "",
    password: "",
    idPais: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSubmitting, error } = useSelector((state) => state.registro);

  // Obtener la lista de países al cargar el componente
  useEffect(() => {
    const arrayPaises = async () => {
      try {
        const response = await fetch("https://movetrack.develotion.com/paises.php");
        if (!response.ok) {
          throw new Error("Error al obtener la lista de países");
        }
        const data = await response.json();
        setPaises(data.paises);
      } catch (error) {
        dispatch(registrationFailure("No se pudo cargar la lista de países"));
        console.error(error);
      }
    };
    arrayPaises();
  }, [dispatch]);

  // Manejar cambios en los campos del formulario
  const cambiosFormulario = (element) => {
    const { name, value } = element.target;
    setdatosRegistro({
      ...datosRegistro,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (formulario) => {
    formulario.preventDefault();
  
    if (!datosRegistro.usuario || !datosRegistro.password || !datosRegistro.idPais) {
      dispatch(registrationFailure("Todos los campos son obligatorios"));
      return;
    }

    dispatch(registrationStart());
  
    try {
      const response = await fetch("https://movetrack.develotion.com/usuarios.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosRegistro),
      });
  
      const data = await response.json(); // Convertir la respuesta a JSON
  
      if (data.codigo !== 200) {
        if (data.codigo === 409) {
          dispatch(registrationFailure(data.mensaje)); // Mostrar mensaje de error de la API
        } else {
          dispatch(registrationFailure("Error al registrar el usuario"));
        }
        return;
      }

      console.log("Usuario registrado:", data);
      dispatch(registrationSuccess());
      navigate("/login"); // Redirigir después de un registro exitoso
  
    } catch (error) {
      console.error("Error en la solicitud:", error);
      dispatch(registrationFailure("Error al conectar con el servidor"));
    }
  };

  return (
    <div className="registro-container">
      <h1>Registro</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="usuario"
          placeholder="Nombre de usuario"
          value={datosRegistro.usuario}
          onChange={cambiosFormulario}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={datosRegistro.password}
          onChange={cambiosFormulario}
        />
        <select
          name="idPais"
          value={datosRegistro.idPais}
          onChange={cambiosFormulario}
        >
          <option value="">Seleccione un país</option>
          {paises.map((pais) => (
            <option key={pais.id} value={pais.id}>
              {pais.name}
            </option>
          ))}
        </select>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Registrarse"}
        </Button>
      </form>
      <p className="register-link">
        <Link to="/login">Volver a login</Link>
      </p>
    </div>
  );
};

export default Registro;