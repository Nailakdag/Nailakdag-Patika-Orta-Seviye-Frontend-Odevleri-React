import React from "react";
import { useSelector } from "react-redux";

const NoteList = () => {
  const notes = useSelector((state) => state.noteapp.filteredNoteList);
  return (
    <div className="notelist">
      {notes.map((data) => {
        return (
          <div
            key={data.id}
            style={{
              backgroundColor: `${data.textcolor}`,
            }}
            className="note"
          >
            {data.note}
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
