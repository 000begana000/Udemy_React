import { createContext } from "react";

// uppercase naming because it will be an object returning context
// in createContext, provide an initial value
// NOTE: the default value is good for auto completion
export const CartContext = createContext({
  items: [],
  // empty dummy function for auto completion
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});
