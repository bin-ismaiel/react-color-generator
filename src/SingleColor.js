import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [r, g, b] = rgb;
  const [alert, setAlert] = useState(false);
  const [hover, setHover] = useState(false);
  let colorValue = rgbToHex(r, g, b);
  function copy() {
    setAlert(true);
    navigator.clipboard.writeText(colorValue);
  }
  useEffect(() => {
    setTimeout(() => setAlert(false), 2000);
    return;
  }, [alert]);
  useEffect(() => {
    if (alert === true) {
      setHover(false);
    }
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
      onClick={copy}
      onMouseEnter={() => (alert ? null : setHover(true))}
      onMouseLeave={() => setHover(false)}
    >
      <p class="percent-value">{`${weight}%`}</p>
      <p class="color-value">{colorValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
      {hover && <p className="alert">Copy</p>}
    </article>
  );
};

export default SingleColor;
