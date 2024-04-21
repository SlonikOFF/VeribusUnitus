import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const inputsStateSlice = createSlice({
  name: "inputsStateSlice",
  initialState: {
    token: 0,
    email: 0,
    id: 0,
  },
  reducers: {
    setToken(state, actions) {
      state.token = actions.payload;
    },
    setEmail(state, actions) {
      state.email = actions.payload;
    },
    setId(state, actions) {
      state.id = actions.payload;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { setToken, setEmail } = inputsStateSlice.actions;
export default inputsStateSlice.reducer;
