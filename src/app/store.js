import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import registroReducer from './slices/registroSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registro: registroReducer,
  },
});