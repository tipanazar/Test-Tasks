import { configureStore } from "@reduxjs/toolkit";

import wordsReducer from "./dictionary/slice.js";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});
