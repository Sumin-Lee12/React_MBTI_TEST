import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users = state.users.map((todo) => {
        if (user.id === action.payload) {
          user.isDone = !user.isDone;
        }
        return user;
      });
    },
    deleteTodo: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
  },
});
