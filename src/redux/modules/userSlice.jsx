import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    email: "",
    nickname: "",
  },
  reducers: {
    loginUser(state, action) {
      state.isLogged = true;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
    },
    clearUser(state) {
      state.isLogged = false;
      state.email = null;
      state.nickname = null;
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
