import { useDispatch } from "react-redux";

import { sendNewMessage } from "../../redux/actions";
import { getJoke } from "../../redux/operations";

import Form from "../../shared/Components/Form/Form";
import Icon from "../../shared/Components/Icon/Icon";

import style from "./chatForm.module.scss";

const ChatForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (ev) => {
    ev.preventDefault();
    dispatch(sendNewMessage(ev.target.messageInput.value));
    ev.target.reset();
    setTimeout(() => {
      dispatch(getJoke());
    }, 10000);
  };

  return (
    <Form
      formClass={style.form}
      inputClass={style.input}
      handleSubmit={onSubmit}
      inputName="messageInput"
      inputType="text"
      inputPlaceholder="Type your message"
      inputIsRequired={true}
    >
      <button className={style.sendButton} type="submit">
        <Icon className={style.icon} iconId="paperPlaneIcon" fill="#6c6c6c" />
      </button>
    </Form>
  );
};

export default ChatForm;
