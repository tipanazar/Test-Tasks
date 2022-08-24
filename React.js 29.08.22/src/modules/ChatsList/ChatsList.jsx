import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getGlobalState } from "../../redux/selectors";
import { openChatIdx } from "../../redux/actions";

import ChatsListItem from "../../shared/ChatsListItem/ChatsListItem";

import { chatsListArr } from "./chatsListArr";

import style from "./chatsList.module.scss";

const ChatsList = () => {
  const dispatch = useDispatch();
  const globalStore = useSelector(getGlobalState, shallowEqual);
  console.log(globalStore);
  // console.log(dispatch(openChatIdx(1)))

  const chatsList = chatsListArr
    .sort((first, second) => {
      return new Date(second.date).getTime() - new Date(first.date).getTime();
    })
    .map((item, idx) => {
      return (
        <li
          className={style.chatsListItem}
          key={idx}
          onClick={()=>dispatch(openChatIdx(idx))}
        >
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

  return (
    <div className={style.mainBlock}>
      <h3 className={style.chatsListTitle}>Chats</h3>
      <ul>{chatsList}</ul>
    </div>
  );
};

export default ChatsList;
