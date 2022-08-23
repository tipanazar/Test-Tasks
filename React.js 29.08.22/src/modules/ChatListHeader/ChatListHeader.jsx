import { useState } from "react";

import Container from "../../shared/Container/Container";
import Form from "../../shared/Form/Form";
import SearchIcon from "../../shared/SvgIcon/SvgIcon";

import person from "../../images/person.png";

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
    <Container>
      <div className={style.mainBlock}>
        <img
          className={style.personAvatar}
          src={person}
          width="50px"
          alt="person avatar"
        ></img>
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
          <SearchIcon />
        </Form>
      </div>
    </Container>
  );
};

export default ChatListHeader;
