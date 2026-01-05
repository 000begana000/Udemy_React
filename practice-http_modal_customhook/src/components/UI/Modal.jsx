import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  function handleCloseModal() {
    onClose();
  }

  return createPortal(
    <dialog ref={dialog} onClose={handleCloseModal}>
      <h1>Modal</h1>
      <form type="dialog" action="">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
