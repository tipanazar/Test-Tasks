import { configureStore } from "@reduxjs/toolkit";

import { chatsReducer, filterStringReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    chatsState: chatsReducer,
    filterString: filterStringReducer,
  },
});
