import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWord } from "../../redux/WordSlice";

const Content = () => {
  const { words, selectedLanguage, wordIndex, language, tickStatus } =
    useSelector((state) => state.apps);
  const [number, setNumber] = useState(0);
  const [someWords, setSomeWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (wordIndex % 20 === 0) {
      setNumber(wordIndex);
      setCurrentIndex(wordIndex);
    }
    setSomeWords(words.slice(number, 20 + number));
  }, [words, number, wordIndex]);

  useEffect(() => {
    let currentId = wordIndex;
    currentId === 20 ? (currentId = 0) : (currentId = wordIndex % 20);
    dispatch(
      setCurrentWord(
        selectedLanguage === "TR"
          ? someWords[currentId]?.turkish
          : someWords[currentId]?.english
      )
    );
  }, [wordIndex, dispatch, selectedLanguage, language, someWords]);
  return (
    <div className="text">
      <p>
        {someWords.map((word, index) => {
          return (
            <span
              key={index}
              className={`${
                wordIndex === currentIndex + index
                  ? tickStatus === true
                    ? ""
                    : "onit"
                  : word.status === "correct"
                  ? "correct"
                  : word.status === "wrong"
                  ? "wrong"
                  : ""
              } `}
            >
              {selectedLanguage === "TR" ? word.turkish : word.english}{" "}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Content;
