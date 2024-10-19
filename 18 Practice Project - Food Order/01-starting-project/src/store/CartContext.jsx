import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [], // manage array of items
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // ... update state to add a item => state.items.push(action.item);
    // !! we want to add items only once in cart and update quantity in the cart
    // ... find index of already existing item
    const existingCartItemindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    // ... if the item exists in the items array already,
    if (existingCartItemindex > -1) {
      const existingItem = state.items[existingCartItemindex];
      // ... update quantity
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemindex] = updatedItem;
    } else {
      // ... update item
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems }; // keep the old state and overwrite items
  }

  if (action.type === "REMOVE_ITEM") {
    // ... update state to remove a item
    const existingCartItemindex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemindex];

    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingCartItemindex, 1); //remove
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems[existingCartItemindex] = updatedItem; //update quantity
    }

    return { ...state, items: updatedItems }; // keep the old state and overwrite items
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] }); // items:[] initial value of the state

  function addItem(item) {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext); //for test

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
