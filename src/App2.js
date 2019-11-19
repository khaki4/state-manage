import React, { useState } from "react";
import { createContainer } from "./unstate";
import { useCounter } from './hook';
debugger






const Counter = createContainer(useCounter);

function CounterDisplay() {
  const counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

function Test() {
  debugger
  return <div>test</div>
}

function App2() {
  return (
    <Counter.Provider>
      <div>
        <CounterDisplay />
        <Test />
      </div>
    </Counter.Provider>
  );
}

export default App2;
