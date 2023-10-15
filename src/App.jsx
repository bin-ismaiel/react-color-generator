import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [selected, setSelected] = useState("");
  const [color, setColor] = useState(new Values("#f15025"));
  const notify = (text, type) =>
    toast[type](text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const colorList = color.all(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setColor(new Values(selected));
      notify("Success!", "success");
    } catch (error) {
      notify(error.message, "error");
    }
  };

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    notify("Color Copied To Clipboard!", "success");
  };
  return (
    <main>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label>Color Generator</label>
        <input
          type="color"
          style={{ width: "50px", height: "50px" }}
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
        />
        <input
          type="text"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          placeholder={"#ff0000"}
        />
        <button
          type="submit"
          style={{ backgroundColor: selected ? selected : "#eee" }}
        >
          Submit
        </button>
      </form>
      {console.log(color.all(10))}
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {colorList.map((color, idx) => (
          <article
            key={idx}
            style={{
              backgroundColor: `#${color.hex}`,
              width: "200px",
              height: "200px",
            }}
            onClick={() => {
              copyColor(`#${color.hex}`);
            }}
          >
            <p style={{ color: idx > 10 ? "white" : "" }}>{color.weight}%</p>
            <p style={{ color: idx > 10 ? "white" : "" }}>#{color.hex}</p>
          </article>
        ))}
      </section>
    </main>
  );
};
export default App;
