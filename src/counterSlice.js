import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: localStorage.getItem("counter")
    ? parseInt(localStorage.getItem("counter"), 10)
    : 0,

  listeDesEleves: [
    { id: 1, prenom: "Mouhamed" },
    { id: 2, prenom: "Doudou" },
    { id: 3, prenom: "Khadim" },
    { id: 4, prenom: "kana" },
    { id: 5, prenom: "nafi" },
    { id: 6, prenom: "laye" }
  ]
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = action.payload + 1;
      localStorage.setItem("counter", state.counter.toString());
    }
  }
});
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
