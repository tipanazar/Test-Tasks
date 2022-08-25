import { configureStore } from "@reduxjs/toolkit";

// import { openChatIdx, chatsArr, isChatOpen } from "./reducers";
import { openChatIdx, chatsArr } from "./reducers";

export const store = configureStore({
  reducer: {
    chatsArr,
    openChatIdx,
    // isChatOpen,
  },
});
