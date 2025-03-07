import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const dialog = useRef(); // forward this ref to the ResultModal
  const timer = useRef();

  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // expire condition & after start condition
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // stops setInterval when the time is expired
  if (timeRemaining <= 0) {
    // it won't cause infinite loop because it's in if statement
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    // setTimerStarted(true);

    // setInterval execute the code every X millisecond (this case 10millisec.)
    timer.current = setInterval(() => {
      // // player will lose when this function is called because player couldn't stop the timer before it's expired
      // setTimerExpired(true);

      // // execute showModal() when timer is expired
      // // open() method is from ResultModal of useImperativeHandle
      // dialog.current.open();

      // calculate how much time remained
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  // stops setInterval menually
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
