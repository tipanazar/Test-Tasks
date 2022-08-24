import ChatsListHeader from "./ChatsListHeader/ChatsListHeader";
import ChatsList from "./ChatsList/ChatsList";
import ChatHeader from "./ChatHeader/ChatHeader";
import Chat from "./Chat/Chat";

import style from "./app.module.scss";

function App() {
  return (
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
  );
}

export default App;
