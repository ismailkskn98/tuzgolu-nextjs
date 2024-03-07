import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
  themes: 'light' | 'dark';
};

const initialState: InitialState = {
  themes: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.themes = action.payload;
    },
  },
});

export const { themeChange } = themeSlice.actions;

export default themeSlice.reducer;
