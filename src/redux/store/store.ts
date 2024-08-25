import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../UserSlice';
import themeReducer from '../ThemeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

// Define RootState type here
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for use in dispatch
export type AppDispatch = typeof store.dispatch;
