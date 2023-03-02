import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGame, setInputWord, setKeyPress } from "../../redux/WordSlice";

const InputArea = () => {
  const { start, inputText, selectedLanguage, modalOpen } = useSelector(
    (state) => state.apps
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setInputWord(e.target.value));
    if (!start) {
      dispatch(startGame());
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 32 && inputText) {
      dispatch(setKeyPress());
    }
  };

  return (
    <div className="inputarea">
      <input
        type="text"
        placeholder={selectedLanguage === "TR" ? "yazıyor..." : "typing..."}
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        disabled={modalOpen}
      />
    </div>
  );
};

export default InputArea;
