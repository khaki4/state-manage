import React, { useState, useContext, createContext } from "react";
import { useCounter } from './hook';








const Counter = createContext();

function CounterDisplay() {
  const counter = useContext(Counter);
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

function Test() {
  return <div>test</div>
}

function App() {
  return (
    <Counter.Provider value={useCounter()}>
      <div>
        <CounterDisplay />
        <Test />
      </div>
    </Counter.Provider>
  );
}

export default App;
