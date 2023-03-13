import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState: 'EN' | 'UA' = 'EN';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { changeLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;