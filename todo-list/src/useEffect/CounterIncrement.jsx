import React, { useEffect, useState } from "react";

// import Footer from "../../common/Footer";
// import routePaths from "../../routePaths";
// import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countSecond, setCountSecond] = useState(0);

  const increment = () => {
    const newIncrement = count + 1;
    setCount(newIncrement);
  };

  const incrementSecond = () => {
    const newIncrement = countSecond + 1;
    setCountSecond(newIncrement);
  };

  useEffect(() => {
    console.log("Cuando count cambió");
  }, [count]);

  useEffect(() => {
    console.log("Cuando countSecond cambió");
  }, [countSecond]);

  return (
    <div className="counterContainer">
      <span className="counterText">Counter is now in: {count}</span>
      <button onClick={increment} className="counterButton">
        Increment Counter
      </button>
      <span className="counterText">
        Counter second is now in: {countSecond}
      </span>
      <button onClick={incrementSecond} className="counterButton">
        Increment Counter Second
      </button>
    </div>
  );
};

export default Counter;
