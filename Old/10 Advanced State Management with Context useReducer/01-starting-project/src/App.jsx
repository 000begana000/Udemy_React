import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
// context api - use as a wrapper
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <>
      {/* providing context */}
      <CartContextProvider>
        <Header />
        <Shop>
          {/* component composition */}
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </>
  );
}

export default App;
