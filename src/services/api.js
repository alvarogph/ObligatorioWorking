const BASE_URL = "https://movetrack.develotion.com";
//const TODO_BASE_URL = "https://jsonplaceholder.typicode.com";
const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login.php`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        usuario: username,
        password: password,
      }),
    });
    if (response.status == 200) {
      return response.json();
    } else {
      return Promise.reject("Ha ocurrido un error");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error");
  }
};

export  { login};

// const getToDos = async (userID) => {
//   try {
//     const response = await fetch(`${TODO_BASE_URL}/todos?userId=${userID}`);
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       return Promise.reject("Ha ocurrido un error");
//     }
//   } catch (error) {
//     return Promise.reject("Ha ocurrido un error");
//   }
// };

// const saveToDo = async (title, description, userId, apiKey) => {
//   try {
//     const response = await fetch(`${TODO_BASE_URL}/todos`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: apiKey,
//       },
//       body: JSON.stringify({
//         userId: userId,
//         title: title,
//         description: description,
//         completed: false,
//       }),
//     });
//     if (response.ok) {
//       return response.json();
//     } else {
//       return Promise.reject({
//         message: "Ha ocurrido un error",
//       });
//     }
//   } catch (error) {
//     return Promise.reject({
//       message: "Ha ocurrido un error",
//     });
//   }
// };

// export { login, getToDos, saveToDo };
