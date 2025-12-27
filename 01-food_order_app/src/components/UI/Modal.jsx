import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  const dialog = useRef();

  // useEffect is needed because showModal() is a DOM side effect that must run after the component mounts.
  useEffect(() => {
    const modal = dialog.current;

    // open modal
    if (open) {
      modal.showModal();
    }

    // close modal
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
