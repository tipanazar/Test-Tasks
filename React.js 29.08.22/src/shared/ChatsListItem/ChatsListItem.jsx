import PropTypes from "prop-types";

import UserAvatar from "../UserAvatar/UserAvatar";

import style from "./chatsListItem.module.scss";

const ChatsListItem = ({ avatar, name, lastMessage, date, isOnline }) => {
  return (
    <>
      <UserAvatar
        className={style.userAvatar}
        src={avatar}
        isStatusNeeds={true}
        isOnline={isOnline}
      />
      <div className={style.textBlock}>
        <p className={style.userName}>{name}</p>
        <p className={style.userLastMessage}>{lastMessage}</p>
      </div>
      <p className={style.lastMessageDate}>{date ? date.split(" ")[0] : "—"}</p>
    </>
  );
};

export default ChatsListItem;

ChatsListItem.propTypes = {
  avatar: PropTypes.string,
};
