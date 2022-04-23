import React from "react";

export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "25px",
  };

  return <div style={styles}></div>;
}
