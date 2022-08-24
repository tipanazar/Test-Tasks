import { useState } from "react";

import Form from "../../shared/Form/Form";
import Icon from "../../shared/Icon/Icon";
import UserAvatar from "../../shared/UserAvatar/UserAvatar";

import style from "./chatListHeader.module.scss";

const handlerSubmit = (ev) => {
  ev.preventDefault();
  console.log(ev.target.searchChat.value);
};

const ChatListHeader = () => {
  const [inputValue, onInputValue] = useState("");

  const onInput = (ev) => {
    onInputValue(ev.target.value);
    // console.log(ev.target.value)
  };

  console.log(inputValue);
  return (
      <div className={style.mainBlock}>
        <UserAvatar
          className={style.personAvatar}
          width="50px"
          isStatusNeeds={true}
          isOnline={true}
        />
        <Form
          formClass={style.searchForm}
          inputClass={style.searchInput}
          handleSubmit={handlerSubmit}
          inputName={"searchChat"}
          inputType="text"
          inputPlaceholder="Search or start new chat"
          inputIsRequired={true}
          onInput={onInput}
        >
          <Icon
            className={style.searchIcon}
            iconId="searchIcon"
            width="15px"
            height="15px"
            fill="#969696"
          />
        </Form>
      </div>
  );
};

export default ChatListHeader;
