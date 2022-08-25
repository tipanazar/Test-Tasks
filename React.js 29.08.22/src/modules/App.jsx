import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getOpenChatIdx } from "../redux/selectors";
import { setChatsArr } from "../redux/actions";

import ChatsListHeader from "./ChatsListHeader/ChatsListHeader";
import ChatsList from "./ChatsList/ChatsList";
import ChatHeader from "./ChatHeader/ChatHeader";
import Chat from "./Chat/Chat";

import { chatsList } from "../chatsList";

import style from "./app.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openChatIdx = useSelector(getOpenChatIdx, shallowEqual);
  useEffect(() => {
    dispatch(setChatsArr([...chatsList]));
  }, [dispatch]);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  // console.log("render");

  return windowWidth >= 1100 ? (
    <>
      <section className={style.chatsListSection}>
        <ChatsListHeader />
        <ChatsList />
      </section>
      <section className={style.chatSection}>
        <ChatHeader />
        <Chat />
      </section>
    </>
  ) : openChatIdx !== null ? (
    <section className={style.chatSection}>
      <ChatHeader />
      <Chat />
    </section>
  ) : (
    <section className={style.chatsListSection}>
      <ChatsListHeader />
      <ChatsList />
    </section>
  );
};

export default App;
