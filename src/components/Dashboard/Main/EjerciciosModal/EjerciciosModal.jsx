// import { useRef } from "react";
// //import { saveToDo } from "../../../../services/api";
// import { getUserDataFromLocalStorage } from "../../../../utils/utils";
// import { onAddToDo } from "../../../../app/slices/userSlice";
// import { useDispatch } from "react-redux";

// const ToDoModal = ({ onToggleModal }) => {
//   const inputTitleRef = useRef();
//   const inputDescriptionRef = useRef();
//   const dispatcher = useDispatch();

//   const _onHandleClick = async () => {
//     const title = inputTitleRef.current.value;
//     const description = inputDescriptionRef.current.value;

//     if (title.length > 0 && description.length > 0) {
//       try {
//         const userData = getUserDataFromLocalStorage();
//         if (userData) {
//           const { id, apiKey } = userData;
//           const response = await saveToDo(title, description, id, apiKey);
//           dispatcher(onAddToDo(response));
//           onToggleModal();
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <div
//       className="modal show d-block"
//       tabIndex="-1"
//       role="dialog"
//       style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//     >
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Crear Tarea</h5>
//             <button type="button" className="close" onClick={onToggleModal}>
//               <span>&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <form>
//               <div className="form-group">
//                 <label>Título de la tarea</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   ref={inputTitleRef}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Descripción de la tarea</label>
//                 <textarea className="form-control" ref={inputDescriptionRef} />
//               </div>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={_onHandleClick}
//               >
//                 Crear
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToDoModal;

