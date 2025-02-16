import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/AuthPage/Login/Login";
import Registro from "./components/AuthPage/Registro/Registro";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  

  // Cargar datos del usuario al iniciar la aplicación
  useEffect(() => {
    const localData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

    setUserData(localData);

    if (localData) {
      navigate("/dashboard"); // Redirigir si ya está autenticado
    }
  }, []);

  

  // Función para manejar el login y guardar el apiKey
    const _onLogin = (loginData) => {
    const { apiKey, ...otherData } = loginData;
    const userDataToStore = { ...otherData, apiKey };

    setUserData(userDataToStore);
    localStorage.setItem("userData", JSON.stringify(userDataToStore));
    
    navigate("/dashboard"); // Redirigir al Dashboard después del login
  };


  // Función para manejar el logout
  const _onLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/login"); // Redirigir al login después del logout
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login onLogin={_onLogin} />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login onLogin={_onLogin} />} />

        {/* Rutas protegidas con PrivateRoute */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute userData={userData}>
              <Dashboard userData={userData} onLogout={_onLogout} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;