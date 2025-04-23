import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import classes from "./Todo.module.css";

export function Todo() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

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
    <div className={classes}>
     
    </div>
  );
}

export default function Counter() {
}
