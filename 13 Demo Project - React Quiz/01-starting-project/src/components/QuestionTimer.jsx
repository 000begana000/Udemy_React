import { useState, useEffect } from "react";

// when timer expires show next question and the answer is empty
// display progress bar
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  // when time is out, let parent component know
  useEffect(() => {
    console.log("setTimeout");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setInterval");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="qustion-time" max={timeout} value={remainingTime} />;
}
