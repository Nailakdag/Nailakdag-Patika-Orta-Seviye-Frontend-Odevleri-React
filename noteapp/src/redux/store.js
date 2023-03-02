import { configureStore } from "@reduxjs/toolkit";
import noteappSlice from "./NoteappSlice";

export const store = configureStore({
  reducer: {
    noteapp: noteappSlice,
  },
});
