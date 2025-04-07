import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    // TO ANIMATE THE PROGRESS SMOOTHLY
    // it execute the function every couple of millisec.
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={TIMER} />;
}
