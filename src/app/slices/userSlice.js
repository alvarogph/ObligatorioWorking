import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isSubmitting: false,
  error: null,
  ejercicios: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.userData = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.userData = null;
      state.error = null;
    },
    registrationStart(state) {
      state.isSubmitting = true;
      state.error = null;
    },
    registrationSuccess(state) {
      state.isSubmitting = false;
      state.error = null;
    },
    registrationFailure(state, action) {
      state.isSubmitting = false;
      state.error = action.payload;
    },

    cargarEjercicios: (state, action) => {
      const { payload } = action;
      state.ejercicios = action.payload;
    },

    onDeleteEjercicio: (state, action) => {
      const { payload } = action;
      const filteredEjercicios = state.ejercicios.filter(
        (t) => t.id !== payload
      );
      state.toDos = filteredEjercicios;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  registrationStart,
  registrationSuccess,
  registrationFailure,
  cargarEjercicios
} = userSlice.actions;
export default userSlice.reducer;
