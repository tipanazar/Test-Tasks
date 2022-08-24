import ChatsListItem from "../../shared/ChatsListItem/ChatsListItem";

import { chatsListArr } from "./chatsListArr";

import style from "./chatsList.module.scss";

const chatsList = chatsListArr
  .sort((first, second) => {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  })
  .map((item, idx) => {
    return (
      <li className={style.chatsListItem} key={idx}>
        <ChatsListItem
          avatar={item.avatar}
          name={item.name}
          lastMessage={item.lastMessage}
          date={item.date}
          isOnline={item.isOnline}
        />
      </li>
    );
  });

const ChatsList = () => {
  return (
    <div className={style.mainBlock}>
      <h3 className={style.chatsListTitle}>Chats</h3>
      <ul>{chatsList}</ul>
    </div>
  );
};

export default ChatsList;
