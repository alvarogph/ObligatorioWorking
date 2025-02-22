const BASE_URL = "https://movetrack.develotion.com";

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

const getActividades = async (apiKey, idUser) => {
  try {
    const response = await fetch(`${BASE_URL}/actividades.php`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
        iduser: idUser,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log("API response data:", data);
      return data;
    } else {
      return Promise.reject("Ha ocurrido un error");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error");
  }
};

const saveRegistro = async (apiKey, idUser, data) => {
  try {
    const response = await fetch(`${BASE_URL}/registros.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
        iduser: idUser,
      },
      body: JSON.stringify({
       data
      })
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

const obtenerRegistros = async (apiKey, idUser, idUsuario) => {
  try {
    const response = await fetch(`${BASE_URL}/registros.phpidUsuario${idUsuario}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
        iduser: idUser,
      }
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log("API response data:", data);
      return data;
    } else {
      return Promise.reject("Ha ocurrido un error");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error");
  }
};









export { login, getActividades, saveRegistro, obtenerRegistros};

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
