import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isCart: false, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart(state) {
      state.isCart = !state.isCart;
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: cartSlice.reducer });
export default store;
