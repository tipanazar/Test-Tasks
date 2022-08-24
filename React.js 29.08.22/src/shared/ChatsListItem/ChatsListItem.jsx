import PropTypes from "prop-types";

import UserAvatar from "../UserAvatar/UserAvatar";

import style from "./chatsListItem.module.scss";

const ChatsListItem = ({ avatar, name, lastMessage, date, isOnline }) => {
  return (
    <>
      <UserAvatar
        className={style.userAvatar}
        src={avatar}
        width="50px"
        isStatusNeeds={true}
        isOnline={isOnline}
      />
      <p className={style.textBlock}>
        <span className={style.userName}>{name}</span>
        <span className={style.userLastMessage}>{lastMessage}</span>
      </p>
      <p className={style.lastMessageDate}>{date ? date.split(" ")[0] : "—"}</p>
    </>
  );
};

export default ChatsListItem;

ChatsListItem.propTypes = {
  avatar: PropTypes.string,
};
