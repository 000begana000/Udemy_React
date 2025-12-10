import { useState, useEffect } from "react";

// display progress bar
// when timer expires show next question and the answer is empty
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setTimeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
    // when time is out, let parent component know
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setInterval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    // clean up function will be executed FIRST then actucal useEffect code to clean up what we've done from the last time
    // or when this component is unmounted from the DOM
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="qustion-time" max={timeout} value={remainingTime} />;
}
