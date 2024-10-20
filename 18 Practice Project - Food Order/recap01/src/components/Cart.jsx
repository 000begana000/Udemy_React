import { useContext } from "react";
import CartContext from "./store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">foramtted price</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
}
