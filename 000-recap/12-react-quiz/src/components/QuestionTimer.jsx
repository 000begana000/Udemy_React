import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // move to the next question when time is out
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  // to prevent infinite loop - to prevent re-executed all the time but only when the dependencies are changed
  useEffect(() => {
    // update progress bar
    setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
