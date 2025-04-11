import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);

      return () => {
        clearInterval(interval);
      };
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
