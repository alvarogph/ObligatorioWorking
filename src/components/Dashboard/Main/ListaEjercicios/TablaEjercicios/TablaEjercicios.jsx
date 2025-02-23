import { useSelector } from "react-redux";
import TablaEjerciciosFila from "./TablaEjerciciosFila/TablaEjerciciosFila";


const ToDoTable = () => {
 const toDos = useSelector((state) => state.userSlice.toDos);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed?</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* {toDos.map((toDo) => (
          <TablaEjerciciosFila
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            completed={toDo.completed}
          />
        ))} */}
      </tbody>
    </table>
  );
};

export default ToDoTable;
