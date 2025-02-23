import { configureStore } from "@reduxjs/toolkit";

import users from "../slices/userSlice";
import auth from "../slices/authSlice";

const store = configureStore({
  reducer: { users, auth },
});

export default store;