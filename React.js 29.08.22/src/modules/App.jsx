import ChatListHeader from "./ChatListHeader/ChatListHeader";
import ChatList from "./ChatList/ChatList";
import ChatHeader from "./ChatHeader/ChatHeader";
import Chat from "./Chat/Chat";

import style from "./app.module.scss";

function App() {
  return (
    <>
      <div className={style.chatListSection}>
        <ChatListHeader />
        <ChatList />
      </div>
      <div className={style.chatSection}>
        <ChatHeader />
        <Chat />
      </div>
    </>
  );
}

export default App;
