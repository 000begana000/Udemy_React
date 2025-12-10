import { useEffect } from "react";

import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // const [remainingTime, setRemainingTime] = useState(TIMER);

  // // ** BOTH EXAMPLES HERE ARE MORE FOCUS ON THE CALLBACK FUNTION IN THE SIDE EFFECT FUNCTION
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("INTERVAL");
  //     setRemainingTime((prevTime) => prevTime - 10);
  //   }, 10);

  //   return () => {
  //     console.log("clear interval");
  //     clearInterval(interval);
  //   };
  // }, []);

  // // this code is problematic because even though we click "Cancel", it will not stop running and remove the item
  // setTimeout(() => {
  //   onConfirm();
  // }, TIMER);

  // confirm delete automatically after 3 sec
  useEffect(() => {
    console.log("timer is set");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // called "right before" this event function runs again
    // (this is not the case for this side effect function because our dependency is empty)
    // **OR RIGHT BEFORE THIS COMPONENT DISAMOUNTS (so before it's removed from the DOM)**
    return () => {
      console.log("cleaning up timer");
      clearTimeout(timer);
    };

    // onConfirm is a prop of this component and we are using it in side effect so we need to use it as a dependency
    // functions are just an object value and it will re-created when the App component is re-created.
    // but in this case, setModalIsOpen(false); will remove this component so we will not face infinite loop
  }, [onConfirm]);

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
      <ProgressBar timer={TIMER} />
    </div>
  );
}
