import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/NoteappSlice";
import { AiOutlinePlus } from "react-icons/ai";

const TextArea = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("pink");
  const dispatch = useDispatch();

  const handleColor = (e) => {
    setColor(e.target.className.split(" ")[0]);
  };
  const handleAddNote = () => {
    if (text) {
      dispatch(
        addNote({
          id: nanoid(),
          textcolor: color,
          note: text,
        })
      );
    }
    setText("");
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your note here"
        className="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleAddNote}>ADD</button>
      <div className="circlebox">
        <div onClick={(e) => handleColor(e)} className="pink circle">
          {color === "pink" && <AiOutlinePlus />}
        </div>
        <div onClick={(e) => handleColor(e)} className="purple circle">
          {color === "purple" && <AiOutlinePlus />}
        </div>
        <div onClick={(e) => handleColor(e)} className="yellow circle">
          {color === "yellow" && <AiOutlinePlus />}
        </div>
        <div onClick={(e) => handleColor(e)} className="aqua circle">
          {color === "aqua" && <AiOutlinePlus />}
        </div>
        <div onClick={(e) => handleColor(e)} className="greenyellow circle">
          {color === "greenyellow" && <AiOutlinePlus />}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
