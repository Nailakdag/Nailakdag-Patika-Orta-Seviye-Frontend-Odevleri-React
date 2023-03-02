import "./App.css";
import ButtonLanguage from "./components/ButtonLanguage";
import ButtonReset from "./components/ButtonReset";
import Content from "./components/Content";

import InputArea from "./components/Input";
import Result from "./components/Result";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <div className="app">
        <div className="header">
          <div className="buttongroup">
            <ButtonReset />
          </div>
          <div className="timeandlanguage">
            <ButtonLanguage />
            <Timer />
          </div>
        </div>
        <Content />
        <InputArea />
        <Result />
      </div>
    </>
  );
}

export default App;
