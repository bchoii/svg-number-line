import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px 1fr",
        }}
      >
        <div>Start :</div>
        <input
          type="range"
          value={start}
          min={0}
          max={100}
          onChange={(e) => {
            const value = +e.target.value;
            if (value <= end) {
              setStart(value);
            }
          }}
        ></input>
        <div>End :</div>
        <input
          type="range"
          value={end}
          min={0}
          max={100}
          onChange={(e) => {
            const value = +e.target.value;
            if (value >= start) {
              setEnd(value);
            }
          }}
        ></input>
      </div>
      <div style={{ border: "1px solid #888", margin: 10 }}>
        <svg width="600" fill="white">
          <text x="50" y="50" text-anchor="middle">
            {start}
          </text>
          <text x="550" y="50" text-anchor="middle">
            {end}
          </text>
          <line
            x1="50"
            y1="65"
            x2="50"
            y2="85"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="550"
            y1="65"
            x2="550"
            y2="85"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="40"
            y1="75"
            x2="560"
            y2="75"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
        </svg>
      </div>
    </>
  );
}

export default App;
