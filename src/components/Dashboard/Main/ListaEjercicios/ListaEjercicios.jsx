import Button from "../../../UI/Button/Button";
import TablaEjercicios from "./TablaEjercicios/TablaEjercicios";

const ListaEjercicios = ({ onToggleModal }) => {
  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Button
          type="button"
          onClick={onToggleModal}
          className="btn btn-success"
        >Agregar ejercicio
        </Button>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body"> <TablaEjercicios /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaEjercicios;
