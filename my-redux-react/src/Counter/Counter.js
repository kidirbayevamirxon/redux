import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
console.log(show);
  const incrementHandker = () => {
    dispatch({ type: "increment" });
  };
  const incrementHandker5 = (amount) => {
    dispatch({ type: "increment5", val: amount });
  };

  const decrementHandker = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>Counter value {counter}</div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={decrementHandker}>Decrement</button>
        <button onClick={() => incrementHandker5(10)}>Increment10</button>
        <button onClick={() => incrementHandker(1)}>Increment</button>
      </div>
    </div>
  );
}
