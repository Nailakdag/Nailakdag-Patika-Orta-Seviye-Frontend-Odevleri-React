import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [paragNum, setParagNum] = useState(2);
  const [html, setHtml] = useState("text");
  const [parag, setParag] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paragNum}&start-with-lorem=1&format=${html}`
      )
      .then((res) => setParag(res.data));
  }, [paragNum, html]);
  return (
    <div id="app">
      <header>React sample text generator app</header>
      <div className="inputs">
        <label htmlFor="paragnumber">
          Paragraphs
          <input
            type="number"
            id="paragnumber"
            value={paragNum}
            onChange={(e) => setParagNum(e.target.value)}
          />
        </label>

        <label htmlFor="html">
          Include Html
          <select
            name="html"
            id="html"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          >
            <option value="text">No</option>
            <option value="html">Yes</option>
          </select>
        </label>
      </div>
      <div className="paragraphs">{parag}</div>
    </div>
  );
}

export default App;
