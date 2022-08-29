import { useDispatch } from "react-redux";
import { setFilterString } from "../../redux/actions";

import Form from "../../shared/Components/Form/Form";
import Icon from "../../shared/Components/Icon/Icon";
import UserAvatar from "../../shared/Components/UserAvatar/UserAvatar";

import style from "./chatsListHeader.module.scss";

const ChatsListHeader = () => {
  const dispatch = useDispatch();

  const onInput = (ev) => {
    dispatch(setFilterString(ev.target.value));
  };
  // console.log('render')

  return (
    <div className={style.mainBlock}>
      <UserAvatar
        className={style.personAvatar}
        isStatusNeeds={true}
        isOnline={true}
      />

      <Form
        formClass={style.searchForm}
        inputClass={style.searchInput}
        handleSubmit={(ev) => ev.preventDefault()}
        inputName="searchChat"
        inputType="text"
        inputPlaceholder="Search or start a new chat"
        inputIsRequired={true}
        onInput={onInput}
      >
        <button className={style.submitBtn} type="submit">
          <Icon
            className={style.searchIcon}
            iconId="searchIcon"
            fill="#969696"
          />
        </button>
      </Form>
    </div>
  );
};

export default ChatsListHeader;
