import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ message, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      <h1>{message}</h1>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
