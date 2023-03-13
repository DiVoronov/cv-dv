import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const menuOpenCloseSlice = createSlice({
  name: "menuOpenClose",
  initialState: false,
  reducers: {
    openMenu (state, action) {
      state = action.payload;
      return state;
    },
    closeMenu (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { openMenu, closeMenu } = menuOpenCloseSlice.actions;
export const menuOpenCloseReducer = menuOpenCloseSlice.reducer;