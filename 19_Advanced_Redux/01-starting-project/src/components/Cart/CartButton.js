import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  function handleShowCart() {
    dispatch(cartActions.showCart());
    console.log("showcart");
  }
  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
