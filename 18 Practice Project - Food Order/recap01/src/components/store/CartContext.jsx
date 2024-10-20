import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});

export function CartContextProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}
