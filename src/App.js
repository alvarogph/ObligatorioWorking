import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/AuthPage/Login/Login";
import Registro from "./components/AuthPage/Registro/Registro";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { logout } from "./app/slices/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

    if (localData) {
      navigate("/dashboard");
    }
  }, []); // Add an empty dependency array here

  const _onLogout = () => {
    localStorage.removeItem("userData");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />

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