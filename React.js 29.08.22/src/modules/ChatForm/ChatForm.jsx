import Form from "../../shared/Form/Form";
import Icon from "../../shared/Icon/Icon";

import style from "./chatForm.module.scss";

const ChatForm = () => {
  return (
    <Form
      formClass={style.form}
      inputClass={style.input}
      // handleSubmit,
      inputName="message"
      inputType="text"
      inputPlaceholder="Type your message"
      inputIsRequired={true}
      // onInput
    >
      <button className={style.sendButton} type="submit">
        <Icon
          className={style.icon}
          iconId="paperPlaneIcon"
          // width="20px"
          // height="20px"
          fill="#6c6c6c"
        />
      </button>
    </Form>
  );
};

export default ChatForm;
