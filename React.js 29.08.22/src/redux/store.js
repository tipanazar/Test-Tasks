import { configureStore } from "@reduxjs/toolkit";

import { setOpenChatIdx, setIsModalOpen } from "./reducers";

export const store = configureStore({
  reducer: {
    openChatIdx: setOpenChatIdx,
    isModalOpen: setIsModalOpen,
  },
});
