import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("purple");

  function changeColor(newColor) {
    setColor(newColor);
  }

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <h1 className="bg-blue-500 text-3xl text-center text-white p-4">
        BG Changer App with Vite.
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => changeColor("red")}
            // Just came to know that we don't need this extra function. This setColor can change the color itself. Just pass it here itself.
            // onClick={() => setColor("red")}

            className="outline-none px-4 py-1 rounded-full text-white bg-fuchsia-800 shadow-lg"
          >
            Change Color to Red
          </button>
          <button
            onClick={() => changeColor("blue")}
            // Just came to know that we don't need this extra function. This setColor can change the color itself. Just pass it here itself.
            // onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white bg-blue-800 shadow-lg"
          >
            Change Color to Blue
          </button>
          <button
            onClick={() => changeColor("orange")}
            // Just came to know that we don't need this extra function. This setColor can change the color itself. Just pass it here itself.
            // onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white bg-orange-500 shadow-lg"
          >
            Change Color to Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
