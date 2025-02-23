import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users = [...state.users, action.payload]
    },
    updateIsDone: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          user.isDone = !user.isDone;
        }
        return user;
      });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
  },
});

export default counterSlice.reducer;
export {initialState};