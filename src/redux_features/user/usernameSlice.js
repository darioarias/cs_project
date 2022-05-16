import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    value: cookies.get("username") || "",
  },
  reducers: {
    updateUsername: (state, action) => {
      state.value = action.payload;
      cookies.set("username", action.payload, {
        maxAge: process.env.REACT_APP_COOKIES_MAX_AGE,
      });
    },
    removeUsername: (state) => {
      state.value = "";
      cookies.remove("username");
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUsername, removeUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
