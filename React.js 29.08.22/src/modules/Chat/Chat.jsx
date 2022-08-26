import { useSelector, shallowEqual } from "react-redux";

import { getChatsArr, getOpenChatIdx } from "../../redux/selectors";
import UserAvatar from "../../shared/UserAvatar/UserAvatar";

import style from "./chat.module.scss";

const Chat = () => {
  const chatsArr = useSelector(getChatsArr, shallowEqual);
  const openChatIdx = useSelector(getOpenChatIdx, shallowEqual);

  const chat = chatsArr[openChatIdx].messages.map((item, idx) => {
    // console.log(item);
    if (item.senderId === 1) {
      return (
        <div className={style.myMessageBlock}>
          <p className={style.myMessageText}>{item.text}</p>
          <p className={style.messageDate}>{item.date}</p>
        </div>
      );
    }
    return (
      <div className={style.messageBlock}>
        <div className={style.messageMainBlock}>
        <UserAvatar
          className={style.userAvatar}
          src={chatsArr[openChatIdx].avatar}
          width="40px"
          isStatusNeeds={false}
          />
        <p className={style.messageText}>{item.text}</p>
          </div>
        <p className={style.messageDate}>{item.date}</p>
      </div>
    );
  });

  // console.log(chat);
  // console.log(chatsArr[openChatIdx].messages);
  return <div className={style.mainBlock}>{chat}</div>;
};

export default Chat;
