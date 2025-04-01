import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // return another function which will then be executed by React right before this effect function runs again or, right before it's removed from the DOM.

  useEffect(() => {
    console.log("TIMER SET");
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    // this will now stop this timer whenever this component is removed from the DOM.
    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, []);

  // cleanup function runs right before the effect function runs. But this is not something that can happen here because currently I have no dependencies here and therefore this effect function never runs again.

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
