import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isSubmitting: false,
  error: null,
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
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  registrationStart,
  registrationSuccess,
  registrationFailure,
} = userSlice.actions;
export default userSlice.reducer;
