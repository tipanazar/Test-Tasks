import { createReducer } from "@reduxjs/toolkit";

import { openChatIdx, isModalOpen } from "./actions";

export const setOpenChatIdx = createReducer(0, {
  [openChatIdx]: (state, { payload }) => {
    console.log(payload);
    return (state = payload);
  },
});

export const setIsModalOpen = createReducer(false, {
  [isModalOpen]: (state) => {
    return !state;
  },
});
