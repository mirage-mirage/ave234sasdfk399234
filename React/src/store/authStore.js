import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, id: "" };
const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout(state) {
      state.id = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authStore.actions;

export default authStore.reducer;
