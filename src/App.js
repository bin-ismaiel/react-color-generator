import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState(`#f15025`);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(`#f15025`).all(10));

  function handleSubmit(event) {
    event.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <section class="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            class={error && "error"}
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <button class="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, idx) => {
          return (
            <SingleColor
              rgb={color.rgb}
              weight={color.weight}
              key={idx}
              index={idx}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
