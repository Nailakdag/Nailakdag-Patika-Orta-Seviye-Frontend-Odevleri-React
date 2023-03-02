import { configureStore } from "@reduxjs/toolkit";
import typingSpeed from "./WordSlice";

export const store = configureStore({
  reducer: {
    apps: typingSpeed,
  },
});
