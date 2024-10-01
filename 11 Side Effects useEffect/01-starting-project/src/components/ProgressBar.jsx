import { useState, useEffect } from "react";

// To optimize functionality that DeleteComfirmation won't be re-created by every 10 millisec
// (Only ProgressBar will be re-created every 10 millisec)
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("clear interval");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
