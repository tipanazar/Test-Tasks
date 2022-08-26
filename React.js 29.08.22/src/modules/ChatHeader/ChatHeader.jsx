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

  return (
    <div className={style.mainBlock}>
      <button
        className={style.backButton}
        onClick={() => dispatch(setOpenChatIdx(null))}
      >
        <Icon className={style.backIcon} iconId={"arrowBack"} fill="#544646" />
      </button>
      {chatsArr.length && (
        <>
          <UserAvatar
            className={style.userAvatar}
            src={chatsArr[openChatIdx || 0].avatar}
            isStatusNeeds={true}
            isOnline={chatsArr[openChatIdx || 0].isOnline}
          />
          <p className={style.userName}>{chatsArr[openChatIdx || 0].name}</p>
        </>
      )}
    </div>
  );
};

export default ChatHeader;
