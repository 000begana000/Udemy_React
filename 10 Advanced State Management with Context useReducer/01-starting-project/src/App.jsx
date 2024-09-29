import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
// context api - use as a wrapper
import { CartContext } from "./store/shopping-cart-context.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    // link context value to state
    items: shoppingCart.items,
    // exposing the function through this context
    addItemToCart: handleAddItemToCart,
  };

  return (
    <>
      {/* providing context */}
      <CartContext.Provider value={ctxValue}>
        <Header
          cart={shoppingCart}
          onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        />
        <Shop>
          {/* component composition */}
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} onAddToCart={handleAddItemToCart} />
            </li>
          ))}
        </Shop>
      </CartContext.Provider>
    </>
  );
}

export default App;
