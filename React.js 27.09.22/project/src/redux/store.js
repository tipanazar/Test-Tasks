import { configureStore } from "@reduxjs/toolkit";

import dictionaryReducer from "./dictionary/slice.js";
import testsHistoryReducer from "./testing/slice";

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    testing: testsHistoryReducer,
  },
});
