import { configureStore } from '@reduxjs/toolkit';
import themeSliceReducer from './features/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
