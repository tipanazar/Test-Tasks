import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getOpenChatIdx, getChatsArr } from "../../redux/selectors";
import { setOpenChatIdx } from "../../redux/actions";

import Icon from "../../shared/Icon/Icon";

import UserAvatar from "../../shared/UserAvatar/UserAvatar";

import style from "./chatHeader.module.scss";

const ChatHeader = () => {
  const dispatch = useDispatch();
  const openChatIdx = useSelector(getOpenChatIdx, shallowEqual);
  const chatsArr = useSelector(getChatsArr, shallowEqual);

  console.log(chatsArr[openChatIdx]);
  return (
    <div className={style.mainBlock}>
      <button
        className={style.backButton}
        onClick={() => dispatch(setOpenChatIdx(null))}
      >
        <Icon
          className={style.backIcon}
          iconId={"arrowBack"}
          width={"30px"}
          height={"30px"}
          fill='#544646'
        />
      </button>
      <UserAvatar
        className={style.userAvatar}
        src={chatsArr[openChatIdx].avatar}
        width={"50px"}
        isStatusNeeds={true}
        isOnline={chatsArr[openChatIdx].isOnline}
      />
      <p className={style.userName}>{chatsArr[openChatIdx].name}</p>
    </div>
  );
};

export default ChatHeader;
