import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
