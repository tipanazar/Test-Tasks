import { createReducer } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import {
  setChatsArr,
  setOpenChatIdx,
  setFilterString,
  createNewChat,
  sendNewMessage,
} from "./actions";

import { getJoke } from "./operations";

export const chatsReducer = createReducer(
  { chatsArr: [], openChatIdx: null, jokeState: { joke: "", error: null } },
  {
    [setChatsArr]: (state, { payload }) => {
      let sortedMessages = [];
      for (let chat of payload) {
        sortedMessages.push({
          ...chat,
          messages: [...chat.messages].sort(
            (firstMessage, secondMessage) =>
              firstMessage.date - secondMessage.date
          ),
        });
      }
      sortedMessages.sort(
        (firstChat, secondChat) =>
          secondChat.messages[secondChat.messages.length - 1]?.date -
          firstChat.messages[firstChat.messages.length - 1]?.date
      );
      return { ...state, chatsArr: sortedMessages };
    },

    //

    [setOpenChatIdx]: (state, { payload }) => {
      return { ...state, openChatIdx: payload };
    },

    //

    [createNewChat]: (state, { payload }) => {
      const response = [
        {
          avatar: "",
          name: payload,
          id: nanoid(),
          messages: [],
          isOnline: true,
        },
        ...state.chatsArr,
      ];
      localStorage.setItem("chatsArr", JSON.stringify(response));
      return { ...state, chatsArr: response };
    },

    //

    [sendNewMessage]: (state, { payload }) => {
      state.chatsArr[state.openChatIdx].messages.push({
        senderId: 1,
        date: new Date().getTime(),
        text: payload,
      });
    },

    [getJoke.fulfilled]: (state, { payload }) => {
      state.chatsArr[state.openChatIdx].messages.push({
        senderId: 0,
        date: new Date().getTime(),
        text: payload,
      });
      localStorage.setItem("chatsArr", JSON.stringify(state.chatsArr));
    },

    [getJoke.rejected]: (state) => {
      return { ...state, jokeState: { ...state.jokeState, error: true } };
    },
  }
);

export const filterStringReducer = createReducer("", {
  [setFilterString]: (state, { payload }) => {
    return payload;
  },
});
