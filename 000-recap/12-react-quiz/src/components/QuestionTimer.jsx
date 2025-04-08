import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timout");

    // move to the next question when time is out
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  // to prevent infinite loop - to prevent re-executed all the time but only when the dependencies are changed
  useEffect(() => {
    console.log("Setting Interval");

    // update progress bar
    setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
