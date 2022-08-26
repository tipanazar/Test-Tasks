import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getChatsArr, getGlobalState } from "../../redux/selectors";
import { setOpenChatIdx } from "../../redux/actions";

import ChatsListItem from "../../shared/ChatsListItem/ChatsListItem";

import style from "./chatsList.module.scss";

const ChatsList = () => {
  const dispatch = useDispatch();
  const chatsArr = useSelector(getChatsArr, shallowEqual);
  const globalStore = useSelector(getGlobalState, shallowEqual);
  // console.log(globalStore);
  // console.log(chatsArr);
  // console.log()
  // dispatch(setOpenChatIdx(1))

  const chatsList = chatsArr.map((item, idx) => {
    // console.log(item)
    return (
      <li
        className={style.chatsListItem}
        key={idx}
        onClick={() => dispatch(setOpenChatIdx(idx))}
      >
        <ChatsListItem
          avatar={item.avatar}
          name={item.name}
          lastMessage={item.messages[item.messages.length - 1].text}
          date={item.messages[item.messages.length - 1].date}
          isOnline={item.isOnline}
        />
      </li>
    );
  });

  return (
    <div className={style.mainBlock}>
      <h3 className={style.chatsListTitle}>Chats</h3>
      <ul>{chatsList}</ul>
    </div>
  );
};

export default ChatsList;
