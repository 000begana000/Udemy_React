import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, onClose, children }) {
  // 2. will throw error because this useRef is not connected to dialog yet from the first cycle of render
  // 3. means we haven't used this component until we click, and therefore this ref hasn't connected to the dialog yet.
  const dialog = useRef();

  // the codes are not directly related to the JSX code so we can consider it as a side effect
  // 4. because the function is executed "after" the first cycle of component function, the ref will be established!
  // 5. and therefore there will be no error with dialog.current.close();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      // 1. without side effect, it throw an error because it tries to close something not exist yet
      dialog.current.close();
    }
    // it will re-executed when open prop is changed (basically it's a state so it will change)
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
