import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const mobileMenuOpenCloseSlice = createSlice({
  name: "mobileMenuOpenClose",
  initialState: false,
  reducers: {
    closeMobileMenu (state) {
      state = false;
      return state;
    },
    openMobileMenu (state) {
      state = true;
      return state;
    },
    toggleMobileMenu (state) {
      state = !state;
      return state;
    }
  }
});

export const { closeMobileMenu, openMobileMenu, toggleMobileMenu } = mobileMenuOpenCloseSlice.actions;
export const mobileMenuOpenCloseReducer = mobileMenuOpenCloseSlice.reducer;