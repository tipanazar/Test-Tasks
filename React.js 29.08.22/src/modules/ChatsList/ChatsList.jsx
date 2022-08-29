import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getChatsArr, getFilterString } from "../../redux/selectors";
import { setOpenChatIdx, createNewChat } from "../../redux/actions";

import ChatsListItem from "../../shared/Components/ChatsListItem/ChatsListItem";
import UserAvatar from "../../shared/Components/UserAvatar/UserAvatar";

import style from "./chatsList.module.scss";

const ChatsList = () => {
  const dispatch = useDispatch();
  const chatsArr = useSelector(getChatsArr, shallowEqual);
  const filterString = useSelector(getFilterString, shallowEqual);

  const chatsList = chatsArr
    .filter((item) => {
      return item.name.toLowerCase().includes(filterString.toLowerCase());
    })
    .map((item, idx) => {
      return (
        <li
          className={style.chatsListItem}
          key={idx}
          onClick={() => dispatch(setOpenChatIdx(idx))}
        >
          <ChatsListItem
            avatar={item.avatar}
            name={item.name}
            lastMessage={item.messages[item.messages.length - 1]?.text}
            date={item.messages[item.messages.length - 1]?.date}
            isOnline={item.isOnline}
          />
        </li>
      );
    });

  const createNewChatFunc = () => {
    dispatch(createNewChat(filterString));
  };

  return (
    <div className={style.mainBlock}>
      <h3 className={style.chatsListTitle}>Chats</h3>
      <ul className={style.chatsList}>
        {!Boolean(filterString.length) || (
          <li className={style.newChatBlock} onClick={createNewChatFunc}>
            <UserAvatar className={style.newChatAvatar} isStatusNeeds={false} />
            <p className={style.newChatTextBlock}>
              <span className={style.newChatTitle}>Create chat with:</span>
              <span className={style.newChatName}>{filterString}</span>
            </p>
          </li>
        )}
        {chatsList}
      </ul>
    </div>
  );
};

export default ChatsList;
