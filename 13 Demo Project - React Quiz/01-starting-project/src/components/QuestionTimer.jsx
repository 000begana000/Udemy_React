import { useState, useEffect } from "react";

// when timer expires show next question and the answer is empty
// display progress bar
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  // when time is out, let parent component know
  useEffect(() => {
    console.log("setTimeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setInterval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    // clean up function will be executed just before this useEffect runs again
    // or when this component is unmounted from the DOM
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="qustion-time" max={timeout} value={remainingTime} />;
}
