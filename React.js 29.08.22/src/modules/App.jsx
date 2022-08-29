import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getOpenChatIdx } from "../redux/selectors";
import { setChatsArr } from "../redux/actions";

import ChatsListHeader from "./ChatsListHeader/ChatsListHeader";
import ChatsList from "./ChatsList/ChatsList";
import ChatHeader from "./ChatHeader/ChatHeader";
import Chat from "./Chat/Chat";
import ChatForm from "./ChatForm/ChatForm";

import { chatsList } from "../chatsList";

import style from "./app.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const openChatIdx = useSelector(getOpenChatIdx, shallowEqual);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const savedChatsList = JSON.parse(localStorage.getItem("chatsArr"));
  useEffect(() => {
    savedChatsList?.length >= chatsList.length
      ? dispatch(setChatsArr(savedChatsList))
      : dispatch(setChatsArr(chatsList));
  }, [dispatch, savedChatsList]);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return windowWidth >= 1100 ? (
    <>
      <section className={style.chatsListSection}>
        <ChatsListHeader />
        <ChatsList />
      </section>
      <section className={style.chatSection}>
        <ChatHeader />
        <Chat />
        <ChatForm />
      </section>
    </>
  ) : openChatIdx !== null ? (
    <section className={style.chatSection}>
      <ChatHeader />
      <Chat />
      <ChatForm />
    </section>
  ) : (
    <section className={style.chatsListSection}>
      <ChatsListHeader />
      <ChatsList />
    </section>
  );
};

export default App;
