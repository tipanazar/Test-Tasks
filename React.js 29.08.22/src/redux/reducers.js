import { createReducer } from "@reduxjs/toolkit";

import { setChatsArr, setOpenChatIdx } from "./actions";

export const chatsArr = createReducer([], {
  [setChatsArr]: (state, { payload }) => {
    let sortedMessages = [];
    for (let chat of payload) {
      sortedMessages.push({
        ...chat,
        messages: [...chat.messages].sort(
          (firstMessage, secondMessage) =>
            new Date(firstMessage.date).getTime() -
            new Date(secondMessage.date).getTime()
        ),
      });
    }
    sortedMessages.sort(
      (firstChat, secondChat) =>
        new Date(
          secondChat.messages[secondChat.messages.length - 1].date
        ).getTime() -
        new Date(
          firstChat.messages[firstChat.messages.length - 1].date
        ).getTime()
    );
    return sortedMessages;
  },
});

export const openChatIdx = createReducer(null, {
  [setOpenChatIdx]: (state, { payload }) => {
    return payload;
  },
});