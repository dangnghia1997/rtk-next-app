'use client';

import React from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {increment} from "@/redux/features/counter/counterSlice";

interface CounterProps {
  children?: React.ReactNode;
}
const Counter: React.FC<CounterProps> = ({children}) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter.counter);

  const onButtonClick = () => {
    dispatch(increment())
  }

  return (
    <div className="flex gap-2 p-4 items-center">
      <h1>Count: {count}</h1>
      <button className="border border-black px-4 rounded-2xl" onClick={onButtonClick}>+</button>
    </div>
  )
}

export default Counter
