import "./styles.css";
import React from "react";

export default function App() {
  let timerId, timerId2;
  const debounced = (cb, delay) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(cb, delay);
  };

  const throttle = (cb, delay) => {
    if (timerId2) return null;
    timerId2 = setTimeout(() => {
      cb();
      return (timerId2 = null);
    }, delay);
  };

  const debouncedLog = (val) =>
    throttle(() => console.log(val.target.value), 6000);
  return (
    <div className="App">
      <input type="text" onChange={debouncedLog} />
    </div>
  );
}
