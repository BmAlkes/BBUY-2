import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    REMOVE_ACTIVE_USER: (state, action) => {
      state.userId = null;
      state.isLoggedIn = false;
      state.userName = null;
      state.email = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectEmail = (state) => state.auth.email;

export default authSlice.reducer;
