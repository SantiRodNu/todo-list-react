import { useState, useEffect } from "react";

const CounterWithUseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default CounterWithUseEffect;
