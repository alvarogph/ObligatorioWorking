import React, { useRef, useState, useEffect } from "react";
import { getUserDataFromLocalStorage } from "../../../../utils/utils";
import { getActividades, saveRegistro, obtenerRegistros } from "../../../../services/api";
import { useDispatch } from "react-redux";
import {
  registrationStart,
  registrationSuccess,
  registrationFailure,
} from "../../../../app/slices/registroSlice";

const EjerciciosModal = ({ onToggleModal }) => {
  const dispatch = useDispatch();
  const inputTiempoRef = useRef();
  const inputFechaRef = useRef();
  const [actividades, setActividades] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchActividades = async () => {
      const userData = getUserDataFromLocalStorage();
      if (userData) {
        const { apiKey, id } = userData;
        try {
          const actividadesData = await getActividades(apiKey, id);
          if (actividadesData && actividadesData.actividades) {
            setActividades(actividadesData.actividades);
          } else {
            console.error("Invalid data structure:", actividadesData);
          }
        } catch (error) {
          console.error("Error fetching actividades:", error);
        }
      }
    };
    fetchActividades();
  }, []);

  const guardarRegistro = async () => {
    const userData = getUserDataFromLocalStorage();
    const actividad = document.getElementById("actividad-select").value;
    const tiempo = inputTiempoRef.current.value;
    const fecha = inputFechaRef.current.value;
    if (userData) {
      const { apiKey, id } = userData;
      const data = { actividad, tiempo, fecha };
      try {
        dispatch(registrationStart());
        
        const registros = await saveRegistro(apiKey, id, data);
        inputTiempoRef.current.value = "";
        inputFechaRef.current.value = "";
  
        setMessage(registros.mensaje);
        dispatch(registrationSuccess());
      } catch (error) {
        console.error("Error fetching actividades:", error);
        dispatch(registrationFailure(error.message));
      }
    }
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Ejercicios Modal</h5>
            <button type="button" className="close" onClick={onToggleModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {message && <div className="alert alert-success">{message}</div>}
            <form>
              <div className="form-group">
                <label>Actividad</label>
                <select id="actividad-select" className="form-control">
                  {actividades.map((actividad) => (
                    <option key={actividad.id} value={actividad.id}>
                      {actividad.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Tiempo</label>
                <input
                  type="text"
                  className="form-control"
                  ref={inputTiempoRef}
                />
              </div>
              <div className="form-group">
                <label>Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  ref={inputFechaRef}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onToggleModal}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={guardarRegistro}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EjerciciosModal;
