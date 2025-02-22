import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSubmitting: false,
  error: null,
};

const registroSlice = createSlice({
  name: "registro",
  initialState,
  reducers: {
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

export const { registrationStart, registrationSuccess, registrationFailure } = registroSlice.actions;
export default registroSlice.reducer;
