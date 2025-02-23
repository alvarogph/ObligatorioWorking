import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cargarEjercicios } from "../../app/slices/userSlice";
import { obtenerRegistros } from "../../services/api";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const dispatcher = useDispatch();

  useEffect(() => {
    async function fetchData() {
      if (userData) {
        console.log(userData.apiKey);
        const { id } = userData;
        const { apiKey } = userData;

        const response = await obtenerRegistros(apiKey, id);
        console.log(response);

        dispatcher(cargarEjercicios(response));
        console.log(cargarEjercicios(response));
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Dashboard;
