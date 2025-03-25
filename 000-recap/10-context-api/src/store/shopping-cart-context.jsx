import { createContext } from "react";

// the value produced by createContext will be an object that contains a React Component which we'll need later

// initial value can be anything, just like a state
export const CartContext = createContext({
  items: [],
});
