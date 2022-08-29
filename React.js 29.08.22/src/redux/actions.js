import { createAction } from "@reduxjs/toolkit";

export const setChatsArr = createAction("chatsArr");
export const createNewChat = createAction("createNewChat");
export const sendNewMessage = createAction("newMessage");
export const setOpenChatIdx = createAction("openChatIdx");
export const setFilterString = createAction("filterString");
