import { configureStore } from "@reduxjs/toolkit";
import usernameSlice from "../redux_features/user/usernameSlice";
import authTokenSlice from "../redux_features/user/authTokenSlice";

export default configureStore({
  reducer: {
    username: usernameSlice,
    authToken: authTokenSlice,
  },
});
