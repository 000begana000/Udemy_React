import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";

export default function Checkout() {
  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount:</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button">
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
