import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl bg-green-500 p-5 rounded">
        Hello From Anvist Systems
      </h1>
      <Card />
    </>
  );
}

export default App;
