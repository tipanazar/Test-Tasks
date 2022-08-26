import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { getChatsArr, getOpenChatIdx } from "../../redux/selectors";

import UserAvatar from "../../shared/UserAvatar/UserAvatar";

import style from "./chat.module.scss";

const Chat = () => {
  const chatsArr = useSelector(getChatsArr, shallowEqual);
  const openChatIdx = useSelector(getOpenChatIdx, shallowEqual);

  let chat = [];

  if (chatsArr.length) {
    // console.log(chatsArr)
    chat = chatsArr[openChatIdx ?? 0].messages.map((item, idx) => {
      // console.log(item);
      if (item.senderId === 1) {
        // console.log(item  )
        return (
          <li className={style.myChatListItem} key={idx}>
            <p className={style.messageDate}>{item.date.split(" ")[0]}</p>
            <p className={style.myMessageText}>
              {item.text}
              <span className={style.myMessageTime}>
                {item.date.split(" ")[1].split(":").slice(0, 2).join(":")}
              </span>
            </p>
          </li>
        );
      }
      return (
        <li className={style.chatListItem} key={idx}>
          <p className={style.messageDate}>{item.date.split(" ")[0]}</p>
          <div className={style.messageBlock}>
            <UserAvatar
              className={style.userAvatar}
              src={chatsArr[openChatIdx || 0].avatar}
              isStatusNeeds={false}
            />
            <p className={style.messageText}>
              {item.text}
              <span className={style.messageTime}>
                {item.date.split(" ")[1].split(":").slice(0, 2).join(":")}
              </span>
            </p>
          </div>
        </li>
      );
    });
  }

  // console.log(chat.length);
  // console.log(chatsArr[openChatIdx].messages);
  return (
    <div className={style.mainBlock}>
      {chat.length ? (
        <ul className={style.chatList}>{chat}</ul>
      ) : (
        <div className={style.noMessagesBlock}>
          <p>No messages...</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
