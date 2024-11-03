import { createSlice, configureStore } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    title: "Dummy 1",
    price: 16,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Dummy 2",
    quantity: 0,
    price: 32,
    description: "Very shitty product ever!",
  },
];

const initialState = { isCart: false, products, cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart(state) {
      state.isCart = !state.isCart;
    },
    addItem(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cartItems[existingItemIndex];
      if (existingItemIndex > -1) {
        existingItem.quantity += 1;
      } else {
        const newItem = action.payload;
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: cartSlice.reducer });
export default store;
