//import Dashboard from "./components/Menu/Dashboard";
import Login from "./components/AuthPage/Login"
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
// import Login from "./components/Inicio/Login";
// import Registro from "./components/Inicio/Registro";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
//import Registro from "./components/AuthPage/Registro";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

    setUserData(localData);
  }, []);

  const _onLogin = (loginData) => {
    setUserData(loginData);
    localStorage.setItem("userData", JSON.stringify(loginData));
  };

  const _onLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login onLogin={_onLogin} />} />
        <Route
          path="/login"
          element={<Login onLogin={_onLogin} userData={userData} />}
        />
        <Route path="/signup" element={<h1>Hola soy el sign up</h1>} />
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
