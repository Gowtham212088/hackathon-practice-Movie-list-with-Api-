import React, { useState } from "react";
import { ColorBox } from "./ColorBox";

 export default function AddColor() {
  const [color, setColor] = useState("yellow");

  const styl = {
    backgroundColor: color,
  };
  // const colourList =
  const [colourList, setColorList] = useState([
    "yellow",
    "red",
    "pink",
    "gold",
  ]);

  return (
    <div>
      <input
        style={styl}
        type="text"
        label="Enter color"
        onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColorList([...colourList, color])}>
        {" "}
        Add color{" "}
      </button>

      {colourList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
