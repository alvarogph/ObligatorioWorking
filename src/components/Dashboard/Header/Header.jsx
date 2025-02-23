import { useDispatch } from "react-redux";
import { logout } from "../../../app/slices/userSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CerrarSesion = () => {
    localStorage.clear();
    dispatch(logout());
    navigate("/login");
  };

  const credenciales = JSON.parse(localStorage.getItem("credenciales"));

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
      <h2>Bienvenido, {credenciales.usuario}</h2>
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