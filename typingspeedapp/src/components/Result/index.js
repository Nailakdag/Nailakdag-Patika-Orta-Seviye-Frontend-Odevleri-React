import { useSelector } from "react-redux";

function Result() {
  const {
    selectedLanguage,
    totalCorrectWords,
    totalWrongWords,
    correctWordsTick,
    inCorrectWordsTick,
  } = useSelector((state) => state.apps);

  return (
    <>
      <h2>{selectedLanguage === "TR" ? "Sonuçlar" : "results"}</h2>
      <div className="puan">
        <span>{totalCorrectWords * 10 - totalWrongWords * 2.5}</span>
        <span>
          {selectedLanguage === "TR"
            ? " Puan kazandınız, Tebrikler"
            : " Congratulations"}{" "}
        </span>
      </div>
      <div className="tusvurusu">
        <span>
          {selectedLanguage === "TR" ? "Tuş Vuruşu= " : "Keystroke= "}
        </span>
        <span>{correctWordsTick + inCorrectWordsTick}</span>
      </div>
      <div className="dogruluk">
        <span>{selectedLanguage === "TR" ? "Doğruluk= " : "Truth= "}</span>
        <span>
          {`${(
            Math.round(totalCorrectWords * 100) /
            Math.round(totalCorrectWords + totalWrongWords)
          ).toFixed(2)} %`}
        </span>
      </div>
      <div className="dogrukelime">
        <span>
          {selectedLanguage === "TR" ? "Doğru Kelime= " : "Correct Words= "}
        </span>
        <span>{totalCorrectWords}</span>
      </div>
      <div className="yanlıskelime">
        <span>
          {selectedLanguage === "TR" ? "Yanlış Kelime= " : "Incorrect Words= "}
        </span>
        <span>{totalWrongWords}</span>
      </div>
    </>
  );
}

export default Result;
