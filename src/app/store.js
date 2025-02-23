import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import registroReducer from "./slices/registroSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registro: registroReducer,
    userSlice: userSlice,
  },
});

export default store;