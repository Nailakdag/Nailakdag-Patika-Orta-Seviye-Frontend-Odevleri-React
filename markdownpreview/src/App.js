import { useState } from "react";
import "./App.scss";
import MarkdownPreview from "@uiw/react-markdown-preview";

function App() {
  const [mark, setMark] = useState("Mark Preview");
  return (
    <>
      <div className="main-content">
        <header>
          <div className="app-title">Markdown Previewer</div>
        </header>
        <div className="text-panels">
          <div className="text-panel-left">
            <textarea
              value={mark}
              onChange={(e) => setMark(e.target.value)}
            ></textarea>
          </div>
          <div className="text-panel-right">
            <MarkdownPreview
              style={{ backgroundColor: "transparent", color: "black" }}
              source={mark}
              rehypeRewrite={(node, index, parent) => {
                if (
                  node.tagName === "a" &&
                  parent &&
                  /^h(1|2|3|4|5|6)/.test(parent.tagName)
                ) {
                  parent.children = parent.children.slice(1);
                }
              }}
            />
          </div>
        </div>
        <div className="footer">2017, created by Peter Krevenets</div>
      </div>
    </>
  );
}

export default App;
