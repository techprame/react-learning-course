import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);

    setCounter(counter + 1);
  };

  const removeValue = () => {
    // counter = counter - 1;
    // console.log(counter);

    setCounter(counter - 1);
  };

  return (
    <>
      <div className="counter-app">
        <h1>Counter App</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>{" "}
        <button onClick={removeValue}>Remove Value</button>
        <p>Footer:</p>
      </div>
    </>
  );
}

export default App;
