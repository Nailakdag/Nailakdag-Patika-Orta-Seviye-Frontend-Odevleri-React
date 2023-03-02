import { createSlice } from "@reduxjs/toolkit";

export const noteappSlice = createSlice({
  name: "noteapp",
  initialState: {
    notesList: [],
    filterNote: "",
    filteredNoteList: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notesList.push(action.payload);
      state.filteredNoteList = state.notesList;
    },
    setFilter: (state, action) => {
      state.filterNote = action.payload;
      state.filteredNoteList = state.notesList.filter((item) =>
        item.note.includes(state.filterNote)
      );
    },
  },
});

export default noteappSlice.reducer;
export const { addNote, setFilter } = noteappSlice.actions;
