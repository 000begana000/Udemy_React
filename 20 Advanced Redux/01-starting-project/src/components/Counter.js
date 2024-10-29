import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // this function will be excuted by react redux, to retrieve the part of state we need in this component.
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
