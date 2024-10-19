import { useContext } from "react";

import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartContext = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img
          src={logoImg}
          alt="graphic image glasses, napkin, and cutlets on a plate"
        />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
