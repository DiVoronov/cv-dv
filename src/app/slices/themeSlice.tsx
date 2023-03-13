import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState: 'dark' | 'light'  = 'dark';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;