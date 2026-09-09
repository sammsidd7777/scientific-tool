import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  userName: savedUser?.userName || "",
  email: savedUser?.email || "",
  role: savedUser?.role || "user",
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );

      localStorage.setItem("isLoggedIn", "true");
    },

    logout: (state) => {
      state.userName = "";
      state.email = "";
      state.role = "user";
      state.isLoggedIn = false;

      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;