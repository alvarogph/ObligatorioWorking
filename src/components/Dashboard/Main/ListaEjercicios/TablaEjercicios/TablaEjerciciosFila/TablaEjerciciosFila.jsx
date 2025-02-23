import { useDispatch } from "react-redux";
//import { onDeleteEjercicio } from "../../../../../app/slices/userSlice";

const TablaEjerciciosFila = ({key, id, fecha }) => {
  const dispatcher = useDispatch();
//   const _onDeleteEjercicio = () => {
//     dispatcher(onDeleteEjercicio(id));
//   };

  return (
    <tr>
      <td>{key}</td>
      <td>{id}</td>
      <td>{fecha}</td>
      <td>
        <button className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TablaEjerciciosFila;
