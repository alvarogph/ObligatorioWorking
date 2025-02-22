import { useState } from "react";
import Grafico from "./Grafico/Grafico";
import Estadisticas from "./Estadisticas/Estadisticas";
import ListaEjercicios from "./ListaEjercicios/ListaEjercicios";
import EjerciciosModal from "./EjerciciosModal/EjerciciosModal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const _onToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Estadisticas />
      <Grafico />
      <ListaEjercicios onToggleModal={_onToggleModal} />
      {showModal ? <EjerciciosModal onToggleModal={_onToggleModal} /> : ""}
    </>
  );
};

export default Main;
