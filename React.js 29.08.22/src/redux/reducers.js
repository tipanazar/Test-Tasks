import { createReducer } from "@reduxjs/toolkit";

import { setChatsArr, setOpenChatIdx } from "./actions";

export const chatsArr = createReducer([], {
  [setChatsArr]: (state, { payload }) => {
    payload.sort((firstObj, secondObj) => {
      [...firstObj.messages].sort((first, second) => {
        return new Date(second.date).getTime() - new Date(first.date).getTime();
      });
      [...secondObj.messages].sort((first, second) => {
        return new Date(second.date).getTime() - new Date(first.date).getTime();
      });

      return (
        new Date(secondObj.messages[0].date).getTime() -
        new Date(firstObj.messages[0].date).getTime()
      );
    });
    return payload;
  },
});

// export const openChatIdx = createReducer(null, {
//   [setOpenChatIdx]: (state, { payload }) => {
//     // console.log(payload);
//     return payload;
//   },
// });

// export const isChatOpen = createReducer(false, {
//   [setIsChatOpen]: (state) => {
//     return !state;
//   },
// });

export const openChatIdx = createReducer(null, {
  [setOpenChatIdx]: (state, { payload }) => {
    // console.log(payload);
    return payload;
  },
});

// export const isChatOpen = createReducer(false, {
//   [setIsChatOpen]: (state) => {
//     return !state;
//   },
// });
