import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// cookies.getAll();
export const authTokenSlice = createSlice({
  name: "authToken",
  initialState: {
    value: cookies.get("token") || "",
  },
  reducers: {
    updateAuthToken: (state, action) => {
      // console.log(action, action.payload);
      cookies.set("token", action.payload, {
        maxAge: process.env.REACT_APP_COOKIES_MAX_AGE,
      });
      state.value = action.payload;
    },
    removeAuthToken: (state) => {
      state.value = "";
      cookies.remove("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAuthToken, removeAuthToken } = authTokenSlice.actions;

export default authTokenSlice.reducer;
