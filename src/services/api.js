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

const obtenerRegistros = async (apiKey, idUser) => {
  try {
    const response = await fetch(`${BASE_URL}/registros.php?idUsuario=${idUser}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
        iduser: idUser,
      }
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject("Ha ocurrido un error");
    }
  } catch (error) {
    return Promise.reject("Ha ocurrido un error");
  }
};

export { login, getActividades, saveRegistro, obtenerRegistros};

