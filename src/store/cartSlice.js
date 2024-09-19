import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    add(state, action) {
      // Redux: return [...state, action.payload];
      // createSlice automatically mutates the state.
      state.push(action.payload);
    },
    remove(state, action) {
      // Correctly update the state by filtering out the item with the specified id
      state = state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
