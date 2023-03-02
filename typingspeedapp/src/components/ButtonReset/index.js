import React from "react";
import { useDispatch } from "react-redux";
import { resetGame, stopGame } from "../../redux/WordSlice";

const ButtonReset = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetGame());
    dispatch(stopGame());
    dispatch(resetGame());
  };
  return <button onClick={handleReset}>Reset</button>;
};

export default ButtonReset;
